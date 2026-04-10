document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.tab-btn');
  var sections = document.querySelectorAll('.section');
  var detailPage = document.getElementById('detailPage');
  var detailContent = document.getElementById('detailContent');
  var detailBack = document.getElementById('detailBack');
  var themeToggle = document.getElementById('themeToggle');
  var backToTop = document.getElementById('backToTop');

  // ===== OPEN DETAIL PAGE =====
  function openDetail(key) {
    var data = window.detailData && window.detailData[key];
    if (!data) return;

    detailContent.innerHTML = '<h2 class="detail-title">' + data.title + '</h2>' + data.html;

    detailContent.querySelectorAll('.detail-project-link[data-detail]').forEach(function (el) {
      el.addEventListener('click', function () {
        openDetail(this.getAttribute('data-detail'));
      });
    });

    detailPage.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    detailPage.scrollTop = 0;
  }

  // ===== CLOSE DETAIL PAGE =====
  detailBack.addEventListener('click', function () {
    detailPage.classList.add('hidden');
    document.body.style.overflow = '';
  });

  // ===== CLICKABLE TITLES =====
  document.querySelectorAll('.clickable[data-detail]').forEach(function (el) {
    el.addEventListener('click', function () {
      openDetail(this.getAttribute('data-detail'));
    });
  });

  // ===== CLICKABLE SKILL IMAGES (opens detail like title) =====
  document.querySelectorAll('.skill-scope[data-detail]').forEach(function (scope) {
    var detailKey = scope.getAttribute('data-detail');
    scope.querySelectorAll('.skill-icon').forEach(function (icon) {
      icon.style.cursor = 'pointer';
      icon.addEventListener('click', function (e) {
        e.stopPropagation();
        openDetail(detailKey);
      });
    });
  });

  // ===== SCROLL SPY & SMOOTH SCROLL =====
  function updateActiveTab() {
    var scrollPos = window.scrollY || document.documentElement.scrollTop;
    var navHeight = document.getElementById('tabNav').offsetHeight;

    var current = '';
    sections.forEach(function (section) {
      var top = section.offsetTop - navHeight - 60;
      if (scrollPos >= top) {
        current = section.getAttribute('id');
      }
    });

    tabs.forEach(function (tab) {
      if (tab.tagName !== 'A') return;
      tab.classList.remove('active');
      if (tab.getAttribute('href') === '#' + current) {
        tab.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveTab);
  updateActiveTab();

  tabs.forEach(function (tab) {
    if (tab.tagName !== 'A') return;
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = this.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      var navHeight = document.getElementById('tabNav').offsetHeight;
      window.scrollTo({ top: target.offsetTop - navHeight, behavior: 'smooth' });
    });
  });

  // ===== SCROLL ANIMATIONS =====
  var fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ===== DARK MODE TOGGLE =====
  var savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  themeToggle.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    if (next === 'light') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    localStorage.setItem('portfolio-theme', next);
  });

  // ===== BACK TO TOP =====
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
