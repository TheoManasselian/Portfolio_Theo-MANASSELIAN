# Portfolio — Théo Manasselian

Portfolio personnel statique présentant mes compétences réseaux, mes compétences en développement web et mes projets réalisés à l'ESIEA.

---

## Structure du projet

```
portfolio/
├── .github/
│   └── workflows/   
│       └── static.yml
│
├── css/
│   ├── base.css          # Variables, tokens de couleur, typographie, animation fadeUp
│   ├── nav.css           # Top navbar, sidebar, menu items, hamburger mobile
│   └── components.css    # Tous les composants (cartes, icônes, timeline, CV, projets…)
│
├── js/
│   ├── nav.js            # Génération de la sidebar + détection page active + hamburger
│   ├── animations.js     # Animations d'apparition au scroll (IntersectionObserver)
│   └── scroll.js         # Bouton "retour en haut"
│
├── html/
│   ├── profil.html                              # Page Profil
│   ├── cv.html                                 # CV interactif
│   ├── CV_THEO_MANASSELIAN.html                # Version imprimable / export PDF
│   ├── competences/
│   │   ├── competences_rsx.html                # Compétences Réseaux (protocoles, OS)
│   │   ├── outils_rsx.html                     # Outils Réseaux (PKT, VMware, Wireshark…)
│   │   ├── competences_dev.html                # Compétences Dev (HTML, JS, Python…)
│   │   ├── outils_dev.html                     # Outils Dev (VS Code, Git, MySQL…)
│   │   └── competences_bureautiques.html       # Compétences Générales (Office, Jira…)
│   ├── projets_rsx/
│   │   ├── liste_projets_rsx.html              # Liste des projets Réseaux
│   │   └── pkt-vm.html                         # Détail : Virtualisation & Windows Server
│   └── projets_dev/
│       ├── liste_projets_dev.html              # Liste des projets Dev
│       └── isnotatalan.html                    # Détail : IsNoTaTALAN
│
├── img/
│   ├── ui/                                     # Icônes de navigation, photo de profil, favicon
│   ├── logo/                                   # Logos des technologies
│   └── projets/                                # Captures d'écran des projets
│
├── README.txt
├── index.html
├── robots.txt
└── sitemap.xml
```

---

## Design system

Le projet utilise un système de design basé sur des variables CSS définies dans `css/base.css`.

| Variable | Valeur | Usage |
|---|---|---|
| `--p1` … `--p5` | Violet clair → foncé | Couleur primaire (texte, bordures, accents) |
| `--s1-1` … `--s1-5` | Mauve clair → foncé | Palette secondaire 1 |
| `--s2-1` … `--s2-5` | Bleu-violet clair → foncé | Palette secondaire 2 |
| `--bg` | `#f5f4f8` | Fond de page |
| `--surface` | `#ffffff` | Fond des cartes |
| `--border-lo` | `var(--p1)` | Bordures légères |
| `--radius-lg` | `16px` | Rayon des cartes |
| `--t` | `.18s ease` | Durée des transitions |

**Typographies :**
- *Cormorant Garamond* (serif, italic) — titres, nom, section titles
- *Jost* (sans-serif, 300/400/500) — corps de texte, navigation, labels

---

## Export PDF du CV

Ouvrir `html/cv.html` et cliquer sur **Exporter en PDF**. La page `CV_THEO_MANASSELIAN.html` s'ouvre dans un nouvel onglet — utiliser `Ctrl+P` / `Cmd+P` et choisir *Enregistrer en PDF*.

---

## Technologies utilisées

| Catégorie | Outils |
|---|---|
| Langages | HTML5, CSS3, JavaScript (ES6+, vanilla) |
| Typographie | Google Fonts — Cormorant Garamond, Jost |
| Versioning | Git, GitHub |
| Déploiement | GitHub Pages / Netlify / Vercel |

---

## Contact

**Théo Manasselian**
Étudiant ESIEA — Ivry-sur-Seine
Recherche d'alternance Technicien Réseau · Sept. 2026

- Email : [theo.manasselian.pro@gmail.com](mailto:theo.manasselian.pro@gmail.com)
- LinkedIn : [linkedin.com/in/theo-manasselian](https://www.linkedin.com/in/th%C3%A9o-manasselian)
- GitHub : [github.com/TheoManasselian](https://github.com/TheoManasselian)
