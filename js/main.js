/* =========================================================
   LE PORTUGAIS — Interactions & rendu des données
   Vanilla JS, sans dépendance, respecte prefers-reduced-motion
   ========================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Helpers ---------- */
  const el = (tag, cls, html) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  const placeholderSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" stroke-width="1.3"/><circle cx="8.5" cy="10" r="1.4" stroke="currentColor" stroke-width="1.3"/><path d="M3 16l5-4 4 3 3-2 6 5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  // True document-flow Y position of a node, unaffected by `position: sticky`
  // (getBoundingClientRect() on a currently-stuck sticky element only reports
  // its pinned viewport offset, not its real place in the flow — offsetTop
  // walked up the offsetParent chain gives the real, collapse-safe position).
  function absoluteTop(node) {
    let top = 0;
    let el = node;
    while (el) {
      top += el.offsetTop || 0;
      el = el.offsetParent;
    }
    return top;
  }

  function placeholderBlock(tag, ratioClass) {
    const wrap = el("div", `ph ${ratioClass || ""}`);
    wrap.setAttribute("role", "img");
    wrap.setAttribute("aria-label", `Emplacement photographique à venir : ${tag}`);
    const label = el("span", "ph-tag", `${placeholderSVG}<span>${tag}</span>`);
    wrap.appendChild(label);
    return wrap;
  }

  /* ---------- Header scroll state ---------- */
  const header = document.querySelector(".site-header");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  function closeMobileNav() {
    mobileNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Ouvrir le menu");
    document.body.style.overflow = "";
    // Re-sync the header with the real scroll position now that the panel
    // is gone — if the page is still at the top, this correctly reverts
    // the compact state forced below; if the user had scrolled, it stays.
    onScroll();
  }
  function openMobileNav() {
    mobileNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Fermer le menu");
    document.body.style.overflow = "hidden";
    // Always show the header in its compact ("scrolled") state while the
    // mobile panel is open — otherwise, opened from the very top of the
    // page, the full-height logo overlaps the first menu link. This keeps
    // the header identical whether the menu is opened before or after the
    // user has actually scrolled.
    header.classList.add("is-scrolled");
  }
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.contains("is-open");
      isOpen ? closeMobileNav() : openMobileNav();
    });
    mobileNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMobileNav));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileNav();
    });
  }

  /* ---------- Render: Signature dishes (Les incontournables) ---------- */
  (function renderSignatureDishes() {
    const host = document.querySelector("[data-render='signature-dishes']");
    if (!host || typeof signatureDishes === "undefined") return;
    signatureDishes.forEach((dish, i) => {
      const row = el("article", `dish reveal${i % 2 === 1 ? " dish--reverse" : ""}`);
      const idx = el("div", "dish-index", dish.index);
      const photo = el("div", "dish-photo");
      photo.appendChild(placeholderBlock(dish.placeholderTag, "ph-ratio-4-3"));
      const copy = el("div", "dish-copy");
      copy.innerHTML = `
        <h3 class="dish-name">${dish.name}</h3>
        <p class="dish-desc">${dish.desc}</p>
      `;
      row.appendChild(idx);
      row.appendChild(photo);
      row.appendChild(copy);
      host.appendChild(row);
    });
  })();

  /* ---------- Render: La Carte (tabs) ---------- */
  (function renderMenu() {
    const panelsHost = document.querySelector("[data-render='carte-panels']");
    const tabsHost = document.querySelector("[data-render='carte-tabs']");
    if (!panelsHost || !tabsHost || typeof menuData === "undefined") return;

    const groups = [
      { key: "entradas", data: menuData.entradas },
      { key: "principais", data: menuData.principais }
    ];

    groups.forEach((g, i) => {
      const tab = el("button", `carte-tab${i === 0 ? " is-active" : ""}`, g.data.labelFr);
      tab.type = "button";
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
      tab.dataset.target = `panel-${g.key}`;
      tabsHost.appendChild(tab);

      const panel = el("div", `carte-panel${i === 0 ? " is-active" : ""}`);
      panel.id = `panel-${g.key}`;
      panel.setAttribute("role", "tabpanel");
      const list = el("div", "menu-list");
      g.data.items.forEach((item) => {
        const row = el("div", "menu-item");
        row.innerHTML = `
          <div class="menu-item-main">
            <p class="menu-item-name">${item.name}</p>
            <p class="menu-item-desc">${item.desc}</p>
          </div>
          <span class="menu-item-price">${item.price}</span>
        `;
        list.appendChild(row);
      });
      panel.appendChild(list);
      panelsHost.appendChild(panel);
    });

    // Sur commande — accordion tab (rendered separately, third tab)
    const sc = menuData.surCommande;
    const tabSC = el("button", "carte-tab", sc.labelFr);
    tabSC.type = "button";
    tabSC.setAttribute("role", "tab");
    tabSC.setAttribute("aria-selected", "false");
    tabSC.dataset.target = "panel-surcommande";
    tabsHost.appendChild(tabSC);

    const panelSC = el("div", "carte-panel");
    panelSC.id = "panel-surcommande";
    panelSC.setAttribute("role", "tabpanel");
    const note = el("p", "menu-note", sc.note);
    const acc = el("div", "accordion");
    sc.items.forEach((item, i) => {
      const item_ = el("div", "accordion-item");
      const btnId = `sc-trigger-${i}`;
      const panelId = `sc-panel-${i}`;
      item_.innerHTML = `
        <h4 style="margin:0">
          <button type="button" class="accordion-trigger" id="${btnId}" aria-expanded="false" aria-controls="${panelId}">
            <span>${item.name}</span>
            <span class="accordion-icon" aria-hidden="true"></span>
          </button>
        </h4>
        <div class="accordion-panel" id="${panelId}" role="region" aria-labelledby="${btnId}">
          <div class="accordion-panel-inner">${item.desc}</div>
        </div>
      `;
      acc.appendChild(item_);
    });
    panelSC.appendChild(note);
    panelSC.appendChild(acc);
    panelsHost.appendChild(panelSC);

    // Tab interactions
    const tabs = tabsHost.querySelectorAll(".carte-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        panelsHost.querySelectorAll(".carte-panel").forEach((p) => p.classList.remove("is-active"));
        document.getElementById(tab.dataset.target).classList.add("is-active");
      });
    });

    // Accordion interactions
    acc.querySelectorAll(".accordion-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        const panel = document.getElementById(trigger.getAttribute("aria-controls"));
        trigger.setAttribute("aria-expanded", String(!expanded));
        if (expanded) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  })();

  /* ---------- Render: Desserts (liste partiellement dépliable) ---------- */
  (function renderDesserts() {
    const host = document.querySelector("[data-render='desserts']");
    if (!host || typeof dessertData === "undefined") return;

    const VISIBLE_COUNT = 5;

    const buildList = (items) => {
      const list = el("div", "menu-list dessert-list");
      items.forEach((item) => {
        const row = el("div", "menu-item");
        row.innerHTML = `
          <div class="menu-item-main">
            <p class="menu-item-name">${item.name}</p>
            <p class="menu-item-desc">${item.desc}</p>
          </div>
          <span class="menu-item-price">${item.price}</span>
        `;
        list.appendChild(row);
      });
      return list;
    };

    const visibleItems = dessertData.slice(0, VISIBLE_COUNT);
    const extraItems = dessertData.slice(VISIBLE_COUNT);

    host.appendChild(buildList(visibleItems));

    if (extraItems.length) {
      const panelId = "dessert-extra-panel";
      const extraWrap = el("div", "dessert-extra");
      extraWrap.id = panelId;
      extraWrap.appendChild(buildList(extraItems));
      host.appendChild(extraWrap);

      const toggle = el("button", "dessert-toggle");
      toggle.type = "button";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-controls", panelId);
      toggle.innerHTML = `<span class="dessert-toggle-label">Voir tous les desserts</span><span class="dessert-toggle-icon" aria-hidden="true">+</span>`;
      host.appendChild(toggle);

      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        const label = toggle.querySelector(".dessert-toggle-label");
        const icon = toggle.querySelector(".dessert-toggle-icon");
        toggle.setAttribute("aria-expanded", String(!expanded));
        if (expanded) {
          extraWrap.style.maxHeight = null;
          label.textContent = "Voir tous les desserts";
          icon.textContent = "+";
        } else {
          extraWrap.style.maxHeight = extraWrap.scrollHeight + "px";
          label.textContent = "Réduire";
          icon.textContent = "−";
        }
      });
    }
  })();

  /* ---------- Render: Cave (regions) ---------- */
  (function renderCave() {
    const regionsHost = document.querySelector("[data-render='wine-regions']");
    if (!regionsHost || typeof wineData === "undefined") return;
    wineData.regions.forEach((region, i) => {
      const item = el(
        "div",
        "region-item",
        `<span class="region-num">${String(i + 1).padStart(2, "0")}</span><span>${region}</span>`
      );
      regionsHost.appendChild(item);
    });
  })();

  /* ---------- Render: Carte des vins complète (accordéon catégories/régions) ---------- */
  (function renderWineCarte() {
    const host = document.querySelector("[data-render='wine-carte']");
    if (!host || typeof wineCarte === "undefined") return;

    wineCarte.categories.forEach((cat) => {
      const btnId = `wine-cat-trigger-${cat.key}`;
      const panelId = `wine-cat-panel-${cat.key}`;

      const catWrap = el("div", "wine-cat");

      const trigger = el("button", "wine-cat-trigger");
      trigger.type = "button";
      trigger.id = btnId;
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute("aria-controls", panelId);
      trigger.innerHTML = `<span>${cat.label}</span><span class="wine-cat-icon" aria-hidden="true">+</span>`;

      const panel = el("div", "wine-cat-panel");
      panel.id = panelId;
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", btnId);

      const inner = el("div", "wine-cat-panel-inner");
      cat.regions.forEach((region) => {
        const regionWrap = el("div", "wine-region");
        regionWrap.appendChild(el("p", "wine-region-name", region.name));
        region.wines.forEach((wine) => {
          const vintage = wine.vintage ? `<span class="wine-vintage">${wine.vintage}</span>` : "";
          const producer = wine.producer ? `<p class="wine-producer">${wine.producer}</p>` : "";
          const abv = wine.abv ? `<span class="wine-abv">${wine.abv}</span>` : "";
          const item = el("div", "wine-item");
          item.innerHTML = `
            <p class="wine-name">${wine.name}${vintage}</p>
            ${producer}
            <div class="wine-item-foot">
              <p class="wine-grapes">${wine.grapes || ""}</p>
              ${abv}
            </div>
          `;
          regionWrap.appendChild(item);
        });
        inner.appendChild(regionWrap);
      });

      panel.appendChild(inner);

      catWrap.appendChild(trigger);
      catWrap.appendChild(panel);
      host.appendChild(catWrap);

      function collapse(t) {
        const p = document.getElementById(t.getAttribute("aria-controls"));
        t.setAttribute("aria-expanded", "false");
        t.querySelector(".wine-cat-icon").textContent = "+";
        if (p) p.style.maxHeight = null;
      }

      function expand(t) {
        const p = document.getElementById(t.getAttribute("aria-controls"));
        t.setAttribute("aria-expanded", "true");
        t.querySelector(".wine-cat-icon").textContent = "−";
        if (p) p.style.maxHeight = p.scrollHeight + "px";
      }

      trigger.addEventListener("click", () => {
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        if (expanded) {
          // Return to the category selector — the whole wine-carte host that
          // holds all three sticky headers (Rouges/Rosés/Blancs) — not to
          // wherever this category happened to be scrolled to, so closing a
          // long, deep-scrolled category never strands the user past it.
          // Measured from non-sticky ancestors (host, .site-header) only —
          // offsetTop on an already-stuck `position: sticky` element is
          // unreliable in some browsers once it's actually pinned.
          const headerH = header ? header.offsetHeight : 0;
          const targetY = Math.max(0, absoluteTop(host) - headerH - 14);
          collapse(trigger);
          const doScroll = () => window.scrollTo({ top: targetY, behavior: reduceMotion ? "auto" : "smooth" });
          if (reduceMotion) {
            doScroll();
          } else {
            // Let the collapse animation finish first — animating the scroll
            // while the document is still shrinking underneath it makes the
            // browser fight itself and land in the wrong place.
            window.setTimeout(doScroll, 520);
          }
          return;
        }
        // Only one big category open at a time — close any other before opening this one.
        host.querySelectorAll(".wine-cat-trigger[aria-expanded='true']").forEach((other) => {
          if (other !== trigger) collapse(other);
        });
        expand(trigger);
      });
    });

    if (wineCarte.note) {
      host.appendChild(el("p", "wine-carte-note", wineCarte.note));
    }
  })();

  /* ---------- Render: Presse ---------- */
  (function renderPress() {
    const host = document.querySelector("[data-render='press']");
    if (!host || typeof pressData === "undefined") return;
    pressData.forEach((item, i) => {
      const card = el("article", `press-card reveal reveal-delay-${(i % 3) + 1}`);
      const photo = placeholderBlock(item.tag, "ph-ratio-3-4");
      card.appendChild(photo);
      const meta = el(
        "div",
        "",
        `<p class="press-source">${item.source}</p><p class="press-title">${item.title}</p>`
      );
      card.appendChild(meta);
      host.appendChild(card);
    });
  })();

  /* ---------- Render: Avis ---------- */
  (function renderReviews() {
    const host = document.querySelector("[data-render='reviews']");
    if (!host || typeof reviewsData === "undefined" || !reviewsData.items) return;

    const items = reviewsData.items;
    const featured = items.find((r) => r.featured) || items[0];
    const secondary = items.filter((r) => r !== featured);

    const featuredEl = el("article", "review-featured reveal");
    featuredEl.innerHTML = `
      <span class="review-mark" aria-hidden="true">&ldquo;</span>
      <p class="review-quote">${featured.text}</p>
      <div class="review-meta">
        <p class="review-stars" aria-label="${featured.rating} étoiles sur 5" aria-hidden="false">${"★".repeat(featured.rating)}</p>
        <p class="review-author">${featured.author} <span class="review-src">— Avis Google</span></p>
      </div>
    `;
    host.appendChild(featuredEl);

    const col = el("div", "review-secondary-col");
    secondary.forEach((r, i) => {
      const card = el("article", `review-secondary reveal reveal-delay-${(i % 3) + 1}`);
      card.innerHTML = `
        <p class="review-quote-sm">${r.text}</p>
        <div class="review-meta">
          <p class="review-stars" aria-label="${r.rating} étoiles sur 5" aria-hidden="false">${"★".repeat(r.rating)}</p>
          <p class="review-author">${r.author} <span class="review-src">— Avis Google</span></p>
        </div>
      `;
      col.appendChild(card);
    });
    host.appendChild(col);
  })();

  /* ---------- Render: Galerie + Lightbox ---------- */
  (function renderGallery() {
    const host = document.querySelector("[data-render='gallery']");
    if (!host || typeof galleryData === "undefined") return;
    const lightbox = document.querySelector(".lightbox");
    const lightboxBox = lightbox ? lightbox.querySelector(".lightbox-box") : null;
    const lightboxCaption = lightbox ? lightbox.querySelector(".lightbox-caption") : null;

    galleryData.forEach((g) => {
      const btn = el("button", "gallery-item");
      btn.type = "button";
      btn.setAttribute("aria-haspopup", "dialog");
      btn.appendChild(placeholderBlock(g.tag));
      btn.addEventListener("click", () => openLightbox(g.tag));
      host.appendChild(btn);
    });

    function openLightbox(tag) {
      if (!lightbox) return;
      lightboxBox.innerHTML = "";
      lightboxBox.appendChild(placeholderBlock(tag, "ph-ratio-16-9"));
      lightboxCaption.textContent = tag;
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      const closeBtn = lightbox.querySelector(".lightbox-close");
      if (closeBtn) closeBtn.focus();
    }
    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
    if (lightbox) {
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
      });
      lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
      });
    }
  })();

  /* ---------- Static placeholders (signature product section, wine, desserts) ---------- */
  document.querySelectorAll("[data-placeholder]").forEach((slot) => {
    const tag = slot.getAttribute("data-placeholder");
    const ratio = slot.getAttribute("data-ratio") || "";
    slot.appendChild(placeholderBlock(tag, ratio));
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll ----------
     Runs last, after every render*() call above has finished injecting
     its markup, so dynamically-created .reveal elements (dish rows,
     press cards, review cards, gallery tiles, wine chips, etc.) are
     observed too — not just the ones present in the static HTML. */
  const revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((n) => n.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((n) => io.observe(n));
  }

  /* ---------- History photo — subtle scroll-linked reveal ----------
     The photo (Fernando & Antonina / "1973") already has its final,
     validated resting position (its normal, untransformed place in the
     grid). It starts higher — near the top of the "— La Maison" eyebrow
     label — and gently eases DOWN into that final position as the user
     scrolls down through the section. It never moves upward. Disabled
     under prefers-reduced-motion and on small screens. */
  (function historyPhotoReveal() {
    const visual = document.querySelector(".history-visual");
    const eyebrowEl = document.querySelector(".history-body .eyebrow");
    if (!visual || reduceMotion) return;

    const MOBILE_QUERY = window.matchMedia("(max-width: 720px)");

    let ticking = false;

    function apply() {
      ticking = false;
      if (MOBILE_QUERY.matches || !eyebrowEl) {
        visual.style.setProperty("--history-shift", "0px");
        return;
      }
      // Distance (in true document flow, ignoring any transform already
      // applied) between the eyebrow label's top and the photo's own
      // natural resting top. Clamped to ≤0 so the photo only ever starts
      // ABOVE its final position, never below it.
      const startOffset = Math.min(0, absoluteTop(eyebrowEl) - absoluteTop(visual));

      const rect = visual.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const start = vh * 0.95; // photo's top reaches here → progress 0 (initial, near eyebrow)
      const end = vh * 0.4;    // photo's top reaches here → progress 1 (settled, final position)
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const offset = (1 - progress) * startOffset;
      visual.style.setProperty("--history-shift", offset.toFixed(1) + "px");
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();
  })();
})();
