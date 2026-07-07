document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

/* ============================================================
   I18N — RU / UZ / EN
   Правь текст ниже, чтобы изменить формулировки на любом языке.
   ============================================================ */
const translations = {
  ru: {
    nav: { philosophy:"Философия", programs:"Курсы", pricing:"Цены", process:"Как проходит", cta:"Оставить заявку" },
    hero: {
      eyebrow:"Академия мышления в эпоху ИИ · Ташкент",
      title:'Мы не учим <mark>пользоваться ИИ</mark>. Мы учим <mark>мыслить</mark>.',
      sub:"ThinkLike AI — образовательный проект для тех, кто хочет не бояться искусственного интеллекта, а работать с ним на равных: ставить задачи, задавать вопросы и создавать свои продукты.",
      ctaPrimary:"Записаться на курс", ctaGhost:"Наша философия ↓",
      meta1:"направления обучения", meta2:"языки преподавания", meta3:"страха перед ИИ"
    },
    phil: {
      h2:"Во что мы верим", num:"01 — Философия",
      n1:"Мысль 01", t1a:"Не бойся искусственного интеллекта.", t1b:"Бойся остаться без навыков.",
      n2:"Мысль 02", t2a:"Мы не заменяем человека.", t2b:"Мы усиливаем человека.",
      n3:"Мысль 03", t3a:"Мы не учим пользоваться ИИ.", t3b:"Мы учим мыслить.",
      n4:"Мысль 04", t4a:"Будущее принадлежит тем,", t4b:"кто умеет задавать вопросы."
    },
    about: {
      h2:"Кто такой выпускник ThinkLike AI", num:"02 — О нас",
      lead:"Мы создаём не курс, а культуру мышления — с собственной методологией, стандартами и кодексом для учеников и преподавателей.",
      b1:"Ставит задачи ИИ", d1:", а не боится его — умеет формулировать промпты и оценивать результат критически.",
      b2:"Понимает принципы", d2:", стоящие за инструментами, а не просто нажимает кнопки в интерфейсе.",
      b3:"Создаёт свои продукты", d3:" — сайты, приложения, автоматизации — и доводит их до готового результата.",
      b4:"Мыслит системно", d4:": не копирует чужие решения, а собирает собственный подход."
    },
    prog: {
      h2:"Курсы", num:"03 — Программы",
      kidsDesc:"Первое знакомство с ИИ через игру и творчество: как устроены нейросети, как задавать им вопросы и как отличать факт от выдумки.",
      kidsWho:"Для школьников · без опыта программирования",
      proDesc:"Базовый практический курс: работа с ИИ-инструментами, создание сайтов и приложений, автоматизация задач, первый проект в портфолио.",
      proWho:"Для взрослых и студентов · с нуля до первого проекта",
      expDesc:"Продвинутый трек для тех, кто хочет строить AI-продукты и сервисы на заказ: агенты, интеграции, коммерческие решения.",
      expWho:"Для практикующих специалистов и предпринимателей"
    },
    price: {
      h2:"Цены", num:"04 — Тарифы",
      note:"Цены указаны за полный курс. Точную стоимость и рассрочку уточняем на бесплатной консультации — замени плейсхолдеры на актуальные цифры.",
      currency:"сум / мес",
      kids1:"2 занятия в неделю", kids2:"Группы до 8 человек", kids3:"Итоговый мини-проект",
      pro1:"3 занятия в неделю", pro2:"Личная проверка работ", pro3:"Проект в портфолио",
      exp1:"Индивидуальный трек", exp2:"Разбор коммерческих кейсов", exp3:"Помощь с первыми клиентами",
      cta:"Записаться"
    },
    proc: {
      h2:"Как проходит обучение", num:"05 — Процесс",
      s1h:"Бесплатная консультация", s1p:"Рассказываем о направлении, программе и помогаем выбрать подходящий трек — Kids, Pro или Expert.",
      s2h:"Практические занятия", s2p:"Разбираем инструменты и задачи на практике, каждое занятие закрепляется домашним заданием.",
      s3h:"Обратная связь", s3p:"Преподаватель проверяет каждую работу лично и помогает разобраться со сложными местами.",
      s4h:"Проект и диплом", s4p:"Финальная работа становится частью портфолио и защищается перед завершением курса."
    },
    apply: {
      h2:"Оставить заявку", num:"06 — Заявка",
      name:"Имя", contact:"Телефон или Telegram", program:"Направление", message:"Комментарий (необязательно)",
      submit:"Отправить заявку",
      hint:"Заявка откроется в вашей почте — просто нажмите «Отправить» ещё раз в почтовом клиенте.",
      sideLead:"Не готовы писать? Свяжитесь напрямую.",
      tg:"Telegram — скоро добавим ссылку",
      note:"Отвечаем в течение дня в будни."
    },
    cta: { h2:"Начни думать иначе — уже на этой неделе.", btn:"Оставить заявку выше ↑" },
    foot: { city:"Ташкент.", contact:"Контакты" }
  },

  uz: {
    nav: { philosophy:"Falsafa", programs:"Kurslar", pricing:"Narxlar", process:"Jarayon", cta:"Ariza qoldirish" },
    hero: {
      eyebrow:"Sun'iy intellekt davrida fikrlash akademiyasi · Toshkent",
      title:'Biz <mark>SIdan foydalanishni</mark> emas, <mark>fikrlashni</mark> o\u2018rgatamiz.',
      sub:"ThinkLike AI — sun'iy intellektdan qo\u2018rqmasdan, u bilan teng huquqli ishlashni istaganlar uchun ta'lim loyihasi: vazifa qo\u2018yish, savol berish va o\u2018z mahsulotlarini yaratish.",
      ctaPrimary:"Kursga yozilish", ctaGhost:"Bizning falsafamiz ↓",
      meta1:"ta'lim yo\u2018nalishi", meta2:"dars tillari", meta3:"SIdan qo\u2018rqish"
    },
    phil: {
      h2:"Biz nimaga ishonamiz", num:"01 — Falsafa",
      n1:"1-fikr", t1a:"Sun'iy intellektdan qo\u2018rqma.", t1b:"Ko\u2018nikmasiz qolishdan qo\u2018rq.",
      n2:"2-fikr", t2a:"Biz odamni almashtirmaymiz.", t2b:"Biz odamni kuchaytiramiz.",
      n3:"3-fikr", t3a:"Biz SIdan foydalanishni o\u2018rgatmaymiz.", t3b:"Biz fikrlashni o\u2018rgatamiz.",
      n4:"4-fikr", t4a:"Kelajak — savol bera oladiganlarniki", t4b:"bo\u2018ladi."
    },
    about: {
      h2:"ThinkLike AI bitiruvchisi kim", num:"02 — Biz haqimizda",
      lead:"Biz shunchaki kurs emas, balki fikrlash madaniyatini yaratamiz — o\u2018z metodologiyamiz, standartlarimiz va o\u2018quvchi/o\u2018qituvchi kodeksi bilan.",
      b1:"SIga vazifa qo\u2018yadi", d1:" — undan qo\u2018rqmaydi, promptlarni to\u2018g\u2018ri tuzadi va natijani tanqidiy baholaydi.",
      b2:"Tamoyillarni tushunadi", d2:" — shunchaki tugmalarni bosmaydi, vositalar ortidagi mantiqni biladi.",
      b3:"O\u2018z mahsulotlarini yaratadi", d3:" — sayt, ilova, avtomatlashtirish — va ularni yakuniga yetkazadi.",
      b4:"Tizimli fikrlaydi", d4:" — boshqalarni nusxalamaydi, o\u2018z yondashuvini shakllantiradi."
    },
    prog: {
      h2:"Kurslar", num:"03 — Dasturlar",
      kidsDesc:"O\u2018yin va ijod orqali SI bilan birinchi tanishuv: neyron tarmoqlar qanday ishlaydi, savol berish va faktni to\u2018qimadan ajratish.",
      kidsWho:"Maktab o\u2018quvchilari uchun · dasturlash tajribasi shart emas",
      proDesc:"Amaliy asosiy kurs: SI vositalari bilan ishlash, sayt va ilovalar yaratish, vazifalarni avtomatlashtirish, portfoliodagi birinchi loyiha.",
      proWho:"Kattalar va talabalar uchun · noldan birinchi loyihagacha",
      expDesc:"Buyurtma asosida AI mahsulot va xizmatlarini qurishni istaganlar uchun ilg\u2018or yo\u2018nalish: agentlar, integratsiyalar, tijorat yechimlari.",
      expWho:"Amaliyotchi mutaxassislar va tadbirkorlar uchun"
    },
    price: {
      h2:"Narxlar", num:"04 — Tariflar",
      note:"Narxlar to\u2018liq kurs uchun ko\u2018rsatilgan. Aniq narx va muddatli to\u2018lovni bepul konsultatsiyada aniqlaymiz — raqamlarni real qiymatlarga almashtiring.",
      currency:"so\u2018m / oy",
      kids1:"Haftasiga 2 dars", kids2:"8 kishigacha guruh", kids3:"Yakuniy mini-loyiha",
      pro1:"Haftasiga 3 dars", pro2:"Ishlarni shaxsiy tekshirish", pro3:"Portfoliodagi loyiha",
      exp1:"Individual yo\u2018nalish", exp2:"Tijorat keyslarini tahlil qilish", exp3:"Birinchi mijozlar topishda yordam",
      cta:"Yozilish"
    },
    proc: {
      h2:"O\u2018qish qanday o\u2018tadi", num:"05 — Jarayon",
      s1h:"Bepul konsultatsiya", s1p:"Yo\u2018nalish va dastur haqida gapiramiz, Kids, Pro yoki Expert tarkidan tanlashga yordam beramiz.",
      s2h:"Amaliy darslar", s2p:"Vositalar va vazifalarni amalda o\u2018rganamiz, har bir dars uyga vazifa bilan mustahkamlanadi.",
      s3h:"Fikr-mulohaza", s3p:"O\u2018qituvchi har bir ishni shaxsan tekshiradi va qiyin joylarni tushuntiradi.",
      s4h:"Loyiha va diplom", s4p:"Yakuniy ish portfolio qismiga aylanadi va kurs oxirida himoya qilinadi."
    },
    apply: {
      h2:"Ariza qoldirish", num:"06 — Ariza",
      name:"Ism", contact:"Telefon yoki Telegram", program:"Yo\u2018nalish", message:"Izoh (ixtiyoriy)",
      submit:"Arizani yuborish",
      hint:"Ariza pochta orqali ochiladi — pochta ilovasida «Yuborish»ni yana bir marta bosing.",
      sideLead:"Yozishga tayyor emasmisiz? To\u2018g\u2018ridan-to\u2018g\u2018ri bog\u2018laning.",
      tg:"Telegram — havolani tez orada qo\u2018shamiz",
      note:"Ish kunlari davomida javob beramiz."
    },
    cta: { h2:"Boshqacha fikrlashni hoziroq boshla.", btn:"Yuqoridagi arizani to\u2018ldiring ↑" },
    foot: { city:"Toshkent.", contact:"Aloqa" }
  },

  en: {
    nav: { philosophy:"Philosophy", programs:"Courses", pricing:"Pricing", process:"How it works", cta:"Apply now" },
    hero: {
      eyebrow:"A thinking academy for the AI era · Tashkent",
      title:'We don\u2019t teach you to <mark>use AI</mark>. We teach you to <mark>think</mark>.',
      sub:"ThinkLike AI is an education project for people who want to stop fearing artificial intelligence and start working with it as an equal: setting tasks, asking questions, and building their own products.",
      ctaPrimary:"Enroll in a course", ctaGhost:"Our philosophy ↓",
      meta1:"course tracks", meta2:"languages taught", meta3:"fear of AI"
    },
    phil: {
      h2:"What we believe", num:"01 — Philosophy",
      n1:"Thought 01", t1a:"Don\u2019t fear artificial intelligence.", t1b:"Fear being left without skills.",
      n2:"Thought 02", t2a:"We don\u2019t replace people.", t2b:"We make people stronger.",
      n3:"Thought 03", t3a:"We don\u2019t teach how to use AI.", t3b:"We teach how to think.",
      n4:"Thought 04", t4a:"The future belongs to those", t4b:"who know how to ask questions."
    },
    about: {
      h2:"Who is a ThinkLike AI graduate", num:"02 — About us",
      lead:"We\u2019re not building a course — we\u2019re building a culture of thinking, with its own methodology, standards, and code of conduct for students and teachers.",
      b1:"Sets tasks for AI", d1:" instead of fearing it — writes clear prompts and evaluates results critically.",
      b2:"Understands the principles", d2:" behind the tools, not just the buttons in an interface.",
      b3:"Builds real products", d3:" — websites, apps, automations — and takes them all the way to done.",
      b4:"Thinks systemically", d4:": doesn\u2019t copy other people\u2019s solutions, but builds their own approach."
    },
    prog: {
      h2:"Courses", num:"03 — Programs",
      kidsDesc:"A first, playful introduction to AI: how neural networks work, how to ask them good questions, and how to tell fact from fabrication.",
      kidsWho:"For school students · no coding experience needed",
      proDesc:"A hands-on core course: working with AI tools, building sites and apps, automating tasks, and finishing a first portfolio project.",
      proWho:"For adults and students · from zero to a first project",
      expDesc:"An advanced track for those who want to build AI products and services for clients: agents, integrations, commercial solutions.",
      expWho:"For practicing specialists and entrepreneurs"
    },
    price: {
      h2:"Pricing", num:"04 — Plans",
      note:"Prices are for the full course. Exact cost and installment options are confirmed at a free consultation — replace these placeholders with your real numbers.",
      currency:"UZS / mo",
      kids1:"2 classes a week", kids2:"Groups of up to 8", kids3:"Final mini-project",
      pro1:"3 classes a week", pro2:"Personal feedback on work", pro3:"Portfolio project",
      exp1:"Individual track", exp2:"Real commercial case reviews", exp3:"Help landing first clients",
      cta:"Enroll"
    },
    proc: {
      h2:"How the course runs", num:"05 — Process",
      s1h:"Free consultation", s1p:"We walk you through the tracks and help you choose between Kids, Pro, and Expert.",
      s2h:"Hands-on classes", s2p:"We work through tools and tasks in practice; every class comes with homework.",
      s3h:"Feedback", s3p:"A teacher personally reviews every piece of work and helps with the hard parts.",
      s4h:"Project and diploma", s4p:"The final project becomes part of your portfolio and is presented at the end of the course."
    },
    apply: {
      h2:"Apply now", num:"06 — Application",
      name:"Name", contact:"Phone or Telegram", program:"Track", message:"Message (optional)",
      submit:"Send application",
      hint:"This opens your email app — just hit send again from there.",
      sideLead:"Not ready to write? Reach out directly.",
      tg:"Telegram — link coming soon",
      note:"We reply within a business day."
    },
    cta: { h2:"Start thinking differently — this week.", btn:"Apply above ↑" },
    foot: { city:"Tashkent.", contact:"Contact" }
  }
};

/* ============================================================
   APPLY TRANSLATIONS
   ============================================================ */
function getPath(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : null), obj);
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.ru;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = getPath(dict, el.getAttribute('data-i18n'));
    if (value !== null) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const value = getPath(dict, el.getAttribute('data-i18n-html'));
    if (value !== null) el.innerHTML = value;
  });

  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('thinklike-lang', lang); } catch (e) { /* ignore */ }
}

const savedLang = (() => {
  try { return localStorage.getItem('thinklike-lang'); } catch (e) { return null; }
})();

applyLanguage(savedLang && translations[savedLang] ? savedLang : 'ru');

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

/* ============================================================
   PRICING CTA → prefill program in the form
   ============================================================ */
document.querySelectorAll('[data-program]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.querySelector('#applyForm select[name="program"]');
    if (select) select.value = link.getAttribute('data-program');
  });
});

/* ============================================================
   APPLICATION FORM
   No backend on GitHub Pages, so this builds a pre-filled
   email as a reliable, dependency-free fallback.
   Swap this for a Formspree/Getform action for a nicer flow.
   ============================================================ */
const APPLY_EMAIL = 'info@thinklikeai.uz'; // TODO: замени на реальную почту

const applyForm = document.getElementById('applyForm');
if (applyForm) {
  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(applyForm);
    const name = (data.get('name') || '').toString().trim();
    const contact = (data.get('contact') || '').toString().trim();
    const program = (data.get('program') || '').toString();
    const message = (data.get('message') || '').toString().trim();

    const subject = `Заявка ThinkLike AI — ${program}`;
    const bodyLines = [
      `Имя: ${name}`,
      `Контакт: ${contact}`,
      `Направление: ${program}`,
      message ? `Комментарий: ${message}` : null
    ].filter(Boolean);

    const mailto = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;

    applyForm.classList.add('is-sent');
  });
}
