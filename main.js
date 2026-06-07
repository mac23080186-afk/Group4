/* ═══════════════════════════════════════════════════════════════
   Spider-Marketers × Thai Cong Interior Design
   main.js — v1.0
═══════════════════════════════════════════════════════════════ */

'use strict';

// ── Keyboard nav detection ───────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') document.body.classList.add('keyboard-nav');
});
document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// ── Scroll Progress Bar ──────────────────────────────────────
const scrollProgress = document.querySelector('.scroll-progress');
function updateScrollProgress() {
  const scrollTop  = window.scrollY;
  const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
  const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (scrollProgress) scrollProgress.style.width = progress + '%';
}

// ── Navigation: transparent → glass on scroll ───────────────
const nav = document.getElementById('nav');
function updateNav() {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 80);
}

// ── Active section tracking ──────────────────────────────────
const navLinks     = document.querySelectorAll('.nav-links a[data-section]');
const sections     = document.querySelectorAll('main section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.dataset.section === id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => sectionObserver.observe(s));

// ── Scroll-triggered Animations ─────────────────────────────
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      animObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.animate-fade-up, .animate-fade-left, .animate-fade-right'
).forEach(el => animObserver.observe(el));

// ── Stats Count-Up Animation ─────────────────────────────────
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function animateCount(el, target, duration = 1400) {
  const start = performance.now();
  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = easeOutExpo(progress);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el     = entry.target;
    const target = parseInt(el.dataset.target, 10);
    if (!isNaN(target)) animateCount(el, target);
    statsObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => {
  statsObserver.observe(el);
});

// ── Mobile Menu ──────────────────────────────────────────────
const hamburger    = document.querySelector('.nav-hamburger');
const mobileMenu   = document.getElementById('mobile-menu');
const closeBtn     = document.querySelector('.mobile-menu-close');
const mobileLinks  = document.querySelectorAll('.mobile-menu nav a');

function openMenu() {
  if (!mobileMenu || !hamburger) return;
  mobileMenu.hidden = false;
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    closeBtn && closeBtn.focus();
  });
  trapFocus(mobileMenu);
}

function closeMenu() {
  if (!mobileMenu || !hamburger) return;
  mobileMenu.hidden = true;
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  hamburger.focus();
  releaseTrap();
}

hamburger && hamburger.addEventListener('click', openMenu);
closeBtn  && closeBtn.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu && !mobileMenu.hidden) closeMenu();
});

// Focus trap
let trapCleanup = null;
function trapFocus(container) {
  const focusable = container.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  function handler(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }
  container.addEventListener('keydown', handler);
  trapCleanup = () => container.removeEventListener('keydown', handler);
}
function releaseTrap() {
  if (trapCleanup) { trapCleanup(); trapCleanup = null; }
}

// ── Smooth Scroll for nav links ──────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Custom Cursor ────────────────────────────────────────────
const cursor     = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');
let mouseX = -100, mouseY = -100;
let ringX  = -100, ringY  = -100;

if (window.matchMedia('(hover: hover)').matches && cursor && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Ring follows with lag
  function animateRing() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Expand ring on interactive elements
  const interactiveEls = 'a, button, .team-card, .service-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveEls)) cursorRing.classList.add('is-hovering');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveEls)) cursorRing.classList.remove('is-hovering');
  });
} else {
  if (cursor)     cursor.style.display     = 'none';
  if (cursorRing) cursorRing.style.display = 'none';
}

// ── Parallax Hero (desktop only) ────────────────────────────
const heroSection = document.querySelector('.section-hero');
function updateParallax() {
  if (!heroSection || window.innerWidth < 768) return;
  const scrolled = window.scrollY;
  heroSection.style.backgroundPositionY = `calc(50% + ${scrolled * 0.25}px)`;
}

// ── Consolidated scroll listener ────────────────────────────
let scrollTicking = false;
function onScroll() {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    updateNav();
    updateScrollProgress();
    updateParallax();
    scrollTicking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

// ── Initial calls ────────────────────────────────────────────
updateNav();
updateScrollProgress();
