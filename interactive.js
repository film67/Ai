/* ============================================================
   THINKLIKE AI — interactive layer
   Подключать ПОСЛЕ script.js:
   <script src="script.js"></script>
   <script src="interactive.js"></script>
   ============================================================ */
(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --------------------------------------------------------
     01 — Заливка кнопок от точки курсора
     -------------------------------------------------------- */
  const inkTargets = '.btn-primary, .btn-ghost, .nav-cta, .float-cta, .filter-tab, .quiz-option';

  document.addEventListener('pointerover', (e) => {
    const el = e.target.closest(inkTargets);
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  });

  /* --------------------------------------------------------
     02 — Прогресс чтения + уплотнение шапки
     -------------------------------------------------------- */
  const bar = document.createElement('div');
  bar.className = 'read-progress';
  document.body.appendChild(bar);

  const nav = document.querySelector('.nav');
  let ticking = false;

  function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${p})`;
    if (nav) nav.classList.toggle('is-stuck', window.scrollY > 24);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* --------------------------------------------------------
     03 — Активный раздел в навигации
     -------------------------------------------------------- */
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => a.classList.remove('is-current'));
        const active = navLinks.find(a => a.getAttribute('href') === `#${entry.target.id}`);
        if (active) active.classList.add('is-current');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
  }

  /* --------------------------------------------------------
     04 — Hero: печатающийся вопрос
     Строка вставляется под подзаголовком.
     -------------------------------------------------------- */
  const heroSub = document.querySelector('.hero-sub');
  if (heroSub && !reduced) {
    const line = document.createElement('p');
    line.className = 'hero-prompt';
    const text = document.createElement('span');
    const caret = document.createElement('span');
    caret.className = 'caret';
    line.append(text, caret);
    heroSub.after(line);

    const questionsByLang = {
      ru: ['Как мне автоматизировать это?', 'Почему именно так?', 'А если сделать иначе?', 'Что мне здесь непонятно?'],
      uz: ['Buni qanday avtomatlashtiraman?', 'Nega aynan shunday?', 'Boshqacha qilsam-chi?', 'Bu yerda menga nima tushunarsiz?']
    };

    function pool() {
      const lang = document.documentElement.lang === 'uz' ? 'uz' : 'ru';
      return questionsByLang[lang] || questionsByLang.ru;
    }

    let qi = 0, ci = 0, deleting = false;

    function tick() {
      const list = pool();
      const q = list[qi % list.length];
      ci = deleting ? ci - 1 : ci + 1;
      text.textContent = q.slice(0, ci);

      let wait = deleting ? 26 : 52;
      if (!deleting && ci === q.length) { deleting = true; wait = 1700; }
      else if (deleting && ci === 0) { deleting = false; qi++; wait = 320; }

      setTimeout(tick, wait);
    }
    tick();
  }

  /* --------------------------------------------------------
     05 — Reveal по очереди (stagger)
     -------------------------------------------------------- */
  document.querySelectorAll('.cards, .icon-grid, .levels, .steps, .faq-list').forEach(group => {
    Array.from(group.children).forEach((child, i) => {
      child.style.setProperty('--i', i);
    });
  });

  /* --------------------------------------------------------
     06 — Наклон карточек к курсору
     -------------------------------------------------------- */
  if (!reduced && window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.card').forEach(card => {
      const base = card.style.transform || '';
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
        card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = base; });
    });
  }

  /* --------------------------------------------------------
     07 — Счёт цифр от нуля
     -------------------------------------------------------- */
  function countUp(el) {
    const raw = el.textContent.trim();
    const target = parseInt(raw.replace(/\s/g, ''), 10);
    if (!Number.isFinite(target) || target === 0) return;
    const dur = 900;
    const start = performance.now();

    function frame(now) {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.round(target * eased);
      el.textContent = val.toLocaleString('ru-RU').replace(/,/g, ' ');
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = raw;
    }
    requestAnimationFrame(frame);
  }

  if ('IntersectionObserver' in window && !reduced) {
    const numObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        numObserver.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll('.price-num').forEach(el => numObserver.observe(el));
  }

  /* --------------------------------------------------------
     08 — FAQ: плавное раскрытие + только один открыт
     -------------------------------------------------------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const answer = item.querySelector('p');
    if (!answer) return;

    const shell = document.createElement('div');
    shell.className = 'faq-answer';
    const inner = document.createElement('div');
    answer.replaceWith(shell);
    inner.appendChild(answer);
    shell.appendChild(inner);

    item.addEventListener('toggle', () => {
      item.classList.toggle('is-open', item.open);
      if (!item.open) return;
      document.querySelectorAll('.faq-item[open]').forEach(other => {
        if (other !== item) { other.open = false; other.classList.remove('is-open'); }
      });
    });
  });

  /* --------------------------------------------------------
     09 — Форма: живая валидация и состояние отправки
     -------------------------------------------------------- */
  const form = document.getElementById('applyForm');
  if (form) {
    const messages = {
      ru: { name: 'Впишите имя — так мы поймём, как к вам обращаться.', phone: 'Номер в формате +998 и 9 цифр.' },
      uz: { name: 'Ismingizni yozing — sizga qanday murojaat qilishni bilamiz.', phone: 'Raqam +998 va 9 ta raqam ko‘rinishida.' }
    };
    const msg = () => messages[document.documentElement.lang === 'uz' ? 'uz' : 'ru'] || messages.ru;

    function showError(input, text) {
      input.classList.add('is-invalid');
      let note = input.parentElement.querySelector('.field-error');
      if (!note) {
        note = document.createElement('span');
        note.className = 'field-error';
        input.parentElement.appendChild(note);
      }
      note.textContent = text;
    }

    function clearError(input) {
      input.classList.remove('is-invalid');
      const note = input.parentElement.querySelector('.field-error');
      if (note) note.remove();
    }

    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', () => clearError(input));
      input.addEventListener('blur', () => {
        if (!input.required) return;
        if (input.name === 'name' && !input.value.trim()) showError(input, msg().name);
        if (input.name === 'phone' && !/^\+998\d{9}$/.test(input.value.trim())) showError(input, msg().phone);
      });
    });

    // индикатор отправки — вешается поверх существующего обработчика
    const submit = form.querySelector('button[type="submit"]');
    if (submit) {
      form.addEventListener('submit', () => {
        submit.classList.add('is-busy');
        setTimeout(() => submit.classList.remove('is-busy'), 4000);
      }, true);
    }
  }

  /* --------------------------------------------------------
     10 — Плавная прокрутка по якорям
     -------------------------------------------------------- */
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', id);
  });
})();
