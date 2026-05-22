======================================================
  PORTFOLIO — THÉO MANASSELIAN
  README.txt
======================================================

ARBORESCENCE
------------
Portfolio/
├── 📁 css/
│    ├── main.css          ← point d'entrée (@import tous les modules)
│    ├── root.css          ← palette couleurs + gradients + variables
│    ├── reset.css         ← reset HTML + base body
│    ├── layout.css        ← topnav fixe + sidebar fixe
│    ├── typography.css    ← titres Cormorant Garamond, eyebrow, corps
│    ├── components.css    ← welcome banner, icônes, boutons, tags, timeline
│    ├── parcours.css      ← carte profil + timeline formation
│    ├── competences.css   ← grille 2 colonnes compétences
│    ├── projets.css       ← cartes projets + blocs alternés détail
│    ├── cv.css            ← page CV
│    ├── animations.css    ← fadeUp + fade-in
│    └── responsive.css    ← tablette (≤900px) + mobile (≤700px)
│
├── 📁 html/
│    ├── 📄 index.html									← Parcours / Accueil
│    ├── 📄 cv.html									← CV en ligne
│    ├── 📄 cv_theo_manasselian.html					← CV imprimable A4 (export PDF)
│    │
│    ├── 📁 competences/
│    │    ├── 📄 competences.html						← Compétences techniques
│    │    ├── 📄 competences_dev.html					← Menu compétences dev
│    │    ├── 📄 competences_rsx.html					← Menu compétences réseaux
│    │    ├── 📄 competences_techniques_dev.html		← Détail : compétences techniques web
│    │    ├── 📄 competences_outils_dev.html			← Détail : compétences outils web
│    │    ├── 📄 competences_techniques_rsx.html		← Détail : compétences techniques rsx
│    │    ├── 📄 competences_outils_rsx.html			← Détail : compétences outils réseaux
│    │    └── 📄 langues.html							← langues
│    │
│    └── 📁 projets/
│          ├── 📄 projets.html							← Liste des projets
│          ├── 📄 projets_dev.html						← Liste : projet web
│          ├── 📄 projets_rsx.html						← Liste : projet réseaux
│          │
│          ├── 📁 projets_dev/
│          │    └── 📄 isnotatalan.html				← Détail : projet web
│          │
│          └── 📁 projets_rsx/
│               └── 📄 pkt-vm.html						← Détail : projet réseaux
│
├── 📁 js/
│    ├── theme.js      	← bascule thème clair/sombre (localStorage)
│    ├── animations.js 	← fade-in via IntersectionObserver
│    ├── scroll.js     	← bouton retour en haut
│    └── sidebar.js    	← ouverture sidebar sur mobile
│
├── 📁 img/
│    ├── 📁 logos/
│    │    └── img
│    │
│    ├── 📁 cv/
│    │    └── img
│    │
│    └── 📁 ui/
│         └── img
│
└── README.txt


EXPORT PDF DU CV
----------------
1. Page "CV" → cliquer "Exporter en PDF"
2. CV_THEO_MANASSELIAN.html s'ouvre dans un nouvel onglet
3. Ctrl+P → Enregistrer en PDF (format A4, sans marges, arrière-plan activé)


PALETTE
-------
Primary  (violet) : #B28BF5 → #4D08C6
Secondary 1 (rose): #E382F4 → #A502C1
Secondary 2 (bleu) : #909BF5 → #0B21C7
Variables dans css/root.css

======================================================
