/* =========================================================
   LE PORTUGAIS — Données du site
   Toute information susceptible d'évoluer (textes courts,
   prix, vins, avis, presse, galerie) est centralisée ici.
   Les images définitives remplaceront progressivement les
   placeholders identifiés par des clés `*Image`.
   ========================================================= */

const restaurantData = {
  name: "Le Portugais",
  fullName: "Restaurant Marisqueira Le Portugais",
  founded: 1973,
  founders: "José & Sotera Martins",
  currentOwners: "Fernando & Antonina Martins",
  city: "Genève",
  neighbourhood: "Plainpalais",
  address: {
    street: "Boulevard du Pont-d'Arve 59",
    postalCode: "1205",
    city: "Genève",
    country: "Suisse"
  },
  phone: "+41 22 329 40 98",
  phoneDisplay: "+41 (0)22 329 40 98",
  mobile: "+41 79 200 59 23",
  mobileDisplay: "+41 (0)79 200 59 23",
  email: "leportugais@bluewin.ch",
  closedDays: "Fermé le dimanche et le lundi",
  parking: "Parking Uni Mail",
  access: "Boulevard Carl-Vogt ou Quai Ernest-Ansermet — quartier Uni Mail / Pont-d'Arve",
  mapEmbedSrc: "https://www.google.com/maps?q=Boulevard+du+Pont-d%27Arve+59,+1205+Gen%C3%A8ve,+Suisse&output=embed",

  // -- Images officielles fournies --
  logoImage: "assets/logo.png",
  heroImage: {
    src: "assets/hero-1705.jpg",
    srcset: "assets/hero-640.jpg 640w, assets/hero-960.jpg 960w, assets/hero-1280.jpg 1280w, assets/hero-1600.jpg 1600w, assets/hero-1705.jpg 1705w",
    alt: "Salle du restaurant Le Portugais à Genève, table dressée en premier plan avec verres à vin"
  },
  historyImage: {
    src: "assets/family-1200.jpg",
    srcset: "assets/family-480.jpg 480w, assets/family-720.jpg 720w, assets/family-960.jpg 960w, assets/family-1200.jpg 1200w",
    alt: "Fernando et Antonina Martins, propriétaires du restaurant Le Portugais à Genève"
  }
};

/* ---------------------------------------------------------
   CARTE — Entrées / Plats / Sur commande
   --------------------------------------------------------- */
const menuData = {
  entradas: {
    label: "Entradas",
    labelFr: "Entrées",
    items: [
      { name: "Caldo verde", price: "14 CHF", desc: "Potage national du Portugal : pommes de terre, chou portugais, chouriço." },
      { name: "Sopa de Peixe", price: "14 CHF", desc: "Soupe de poissons selon la recette de notre famille." },
      { name: "Salada Mista", price: "9.50 CHF", desc: "Salade de saison du marché ou du potager, crudités et oignons." },
      { name: "Salada de Estação", price: "7.50 CHF", desc: "Salade verte de saison, du marché ou du potager et oignons." },
      { name: "Salada de Feijão Frade", price: "15 CHF", desc: "Salade de haricots princes tièdes, oignons, œuf dur et vinaigrette." },
      { name: "Travessa de Degustação para dois", price: "54 CHF", desc: "Plat de dégustation pour deux, composé selon les arrivages." },
      { name: "Bolinhos de Bacalhau", price: "15 CHF", desc: "Croquettes de morue — 6 pièces." }
    ]
  },
  principais: {
    label: "Pratos Principais",
    labelFr: "Plats principaux",
    items: [
      { name: "Peixes grelhados segundo as chegadas", price: "Selon arrivage", desc: "Poisson grillé selon les arrivages." },
      { name: "Bacalhau assado na grelha", price: "41 CHF", desc: "Morue grillée, pommes rôties au gros sel, ail, oignons crus, huile vierge du Portugal." },
      { name: "Polvo com vinagrete morno", price: "42 CHF", desc: "Poulpe poché, vinaigrette tiède, oignons, pommes au gros sel." },
      { name: "Filetes de Polvo grelhados", price: "44 CHF", desc: "Poulpe grillé, huile vierge, pommes en robe au gros sel et légumes." },
      { name: "Gambas selvagens salteadas", price: "42 CHF", desc: "Gambas sauvages poêlées au piripiri, riz persillé." },
      { name: "Conchas à Bulhão Pato", price: "Selon marché", desc: "Coquillages à l'ail, coriandre et huile d'olive. Supplément riz au four : 5 CHF." },
      { name: "Feijoada Brasileira", price: "39 CHF", desc: "Palette, jarret de bœuf, cochonnaille, haricots noirs et riz au four." },
      { name: "Bife do Vazio com manteiga", price: "47 CHF", desc: "Entrecôte 200 g poêlée à la coriandre fraîche au beurre. Garniture au choix." }
    ]
  },
  surCommande: {
    label: "Sur commande",
    labelFr: "Sur commande",
    note: "À commander au minimum 72 heures à l'avance. Prix selon arrivages ou marché.",
    items: [
      { name: "Bacalhau à Braz", desc: "Morue effilochée, pommes allumettes, œufs et olives, à la portugaise." },
      { name: "Gomes de Sá", desc: "Morue au four, pommes de terre, oignons et œufs durs." },
      { name: "Bacalhau com Natas no Forno", desc: "Morue gratinée à la crème au four." },
      { name: "Açorda de Marisco", desc: "Açorda traditionnelle aux fruits de mer et coriandre." },
      { name: "Açorda de Camarão", desc: "Açorda traditionnelle aux crevettes et coriandre." },
      { name: "Açorda de Bacalhau", desc: "Açorda traditionnelle à la morue et coriandre." },
      { name: "Parrilhada de Pescador", desc: "Grillade du pêcheur, poissons et fruits de mer selon arrivage." },
      { name: "Arroz de Marisco", desc: "Riz crémeux aux fruits de mer, recette de la maison." },
      { name: "Caldeirada de Peixe", desc: "Ragoût de poissons mijoté à la portugaise." },
      { name: "Cabrito assado no forno", desc: "Chevreau rôti au four, pommes de terre rissolées." },
      { name: "Leitão assado no forno", desc: "Cochon de lait rôti au four, à la portugaise." },
      { name: "Cozido à Portuguesa", desc: "Pot-au-feu portugais, viandes, charcuterie et légumes." },
      { name: "Arroz de Pato no forno", desc: "Riz de canard confit au four, chouriço." },
      { name: "Carnes de Caça à portuguesa", desc: "Gibier de saison à la portugaise — disponible en automne." },
      { name: "Carne de Porco à Alentejana", desc: "Porc et palourdes à l'Alentejo, coriandre et pommes de terre." }
    ]
  }
};

/* ---------------------------------------------------------
   PLATS EMBLÉMATIQUES — mis en avant sur la page d'accueil
   --------------------------------------------------------- */
const signatureDishes = [
  {
    index: "01",
    key: "bacalhau",
    name: "Bacalhau assado na grelha",
    nameFr: "Bacalhau — morue grillée",
    desc: "Morue grillée, pommes rôties au gros sel, ail, oignons crus, huile vierge du Portugal.",
    price: "41 CHF",
    image: "bacalhauImage",
    placeholderTag: "Photo — Bacalhau"
  },
  {
    index: "02",
    key: "polvo",
    name: "Polvo com vinagrete morno",
    nameFr: "Polvo — poulpe",
    desc: "Poulpe poché, vinaigrette tiède, oignons, pommes au gros sel.",
    price: "42 CHF",
    image: "octopusImage",
    placeholderTag: "Photo — Poulpe"
  },
  {
    index: "03",
    key: "gambas",
    name: "Gambas selvagens salteadas",
    nameFr: "Gambas sauvages",
    desc: "Gambas sauvages poêlées au piripiri, riz persillé.",
    price: "42 CHF",
    image: "gambasImage",
    placeholderTag: "Photo — Gambas"
  },
  {
    index: "04",
    key: "peixe",
    name: "Peixes grelhados segundo as chegadas",
    nameFr: "Poisson du jour",
    desc: "Poisson grillé selon les arrivages du jour.",
    price: "Selon arrivage",
    image: "freshFishImage",
    placeholderTag: "Photo — Poisson du jour"
  }
];

/* ---------------------------------------------------------
   DESSERTS
   --------------------------------------------------------- */
const dessertData = [
  { name: "Pera cozida no vinho do Porto e especiarias", price: "12.50 CHF", desc: "Poire pochée au Porto et aux épices." },
  { name: "Ovos moles", price: "9.50 CHF", desc: "Jaunes d'œufs cuits au sirop et arrosés au Porto blanc." },
  { name: "Pudim de ovos perfumado de laranja", price: "9.50 CHF", desc: "Flan caramel aux œufs parfumé à l'orange." },
  { name: "Molotof com creme de baunilha", price: "11 CHF", desc: "Blanc-manger au caramel, crème de vanille." },
  { name: "Molotof com creme de ovos moles", price: "13.50 CHF", desc: "Blanc-manger au caramel, crème d'ovos moles." },
  { name: "Sortido de Sobremesas caseiras", price: "14.50 CHF", desc: "Assortiment de desserts maison." },
  { name: "Queijo da Serra com marmelada caseira", price: "14.50 CHF", desc: "Fromage de brebis Serra da Estrela et pâte de coing maison." },
  { name: "Bola de Gelado artesanal", price: "4 CHF", desc: "Glace artisanale, boule." },
  { name: "Gelados regados", price: "12 CHF", desc: "Glaces artisanales arrosées." }
];

/* ---------------------------------------------------------
   CAVE — vins portugais
   --------------------------------------------------------- */
const wineData = {
  intro: "La maison possède, depuis ses origines, une importante sélection de vins portugais — blancs, rouges, rosés et Porto — choisis pour accompagner les produits de la mer et les grands classiques de la cuisine familiale.",
  regions: [
    "Minho", "Douro", "Dão", "Bairrada",
    "Setúbal", "Alentejo", "Ribatejo", "Trás-os-Montes"
  ],
  references: [
    "Gazela", "Muralhas de Monção", "Quinta da Aveleda", "Alvarinho Deu-la-Deu",
    "Quinta de Alderiz", "Quinta do Portal", "Crasto", "Esporão",
    "Quinta do Crasto", "Quinta da Alorna", "Dona Ermelinda"
  ],
  image: "wineImage"
};

/* ---------------------------------------------------------
   CARTE DES VINS COMPLÈTE — reconstituée à partir de l'ancienne
   carte des vins du restaurant (source de contenu uniquement ;
   présentation entièrement reconstruite dans le langage
   graphique du nouveau site). Seules les informations réellement
   lisibles sur les documents source sont reprises : nom,
   millésime, domaine/producteur, cépages, degré d'alcool.
   --------------------------------------------------------- */
const wineCarte = {
  note: "D'autres millésimes sont disponibles sur demande.",
  categories: [
    {
      key: "rouges",
      label: "Vins Rouges",
      regions: [
        {
          name: "Palmela",
          wines: [
            { name: "Quinta da Mimosa", vintage: "2009", producer: "Ermelinda Freitas", grapes: "Castelão", abv: "14%" },
            { name: "Dona Ermelinda Reserva", vintage: "2011", producer: "Ermelinda Freitas", grapes: "Castelão, Touriga Nacional, Trincadeira, Cabernet Sauvignon", abv: "14%" }
          ]
        },
        {
          name: "Ribatejo",
          wines: [
            { name: "Quinta da Alorna", vintage: "2011", producer: "Quinta da Alorna", grapes: "Tinta Roriz, Syrah, Castelão, Alicante Bouschet", abv: "13%" },
            { name: "Quinta da Alorna Reserva", vintage: "2010", producer: "Quinta da Alorna", grapes: "Touriga Nacional, Cabernet Sauvignon", abv: "14%" }
          ]
        },
        {
          name: "Alentejo",
          wines: [
            { name: "Monte das Ânforas", vintage: "2012", producer: "Bacalhôa", grapes: "Aragonês, Trincadeira, Alfrocheiro", abv: "14%" },
            { name: "Pêro D'Alter", vintage: "2012", producer: "Herdade Fonte Paredes", grapes: "Touriga Nacional, Trincadeira, Aragonez, Castelão", abv: "13%" },
            { name: "Esporão Reserva", vintage: "2011", producer: "Finagra, Esporão", grapes: "Aragonês, Trincadeira, Cabernet Sauvignon", abv: "14,5%" },
            { name: "Quinta do Mouro Rotulo Dourado", vintage: "2008", producer: "Miguel Louro", grapes: "Assemblage", abv: "14%" },
            { name: "Quinta do Mouro", vintage: "2005", producer: "Miguel Louro", grapes: "Tinta Roriz, Touriga Franca e outras", abv: "13,5%" },
            { name: "Malhadinha", vintage: "2011", producer: "Herdade da Malhadinha Nova", grapes: "Tinta Miúda, Aragonês, Alicante Bouschet, Touriga Nacional, Syrah", abv: "15,5%" },
            { name: "Tinto da Ânfora", vintage: "2011", producer: "Bacalhôa", grapes: "Trincadeira, Aragonês, Touriga Nacional, Alfrocheiro, Cabernet Sauvignon", abv: "14%" }
          ]
        },
        {
          name: "Douro",
          wines: [
            { name: "Quinta do Crasto Reserva Vinhas Velhas", vintage: "2010", producer: "Quinta do Crasto", grapes: "Assemblage de vieux cépages traditionnels de la région", abv: "14%" },
            { name: "Quinta do Crasto Reserva Vinhas Velhas", vintage: "2011", producer: "Quinta do Crasto", grapes: "Assemblage de vieux cépages traditionnels de la région", abv: "14,5%" },
            { name: "Crasto", vintage: "2012", producer: "Quinta do Crasto", grapes: "Cuve inox — Tinta Roriz, Tinta Barroca, Touriga Franca, Touriga Nacional", abv: "13,5%" },
            { name: "Cara Metade Reserva", vintage: "2011", producer: "PrimeGrape, Famille Boal", grapes: "Touriga Nacional, Touriga Franca, Sousão", abv: "15,5%" },
            { name: "Casa Boal Reserva", vintage: "2011", producer: "PrimeGrape, Famille Boal", grapes: "Touriga Nacional, Touriga Franca, Aragonez, Sousão", abv: "15%" },
            { name: "Quinta do Portal", vintage: "2011", producer: "Quinta do Portal", grapes: "Touriga Nacional, Touriga Franca, Tinta Roriz", abv: "13,5%" },
            { name: "Lua Nova em Vinhas Velhas", vintage: "2011", producer: "Fracastel, A. Mendes, J. Silva e Sousa", grapes: "Vieilles vignes — cuve inox", abv: "14%" },
            { name: "Chriseya", vintage: "2008", producer: "Prats & Symington", grapes: "Tinto Cão, Touriga Franca, Touriga Nacional", abv: "13%" },
            { name: "Roquette & Cazes", vintage: "2011", producer: "2 Familles — Roquette e Cazes", grapes: "Tinta Roriz, Touriga Franca, Touriga Nacional", abv: "14,5%" },
            { name: "Batuta", vintage: "2009", producer: "Niepoort", grapes: "Touriga Franca, Tinta Roriz, Rufete, Malvasia Preta et autres", abv: "14%" },
            { name: "Quinta do Javali Reserva", vintage: "2010", producer: "Quinta do Javali (culture biodynamique)", grapes: "Touriga Franca, Touriga Nacional, Tinto Cão, Tinta Barroca", abv: "15%" },
            { name: "Quinta do Javali TN", vintage: "2010", producer: "Quinta do Javali (culture biodynamique)", grapes: "Touriga Franca", abv: "13,5%" },
            { name: "Quinta do Vallado", vintage: "2009", producer: "Família Ferreira", grapes: "Touriga Nacional", abv: "14,5%" }
          ]
        },
        {
          name: "Dão",
          wines: [
            { name: "Dom Bella", vintage: "2010", producer: "Quinta Bella Encosta", grapes: "Assemblage", abv: "13%" }
          ]
        },
        {
          name: "Bairrada",
          wines: [
            { name: "Vinhas Velhas", vintage: "2008", producer: "Luís Pato", grapes: "Baga", abv: "13%" }
          ]
        }
      ]
    },
    {
      key: "roses",
      label: "Vins Rosés",
      regions: [
        {
          name: "Trás-os-Montes",
          wines: [
            { name: "Mateus Rosé", producer: "Sogrape", grapes: "Baga, Rufete, Tinta Barroca, Touriga Franca", abv: "11%" }
          ]
        },
        {
          name: "Douro",
          wines: [
            { name: "Quinta do Portal", vintage: "2012", producer: "Quinta do Portal", grapes: "Tinta Roriz, Touriga Nacional, Touriga Franca", abv: "13%" }
          ]
        },
        {
          name: "Setúbal",
          wines: [
            { name: "Dona Helena", vintage: "2013", producer: "Sociedade Agrícola Pegões", grapes: "Castelão, Syrah", abv: "12,5%" }
          ]
        }
      ]
    },
    {
      key: "blancs",
      label: "Vins Blancs",
      regions: [
        {
          name: "Minho",
          wines: [
            { name: "Gazela", producer: "Vinho Verde · Sogrape", grapes: "Assemblage de cépages du Minho", abv: "9%" },
            { name: "Muralhas de Monção", vintage: "2013", producer: "Vinho Verde · Adega Coop. de Monção", grapes: "Alvarinho, Trajadura", abv: "12,5%" },
            { name: "Quinta da Aveleda", vintage: "2012", producer: "Vinho Verde · Sociedade Agrícola Quinta Aveleda", grapes: "Alvarinho, Loureiro, Trajadura", abv: "11,5%" },
            { name: "Alvarinho Deu-la-Deu", vintage: "2013", producer: "Vinho Verde · Adega Coop. de Monção", grapes: "Alvarinho", abv: "13%" },
            { name: "Alvarinho Quinta de Alderiz", vintage: "2010", producer: "Vinho Verde · Casa Pinheiro", grapes: "Alvarinho", abv: "13,5%" }
          ]
        },
        {
          name: "Douro",
          wines: [
            { name: "Casa Boal", vintage: "2011", producer: "PrimeGrape, Família Boal", grapes: "Códega de Larinho, Viosinho, Verdelho", abv: "13,5%" },
            { name: "Quinta do Portal", vintage: "2013", producer: "Quinta do Portal", grapes: "Gouveio, Moscatel, Malvasia Fina, Viosinho", abv: "13,5%" },
            { name: "Crasto", vintage: "2013", producer: "Quinta do Crasto", grapes: "Rabigato, Viosinho, Gouveio", abv: "12%" }
          ]
        },
        {
          name: "Setúbal",
          wines: [
            { name: "Periquita", vintage: "2013", producer: "José Maria da Fonseca", grapes: "Moscatel de Setúbal, Verdelho", abv: "12,5%" }
          ]
        },
        {
          name: "Alentejo",
          wines: [
            { name: "Esporão Private Selection", vintage: "2012", producer: "Finagra, Esporão", grapes: "Sémillon, Marsanne, Roussanne", abv: "14%" },
            { name: "Esporão Reserva", vintage: "2012", producer: "Finagra, Esporão", grapes: "Roupeiro, Arinto, Antão Vaz", abv: "14%" },
            { name: "Esporão Espumante Bruto", vintage: "2010", producer: "Finagra, Esporão", grapes: "Verdelho, Antão Vaz", abv: "12%" },
            { name: "Viognier da Peceguina", vintage: "2012", producer: "Herdade da Malhadinha Nova", grapes: "Viognier", abv: "14%" }
          ]
        },
        {
          name: "Champagne",
          wines: [
            { name: "Gosset", producer: "Gosset, Aÿ", grapes: "Chardonnay, Pinot Noir, Pinot Meunier", abv: "12%" }
          ]
        }
      ]
    }
  ]
};

/* ---------------------------------------------------------
   PRESSE — archives (placeholders, sources connues)
   --------------------------------------------------------- */
const pressData = [
  {
    id: "archive-01",
    source: "Gault&Millau Suisse",
    title: "Une table portugaise fidèle à elle-même",
    tag: "Archive presse — 01"
  },
  {
    id: "archive-02",
    source: "Tribune de Genève — Plainpalais",
    title: "Cinquante ans de cuisine familiale au bord de l'Arve",
    tag: "Archive presse — 02"
  },
  {
    id: "archive-03",
    source: "Fines Gueules",
    title: "Fernando et Antonina, la mer au cœur de Genève",
    tag: "Archive presse — 03"
  }
];

/* ---------------------------------------------------------
   AVIS — Google (note réelle, témoignages à intégrer)
   --------------------------------------------------------- */
const reviewsData = {
  rating: 4.4,
  count: 166,
  source: "Google",
  items: [
    {
      id: "avis-01",
      author: "Andréa Pétroz",
      rating: 5,
      text: "Ici on ne choisit pas entre manger bon et manger sain. On a les deux. Lieu incontournable pour les amateurs de poissons. Ici on ne les recouvre pas de sauce, on les sublime.",
      featured: true
    },
    {
      id: "avis-02",
      author: "de souza jeanne",
      rating: 5,
      text: "Quelle pépite !!! Du service à la cuisine, tout est magnifiquement bien orchestré. Mes amies et moi avons pris le menu découverte avec les vins en accord conseillés par la patronne, nous nous sommes régalés. Produits finement choisis et service aux petits soins."
    },
    {
      id: "avis-03",
      author: "Peguet Nicolas",
      rating: 5,
      text: "Un excellent restaurant où chaque visite est un véritable plaisir. La cuisine y est toujours fraîche et délicieuse, préparée avec des produits de qualité. Le service est irréprochable : attentif et chaleureux."
    }
  ]
};

/* ---------------------------------------------------------
   GALERIE — emplacements à venir
   --------------------------------------------------------- */
const galleryData = [
  { id: "galerie-plat", tag: "Galerie — Plat" },
  { id: "galerie-salle", tag: "Galerie — Salle" },
  { id: "galerie-produit", tag: "Galerie — Produit" },
  { id: "galerie-detail", tag: "Galerie — Détail" },
  { id: "galerie-cuisine", tag: "Galerie — Cuisine" },
  { id: "galerie-table", tag: "Galerie — Table" }
];
