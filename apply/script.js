const APPLY_EMAIL = 'thinklikeaiuz@gmail.com';
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${APPLY_EMAIL}`;

// Same Telegram bot + supergroup the main site (thinklikeai.net) posts
// applications into — see thinklikeai.net/script.js for the reference
// implementation this mirrors.
// NOTE: like the main site, this token lives in public client-side code
// (no backend on GitHub Pages) — anyone viewing page source can see it.
// Accepted trade-off per project decision. Regenerate via @BotFather
// (/revoke) and drop the new token in here if it's ever misused.
const TG_BOT_TOKEN = '8888868988:AAHhObZu-32BQUH0xIzDDQe5igXorOLLHNk';
const TG_CHAT_ID = '-1004462776226';
const TG_ENDPOINT = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;

// ---------- i18n: UZ / RU / EN ----------
const TRANSLATIONS = {
  ru: {
    pageTitle: 'ThinkLike AI — Оставить заявку',
    metaDescription: 'Курсы по ИИ для подростков и профессионалов в Ташкенте. Оставьте заявку — перезвоним в течение дня.',
    themeToggleAriaLabel: 'Переключить тему',
    themeToggleDark: 'Тёмная',
    themeToggleLight: 'Светлая',
    heroPhotoAlt: 'Фото занятия ThinkLike AI',
    heroPhotoPlaceholder: 'Здесь будет фото занятия<br>ThinkLike AI',
    h1: 'Начни думать иначе — сегодня.',
    heroLead: 'Курсы по искусственному интеллекту для подростков и профессионалов. Ташкент, живые занятия.',
    ctaApply: 'Оставить заявку',
    heroMicro: 'Заполните имя и телефон — перезвоним сами, в течение дня.',
    feature1: 'Три уровня: Basic · Advanced · Master',
    feature2: 'Практика с первого занятия',
    feature3: 'Живые занятия в Ташкенте',
    applyH2: 'Оставить заявку',
    nameLabel: 'Полное имя',
    namePlaceholder: 'Иван Иванов',
    phoneLabel: 'Номер телефона',
    phonePlaceholder: '+998 ·· ··· ·· ··',
    submitCta: 'Отправить заявку',
    submitSending: 'Отправляем…',
    formHint: 'Мы получим заявку мгновенно и перезвоним вам сами.',
    formSuccess: 'Спасибо! Мы получили вашу заявку и скоро позвоним.',
    footerLocation: 'Ташкент',
    subjectPrefix: 'Заявка (лендинг) ThinkLike AI'
  },
  uz: {
    pageTitle: 'ThinkLike AI — Ariza qoldirish',
    metaDescription: 'Toshkentda o‘smirlar va mutaxassislar uchun sun’iy intellekt kurslari. Ariza qoldiring — kun davomida qo‘ng‘iroq qilamiz.',
    themeToggleAriaLabel: 'Mavzuni almashtirish',
    themeToggleDark: 'Qorong‘i',
    themeToggleLight: 'Yorug‘',
    heroPhotoAlt: 'ThinkLike AI darsining surati',
    heroPhotoPlaceholder: 'Bu yerda dars surati<br>bo‘ladi',
    h1: 'Bugundan boshqacha fikrlashni boshla.',
    heroLead: 'O‘smirlar va mutaxassislar uchun sun’iy intellekt kurslari. Toshkent, jonli darslar.',
    ctaApply: 'Ariza qoldirish',
    heroMicro: 'Ism va telefon raqamingizni kiriting — o‘zimiz qo‘ng‘iroq qilamiz, kun davomida.',
    feature1: 'Uch daraja: Basic · Advanced · Master',
    feature2: 'Birinchi darsdanoq amaliyot',
    feature3: 'Toshkentda jonli darslar',
    applyH2: 'Ariza qoldirish',
    nameLabel: 'To‘liq ism',
    namePlaceholder: 'Alisher Aliyev',
    phoneLabel: 'Telefon raqami',
    phonePlaceholder: '+998 ·· ··· ·· ··',
    submitCta: 'Arizani yuborish',
    submitSending: 'Yuborilmoqda…',
    formHint: 'Arizangiz darhol bizga yetib boradi va o‘zimiz qo‘ng‘iroq qilamiz.',
    formSuccess: 'Rahmat! Arizangizni oldik va tez orada qo‘ng‘iroq qilamiz.',
    footerLocation: 'Toshkent',
    subjectPrefix: 'Ariza (landing) ThinkLike AI'
  },
  en: {
    pageTitle: 'ThinkLike AI — Apply',
    metaDescription: 'AI courses for teenagers and professionals in Tashkent. Leave a request — we will call you back within the day.',
    themeToggleAriaLabel: 'Toggle theme',
    themeToggleDark: 'Dark',
    themeToggleLight: 'Light',
    heroPhotoAlt: 'Photo of a ThinkLike AI class',
    heroPhotoPlaceholder: 'Class photo<br>will be here',
    h1: 'Start thinking differently — today.',
    heroLead: 'Artificial intelligence courses for teenagers and professionals. Tashkent, live classes.',
    ctaApply: 'Apply now',
    heroMicro: 'Fill in your name and phone — we will call you back ourselves, within the day.',
    feature1: 'Three levels: Basic · Advanced · Master',
    feature2: 'Practice from the very first lesson',
    feature3: 'Live classes in Tashkent',
    applyH2: 'Apply now',
    nameLabel: 'Full name',
    namePlaceholder: 'John Smith',
    phoneLabel: 'Phone number',
    phonePlaceholder: '+998 ·· ··· ·· ··',
    submitCta: 'Send application',
    submitSending: 'Sending…',
    formHint: 'We receive your request instantly and call you back ourselves.',
    formSuccess: 'Thank you! We’ve received your application and will call soon.',
    footerLocation: 'Tashkent',
    subjectPrefix: 'Application (landing) ThinkLike AI'
  }
};

const LANG_STORAGE_KEY = 'thinklike-lang';

function getCurrentLang() {
  const attr = document.documentElement.getAttribute('data-lang');
  return TRANSLATIONS[attr] ? attr : 'ru';
}

function applyLanguage(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.ru;
  const resolvedLang = TRANSLATIONS[lang] ? lang : 'ru';

  document.documentElement.setAttribute('lang', resolvedLang);
  document.documentElement.setAttribute('data-lang', resolvedLang);
  try { localStorage.setItem(LANG_STORAGE_KEY, resolvedLang); } catch (e) { /* ignore */ }

  document.title = t.pageTitle;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', t.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === resolvedLang);
  });
}

const langSwitch = document.querySelector('.lang-switch');
if (langSwitch) {
  langSwitch.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn) return;
    applyLanguage(btn.getAttribute('data-lang'));
  });
}

// The inline <head> script already set data-lang before first paint;
// this fills in the actual translated text/attributes on load.
applyLanguage(getCurrentLang());

// ---------- Theme toggle (Light / Dark — Warm Charcoal & Gold) ----------
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('thinklike-theme', next); } catch (e) { /* ignore */ }
  });
}

const applyForm = document.getElementById('applyForm');

if (applyForm) {
  applyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot: real users never fill this hidden field in.
    const honeypot = applyForm.querySelector('input[name="_gotcha"]');
    if (honeypot && honeypot.value) {
      applyForm.classList.add('is-sent');
      applyForm.reset();
      return;
    }

    const lang = getCurrentLang();
    const t = TRANSLATIONS[lang];

    const data = new FormData(applyForm);
    const name = (data.get('name') || '').toString().trim();
    const contact = (data.get('contact') || '').toString().trim();
    const program = (data.get('program') || '').toString();

    data.append('_subject', `${t.subjectPrefix} — ${program} [${lang.toUpperCase()}]`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');

    const submitBtn = applyForm.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = t.submitSending; }
    applyForm.classList.remove('is-sent', 'is-error');

    const emailPromise = fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).catch(() => null);

    const tgLines = [
      '📩 Новая заявка — ThinkLike AI (apply-лендинг)',
      `Имя: ${name}`,
      `Телефон: ${contact}`,
      `Программа: ${program}`,
      `Язык страницы: ${lang.toUpperCase()}`
    ];

    const telegramPromise = fetch(TG_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT_ID, text: tgLines.join('\n') })
    }).catch(() => null);

    try {
      const [emailRes, telegramRes] = await Promise.all([emailPromise, telegramPromise]);
      const emailOk = !!(emailRes && emailRes.ok);
      const telegramOk = !!(telegramRes && telegramRes.ok);

      // Success if either channel delivered — the two are redundant on
      // purpose, so one failing (e.g. FormSubmit not yet activated for
      // this address) shouldn't block the applicant.
      if (!emailOk && !telegramOk) throw new Error('Request failed');

      applyForm.classList.add('is-sent');
      applyForm.reset();
    } catch (err) {
      applyForm.classList.add('is-error');
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
    }
  });
}
