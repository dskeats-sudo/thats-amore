/* ============================================================
   That's Amore — Shared JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll reveal ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── Nav highlight active page ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Mobile menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
    mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  /* ── Sticky nav style swap ── */
  const nav = document.querySelector('.site-nav');
  if (nav && nav.dataset.darkOnScroll) {
    const update = () => nav.classList.toggle('nav-dark', window.scrollY > 80);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── Menu tabs ── */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('[data-tabs]');
      const target = btn.dataset.tab;
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      group.querySelector(`[data-pane="${target}"]`)?.classList.add('active');
    });
  });

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Hero slider ── */
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    let current = 0;
    const advance = () => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    };
    slides[0].classList.add('active');
    setInterval(advance, 5500);
  } else if (slides.length === 1) {
    slides[0].classList.add('active');
  }

});

/* ============================================================
   Lead Capture Modal — GHL Form Integration
   ============================================================
   The popup shows after a time delay or scroll trigger.
   The form inside is a GoHighLevel embedded form — all
   submissions go straight into the GHL CRM.
   ============================================================ */
(function () {

  // ─── CONFIG ───────────────────────────────────────────────
  var SHOW_DELAY = 20000; // ms before auto-show (20 s)
  var SCROLL_TRIGGER = 0.40;  // show at 40 % scroll
  var DISMISS_DAYS = 7;     // re-show after 7 days
  var STORAGE_KEY = 'ta_lead_dismiss';
  // ──────────────────────────────────────────────────────────

  // Dismissed recently? Done.
  var d = localStorage.getItem(STORAGE_KEY);
  if (d && Date.now() < parseInt(d, 10)) return;

  // ─── Build modal HTML with GHL iframe ─────────────────────
  var html =
    '<div class="lead-overlay" id="leadOverlay">' +
    '<div class="lead-modal lead-modal-ghl">' +
    '<button class="lead-close" id="leadClose" aria-label="Close">&times;</button>' +
    '<div class="lead-badge">✦</div>' +
    '<h3>Join Our <em>VIP List</em></h3>' +
    '<p>Be the first to hear about seasonal specials, exclusive events and offers at That\'s Amore.</p>' +
    '<div class="ghl-form-wrap">' +
    '<iframe ' +
    'src="https://api.leadconnectorhq.com/widget/form/NMlc4ir0TlykGGKvSwvR" ' +
    'style="width:100%;border:none;border-radius:3px" ' +
    'id="inline-NMlc4ir0TlykGGKvSwvR" ' +
    'data-layout="{\'id\':\'INLINE\'}" ' +
    'data-trigger-type="alwaysShow" ' +
    'data-trigger-value="" ' +
    'data-activation-type="alwaysActivated" ' +
    'data-activation-value="" ' +
    'data-deactivation-type="neverDeactivate" ' +
    'data-deactivation-value="" ' +
    'data-form-name="Get offers" ' +
    'data-height="280" ' +
    'data-layout-iframe-id="inline-NMlc4ir0TlykGGKvSwvR" ' +
    'data-form-id="NMlc4ir0TlykGGKvSwvR" ' +
    'title="Get offers" ' +
    '></iframe>' +
    '</div>' +
    '<p class="lead-fine">No spam, ever. Just good food and great offers.</p>' +
    '</div>' +
    '</div>';

  var wrap = document.createElement('div');
  wrap.innerHTML = html;
  document.body.appendChild(wrap);

  // Load the GHL form embed script
  var ghlScript = document.createElement('script');
  ghlScript.src = 'https://link.msgsndr.com/js/form_embed.js';
  document.body.appendChild(ghlScript);

  var overlay = document.getElementById('leadOverlay');
  var closeBtn = document.getElementById('leadClose');
  var shown = false;

  function show() {
    if (shown) return;
    shown = true;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hide() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    localStorage.setItem(STORAGE_KEY, String(Date.now() + DISMISS_DAYS * 86400000));
  }

  // ─── Triggers ────────────────────────────────────────────
  setTimeout(show, SHOW_DELAY);

  function onScroll() {
    var pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    if (pct >= SCROLL_TRIGGER) { show(); window.removeEventListener('scroll', onScroll); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ─── Close ───────────────────────────────────────────────
  closeBtn.addEventListener('click', hide);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) hide(); });

})();
