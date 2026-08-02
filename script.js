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
    nav: { test:"AI-тест", philosophy:"Философия", programs:"Курсы", pricing:"Цены", process:"Как проходит", faq:"Вопросы", contact:"Контакты", cta:"Оставить заявку" },
    hero: {
      eyebrow:"Think Like Tomorrow · Академия мышления в эпоху ИИ · Ташкент",
      title:'Мы не учим <mark>пользоваться ИИ</mark> Мы учим <mark>мыслить</mark>',
      sub:"ThinkLike AI — образовательный проект для тех, кто хочет не бояться искусственного интеллекта, а работать с ним на равных: ставить задачи, задавать вопросы и создавать свои продукты.",
      ctaPrimary:"Записаться на курс", ctaGhost:"Наша философия ↓",
      meta1:"направления · 6 уровней", meta2:"языки преподавания", meta3:"страха перед ИИ",
      word1:"почему?", word2:"как?", word3:"зачем?", word4:"что если?", word5:"а если иначе?"
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
    quiz: {
      h2:"Не знаете, с чего начать?", p:"Короткий тест из 3 вопросов — подскажем, какое направление и уровень подойдут именно вам.",
      start:"Пройти AI-тест", cta:"Смотреть в ценах", restart:"Пройти заново",
      questions:[
        { text:"Что вам ближе?", options:[
          {label:"Автоматизация процессов и AI-боты", value:"automation"},
          {label:"Маркетинг, контент и продвижение", value:"marketing"}
        ]},
        { text:"Какой у вас опыт?", options:[
          {label:"Совсем новичок, ещё не пробовал(а)", value:"beginner"},
          {label:"Пробовал(а) базовые вещи (ChatGPT, простые сценарии)", value:"intermediate"},
          {label:"Работал(а) с API, кодом, интеграциями", value:"advanced"}
        ]},
        { text:"Что хотите получить в результате?", options:[
          {label:"Первый рабочий проект с нуля", value:"beginner"},
          {label:"Систему из нескольких инструментов", value:"intermediate"},
          {label:"Готовое production-решение", value:"advanced"}
        ]}
      ],
      results:{
        "automation-beginner":{tag:"Automation · Beginner", title:"Вам подходит: ИИ для автоматизации, уровень Beginner", desc:"С нуля — Zapier, Make и первый AI-чат-бот. Идеально, если вы ещё не пробовали автоматизацию."},
        "automation-intermediate":{tag:"Automation · Intermediate", title:"Вам подходит: ИИ для автоматизации, уровень Intermediate", desc:"Webhooks, реальный AI-агент и протокол MCP — для тех, кто уже знаком с базовыми инструментами."},
        "automation-advanced":{tag:"Automation · Advanced", title:"Вам подходит: ИИ для автоматизации, уровень Advanced", desc:"Свой код, автономные агенты и деплой в прод — для тех, кто готов строить production-системы."},
        "marketing-beginner":{tag:"Marketing · Beginner", title:"Вам подходит: ИИ для маркетинга, уровень Beginner", desc:"Промптинг, AI-контент и основы SEO — если вы делаете первые шаги в AI-маркетинге."},
        "marketing-intermediate":{tag:"Marketing · Intermediate", title:"Вам подходит: ИИ для маркетинга, уровень Intermediate", desc:"Техническое SEO, email-кампании и AI-агенты — для тех, кто уже строит маркетинг-процессы."},
        "marketing-advanced":{tag:"Marketing · Advanced", title:"Вам подходит: ИИ для маркетинга, уровень Advanced", desc:"Агентные системы, NIST AI RMF и омниканальные стратегии — для опытных маркетологов."}
      }
    },
    formats: {
      h2:"Как проходит обучение", num:"03.5 — Форматы",
      f1h:"Офлайн в Ташкенте", f1p:"Занятия проходят очно, в аудитории — не запись, не самостоятельное прохождение видео.",
      f2h:"Небольшие группы", f2p:"До 12 человек в группе — у преподавателя есть время разобрать вопрос каждого.",
      f3h:"15 занятий по 2 часа", f3p:"Уровень идёт от 3 месяцев — без спешки, с практикой между занятиями.",
      f4h:"Капстоун + тест", f4p:"В конце уровня — свой рабочий проект и сертификационный тест, а не просто посещаемость."
    },
    prog: {
      h2:"Курсы", num:"03 — Программы",
      filterAll:"Все", filterAuto:"Автоматизация", filterMkt:"Маркетинг",
      dir1Name:"ИИ для автоматизации", dir1Desc:"Zapier, Make, AI-агенты, MCP — от первого сценария до production-системы.",
      a1Desc:"С нуля — мышление в триггерах и действиях, первый рабочий сценарий в Zapier и Make, подключение ИИ к автоматизации, первый AI-чат-бот.",
      a1Tools:"Zapier · Make · AI-чат-боты",
      a1Obj:"Думаете, автоматизация — это для программистов? Здесь всё без кода. Итог уровня: рабочая AI-автоматизация, которую вы соберёте и представите сами.",
      a1Who:"от 3 месяцев · 15 занятий · от 14 лет · без опыта",
      a2Desc:"Роутеры, вебхуки, работа с JSON, создание настоящего AI-агента с инструментами, протокол MCP на практике.",
      a2Tools:"Webhooks · AI-агенты · MCP",
      a2Obj:"Думаете, одного уровня уже достаточно? Здесь автоматизация становится системой — несколько инструментов и агент работают вместе.",
      a2Who:"от 3 месяцев · 15 занятий · после Beginner",
      a3Desc:"Свой код в no-code (JavaScript, Python), автономные агенты на Claude Agent SDK, свой MCP-сервер, деплой AI-приложения на реальный URL.",
      a3Tools:"Python/JS · Claude Agent SDK · Деплой в прод",
      a3Obj:"Думаете, дальше нужен диплом программиста? Здесь учат не кодингу с нуля, а тому, как довести AI-систему до production — с документацией и запуском.",
      a3Who:"от 3 месяцев · 15 занятий · после Intermediate",
      dir2Name:"ИИ для маркетинга", dir2Desc:"От промптинга до полной омниканальной AI-маркетинговой системы.",
      m1Desc:"Что ИИ реально даёт маркетологу, промптинг, AI-контент для email/соцсетей/сайта, основы SEO и рекламы, AI-чат-боты для клиентов.",
      m1Tools:"Промптинг · AI-контент · SEO основы",
      m1Obj:"Думаете, ИИ в маркетинге — это просто просить у чат-бота текст? Здесь учат строить процесс: от сегментации клиентов до полного плана, который вы защитите за 10 минут.",
      m1Who:"от 3 месяцев · 15 занятий · от 14 лет · без опыта",
      m2Desc:"Продвинутый промптинг, техническое SEO и структурированные данные для ИИ-поиска, email-кампании, AI-агенты для вовлечения клиентов.",
      m2Tools:"Техническое SEO · Email-кампании · AI-агенты",
      m2Obj:"Думаете, здесь просто более сложные промпты? На деле это уже стратегия и измерение ROI, а не только генерация текста.",
      m2Who:"от 3 месяцев · 15 занятий · после Beginner",
      m3Desc:"Агентные системы для martech, управление AI-рисками по NIST AI RMF, международный маркетинг, полная омниканальная AI-система.",
      m3Tools:"MCP для martech · NIST AI RMF · Омниканальные системы",
      m3Obj:"Думаете, это потолок для маркетолога без ИИ-фона? Здесь учат управлять целой AI-маркетинговой функцией — тем, что обычно требует команды.",
      m3Who:"от 3 месяцев · 15 занятий · после Intermediate"
    },
    price: {
      h2:"Цены", num:"04 — Тарифы",
      note:"Цены указаны за месяц обучения (уровень идёт от 3 месяцев). Точную стоимость и рассрочку уточняем на бесплатной консультации.",
      currency:"сум / мес",
      a1_1:"15 занятий по 2 часа", a1_2:"Группы до 12 человек", a1_3:"Капстоун-проект + тест",
      a2_1:"15 занятий по 2 часа", a2_2:"Личная проверка работ", a2_3:"Многоинструментальная система",
      a3_1:"15 занятий по 2 часа", a3_2:"Разбор production-кейсов", a3_3:"Деплой готовой системы",
      m1_1:"15 занятий по 2 часа", m1_2:"Группы до 12 человек", m1_3:"Маркетинг-план + защита",
      m2_1:"15 занятий по 2 часа", m2_2:"Личная проверка работ", m2_3:"Обновлённый маркетинг-план",
      m3_1:"15 занятий по 2 часа", m3_2:"Разбор enterprise-кейсов", m3_3:"Омниканальная система",
      cta:"Записаться"
    },
    proc: {
      h2:"Как проходит обучение", num:"05 — Процесс",
      s1h:"Бесплатная консультация", s1p:"Рассказываем о направлениях и уровнях, помогаем понять, с какого уровня начать.",
      s2h:"Практические занятия", s2p:"Разбираем инструменты и задачи на практике, каждое занятие закрепляется домашним заданием.",
      s3h:"Обратная связь", s3p:"Преподаватель проверяет каждую работу лично и помогает разобраться со сложными местами.",
      s4h:"Проект и диплом", s4p:"Финальная работа становится частью портфолио и защищается перед завершением курса.",
      location:"Занятия проходят офлайн: массив Караташ, 2, Шайхантахурский район, Ташкент — 2 этаж здания «Korzinka», напротив «Самарканд Дарвоза».",
      locTitle:"ThinkLike AI на Караташ",
      landmarks:"Ориентиры: ТЦ «Самарканд Дарвоза», супермаркет Korzinka, университет TESOL.",
      viewMap:"Посмотреть на карте →",
      photoCredit:"Фото здания — Google Maps"
    },
    faq: {
      h2:"Частые вопросы", num:"06 — Вопросы",
      q1:"Мне нужен опыт, чтобы начать?",
      a1:"Нет. Уровень Beginner в обоих направлениях рассчитан на полных новичков — от 14 лет, без опыта. Если не уверены, какое направление и уровень подойдут, пройдите короткий AI-тест в начале страницы.",
      q2:"Можно сразу пойти на Intermediate или Advanced?",
      a2:"Нет, уровни идут последовательно: Intermediate — после завершения Beginner, Advanced — после Intermediate. Так мы держим одинаковый уровень группы и не теряем в качестве практики.",
      q3:"Нужно ли покупать платные инструменты или подписки?",
      a3:"Нет. Все инструменты и платформы, которые используются в программе, доступны на бесплатных тарифах без привязки карты — от первого занятия до капстоун-проекта.",
      q4:"Сколько длится один уровень?",
      a4:"От 3 месяцев: 15 занятий по 2 часа, в группах до 12 человек, с практикой между занятиями и капстоун-проектом в конце.",
      q5:"Что я получаю по итогам уровня?",
      a5:"Рабочий проект, который вы соберёте и представите сами, плюс сертификационный тест — а не просто отметку о посещаемости.",
      q6:"Сколько стоит обучение и есть ли рассрочка?",
      a6:"Цены за месяц указаны в разделе «Цены». Точную стоимость и возможность рассрочки уточняем на бесплатной консультации — индивидуально под ваш уровень и направление.",
      q7:"На каких языках проходят занятия?",
      a7:"Русский и узбекский — можно выбрать язык прямо на сайте вверху страницы.",
      q8:"Где проходят занятия и как записаться?",
      a8:"Офлайн в Ташкенте, на массиве Караташ, 2 этаж здания Korzinka. Запись начинается с бесплатной консультации — оставьте заявку в форме ниже, и мы свяжемся с вами."
    },
    apply: {
      h2:"Оставить заявку", num:"07 — Заявка",
      name:"Имя", phone:"Номер телефона", telegram:"Telegram (необязательно)", message:"Комментарий (необязательно)",
      submit:"Отправить заявку",
      hint:"Заявка приходит нам напрямую в Telegram — обычно отвечаем в течение дня.",
      sideLead:"Оставьте заявку — мы свяжемся с вами сами.",
      note:"Отвечаем в течение дня в будни."
    },
    contact: { emailLabel:"Почта", addressLabel:"Адрес", address:"массив Караташ, 2, Шайхантахурский р-н, Ташкент (2 этаж, здание «Korzinka», напротив «Самарканд Дарвоза»)" },
    cta: { h2:"Начни думать иначе — уже на этой неделе.", btn:"Оставить заявку выше ↑" },
    foot: { city:"Ташкент.", contact:"Оставить заявку", tagline:"Think Like Tomorrow · Академия мышления в эпоху ИИ", navTitle:"Навигация", contactTitle:"Контакты", address:"Ташкент, Шайхантахурский р-н, массив Караташ 2, 2 этаж «Korzinka»" }
  },

  uz: {
    nav: { test:"AI-test", philosophy:"Falsafa", programs:"Kurslar", pricing:"Narxlar", process:"Jarayon", faq:"Savollar", contact:"Aloqa", cta:"Ariza qoldirish" },
    hero: {
      eyebrow:"Think Like Tomorrow · Sun'iy intellekt davrida fikrlash akademiyasi · Toshkent",
      title:'Biz <mark>sun\u2018iy intellektdan foydalanishni</mark> emas, <mark>fikrlashni</mark> o\u2018rgatamiz',
      sub:"ThinkLike AI — sun'iy intellektdan qo\u2018rqmasdan, u bilan teng huquqli ishlashni istaganlar uchun ta'lim loyihasi: vazifa qo\u2018yish, savol berish va o\u2018z mahsulotlarini yaratish.",
      ctaPrimary:"Kursga yozilish", ctaGhost:"Bizning falsafamiz ↓",
      meta1:"yo\u2018nalish · 6 daraja", meta2:"dars tillari", meta3:"sun\u2018iy intellektdan qo\u2018rqish",
      word1:"nega?", word2:"qanday?", word3:"nima uchun?", word4:"agar-chi?", word5:"boshqacha bo\u2018lsa-chi?"
    },
    phil: {
      h2:"Biz nimaga ishonamiz", num:"01 — Falsafa",
      n1:"1-fikr", t1a:"Sun'iy intellektdan qo\u2018rqma.", t1b:"Ko\u2018nikmasiz qolishdan qo\u2018rq.",
      n2:"2-fikr", t2a:"Biz odamni almashtirmaymiz.", t2b:"Biz odamni kuchaytiramiz.",
      n3:"3-fikr", t3a:"Biz sun\u2018iy intellektdan foydalanishni o\u2018rgatmaymiz.", t3b:"Biz fikrlashni o\u2018rgatamiz.",
      n4:"4-fikr", t4a:"Kelajak — savol bera oladiganlarniki", t4b:"bo\u2018ladi."
    },
    about: {
      h2:"ThinkLike AI bitiruvchisi kim", num:"02 — Biz haqimizda",
      lead:"Biz shunchaki kurs emas, balki fikrlash madaniyatini yaratamiz — o\u2018z metodologiyamiz, standartlarimiz va o\u2018quvchi/o\u2018qituvchi kodeksi bilan.",
      b1:"Sun\u2018iy intellektga vazifa qo\u2018yadi", d1:" — undan qo\u2018rqmaydi, promptlarni to\u2018g\u2018ri tuzadi va natijani tanqidiy baholaydi.",
      b2:"Tamoyillarni tushunadi", d2:" — shunchaki tugmalarni bosmaydi, vositalar ortidagi mantiqni biladi.",
      b3:"O\u2018z mahsulotlarini yaratadi", d3:" — sayt, ilova, avtomatlashtirish — va ularni yakuniga yetkazadi.",
      b4:"Tizimli fikrlaydi", d4:" — boshqalarni nusxalamaydi, o\u2018z yondashuvini shakllantiradi."
    },
    quiz: {
      h2:"Qayerdan boshlashni bilmayapsizmi?", p:"3 ta savoldan iborat qisqa test — qaysi yo\u2018nalish va daraja sizga mos kelishini aytamiz.",
      start:"AI-testdan o\u2018ting", cta:"Narxlarda ko\u2018rish", restart:"Qayta topshirish",
      questions:[
        { text:"Sizga nima yaqinroq?", options:[
          {label:"Jarayonlarni avtomatlashtirish va AI-botlar", value:"automation"},
          {label:"Marketing, kontent va targ\u2018ib", value:"marketing"}
        ]},
        { text:"Tajribangiz qanday?", options:[
          {label:"Butunlay yangiman, hali urinib ko\u2018rmaganman", value:"beginner"},
          {label:"Asosiy narsalarni sinab ko\u2018rganman (ChatGPT, oddiy ssenariylar)", value:"intermediate"},
          {label:"API, kod, integratsiyalar bilan ishlaganman", value:"advanced"}
        ]},
        { text:"Natijada nima olishni xohlaysiz?", options:[
          {label:"Noldan birinchi ishchi loyiha", value:"beginner"},
          {label:"Bir nechta vositadan iborat tizim", value:"intermediate"},
          {label:"Tayyor production-yechim", value:"advanced"}
        ]}
      ],
      results:{
        "automation-beginner":{tag:"Automation · Beginner", title:"Sizga mos: SI avtomatlashtirish, Beginner darajasi", desc:"Noldan — Zapier, Make va birinchi AI-chatbot. Avtomatlashtirishni hali sinab ko\u2018rmagan bo\u2018lsangiz, aynan shu."},
        "automation-intermediate":{tag:"Automation · Intermediate", title:"Sizga mos: SI avtomatlashtirish, Intermediate darajasi", desc:"Webhooklar, haqiqiy AI-agent va MCP protokoli — asosiy vositalarni bilganlar uchun."},
        "automation-advanced":{tag:"Automation · Advanced", title:"Sizga mos: SI avtomatlashtirish, Advanced darajasi", desc:"O\u2018z kodi, avtonom agentlar va production'ga joylash — production-tizim qurishga tayyor bo\u2018lganlar uchun."},
        "marketing-beginner":{tag:"Marketing · Beginner", title:"Sizga mos: SI marketing, Beginner darajasi", desc:"Prompting, AI-kontent va SEO asoslari — AI-marketingda birinchi qadamlar uchun."},
        "marketing-intermediate":{tag:"Marketing · Intermediate", title:"Sizga mos: SI marketing, Intermediate darajasi", desc:"Texnik SEO, email-kampaniyalar va AI-agentlar — marketing jarayonlarini quruvchilar uchun."},
        "marketing-advanced":{tag:"Marketing · Advanced", title:"Sizga mos: SI marketing, Advanced darajasi", desc:"Agentli tizimlar, NIST AI RMF va ko\u2018p kanalli strategiyalar — tajribali marketologlar uchun."}
      }
    },
    formats: {
      h2:"O\u2018qish qanday o\u2018tadi", num:"03.5 — Formatlar",
      f1h:"Toshkentda oflayn", f1p:"Darslar auditoriyada o\u2018tadi — video yozuv yoki mustaqil o\u2018rganish emas.",
      f2h:"Kichik guruhlar", f2p:"Guruhda 12 kishigacha — o\u2018qituvchida har birining savolini ko\u2018rib chiqishga vaqt bor.",
      f3h:"2 soatdan 15 ta dars", f3p:"Daraja kamida 3 oy davom etadi — shoshilmasdan, darslar orasida amaliyot bilan.",
      f4h:"Capstone + test", f4p:"Daraja oxirida — o\u2018z ishchi loyihangiz va sertifikatlash testi, shunchaki davomat emas."
    },
    prog: {
      h2:"Kurslar", num:"03 — Dasturlar",
      filterAll:"Barchasi", filterAuto:"Avtomatlashtirish", filterMkt:"Marketing",
      dir1Name:"SI bilan avtomatlashtirish", dir1Desc:"Zapier, Make, AI-agentlar, MCP — birinchi ssenariydan production-tizimgacha.",
      a1Desc:"Noldan — trigger va harakatlarda fikrlash, Zapier va Make'da birinchi ishchi ssenariy, avtomatlashtirishga SI ulash, birinchi AI-chatbot.",
      a1Tools:"Zapier · Make · AI-chatbotlar",
      a1Obj:"Avtomatlashtirish faqat dasturchilar uchun deb o\u2018ylaysizmi? Bu yerda hammasi kodsiz. Daraja natijasi — o\u2018zingiz yig\u2018gan va taqdim etgan ishchi AI-avtomatlashtirish.",
      a1Who:"kamida 3 oy · 15 dars · 14 yoshdan · tajribasiz",
      a2Desc:"Routerlar, webhooklar, JSON bilan ishlash, vositali haqiqiy AI-agent yaratish, MCP protokoli amaliyotda.",
      a2Tools:"Webhooklar · AI-agentlar · MCP",
      a2Obj:"Bitta daraja yetarli deb o\u2018ylaysizmi? Bu yerda avtomatlashtirish tizimga aylanadi — bir nechta vosita va agent birga ishlaydi.",
      a2Who:"kamida 3 oy · 15 dars · Beginner'dan keyin",
      a3Desc:"No-code'da o\u2018z kodi (JavaScript, Python), Claude Agent SDK'dagi avtonom agentlar, o\u2018z MCP-serveri, AI-ilovani real URL'ga joylash.",
      a3Tools:"Python/JS · Claude Agent SDK · Production'ga joylash",
      a3Obj:"Keyingi qadam dasturchi diplomi deb o\u2018ylaysizmi? Bu yerda noldan kodlashga emas, AI-tizimni production'gacha yetkazishga o\u2018rgatiladi — hujjatlar va ishga tushirish bilan.",
      a3Who:"kamida 3 oy · 15 dars · Intermediate'dan keyin",
      dir2Name:"SI marketing uchun", dir2Desc:"Promptingdan to to\u2018liq ko\u2018p kanalli AI-marketing tizimigacha.",
      m1Desc:"SI marketolog uchun nima beradi, prompting, email/ijtimoiy tarmoq/sayt uchun AI-kontent, SEO va reklama asoslari, mijozlar uchun AI-chatbotlar.",
      m1Tools:"Prompting · AI-kontent · SEO asoslari",
      m1Obj:"SI marketingda — bu shunchaki chatbotdan matn so\u2018rash deb o\u2018ylaysizmi? Bu yerda jarayon quriladi: mijozlarni segmentatsiya qilishdan 10 daqiqada himoya qilinadigan rejagacha.",
      m1Who:"kamida 3 oy · 15 dars · 14 yoshdan · tajribasiz",
      m2Desc:"Ilg\u2018or prompting, AI-qidiruv uchun texnik SEO va strukturalashgan ma\u2019lumotlar, email-kampaniyalar, mijozlarni jalb qilish uchun AI-agentlar.",
      m2Tools:"Texnik SEO · Email-kampaniyalar · AI-agentlar",
      m2Obj:"Bu yerda shunchaki murakkabroq promptlar deb o\u2018ylaysizmi? Aslida bu allaqachon strategiya va ROI o\u2018lchash, shunchaki matn generatsiyasi emas.",
      m2Who:"kamida 3 oy · 15 dars · Beginner'dan keyin",
      m3Desc:"Martech uchun agentli tizimlar, NIST AI RMF bo\u2018yicha AI-xavflarni boshqarish, xalqaro marketing, to\u2018liq ko\u2018p kanalli AI-tizim.",
      m3Tools:"Martech uchun MCP · NIST AI RMF · Ko\u2018p kanalli tizimlar",
      m3Obj:"Bu SI fonisiz marketolog uchun chegara deb o\u2018ylaysizmi? Bu yerda odatda butun jamoa talab qiladigan AI-marketing funksiyasini boshqarishga o\u2018rgatiladi.",
      m3Who:"kamida 3 oy · 15 dars · Intermediate'dan keyin"
    },
    price: {
      h2:"Narxlar", num:"04 — Tariflar",
      note:"Narxlar oylik o\u2018qish uchun ko\u2018rsatilgan (daraja kamida 3 oy davom etadi). Aniq narx va muddatli to\u2018lovni bepul konsultatsiyada aniqlaymiz.",
      currency:"so\u2018m / oy",
      a1_1:"15 ta 2 soatlik dars", a1_2:"12 kishigacha guruh", a1_3:"Capstone-loyiha + test",
      a2_1:"15 ta 2 soatlik dars", a2_2:"Ishlarni shaxsiy tekshirish", a2_3:"Ko\u2018p vositali tizim",
      a3_1:"15 ta 2 soatlik dars", a3_2:"Production-keyslarni tahlil qilish", a3_3:"Tayyor tizimni joylash",
      m1_1:"15 ta 2 soatlik dars", m1_2:"12 kishigacha guruh", m1_3:"Marketing-reja + himoya",
      m2_1:"15 ta 2 soatlik dars", m2_2:"Ishlarni shaxsiy tekshirish", m2_3:"Yangilangan marketing-reja",
      m3_1:"15 ta 2 soatlik dars", m3_2:"Enterprise-keyslarni tahlil qilish", m3_3:"Ko\u2018p kanalli tizim",
      cta:"Yozilish"
    },
    proc: {
      h2:"O\u2018qish qanday o\u2018tadi", num:"05 — Jarayon",
      s1h:"Bepul konsultatsiya", s1p:"Yo\u2018nalishlar va darajalar haqida gapiramiz, qaysi darajadan boshlash kerakligini tushunishga yordam beramiz.",
      s2h:"Amaliy darslar", s2p:"Vositalar va vazifalarni amalda o\u2018rganamiz, har bir dars uyga vazifa bilan mustahkamlanadi.",
      s3h:"Fikr-mulohaza", s3p:"O\u2018qituvchi har bir ishni shaxsan tekshiradi va qiyin joylarni tushuntiradi.",
      s4h:"Loyiha va diplom", s4p:"Yakuniy ish portfolio qismiga aylanadi va kurs oxirida himoya qilinadi.",
      location:"Darslar oflayn o\u2018tadi: Qorataosh massivi, 2-uy, Shayxontohur tumani, Toshkent — «Korzinka» binosining 2-qavati, «Samarqand Darvoza»ning ro\u2018parasida.",
      locTitle:"Qorataoshdagi ThinkLike AI",
      landmarks:"Mo\u2018ljallar: «Samarqand Darvoza» savdo markazi, Korzinka supermarketi, TESOL universiteti.",
      viewMap:"Xaritada ko\u2018rish →",
      photoCredit:"Bino fotosi — Google Maps"
    },
    faq: {
      h2:"Ko‘p beriladigan savollar", num:"06 — Savollar",
      q1:"Boshlash uchun tajriba kerakmi?",
      a1:"Yo‘q. Ikkala yo‘nalishdagi Beginner darajasi butunlay yangi boshlovchilar uchun — 14 yoshdan, tajribasiz. Qaysi yo‘nalish va daraja sizga mosligiga ishonchingiz komil bo‘lmasa, sahifa boshidagi qisqa AI-testdan o‘ting.",
      q2:"Darhol Intermediate yoki Advanced‘dan boshlasa bo‘ladimi?",
      a2:"Yo‘q, darajalar ketma-ket o‘tiladi: Intermediate — Beginner‘ni tugatgandan keyin, Advanced — Intermediate‘dan keyin. Shunday qilib guruhning darajasi bir xil bo‘ladi va amaliyot sifati saqlanadi.",
      q3:"Pullik vositalar yoki obunalar sotib olish kerakmi?",
      a3:"Yo‘q. Dasturda ishlatiladigan barcha vositalar va platformalar bepul tarifda, kartasiz ishlaydi — birinchi darsdan capstone-loyihagacha.",
      q4:"Bitta daraja qancha davom etadi?",
      a4:"Kamida 3 oy: 2 soatdan 15 ta dars, 12 kishigacha guruhlarda, darslar orasida amaliyot va oxirida capstone-loyiha bilan.",
      q5:"Daraja oxirida nima olaman?",
      a5:"O‘zingiz yig‘gan va taqdim etgan ishchi loyiha, shuningdek sertifikatlash testi — shunchaki davomat belgisi emas.",
      q6:"O‘qish qancha turadi va muddatli to‘lov bormi?",
      a6:"Oylik narxlar «Narxlar» bo‘limida ko‘rsatilgan. Aniq narx va muddatli to‘lov imkoniyati yo‘nalishingiz va darajangizga qarab bepul konsultatsiyada aniqlanadi.",
      q7:"Darslar qaysi tillarda o‘tadi?",
      a7:"Rus va o‘zbek tillarida — tilni sahifa yuqorisida almashtirishingiz mumkin.",
      q8:"Darslar qayerda o‘tadi va qanday yozilaman?",
      a8:"Toshkentda oflayn, Qorataosh massivida, «Korzinka» binosining 2-qavatida. Yozilish bepul konsultatsiyadan boshlanadi — quyidagi formada ariza qoldiring, biz bog‘lanamiz."
    },
    apply: {
      h2:"Ariza qoldirish", num:"07 — Ariza",
      name:"Ism", phone:"Telefon raqami", telegram:"Telegram (ixtiyoriy)", message:"Izoh (ixtiyoriy)",
      submit:"Arizani yuborish",
      hint:"Ariza to\u2018g\u2018ridan-to\u2018g\u2018ri bizning Telegramimizga keladi — odatda bir kun ichida javob beramiz.",
      sideLead:"Ariza qoldiring — biz o\u2018zimiz bog\u2018lanamiz.",
      note:"Ish kunlari davomida javob beramiz."
    },
    contact: { emailLabel:"Pochta", addressLabel:"Manzil", address:"Qorataosh massivi, 2-uy, Shayxontohur tumani, Toshkent («Korzinka» binosi, 2-qavat, «Samarqand Darvoza» ro\u2018parasida)" },
    cta: { h2:"Boshqacha fikrlashni hoziroq boshla.", btn:"Yuqoridagi arizani to\u2018ldiring ↑" },
    foot: { city:"Toshkent.", contact:"Ariza qoldirish", tagline:"Think Like Tomorrow · Sun\u2018iy intellekt davrida fikrlash akademiyasi", navTitle:"Navigatsiya", contactTitle:"Aloqa", address:"Toshkent, Shayxontohur t., Qorataosh massivi 2, «Korzinka» binosi 2-qavat" }
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
   APPLICATION FORM
   Submits directly to a Telegram supergroup via the Bot API.
   NOTE: this bot token lives in public client-side code (no
   backend on GitHub Pages) — anyone viewing page source can see
   it. Accepted trade-off per project decision. If this bot is
   ever misused, regenerate the token via @BotFather (/revoke)
   and drop the new one in here.
   ============================================================ */
const TG_BOT_TOKEN = '8888868988:AAHhObZu-32BQUH0xIzDDQe5igXorOLLHNk';
const TG_CHAT_ID = '-1004462776226';
const TG_ENDPOINT = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;

/* modern toast notification */
const toast = document.getElementById('toast');
const toastText = document.getElementById('toastText');
let toastTimer = null;

const TOAST_MESSAGES = {
  ru: { sent: 'Заявка отправлена — мы скоро свяжемся с вами', error: 'Не получилось отправить — попробуйте ещё раз' },
  uz: { sent: 'Ariza yuborildi — tez orada bog\u2018lanamiz', error: 'Yuborib bo\u2018lmadi — qayta urinib ko\u2018ring' }
};

function showToast(kind, isError) {
  if (!toast || !toastText) return;
  const lang = document.documentElement.lang || 'ru';
  const msgs = TOAST_MESSAGES[lang] || TOAST_MESSAGES.ru;
  toastText.textContent = isError ? msgs.error : msgs.sent;
  toast.classList.toggle('is-error', !!isError);
  toast.querySelector('.toast-icon').textContent = isError ? '!' : '✓';
  toast.classList.add('is-visible');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 4000);
}

/* hero background video — graceful fallback if it fails to load */
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.addEventListener('error', () => {
    heroVideo.style.display = 'none';
  });
}

/* phone input — force +998 prefix, digits only */
const phoneInput = document.getElementById('phoneInput');
if (phoneInput) {
  phoneInput.addEventListener('input', () => {
    let digits = phoneInput.value.replace(/\D/g, '');
    if (!digits.startsWith('998')) {
      digits = '998' + digits.replace(/^9?9?8?/, '');
    }
    digits = digits.slice(0, 12); // 998 + 9 local digits
    phoneInput.value = '+' + digits;
  });
  phoneInput.addEventListener('focus', () => {
    if (!phoneInput.value) phoneInput.value = '+998';
  });
}

const applyForm = document.getElementById('applyForm');
if (applyForm) {
  applyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(applyForm);
    const name = (data.get('name') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const telegram = (data.get('telegram') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    const lines = [
      '📩 Новая заявка — ThinkLike AI',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      telegram ? `Telegram: ${telegram}` : null,
      message ? `Комментарий: ${message}` : null
    ].filter(Boolean);

    const submitBtn = applyForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Отправляем…'; }
    applyForm.classList.remove('is-sent', 'is-error');

    try {
      const res = await fetch(TG_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TG_CHAT_ID,
          text: lines.join('\n')
        })
      });
      const result = await res.json();
      if (!res.ok || !result.ok) throw new Error('Request failed');

      applyForm.classList.add('is-sent');
      applyForm.reset();
      showToast('sent', false);
    } catch (err) {
      applyForm.classList.add('is-error');
      showToast('error', true);
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalBtnText; }
    }
  });
}

/* ============================================================
   AI-TEST QUIZ
   Client-side only: 3 questions → recommends a direction (automation
   / marketing) + level (beginner / intermediate / advanced) from
   real course content. No fake stats, just a routing tool.
   ============================================================ */
(function initQuiz() {
  const intro = document.getElementById('quizIntro');
  const body = document.getElementById('quizBody');
  const result = document.getElementById('quizResult');
  const startBtn = document.getElementById('quizStart');
  const restartBtn = document.getElementById('quizRestart');
  const stepEl = document.getElementById('quizStep');
  const qText = document.getElementById('quizQText');
  const qOptions = document.getElementById('quizOptions');
  const resTag = document.getElementById('quizResultTag');
  const resTitle = document.getElementById('quizResultTitle');
  const resDesc = document.getElementById('quizResultDesc');
  const resCta = document.getElementById('quizResultCta');
  if (!intro || !startBtn) return;

  const levelRank = { beginner: 1, intermediate: 2, advanced: 3 };
  let step = 0;
  let direction = null;
  let levelVotes = [];

  function currentLang() {
    return document.documentElement.lang && translations[document.documentElement.lang]
      ? document.documentElement.lang : 'ru';
  }

  function renderQuestion() {
    const dict = translations[currentLang()];
    const q = dict.quiz.questions[step];
    stepEl.textContent = String(step + 1);
    qText.textContent = q.text;
    qOptions.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => answer(opt.value));
      qOptions.appendChild(btn);
    });
  }

  function answer(value) {
    if (step === 0) {
      direction = value; // 'automation' | 'marketing'
    } else {
      levelVotes.push(value);
    }
    step++;
    if (step >= 3) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  function showResult() {
    const dict = translations[currentLang()];
    const level = levelVotes.reduce((best, v) => (levelRank[v] > levelRank[best] ? v : best), 'beginner');
    const key = `${direction}-${level}`;
    const r = dict.quiz.results[key];
    resTag.textContent = r.tag;
    resTitle.textContent = r.title;
    resDesc.textContent = r.desc;

    const dataProgram = `${direction === 'automation' ? 'Automation' : 'Marketing'}-${level.charAt(0).toUpperCase() + level.slice(1)}`;
    const targetCard = document.querySelector(`#pricing [data-program="${dataProgram}"]`);
    resCta.onclick = () => {
      if (targetCard) {
        setTimeout(() => {
          const card = targetCard.closest('.level');
          if (card) {
            card.style.outline = '2px solid var(--marker)';
            card.style.outlineOffset = '2px';
            setTimeout(() => { card.style.outline = ''; card.style.outlineOffset = ''; }, 2000);
          }
        }, 400);
      }
    };

    body.hidden = true;
    result.hidden = false;
  }

  startBtn.addEventListener('click', () => {
    step = 0; direction = null; levelVotes = [];
    intro.hidden = true;
    body.hidden = false;
    renderQuestion();
  });

  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      result.hidden = true;
      intro.hidden = false;
    });
  }
})();

/* ============================================================
   COURSE CATALOG FILTER TABS
   ============================================================ */
(function initFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  const directions = document.querySelectorAll('#programs .direction[data-track]');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const filter = tab.getAttribute('data-filter');
      directions.forEach(dir => {
        dir.style.display = (filter === 'all' || dir.getAttribute('data-track') === filter) ? '' : 'none';
      });
    });
  });
})();

/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
(function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
