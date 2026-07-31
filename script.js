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
    nav: { philosophy:"Философия", programs:"Курсы", pricing:"Цены", process:"Как проходит", contact:"Контакты", cta:"Оставить заявку" },
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
    formats: {
      h2:"Как проходит обучение", num:"03.5 — Форматы",
      f1h:"Офлайн в Ташкенте", f1p:"Занятия проходят очно, в аудитории — не запись, не самостоятельное прохождение видео.",
      f2h:"Небольшие группы", f2p:"До 12 человек в группе — у преподавателя есть время разобрать вопрос каждого.",
      f3h:"15 занятий по 2 часа", f3p:"Уровень идёт от 3 месяцев — без спешки, с практикой между занятиями.",
      f4h:"Капстоун + тест", f4p:"В конце уровня — свой рабочий проект и сертификационный тест, а не просто посещаемость."
    },
    prog: {
      h2:"Курсы", num:"03 — Программы",
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
      photoCredit:"Фото здания — Google Maps"
    },
    apply: {
      h2:"Оставить заявку", num:"06 — Заявка",
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
    nav: { philosophy:"Falsafa", programs:"Kurslar", pricing:"Narxlar", process:"Jarayon", contact:"Aloqa", cta:"Ariza qoldirish" },
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
    formats: {
      h2:"O\u2018qish qanday o\u2018tadi", num:"03.5 — Formatlar",
      f1h:"Toshkentda oflayn", f1p:"Darslar auditoriyada o\u2018tadi — video yozuv yoki mustaqil o\u2018rganish emas.",
      f2h:"Kichik guruhlar", f2p:"Guruhda 12 kishigacha — o\u2018qituvchida har birining savolini ko\u2018rib chiqishga vaqt bor.",
      f3h:"2 soatdan 15 ta dars", f3p:"Daraja kamida 3 oy davom etadi — shoshilmasdan, darslar orasida amaliyot bilan.",
      f4h:"Capstone + test", f4p:"Daraja oxirida — o\u2018z ishchi loyihangiz va sertifikatlash testi, shunchaki davomat emas."
    },
    prog: {
      h2:"Kurslar", num:"03 — Dasturlar",
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
      photoCredit:"Bino fotosi — Google Maps"
    },
    apply: {
      h2:"Ariza qoldirish", num:"06 — Ariza",
      name:"Ism", phone:"Telefon raqami", telegram:"Telegram (ixtiyoriy)", message:"Izoh (ixtiyoriy)",
      submit:"Arizani yuborish",
      hint:"Ariza to\u2018g\u2018ridan-to\u2018g\u2018ri bizning Telegramimizga keladi — odatda bir kun ichida javob beramiz.",
      sideLead:"Ariza qoldiring — biz o\u2018zimiz bog\u2018lanamiz.",
      note:"Ish kunlari davomida javob beramiz."
    },
    contact: { emailLabel:"Pochta", addressLabel:"Manzil", address:"Qorataosh massivi, 2-uy, Shayxontohur tumani, Toshkent («Korzinka» binosi, 2-qavat, «Samarqand Darvoza» ro\u2018parasida)" },
    cta: { h2:"Boshqacha fikrlashni hoziroq boshla.", btn:"Yuqoridagi arizani to\u2018ldiring ↑" },
    foot: { city:"Toshkent.", contact:"Ariza qoldirish", tagline:"Think Like Tomorrow · Sun\u2018iy intellekt davrida fikrlash akademiyasi", navTitle:"Navigatsiya", contactTitle:"Aloqa", address:"Toshkent, Shayxontohur t., Qorataosh massivi 2, «Korzinka» binosi 2-qavat" }
  },

  en: {
    nav: { philosophy:"Philosophy", programs:"Courses", pricing:"Pricing", process:"How it works", contact:"Contact", cta:"Apply now" },
    hero: {
      eyebrow:"Think Like Tomorrow · A thinking academy for the AI era · Tashkent",
      title:'We don\u2019t teach you to <mark>use AI</mark> We teach you to <mark>think</mark>',
      sub:"ThinkLike AI is an education project for people who want to stop fearing artificial intelligence and start working with it as an equal: setting tasks, asking questions, and building their own products.",
      ctaPrimary:"Enroll in a course", ctaGhost:"Our philosophy ↓",
      meta1:"directions · 6 levels", meta2:"languages taught", meta3:"fear of AI",
      word1:"why?", word2:"how?", word3:"what for?", word4:"what if?", word5:"what if not?"
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
    formats: {
      h2:"How the learning works", num:"03.5 — Formats",
      f1h:"In-person in Tashkent", f1p:"Classes happen face to face in the classroom — not pre-recorded, not self-paced video.",
      f2h:"Small groups", f2p:"Up to 12 people per group — the instructor has time to work through everyone's questions.",
      f3h:"15 lessons, 2 hours each", f3p:"Each level runs at least 3 months — no rush, with practice between sessions.",
      f4h:"Capstone + test", f4p:"Every level ends with your own working project and a certification test, not just attendance."
    },
    prog: {
      h2:"Courses", num:"03 — Programs",
      dir1Name:"AI for Automation", dir1Desc:"Zapier, Make, AI agents, MCP — from your first scenario to a production system.",
      a1Desc:"From zero — thinking in triggers and actions, your first working scenario in Zapier and Make, connecting AI to automation, your first AI chatbot.",
      a1Tools:"Zapier · Make · AI chatbots",
      a1Obj:"Think automation is only for programmers? It's all no-code here. Level outcome: a working AI automation you build and present yourself.",
      a1Who:"at least 3 months · 15 lessons · age 14+ · no experience needed",
      a2Desc:"Routers, webhooks, working with JSON, building a real AI agent with tools, the MCP protocol in practice.",
      a2Tools:"Webhooks · AI agents · MCP",
      a2Obj:"Think one level is already enough? This is where automation becomes a system — several tools and an agent working together.",
      a2Who:"at least 3 months · 15 lessons · after Beginner",
      a3Desc:"Your own code inside no-code (JavaScript, Python), autonomous agents on the Claude Agent SDK, your own MCP server, deploying an AI app to a live URL.",
      a3Tools:"Python/JS · Claude Agent SDK · Production deploy",
      a3Obj:"Think you need a CS degree for the next step? This isn't coding from scratch — it's taking an AI system to production, with documentation and launch.",
      a3Who:"at least 3 months · 15 lessons · after Intermediate",
      dir2Name:"AI for Marketing", dir2Desc:"From prompting to a full omnichannel AI marketing system.",
      m1Desc:"What AI actually gives a marketer, prompting, AI content for email/social/website, SEO and ad basics, AI chatbots for customers.",
      m1Tools:"Prompting · AI content · SEO basics",
      m1Obj:"Think AI marketing is just asking a chatbot for text? Here you build a process — from customer segmentation to a full plan you present in 10 minutes.",
      m1Who:"at least 3 months · 15 lessons · age 14+ · no experience needed",
      m2Desc:"Advanced prompting, technical SEO and structured data for AI search, email campaigns, AI agents for customer engagement.",
      m2Tools:"Technical SEO · Email campaigns · AI agents",
      m2Obj:"Think it's just more complex prompts? In practice it's already strategy and ROI measurement, not just text generation.",
      m2Who:"at least 3 months · 15 lessons · after Beginner",
      m3Desc:"Agentic systems for martech, AI risk management via the NIST AI RMF, international marketing, a full omnichannel AI system.",
      m3Tools:"MCP for martech · NIST AI RMF · Omnichannel systems",
      m3Obj:"Think this is the ceiling for a marketer without an AI background? Here you learn to run an entire AI marketing function — usually a whole team's job.",
      m3Who:"at least 3 months · 15 lessons · after Intermediate"
    },
    price: {
      h2:"Pricing", num:"04 — Plans",
      note:"Prices are per month of study (each level runs at least 3 months). Exact cost and installment options are confirmed at a free consultation.",
      currency:"UZS / mo",
      a1_1:"15 lessons, 2 hours each", a1_2:"Groups of up to 12", a1_3:"Capstone project + test",
      a2_1:"15 lessons, 2 hours each", a2_2:"Personal feedback on work", a2_3:"Multi-tool system",
      a3_1:"15 lessons, 2 hours each", a3_2:"Production case reviews", a3_3:"Deploying a finished system",
      m1_1:"15 lessons, 2 hours each", m1_2:"Groups of up to 12", m1_3:"Marketing plan + defense",
      m2_1:"15 lessons, 2 hours each", m2_2:"Personal feedback on work", m2_3:"Updated marketing plan",
      m3_1:"15 lessons, 2 hours each", m3_2:"Enterprise case reviews", m3_3:"Omnichannel system",
      cta:"Enroll"
    },
    proc: {
      h2:"How the course runs", num:"05 — Process",
      s1h:"Free consultation", s1p:"We walk you through the directions and levels and help you find the right starting point.",
      s2h:"Hands-on classes", s2p:"We work through tools and tasks in practice; every class comes with homework.",
      s3h:"Feedback", s3p:"A teacher personally reviews every piece of work and helps with the hard parts.",
      s4h:"Project and diploma", s4p:"The final project becomes part of your portfolio and is presented at the end of the course.",
      location:"Classes are held in person: Qorataosh massif, 2, Shaykhantahur district, Tashkent — 2nd floor of the \u201cKorzinka\u201d building, across from \u201cSamarkand Darvoza\u201d.",
      photoCredit:"Building photos — Google Maps"
    },
    apply: {
      h2:"Apply now", num:"06 — Application",
      name:"Name", phone:"Phone number", telegram:"Telegram (optional)", message:"Message (optional)",
      submit:"Send application",
      hint:"Your request goes straight to our Telegram — we usually reply within a day.",
      sideLead:"Leave a request — we\u2019ll reach out to you.",
      note:"We reply within a business day."
    },
    contact: { emailLabel:"Email", addressLabel:"Address", address:"Qorataosh massif, 2, Shaykhantahur district, Tashkent (2nd floor, \u201cKorzinka\u201d building, across from \u201cSamarkand Darvoza\u201d)" },
    cta: { h2:"Start thinking differently — this week.", btn:"Apply above ↑" },
    foot: { city:"Tashkent.", contact:"Apply now", tagline:"Think Like Tomorrow · An academy for thinking in the age of AI", navTitle:"Navigation", contactTitle:"Contact", address:"Tashkent, Shaykhantahur district, Qorataosh massif 2, 2nd floor of the Korzinka building" }
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
  uz: { sent: 'Ariza yuborildi — tez orada bog\u2018lanamiz', error: 'Yuborib bo\u2018lmadi — qayta urinib ko\u2018ring' },
  en: { sent: 'Application sent — we\u2019ll be in touch soon', error: 'Couldn\u2019t send it — please try again' }
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
