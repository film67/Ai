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
    nav: { test:"AI-тест", philosophy:"Философия", programs:"Курсы", pricing:"Цены", process:"Как проходит", faq:"Вопросы", contact:"Контакты", cta:"Оставить заявку", themeToDark:"Включить тёмную тему", themeToLight:"Включить светлую тему" },
    hero: {
      eyebrow:"Think Like Tomorrow · Академия мышления в эпоху ИИ · Ташкент",
      title:'<span class="plate">Мы не учим</span> <mark>пользоваться ИИ</mark> <span class="plate">Мы учим</span> <mark>мыслить</mark>',
      sub:"Офлайн-курсы в Ташкенте: автоматизация и маркетинг с ИИ. От первого сценария до системы, которая работает без вас. С нуля, на русском и узбекском.",
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
    manifesto: {
      text:"Инструменты меняются каждый сезон. Мышление, которое умеет с ними работать, — нет."
    },
    about: {
      h2:"Кто такой выпускник ThinkLike AI", num:"02 — О нас",
      lead:"Мы создаём не курс, а культуру мышления — с собственной методологией, стандартами и кодексом для учеников и преподавателей.",
      b1:"Проверяет за ИИ", d1:". Видит, где модель придумала факт, и не несёт это клиенту.",
      b2:"Не привязан к одному сервису", d2:". Если Zapier закроется, соберёт то же самое в другом.",
      b3:"Доводит до конца", d3:". У него есть работающая вещь, а не папка начатых.",
      b4:"Считает результат", d4:". Знает, сколько времени или денег сэкономила его система."
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
      a1Desc:"Научитесь поручать рутину программам: заявка с сайта сама попадает в таблицу, клиенту уходит ответ, вам приходит уведомление. Соберёте это в Zapier и Make без единой строчки кода и сделаете своего первого чат-бота.",
      a1Tools:"Zapier · Make · AI-чат-боты",
      a1Obj:"«У меня нет технического образования». Здесь оно и не нужно: ни одной строчки кода за весь уровень. Если вы умеете завести таблицу и написать письмо — этого достаточно.",
      a1Who:"от 3 месяцев · 15 занятий · от 14 лет · без опыта",
      a2Desc:"Отдельные сценарии превращаются в систему. Соберёте ИИ-помощника, который сам решает, что делать дальше: проверить базу, написать письмо, позвать человека. Разберётесь, как программы обмениваются данными между собой.",
      a2Tools:"Webhooks · AI-агенты · MCP",
      a2Obj:"«Базы мне хватит». Хватит, пока сценариев три. Когда их станет пятнадцать и они начнут мешать друг другу, придётся либо разбираться самому, либо платить тому, кто разберётся.",
      a2Who:"от 3 месяцев · 15 занятий · после Beginner",
      a3Desc:"Доведёте свою систему до состояния, когда ей можно пользоваться всерьёз: она живёт по своему адресу в интернете, работает без вашего присмотра и не падает от нагрузки. Там, где готовых блоков не хватает, допишете код сами.",
      a3Tools:"Python/JS · Claude Agent SDK · Деплой в прод",
      a3Obj:"«Это дорого». Здесь вы не заказываете систему у подрядчика, а собираете её сами — и остаётесь с умением собрать следующую без чужой помощи.",
      a3Who:"от 3 месяцев · 15 занятий · после Intermediate",
      dir2Name:"ИИ для маркетинга", dir2Desc:"От промптинга до полной омниканальной AI-маркетинговой системы.",
      m1Desc:"Перестанете просить у чат-бота «напиши пост» и начнёте получать то, что нужно с первого раза. Научитесь готовить контент для соцсетей, рассылок и сайта, разберётесь, как люди находят вас в поиске.",
      m1Tools:"Промптинг · AI-контент · SEO основы",
      m1Obj:"«Я уже пользуюсь ChatGPT». Пользоваться и получать нужный результат — разное. Здесь вы уйдёте с планом продвижения для своего проекта, а не с папкой текстов, которые никуда не идут.",
      m1Who:"от 3 месяцев · 15 занятий · от 14 лет · без опыта",
      m2Desc:"Научитесь считать, а не угадывать: какая рассылка принесла деньги, какой канал тратит впустую. Настроите сайт так, чтобы вас находил не только Google, но и ИИ-поисковики, которыми уже пользуются ваши клиенты.",
      m2Tools:"Техническое SEO · Email-кампании · AI-агенты",
      m2Obj:"«Через полгода всё устареет». Инструменты — да. Умение понять, что именно принесло деньги, и повторить это — нет. Мы учим второму, инструменты меняем по ходу.",
      m2Who:"от 3 месяцев · 15 занятий · после Beginner",
      m3Desc:"Соберёте маркетинг, где все каналы работают согласованно: ИИ ведёт клиента от первого касания до покупки, а вы контролируете риски — от неточных данных до репутации бренда.",
      m3Tools:"MCP для martech · NIST AI RMF · Омниканальные системы",
      m3Obj:"«У меня нет технической команды». После этого уровня она и не понадобится: вы сами соберёте систему и сами будете ей управлять.",
      m3Who:"от 3 месяцев · 15 занятий · после Intermediate"
    },
    price: {
      h2:"Цены", num:"04 — Тарифы",
      note:"Цены указаны за месяц. Уровень идёт от 3 месяцев — итоговую сумму и рассрочку считаем на бесплатной консультации, под ваш уровень и направление.",
      currency:"сум / месяц",
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
      a2:"Уровни идут подряд, потому что на Intermediate мы с первого занятия работаем на том, что собрано на Beginner. Если у вас уже есть опыт — скажите на консультации, посмотрим вашу работу и решим, откуда начать.",
      q3:"Нужно ли покупать платные инструменты или подписки?",
      a3:"Нет. Все инструменты и платформы, которые используются в программе, доступны на бесплатных тарифах без привязки карты — от первого занятия до капстоун-проекта.",
      q4:"Сколько длится один уровень?",
      a4:"От 3 месяцев: 15 занятий по 2 часа, в группах до 12 человек, с практикой между занятиями и капстоун-проектом в конце.",
      q5:"Что я получаю по итогам уровня?",
      a5:"Рабочий проект, который вы соберёте и представите сами, плюс сертификационный тест — а не просто отметку о посещаемости.",
      q6:"Сколько стоит обучение и есть ли рассрочка?",
      a6:"В разделе «Цены» указана стоимость месяца обучения. Уровень идёт от 3 месяцев, поэтому итоговую сумму считаем вместе на бесплатной консультации — там же обсуждаем рассрочку.",
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
    nav: { test:"AI-test", philosophy:"Falsafa", programs:"Kurslar", pricing:"Narxlar", process:"Jarayon", faq:"Savollar", contact:"Aloqa", cta:"Ariza qoldirish", themeToDark:"Tungi rejimni yoqish", themeToLight:"Kunduzgi rejimni yoqish" },
    hero: {
      eyebrow:"Think Like Tomorrow · Sun'iy intellekt davrida fikrlash akademiyasi · Toshkent",
      title:'<span class="plate">Biz</span> <mark>sun\u2018iy intellektdan foydalanishni</mark> <span class="plate">emas,</span> <mark>fikrlashni</mark> <span class="plate">o\u2018rgatamiz</span>',
      sub:"Toshkentda oflayn kurslar: AI bilan avtomatlashtirish va marketing. Birinchi ssenariydan sizsiz ishlaydigan tizimgacha. Noldan, rus va o\u2018zbek tillarida.",
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
    manifesto: {
      text:"Vositalar har mavsum o\u2018zgaradi. Ular bilan ishlashni biladigan fikrlash — o\u2018zgarmaydi."
    },
    about: {
      h2:"ThinkLike AI bitiruvchisi kim", num:"02 — Biz haqimizda",
      lead:"Biz shunchaki kurs emas, balki fikrlash madaniyatini yaratamiz — o\u2018z metodologiyamiz, standartlarimiz va o\u2018quvchi/o\u2018qituvchi kodeksi bilan.",
      b1:"AI\u2018dan keyin tekshiradi", d1:". Model qayerda fakt o\u2018ylab topganini ko\u2018radi va uni mijozga olib bormaydi.",
      b2:"Bitta xizmatga bog\u2018lanmagan", d2:". Zapier yopilsa, xuddi shuni boshqasida yig\u2018adi.",
      b3:"Oxiriga yetkazadi", d3:". Uning boshlangan ishlar papkasi emas, ishlaydigan narsasi bor.",
      b4:"Natijani hisoblaydi", d4:". Tizimi qancha vaqt yoki pul tejaganini biladi."
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
      a1Desc:"Kundalik ishlarni dasturlarga topshirishni o\u2018rganasiz: saytdan kelgan ariza o\u2018zi jadvalga tushadi, mijozga javob ketadi, sizga bildirishnoma keladi. Buni Zapier va Make'da bitta ham kod yozmasdan yig\u2018asiz va birinchi chatbotingizni yaratasiz.",
      a1Tools:"Zapier · Make · AI-chatbotlar",
      a1Obj:"«Menda texnik ma'lumot yo\u2018q». Bu yerda u kerak emas: butun daraja davomida bitta ham kod yozilmaydi. Jadval yuritishni va xat yozishni bilsangiz — yetarli.",
      a1Who:"kamida 3 oy · 15 dars · 14 yoshdan · tajribasiz",
      a2Desc:"Alohida ssenariylar tizimga aylanadi. O\u2018zi keyingi qadamni tanlaydigan AI-yordamchi yig\u2018asiz: bazani tekshirish, xat yozish, odamni chaqirish. Dasturlar bir-biri bilan ma'lumot almashishini tushunasiz.",
      a2Tools:"Webhooklar · AI-agentlar · MCP",
      a2Obj:"«Menga asos yetadi». Ssenariy uchta bo\u2018lguncha yetadi. Ular o\u2018n beshta bo\u2018lib, bir-biriga xalaqit bera boshlaganda — yo o\u2018zingiz tushunasiz, yo tushunadigan odamga pul to\u2018laysiz.",
      a2Who:"kamida 3 oy · 15 dars · Beginner'dan keyin",
      a3Desc:"Tizimingizni jiddiy foydalanish mumkin bo\u2018lgan holatga yetkazasiz: u internetda o\u2018z manzilida yashaydi, sizsiz ishlaydi va yuklamadan yiqilmaydi. Tayyor bloklar yetmagan joyda kodni o\u2018zingiz yozasiz.",
      a3Tools:"Python/JS · Claude Agent SDK · Production'ga joylash",
      a3Obj:"«Bu qimmat». Bu yerda siz tizimni pudratchiga buyurtma qilmaysiz, o\u2018zingiz yig\u2018asiz — va keyingisini birovsiz yig\u2018a olish ko\u2018nikmasi bilan qolasiz.",
      a3Who:"kamida 3 oy · 15 dars · Intermediate'dan keyin",
      dir2Name:"SI marketing uchun", dir2Desc:"Promptingdan to to\u2018liq ko\u2018p kanalli AI-marketing tizimigacha.",
      m1Desc:"Chatbotdan «post yozib ber» deb so\u2018rashni bas qilasiz va birinchi urinishdayoq kerakli natijani olasiz. Ijtimoiy tarmoq, xat yuborish va sayt uchun kontent tayyorlashni o\u2018rganasiz, odamlar sizni qidiruvda qanday topishini tushunasiz.",
      m1Tools:"Prompting · AI-kontent · SEO asoslari",
      m1Obj:"«Men allaqachon ChatGPT'dan foydalanaman». Foydalanish va kerakli natijani olish — boshqa-boshqa narsa. Bu yerdan hech qayerga ketmaydigan matnlar papkasi bilan emas, o\u2018z loyihangiz uchun targ\u2018ibot rejasi bilan chiqasiz.",
      m1Who:"kamida 3 oy · 15 dars · 14 yoshdan · tajribasiz",
      m2Desc:"Taxmin qilishni emas, hisoblashni o\u2018rganasiz: qaysi xat yuborish pul keltirdi, qaysi kanal behuda sarflaydi. Saytni shunday sozlaysizki, sizni faqat Google emas, mijozlaringiz allaqachon foydalanayotgan AI-qidiruvlar ham topsin.",
      m2Tools:"Texnik SEO · Email-kampaniyalar · AI-agentlar",
      m2Obj:"«Yarim yildan keyin hammasi eskiradi». Vositalar — ha. Aynan nima pul keltirganini tushunish va uni takrorlash ko\u2018nikmasi — yo\u2018q. Biz ikkinchisini o\u2018rgatamiz, vositalarni yo\u2018l-yo\u2018lakay yangilaymiz.",
      m2Who:"kamida 3 oy · 15 dars · Beginner'dan keyin",
      m3Desc:"Barcha kanallar birgalikda ishlaydigan marketing yig\u2018asiz: AI mijozni birinchi aloqadan xaridgacha olib boradi, siz esa xatarlarni nazorat qilasiz — noto\u2018g\u2018ri ma'lumotdan brend obro\u2018sigacha.",
      m3Tools:"Martech uchun MCP · NIST AI RMF · Ko\u2018p kanalli tizimlar",
      m3Obj:"«Menda texnik jamoa yo\u2018q». Bu darajadan keyin u kerak ham bo\u2018lmaydi: tizimni o\u2018zingiz yig\u2018asiz va o\u2018zingiz boshqarasiz.",
      m3Who:"kamida 3 oy · 15 dars · Intermediate'dan keyin"
    },
    price: {
      h2:"Narxlar", num:"04 — Tariflar",
      note:"Narxlar bir oy uchun ko\u2018rsatilgan. Daraja kamida 3 oy davom etadi — yakuniy summa va muddatli to\u2018lovni bepul konsultatsiyada, yo\u2018nalish va darajangizga qarab hisoblaymiz.",
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
      a2:"Darajalar ketma-ket boradi, chunki Intermediate'da birinchi darsdanoq Beginner'da yig‘ilgan narsa ustida ishlaymiz. Tajribangiz bo‘lsa — konsultatsiyada ayting, ishingizni ko‘rib, qayerdan boshlashni hal qilamiz.",
      q3:"Pullik vositalar yoki obunalar sotib olish kerakmi?",
      a3:"Yo‘q. Dasturda ishlatiladigan barcha vositalar va platformalar bepul tarifda, kartasiz ishlaydi — birinchi darsdan capstone-loyihagacha.",
      q4:"Bitta daraja qancha davom etadi?",
      a4:"Kamida 3 oy: 2 soatdan 15 ta dars, 12 kishigacha guruhlarda, darslar orasida amaliyot va oxirida capstone-loyiha bilan.",
      q5:"Daraja oxirida nima olaman?",
      a5:"O‘zingiz yig‘gan va taqdim etgan ishchi loyiha, shuningdek sertifikatlash testi — shunchaki davomat belgisi emas.",
      q6:"O‘qish qancha turadi va muddatli to‘lov bormi?",
      a6:"«Narxlar» bo‘limida bir oylik o‘qish narxi ko‘rsatilgan. Daraja kamida 3 oy davom etadi, shuning uchun yakuniy summani bepul konsultatsiyada birga hisoblaymiz — muddatli to‘lovni ham o‘sha yerda kelishamiz.",
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
  ru: {
    sent: 'Заявка отправлена — мы скоро свяжемся с вами',
    error: 'Не получилось отправить — попробуйте ещё раз',
    warning: 'Заполните обязательные поля, отмеченные красным'
  },
  uz: {
    sent: 'Ariza yuborildi — tez orada bog\u2018lanamiz',
    error: 'Yuborib bo\u2018lmadi — qayta urinib ko\u2018ring',
    warning: 'Qizil bilan belgilangan majburiy maydonlarni to\u2018ldiring'
  }
};

function showToast(kind, isError) {
  if (!toast || !toastText) return;
  const lang = document.documentElement.lang || 'ru';
  const msgs = TOAST_MESSAGES[lang] || TOAST_MESSAGES.ru;
  toastText.textContent = msgs[kind] || (isError ? msgs.error : msgs.sent);
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

/* ============================================================
   ФОРМА ЗАЯВКИ — валидация обязательных полей.
   Общие для блюра-в-реальном-времени и для проверки при отправке:
   если что-то не заполнено (или заполнено неверно), поле подсвечивается,
   под ним появляется текст-подсказка, форма НЕ отправляется, и
   показывается предупреждающий тост со ссылкой на первое проблемное поле.
   ============================================================ */
const FORM_MESSAGES = {
  ru: {
    name: 'Впишите имя — так мы поймём, как к вам обращаться.',
    phone: 'Номер в формате +998 и 9 цифр.',
    warning: 'Заполните обязательные поля, отмеченные красным'
  },
  uz: {
    name: 'Ismingizni yozing — sizga qanday murojaat qilishni bilamiz.',
    phone: 'Raqam +998 va 9 ta raqam ko‘rinishida.',
    warning: 'Qizil bilan belgilangan majburiy maydonlarni to‘ldiring'
  }
};
function formMsg() {
  const lang = document.documentElement.lang === 'uz' ? 'uz' : 'ru';
  return FORM_MESSAGES[lang] || FORM_MESSAGES.ru;
}
function showFieldError(input, text) {
  input.classList.add('is-invalid');
  input.setAttribute('aria-invalid', 'true');
  let note = input.parentElement.querySelector('.field-error');
  if (!note) {
    note = document.createElement('span');
    note.className = 'field-error';
    input.parentElement.appendChild(note);
  }
  note.textContent = text;
}
function clearFieldError(input) {
  input.classList.remove('is-invalid');
  input.removeAttribute('aria-invalid');
  const note = input.parentElement.querySelector('.field-error');
  if (note) note.remove();
}
/* проверяет одно обязательное поле; возвращает true если валидно */
function validateField(input) {
  if (!input.required) return true;
  const value = input.value.trim();
  if (input.name === 'name') {
    if (!value) { showFieldError(input, formMsg().name); return false; }
  }
  if (input.name === 'phone') {
    if (!/^\+998\d{9}$/.test(value)) { showFieldError(input, formMsg().phone); return false; }
  }
  clearFieldError(input);
  return true;
}

const applyForm = document.getElementById('applyForm');
if (applyForm) {
  applyForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => clearFieldError(input));
    input.addEventListener('blur', () => validateField(input));
  });

  applyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // проверяем все обязательные поля перед отправкой — если что-то
    // не заполнено (или заполнено неверно), останавливаем отправку
    const requiredFields = Array.from(applyForm.querySelectorAll('[required]'));
    let firstInvalid = null;
    requiredFields.forEach(input => {
      const ok = validateField(input);
      if (!ok && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      showToast('warning', true);
      return;
    }

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
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Отправляем…'; submitBtn.classList.add('is-busy'); }
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
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalBtnText; submitBtn.classList.remove('is-busy'); }
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
     09 — Форма: валидация обязательных полей, индикатор
     отправки и предупреждения — см. FORM_MESSAGES /
     validateField рядом с applyForm выше по файлу.
     -------------------------------------------------------- */

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

/* ============================================================
   ВСПЛЫТИЕ БЛОКОВ ПРИ СКРОЛЛЕ
   Помечает содержательные блоки и поднимает их по очереди.
   ============================================================ */
(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Hero: появляется сразу при загрузке, сверху вниз --- */
  const heroParts = [
    '.hero .eyebrow',
    '.hero h1',
    '.hero-sub',
    '.hero-prompt',
    '.hero-row',
    '.hero-meta'
  ];
  heroParts.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    el.style.setProperty('--i', i);
    el.classList.add('hero-in');
  });

  /* --- Остальная страница: всплытие при попадании в экран --- */
  const blocks = [
    '.section-head',
    '.card',
    '.icon-card',
    '.level',
    '.step',
    '.faq-item',
    '.direction-head',
    '.split > *',
    '.quiz-card',
    '.price-note',
    '.location-card',
    '.filter-tabs',
    '#manifesto blockquote',
    '#manifesto .quote-mark',
    '.cta',
    '.apply-form',
    '.apply-side',
    '.foot-grid > *'
  ];

  const targets = [];
  blocks.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (el.closest('.hero')) return;      // hero уже анимирован
      if (targets.includes(el)) return;
      targets.push(el);
    });
  });

  // индекс внутри своей группы — для появления по очереди, а не разом
  const seen = new Map();
  targets.forEach(el => {
    const parent = el.parentElement;
    const n = seen.get(parent) || 0;
    el.style.setProperty('--i', Math.min(n, 6));
    seen.set(parent, n + 1);
    el.classList.add('rise');
  });

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-up'));
    return;
  }

  const riser = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-up');
      riser.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(el => riser.observe(el));

  // страховка: то, что уже в экране на момент загрузки
  requestAnimationFrame(() => {
    targets.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) el.classList.add('is-up');
    });
  });
})();

/* Страховка: если что-то помешало анимации появления,
   через 1.2 c весь контент принудительно показывается. */
setTimeout(function () {
  document.documentElement.classList.add('rise-fallback');
}, 1200);

/* ============================================================
   ТЁМНАЯ ТЕМА — переключатель + синхронизация с темой браузера
   Светлая тема остаётся тем, чем была; тёмная — data-theme="dark"
   на <html>, переопределения цветов лежат в style.css.
   Тема ставится синхронно в <head> (см. index.html) — там же
   решается, откуда её брать: сохранённый ручной выбор или
   системная тема браузера (prefers-color-scheme).

   Пока пользователь ни разу не нажал переключатель вручную —
   сайт следует за темой браузера/ОС и меняется вместе с ней
   "на лету" (слушаем matchMedia). Как только человек нажал
   переключатель — с этого момента используется его выбор,
   и он больше не перетирается системной темой.
   ============================================================ */
(function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = toggle ? toggle.querySelector('.theme-toggle-icon') : null;
  if (!toggle) return;

  const media = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function currentLang() {
    return translations[root.lang] ? root.lang : 'ru';
  }

  function labelFor(theme) {
    const dict = translations[currentLang()];
    return theme === 'dark' ? dict.nav.themeToLight : dict.nav.themeToDark;
  }

  // persist:true — ручное переключение (сохраняем и больше не следим за системой)
  // persist:false — автоприменение системной темы (не трогаем localStorage)
  function applyTheme(theme, persist) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');

    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.setAttribute('aria-label', labelFor(theme));
    if (icon) icon.textContent = theme === 'dark' ? '☀' : '☾';

    if (persist) {
      try { localStorage.setItem('thinklike-theme-manual', theme); } catch (e) { /* ignore */ }
    }
  }

  // старый ключ 'thinklike-theme' писался при каждой загрузке страницы ещё
  // до этого изменения — у всех, кто уже открывал сайт, он бы ошибочно
  // читался как "пользователь выбрал тему сам". Забываем его.
  try { localStorage.removeItem('thinklike-theme'); } catch (e) { /* ignore */ }

  let saved;
  try { saved = localStorage.getItem('thinklike-theme-manual'); } catch (e) { saved = null; }
  const hasManualChoice = saved === 'dark' || saved === 'light';
  applyTheme(hasManualChoice ? saved : ((media && media.matches) ? 'dark' : 'light'), false);

  // тема браузера сменилась (например, ОС переключилась по расписанию) —
  // подхватываем это на лету, но только пока человек не выбрал тему сам
  if (media) {
    const onSystemChange = (e) => {
      let stillAuto;
      try { stillAuto = !localStorage.getItem('thinklike-theme-manual'); } catch (err) { stillAuto = true; }
      if (stillAuto) applyTheme(e.matches ? 'dark' : 'light', false);
    };
    if (media.addEventListener) media.addEventListener('change', onSystemChange);
    else if (media.addListener) media.addListener(onSystemChange); // старые Safari
  }

  toggle.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
  });

  // после смены языка подпись кнопки должна пересчитаться на новом языке
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', false);
    });
  });
})();

/* ============================================================
   ЛОГОТИП — клик прокручивает наверх страницы
   ============================================================ */
(function initLogoScroll() {
  const logo = document.getElementById('logoLink');
  if (!logo) return;
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', window.location.pathname + window.location.search);
  });
})();
