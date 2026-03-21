// ─── THEME TOGGLE ──────────────────────────────────
const toggle = document.getElementById('themeToggle');
const html   = document.documentElement;

const syncIcon = () => {
  toggle.textContent = html.getAttribute('data-theme') === 'light' ? '🌙' : '☀️';
};
syncIcon();

toggle.addEventListener('click', () => {
  const isLight = html.getAttribute('data-theme') === 'light';
  html.setAttribute('data-theme', isLight ? 'dark' : 'light');
  syncIcon();
});

// ─── HAMBURGER ─────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ─── AOS INIT ──────────────────────────────────────
AOS.init({
  duration: 600,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
});

// ─── ACTIVE NAV ON SCROLL ──────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');

const setActiveNav = () => {
  const scrollY  = window.scrollY + 100;
  const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
  let current = '';

  if (atBottom) {
    current = sections[sections.length - 1].id;
  } else {
    sections.forEach(s => {
      if (scrollY >= s.offsetTop) current = s.id;
    });
  }

  navAs.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav(); // run once on load
