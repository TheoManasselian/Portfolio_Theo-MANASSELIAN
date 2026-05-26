/* =============================================================
   nav.js — Navigation centralisée + génération de la sidebar
   V8 esthétique · Portfolio Théo Manasselian

   AJOUTER UN PROJET : décommenter/dupliquer une entrée dans NAV
   CHANGER LE DOMAINE : modifier SITE.domain ci-dessous
   ============================================================= */

(function () {

  /* ----------------------------------------------------------
     1. AUTO-DÉTECTION de la racine du projet
     nav.js est toujours à [racine]/js/nav.js
  ---------------------------------------------------------- */
  var ROOT = (function () {
    var scripts = document.querySelectorAll('script[src]');
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].getAttribute('src').indexOf('nav.js') !== -1) {
        return scripts[i].src.replace(/js\/nav\.js[^/]*$/, '');
      }
    }
    return '';
  })();

  /* ----------------------------------------------------------
     2. CONFIG DU SITE
  ---------------------------------------------------------- */
  var SITE = {
    name      : 'Théo Manasselian',
    domain    : '',           // ex: 'https://theo-manasselian.com'
    copyright : '© 2026 Théo Manasselian'
  };

  /* ----------------------------------------------------------
     3. DÉFINITION DE LA NAVIGATION
     - path     : chemin relatif depuis la racine du projet
     - icon     : nom du fichier dans img/ui/ (sans extension .png)
     - children : sous-items (optionnel)
  ---------------------------------------------------------- */
  var NAV = [
    {
      id    : 'profil',
      label : 'Profil',
      path  : 'html/index.html',
      icon  : 'parcours'
    },
    {
      id       : 'comp_rsx',
      label    : 'Compétences Réseaux',
      icon     : 'reseau',
      children : [
        { id: 'comp_rsx_main', label: 'Compétences Réseaux', path: 'html/competences/competences_rsx.html' },
        { id: 'outils_rsx',    label: 'Outils Réseaux',      path: 'html/competences/outils_rsx.html'      }
      ]
    },
    {
      id       : 'comp_dev',
      label    : 'Compétences Dev',
      icon     : 'dev',
      children : [
        { id: 'comp_dev_main', label: 'Compétences Dev', path: 'html/competences/competences_dev.html' },
        { id: 'outils_dev',    label: 'Outils Dev',       path: 'html/competences/outils_dev.html'      }
      ]
    },
    {
      id    : 'comp_gen',
      label : 'Compétences Générales',
      path  : 'html/competences/competences_bureautiques.html',
      icon  : 'competence'
    },
    {
      id       : 'projets_rsx',
      label    : 'Projets Réseaux',
      icon     : 'reseau',
      children : [
        { id: 'liste_rsx', label: 'Liste des projets',    path: 'html/projets_rsx/liste_projets_rsx.html' },
        { id: 'pkt_vm',    label: 'PKT & Virtualisation', path: 'html/projets_rsx/pkt-vm.html'             }
        // { id: 'rsx2', label: 'Projet Réseaux 2', path: 'html/projets_rsx/projet2.html' }
      ]
    },
    {
      id       : 'projets_dev',
      label    : 'Projets Dev',
      icon     : 'dev',
      children : [
        { id: 'liste_dev',   label: 'Liste des projets', path: 'html/projets_dev/liste_projets_dev.html' },
        { id: 'isnotatalan', label: 'IsNoTaTALAN',        path: 'html/projets_dev/isnotatalan.html'       }
        // { id: 'dev2', label: 'Projet Dev 2', path: 'html/projets_dev/projet2.html' }
      ]
    },
    {
      id    : 'cv',
      label : 'CV',
      path  : 'html/cv.html',
      icon  : 'cv'
    }
  ];

  /* ----------------------------------------------------------
     4. DÉTECTION DE LA PAGE ACTIVE
  ---------------------------------------------------------- */
  var currentHref = window.location.href;

  function isActive(path) {
    var normalized = path.replace(/\\/g, '/');
    return currentHref.indexOf(normalized) !== -1;
  }

  /* ----------------------------------------------------------
     5. GÉNÉRATION HTML DE LA SIDEBAR
  ---------------------------------------------------------- */
  function iconHtml(name) {
    return '<span class="mi"><img src="' + ROOT + 'img/ui/' + name + '.png" alt=""></span>';
  }

  function buildLeaf(item) {
    var href   = ROOT + item.path;
    var active = isActive(item.path) ? ' active' : '';
    return (
      '<a href="' + href + '" class="menu-item' + active + '">' +
        iconHtml(item.icon) +
        '<span>' + item.label + '</span>' +
      '</a>'
    );
  }

  function buildGroup(item) {
    var hasActive = item.children.some(function (c) { return isActive(c.path); });
    var openAttr  = hasActive ? ' open' : '';

    var childHTML = item.children.map(function (child) {
      var href   = ROOT + child.path;
      var active = isActive(child.path) ? ' active' : '';
      return '<a href="' + href + '" class="menu-sub-item' + active + '">' + child.label + '</a>';
    }).join('\n      ');

    return (
      '<details class="menu-group"' + openAttr + '>\n' +
      '  <summary class="menu-group-summary">\n' +
      '    ' + iconHtml(item.icon) + '\n' +
      '    ' + item.label + '\n' +
      '  </summary>\n' +
      '  <div class="menu-group-items">\n' +
      '    ' + childHTML + '\n' +
      '  </div>\n' +
      '</details>'
    );
  }

  function buildSidebar() {
    var items = NAV.map(function (item) {
      return item.children ? buildGroup(item) : buildLeaf(item);
    }).join('\n\n    ');

    return (
      '<nav class="sidebar-nav">\n\n' +
      '  <p class="sidebar-section-label">Portfolio</p>\n\n  ' +
      items + '\n\n' +
      '</nav>\n' +
      '<div class="sidebar-footer">' +
        '<span class="sidebar-copy">' + SITE.copyright + '</span>' +
      '</div>'
    );
  }

  /* ----------------------------------------------------------
     6. INJECTION
  ---------------------------------------------------------- */
  var aside = document.querySelector('.sidebar');
  if (aside) {
    aside.innerHTML = buildSidebar();
  }

  /* ----------------------------------------------------------
     7. CANONICAL SEO
  ---------------------------------------------------------- */
  if (SITE.domain) {
    var existing = document.querySelector('link[rel="canonical"]');
    if (!existing) {
      var link  = document.createElement('link');
      link.rel  = 'canonical';
      link.href = SITE.domain + window.location.pathname;
      document.head.appendChild(link);
    }
  }

  /* ----------------------------------------------------------
     8. HAMBURGER (mobile)
  ---------------------------------------------------------- */
  var hamburger = document.getElementById('hamburger');
  var sidebarEl = document.querySelector('.sidebar');

  if (hamburger && sidebarEl) {
    hamburger.addEventListener('click', function () {
      sidebarEl.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!sidebarEl.contains(e.target) && !hamburger.contains(e.target)) {
        sidebarEl.classList.remove('open');
      }
    });
  }

})();
