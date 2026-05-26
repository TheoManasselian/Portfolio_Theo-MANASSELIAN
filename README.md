# Portfolio — Théo Manasselian

Portfolio personnel statique présentant mes compétences réseaux, mes compétences en développement web et mes projets réalisés à l'ESIEA.

---

## Structure du projet

```
portfolio/
├── css/
│   ├── base.css          # Variables, tokens de couleur, typographie, animation fadeUp
│   ├── nav.css           # Top navbar, sidebar, menu items, hamburger mobile
│   └── components.css    # Tous les composants (cartes, icônes, timeline, CV, projets…)
├── js/
│   ├── nav.js            # Génération de la sidebar + détection page active + hamburger
│   ├── animations.js     # Animations d'apparition au scroll (IntersectionObserver)
│   └── scroll.js         # Bouton "retour en haut"
├── html/
│   ├── index.html                              # Page Profil
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
├── img/
│   ├── ui/                                     # Icônes de navigation, photo de profil, favicon
│   ├── logo/                                   # Logos des technologies
│   └── projets/                                # Captures d'écran des projets
├── robots.txt
└── sitemap.xml
```

---

## Lancer le projet

Le portfolio est entièrement statique — aucune dépendance, aucun build.

**Ouvrir localement :**

```bash
# Depuis la racine du projet
cd portfolio/

# Option 1 — Python (recommandé pour éviter les erreurs CORS sur les images)
python -m http.server 8000
# puis ouvrir http://localhost:8000/html/index.html

# Option 2 — Node.js
npx serve .
# puis ouvrir http://localhost:3000/html/index.html

# Option 3 — VS Code
# Installer l'extension Live Server, clic droit sur html/index.html > Open with Live Server
```

> **Ne pas ouvrir les fichiers HTML directement** (double-clic) : certains navigateurs bloquent le chargement des ressources locales en `file://`.

---

## Ajouter un projet

Ouvrir `js/nav.js` et localiser le tableau `NAV`. Chaque entrée suit ce schéma :

```js
// Lien simple
{
  id    : 'mon_projet',
  label : 'Mon Projet',
  path  : 'html/projets_dev/mon_projet.html',
  icon  : 'dev'                            // nom du fichier dans img/ui/ (sans .png)
}

// Groupe avec sous-pages
{
  id       : 'mon_groupe',
  label    : 'Mon Groupe',
  icon     : 'dev',
  children : [
    { id: 'liste', label: 'Liste',   path: 'html/projets_dev/liste.html' },
    { id: 'proj1', label: 'Projet 1', path: 'html/projets_dev/projet1.html' }
  ]
}
```

Créer ensuite la page HTML correspondante en copiant la structure d'une page existante (même `<head>`, même `<header>`, même `<aside class="sidebar">`).

---

## Déploiement

**GitHub Pages :**

```bash
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin https://github.com/TheoManasselian/portfolio.git
git push -u origin main
# Activer Pages dans Settings > Pages > Branch: main > / (root)
```

**Netlify / Vercel :**
Glisser-déposer le dossier `portfolio/` dans l'interface de déploiement — aucune configuration requise.

**Domaine personnalisé :**
Une fois le domaine connu, renseigner `SITE.domain` dans `js/nav.js` pour activer les balises canonical (SEO) :

```js
var SITE = {
  name  : 'Théo Manasselian',
  domain: 'https://theo-manasselian.com'  // ← compléter ici
};
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