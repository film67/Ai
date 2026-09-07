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
    nav: { test:"AI-тест", philosophy:"Философия", programs:"Курсы", pricing:"Цены", process:"Процесс обучения", faq:"Вопросы", contact:"Контакты", contactBtn:"Контакт", cta:"Оставить заявку", themeToDark:"Включить тёмную тему", themeToLight:"Включить светлую тему" },
    hero: {
      eyebrow:"Think Like Tomorrow · Академия мышления в эпоху ИИ · Ташкент",
      title:'<span class="plate">Мы не учим</span> <mark>пользоваться ИИ</mark> <span class="plate">Мы учим</span> <mark>мыслить</mark>',
      sub:"Офлайн-курсы в Ташкенте: автоматизация и маркетинг с ИИ. От первого сценария до системы, которая работает без вас. С нуля, на русском и узбекском.",
      ctaPrimary:"Записаться на курс", ctaGhost:"Наша философия ↓",
      meta1:"направления · 9 уровней", meta2:"языки преподавания", meta3:"страха перед ИИ",
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
          {label:"Вайб-кодинг: свои приложения с ИИ", value:"vibecoding"},
          {label:"Автоматизация: рутину делают роботы", value:"automation"},
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
        "vibecoding-beginner":{tag:"Vibe Coding · Beginner", title:"Вам подходит: Вайб-кодинг, уровень Beginner", desc:"Replit, Lovable и первое приложение без единой строчки кода. Идеально, если вы никогда не программировали."},
        "vibecoding-intermediate":{tag:"Vibe Coding · Intermediate", title:"Вам подходит: Вайб-кодинг, уровень Intermediate", desc:"Claude Code, база данных и реальные платежи — для тех, кто уже собрал свой первый прототип."},
        "vibecoding-advanced":{tag:"Vibe Coding · Advanced", title:"Вам подходит: Вайб-кодинг, уровень Advanced", desc:"CI/CD, мульти-агентные системы и запуск SaaS — для тех, кто готов довести продукт до реальных пользователей."},
        "automation-beginner":{tag:"Automation · Beginner", title:"Вам подходит: ИИ для автоматизации, уровень Beginner", desc:"Make.com и Telegram-бот, который отвечает клиентам сам. Без кода — если умеете пользоваться таблицами, справитесь."},
        "automation-intermediate":{tag:"Automation · Intermediate", title:"Вам подходит: ИИ для автоматизации, уровень Intermediate", desc:"Вебхуки, AI-агенты и оплата через Click или Payme — для тех, у кого первые сценарии уже работают."},
        "automation-advanced":{tag:"Automation · Advanced", title:"Вам подходит: ИИ для автоматизации, уровень Advanced", desc:"Flowise, n8n и омниканальная система с автоотчётами — для тех, кому нужна система уровня агентства без агентства."},
        "marketing-beginner":{tag:"Marketing · Beginner", title:"Вам подходит: ИИ для маркетинга, уровень Beginner", desc:"Промптинг, AI-контент и основы SEO — если вы делаете первые шаги в AI-маркетинге."},
        "marketing-intermediate":{tag:"Marketing · Intermediate", title:"Вам подходит: ИИ для маркетинга, уровень Intermediate", desc:"Техническое SEO, email-кампании и AI-агенты — для тех, кто уже строит маркетинг-процессы."},
        "marketing-advanced":{tag:"Marketing · Advanced", title:"Вам подходит: ИИ для маркетинга, уровень Advanced", desc:"Агентные системы, NIST AI RMF и омниканальные стратегии — для опытных маркетологов."}
      }
    },
    formats: {
      h2:"Как проходит обучение", num:"03.5 — Форматы",
      f1h:"Офлайн в Ташкенте", f1p:"Занятия проходят очно, в аудитории — не запись, не самостоятельное прохождение видео.",
      f2h:"Небольшие группы", f2p:"До 20 человек в группе — у преподавателя есть время разобрать вопрос каждого.",
      f3h:"15 занятий по 2 часа", f3p:"Уровень — это 15 занятий, между ними практика, а в конце капстоун-проект.",
      f4h:"Капстоун + тест", f4p:"В конце уровня — свой рабочий проект и сертификационный тест, а не просто посещаемость."
    },
    prog: {
      h2:"Курсы", num:"03 — Программы",
      filterAll:"Все", filterAuto:"Вайб-кодинг", filterMkt:"Маркетинг",
      dir1Name:"Вайб-кодинг", dir1Desc:"Replit, Cursor, Claude Code — свой продукт: от идеи словами до запущенного SaaS. Код пишет ИИ, вы ставите задачу и защищаете результат.",
      a1Desc:"Соберёте своё первое веб-приложение, ни разу не написав код: опишете идею словами — ИИ соберёт рабочую страницу в Replit или Lovable. Подключите базу данных, чтобы форма реально сохраняла заявки, и опубликуете сайт по живой ссылке.",
      a1Tools:"Replit · Lovable · Bolt",
      a1Obj:"«Я никогда не программировал(а)». Здесь и не придётся: весь уровень — это разговор с ИИ на обычном языке. Если можете объяснить идею другу — этого достаточно, чтобы получить рабочее приложение.",
      a1Who:"15 занятий по 2 часа · от 14 лет · без опыта",
      a2Desc:"Перейдёте от учебных прототипов к настоящим продуктам: освоите Claude Code и Cursor в режиме агента, спроектируете базу данных с несколькими связанными таблицами и подключите реальную оплату — Click.uz или Payme. Разберётесь с Git, как в настоящей команде разработки.",
      a2Tools:"Cursor · Claude Code · Click / Payme / Eskiz",
      a2Obj:"«Мой прототип и так работает». Работает у вас на ноутбуке, в классе. Настоящий продукт должен пережить случайного пользователя со слабым интернетом и старым телефоном — этому и учит уровень.",
      a2Who:"15 занятий по 2 часа · после Beginner",
      a3Desc:"Запустите готовый SaaS-продукт: настроите CI/CD, чтобы изменения выкатывались без вашего участия, добавите подписку с реальной оплатой и доведёте систему до состояния, когда ей пользуются настоящие люди, а не только вы на демо.",
      a3Tools:"CI/CD · Security-аудит · SaaS-биллинг",
      a3Obj:"«Для этого нужна команда разработчиков». После этого уровня — не нужна: вы сами спроектируете архитектуру, задеплоите и будете обслуживать продукт в одиночку.",
      a3Who:"15 занятий по 2 часа · после Intermediate",
      dir2Name:"ИИ для маркетинга", dir2Desc:"От промптинга до полной омниканальной AI-маркетинговой системы.",
      m1Desc:"Перестанете просить у чат-бота «напиши пост» и начнёте получать то, что нужно с первого раза. Научитесь готовить контент для соцсетей, рассылок и сайта, разберётесь, как люди находят вас в поиске.",
      m1Tools:"Промптинг · AI-контент · SEO основы",
      m1Obj:"«Я уже пользуюсь ChatGPT». Пользоваться и получать нужный результат — разное. Здесь вы уйдёте с планом продвижения для своего проекта, а не с папкой текстов, которые никуда не идут.",
      m1Who:"15 занятий по 2 часа · от 14 лет · без опыта",
      m2Desc:"Научитесь считать, а не угадывать: какая рассылка принесла деньги, какой канал тратит впустую. Настроите сайт так, чтобы вас находил не только Google, но и ИИ-поисковики, которыми уже пользуются ваши клиенты.",
      m2Tools:"Техническое SEO · Email-кампании · AI-агенты",
      m2Obj:"«Через полгода всё устареет». Инструменты — да. Умение понять, что именно принесло деньги, и повторить это — нет. Мы учим второму, инструменты меняем по ходу.",
      m2Who:"15 занятий по 2 часа · после Beginner",
      m3Desc:"Соберёте маркетинг, где все каналы работают согласованно: ИИ ведёт клиента от первого касания до покупки, а вы контролируете риски — от неточных данных до репутации бренда.",
      m3Tools:"MCP для martech · NIST AI RMF · Омниканальные системы",
      m3Obj:"«У меня нет технической команды». После этого уровня она и не понадобится: вы сами соберёте систему и сами будете ей управлять.",
      m3Who:"15 занятий по 2 часа · после Intermediate",
      filterFlow:"Автоматизация",
      dir3Name:"ИИ для автоматизации",
      dir3Band:"занятий без кода",
      dir3Desc:"Make, n8n, Telegram-боты — рутину забирают роботы. Без единой строчки кода.",
      n1Short:"Первая связка без кода: клиент заполнил форму — данные в таблице, а вам уже пришло уведомление в Telegram. Плюс бот, отвечающий на частые вопросы.",
      n2Short:"Отдельные сценарии превращаются в систему: вебхуки, AI-агент по вашему каталогу и оплата через Click или Payme, которая запускает всё остальное.",
      n3Short:"Омниканальная система: Telegram, почта и Instagram в одном потоке, агент на Flowise с памятью и автоотчёт каждый понедельник.",
      n1Tools:"Make.com · Zapier · Telegram-боты",
      n2Tools:"Вебхуки · AI-агенты · Claude Desktop · Airtable",
      n3Tools:"Flowise · n8n · Airtable · Glide",
      n1Who:"15 занятий по 2 часа · от 14 лет · без опыта",
      n2Who:"15 занятий по 2 часа · после Beginner",
      n3Who:"15 занятий по 2 часа · после Intermediate",
      more:"Подробнее о курсе →",
      a1Short:"Первое приложение прямо в браузере: описываете идею словами — ИИ собирает рабочую страницу. База данных, вход по аккаунту и правила доступа. Устанавливать не нужно ничего.",
      a2Short:"Инструменты переезжают на ваш компьютер: Cursor и Claude Code, схемы базы, серверная логика, оплата Click и Payme с проверкой на сервере, роли, тесты и Git.",
      a3Short:"Запуск и защита: CI/CD с проверками безопасности, аудит собственного продукта глазами атакующего, подписки и биллинг — и продажа навыка как услуги.",
      m1Short:"Промптинг, который даёт нужный результат с первого раза: контент для соцсетей, рассылок и сайта плюс основы того, как вас находят в поиске.",
      m2Short:"Считать, а не угадывать: какой канал принёс деньги, а какой тратит впустую. Плюс сайт, который находят и Google, и ИИ-поисковики.",
      m3Short:"Маркетинг, где все каналы работают согласованно: ИИ ведёт клиента от первого касания до покупки, а вы держите риски под контролем."
    },
    price: {
      h2:"Цены", num:"04 — Тарифы",
      note:"Цены указаны за месяц обучения. Уровень — это 15 занятий по 2 часа; итоговую сумму и график оплаты считаем на бесплатной консультации, под ваш уровень и направление. Первое занятие на уровне Beginner — бесплатное.",
      currency:"сум / месяц",
      a1_1:"15 занятий по 2 часа", a1_2:"Группы до 20 человек", a1_3:"Капстоун-проект + тест",
      a2_1:"15 занятий по 2 часа", a2_2:"Личная проверка работ", a2_3:"Full-stack продукт с оплатой",
      a3_1:"15 занятий по 2 часа", a3_2:"Разбор production-кейсов", a3_3:"Запуск SaaS-продукта",
      m1_1:"15 занятий по 2 часа", m1_2:"Группы до 20 человек", m1_3:"Маркетинг-план + защита",
      m2_1:"15 занятий по 2 часа", m2_2:"Личная проверка работ", m2_3:"Обновлённый маркетинг-план",
      m3_1:"15 занятий по 2 часа", m3_2:"Разбор enterprise-кейсов", m3_3:"Омниканальная система",
      n1_1:"15 занятий по 2 часа", n1_2:"Группы до 20 человек", n1_3:"Рабочая автоматизация + тест",
      n2_1:"15 занятий по 2 часа", n2_2:"Личная проверка работ", n2_3:"AI-агент с оплатой",
      n3_1:"15 занятий по 2 часа", n3_2:"Разбор реальных систем", n3_3:"Омниканальная система",
      freeFirst:"1-е занятие бесплатно",
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
      a4:"Уровень — это 15 занятий по 2 часа, в группах до 20 человек, с практикой между занятиями и капстоун-проектом в конце. Обычно 2–3 занятия в неделю; точный график зависит от набора.",
      q5:"Что я получаю по итогам уровня?",
      a5:"Рабочий проект, который вы соберёте и представите сами, плюс сертификационный тест — а не просто отметку о посещаемости.",
      q6:"Сколько стоит обучение и есть ли рассрочка?",
      a6:"В разделе «Цены» указана стоимость месяца обучения. Уровень — это 15 занятий по 2 часа, поэтому итоговую сумму считаем вместе на бесплатной консультации — там же обсуждаем рассрочку. Первое занятие на уровне Beginner бесплатное: можно прийти и посмотреть до всякой оплаты.",
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
    contact: { telegramLabel:"Telegram", phoneLabel:"Телефон", emailLabel:"Почта", addressLabel:"Адрес", addressShort:"массив Караташ, 2 — 2 этаж «Korzinka», Ташкент", address:"массив Караташ, 2, Шайхантахурский р-н, Ташкент (2 этаж, здание «Korzinka», напротив «Самарканд Дарвоза»)" },
    cta: { h2:"Начни думать иначе — уже на этой неделе.", btn:"Оставить заявку выше ↑" },
    foot: { city:"Ташкент.", contact:"Оставить заявку", tagline:"Think Like Tomorrow · Академия мышления в эпоху ИИ", navTitle:"Навигация", contactTitle:"Контакты", legalTitle:"Документы", offer:"Публичная оферта", privacy:"Политика конфиденциальности", address:"Ташкент, Шайхантахурский р-н, массив Караташ 2, 2 этаж «Korzinka»" },

    tools: {
      h2:"Инструменты, с которыми работаем", num:"03.6 — Инструменты",
      d1:"От первого прототипа до продукта, который платит за себя.",
      d2:"От первого промпта до системы, которая ведёт клиента сама.",
      d3:"От первой связки двух приложений до системы, которая работает без вас.",
      tgBots:"Telegram-боты", webhooks:"Вебхуки", sheets:"Google Таблицы",
      db:"Базы данных", billing:"SaaS-биллинг", security:"Безопасность",
      prompting:"Промптинг", aiContent:"AI-контент", techSeo:"Техническое SEO",
      email:"Email-кампании", agents:"AI-агенты", omni:"Омниканальные системы",
      note:"Инструменты обновляются каждый набор: если завтра появится сервис, который делает то же самое лучше, вы разберётесь в нём за вечер — потому что понимаете, что именно он должен делать."
    },

    pay: {
      onlineTitle:"Онлайн-оплата",
      onlineDesc:"Переводом через привычные приложения — квитанция остаётся у вас в истории платежей.",
      cardTitle:"Картой и переводом",
      cardDesc:"Перевод на карту центра или оплата картой — реквизиты даём на консультации.",
      cashTitle:"Наличными в центре",
      cashBadge:"Наличные",
      cashDesc:"На месте, на Караташе — можно оплачивать помесячно, за каждый месяц уровня отдельно."
    },

    page: {
      home:"Главная", courses:"Курсы", back:"← На главную",
      ctaTitle:"Начните с бесплатной консультации",
      ctaText:"Разберём ваш уровень и цель, подберём направление и посчитаем итоговую сумму.",
      ctaBtn:"Оставить заявку",
      ctaTg:"Написать в Telegram",
      pricesLink:"Цены и рассрочка →",
      levelsTitle:"Уровни курса", levelsNum:"01 — Программа",
      toolsTitle:"Инструменты уровня", resultTitle:"Что будет на выходе", objectionTitle:"Частое сомнение"
    },

    au: {
      title:"ИИ для автоматизации: рутина без кода",
      lead:"Три уровня: от первой связки «форма → таблица → Telegram» до системы, которая ведёт клиентов сама, пока вы спите. Ни строчки кода — на русском и узбекском, офлайн в Ташкенте.",
      f1:"3 уровня · 45 занятий", f2:"15 занятий по 2 часа", f3:"группы до 20 человек", f4:"без кода, с нуля",
      l1Name:"Первая рабочая автоматизация",
      l1Desc:"Соберёте первую рабочую автоматизацию без кода: клиент заполняет форму — данные сами попадают в таблицу, а вам приходит уведомление в Telegram за десять секунд. Плюс собственный бот, который отвечает на вопросы о цене, доставке и адресе, пока вы заняты.",
      l1i1:"Make.com и Zapier: сценарий собирается мышкой, без единой строчки кода",
      l1i2:"Связка «форма → Google Таблица → Telegram» — самая нужная автоматизация для бизнеса в Узбекистане",
      l1i3:"Свой Telegram-бот через BotFather за пять минут",
      l1i4:"AI-шаг внутри сценария: бот сам пишет ответ клиенту",
      l1Obj:"«Я не программист». И не нужно: весь уровень — это перетаскивание блоков мышкой. Если умеете пользоваться Google Таблицами — этого достаточно.",
      l1Res:"Работающая автоматизация из 3+ шагов и Telegram-бот, отвечающий минимум на 3 типа вопросов + сертификационный тест уровня.",
      l2Name:"Система, а не отдельные сценарии",
      l2Desc:"Перейдёте от отдельных сценариев к системе, которая работает, даже когда вы болеете и не смотрите в телефон: вебхуки вместо ожидания, AI-агент, который сам понимает вопрос клиента и отвечает по вашему прайсу, и оплата через Click или Payme, запускающая всё остальное.",
      l2i1:"Вебхуки: Click.uz и Payme сообщают об оплате в ту же секунду",
      l2i2:"AI-агент, который читает вопрос и отвечает по вашему каталогу — на узбекском и русском",
      l2i3:"Claude Desktop и MCP: спрашиваете свои таблицы обычными словами",
      l2i4:"Airtable как база и передача сложных случаев живому человеку",
      l2Obj:"«У меня и так всё работает». Работает, пока вы смотрите. Этот уровень — про то, чтобы система пережила выходной, отпуск и сотню клиентов разом.",
      l2Res:"AI-агент с подключённым вебхуком оплаты, базой и передачей человеку + сертификационный тест уровня.",
      l3Name:"Омниканальная система на Flowise",
      l3Desc:"Соберёте систему, которая ведёт клиента сама: Telegram, почта и Instagram сходятся в один поток, AI-агент на Flowise помнит переписку и отвечает по вашей базе знаний, а утром в понедельник вам приходит готовый отчёт за неделю.",
      l3i1:"Flowise: AI-агент собирается перетаскиванием блоков, с памятью диалога",
      l3i2:"n8n для сложных сценариев — мощнее Make, по-прежнему без кода",
      l3i3:"Омниканальность: Telegram, почта и Instagram в одном потоке",
      l3i4:"Автоотчёт по понедельникам и что делать, когда система сломалась",
      l3Obj:"«Такое собирают агентства за большие деньги». После этого уровня вы собираете и обслуживаете это сами — и считаете, сколько часов в неделю оно вам вернуло.",
      l3Res:"Омниканальная система с AI-агентом, базой знаний и еженедельным автоотчётом + сертификационный тест уровня.",
      vsTitle:"Чем это отличается от вайб-кодинга",
      vsText:"Здесь вы связываете уже готовые сервисы, чтобы рутина шла сама, — без единой строчки кода. Если нужно не связать чужое, а построить собственный продукт с базой, оплатой и пользователями, — это соседнее направление.",
      vsLink:"Вайб-кодинг →"
    },
    vc: {
      title:"Вайб-кодинг: собрать продукт с ИИ и защитить его",
      lead:"Три уровня и 45 занятий: от первого приложения, собранного словами прямо в браузере, до запущенного SaaS с живыми пользователями и письменным отчётом по безопасности. Первое занятие — бесплатное и открыто для всех.",
      f1:"3 уровня · 45 занятий", f2:"2–3 занятия в неделю", f3:"группы до 20 человек", f4:"первое занятие бесплатно",
      freeBadge:"1-е занятие бесплатно",
      l1Name:"От нуля до живого и безопасного приложения",
      l1Desc:"Начинаем с того, что такое ИИ на самом деле и почему он вдруг умеет собирать программы. Дальше — первое приложение в браузере, многостраничный сайт по живой ссылке, база данных, вход по аккаунту и правила доступа. Весь уровень проходит в браузере: устанавливать не нужно ничего.",
      l1i1:"Промпт как техзадание: объяснить ИИ так, чтобы получилось то, что вы хотели",
      l1i2:"Replit, Lovable и Bolt — рабочий сайт по живой ссылке уже с третьего занятия",
      l1i3:"База данных за два занятия: форма, которая действительно сохраняет",
      l1i4:"Аккаунты, вход и правила доступа — кто что видит",
      l1i5:"Ключи и секреты: что никогда не должно лежать в коде",
      l1Obj:"«Я никогда не программировал(а)». Первое занятие бесплатное и открыто для всех — придите и проверьте. Весь уровень идёт в браузере: код пишет ИИ, вы объясняете, что нужно.",
      l1Res:"Опубликованное приложение: данные сохраняются, вход работает, правила доступа проверены на двух аккаунтах, секретов в коде нет.",
      l2Name:"Full-stack продукт, который переживёт живых пользователей",
      l2Desc:"Первый уровень, где инструменты появляются на вашем компьютере: Cursor и терминал — аккуратно, с нуля. Дальше схемы базы данных, серверная логика, реальные оплаты Click и Payme, SMS через Eskiz в песочнице, роли и права, тесты и Git, как в настоящей команде.",
      l2i1:"Cursor и Claude Code: агент работает с целым проектом, вы читаете diff",
      l2i2:"Спецификация и архитектура до промпта, а не после",
      l2i3:"Click, Payme и Eskiz в песочнице — с проверкой платежа на сервере, а не в браузере",
      l2i4:"Роли, права и чужие персональные данные",
      l2i5:"Тесты на код, который написал ИИ, — включая ваши правила безопасности",
      l2Obj:"«Мой прототип и так работает». Работает у вас в классе. Этот уровень — про то, чтобы всё, что касается денег и прав доступа, проверялось на сервере, и чтобы это доказывал автотест.",
      l2Res:"Full-stack продукт, где всё про деньги и доступ проверяется на сервере, и автотест, который это доказывает.",
      l3Name:"Запустить, защитить, продать",
      l3Desc:"Архитектура до промптов, несколько агентов в одной кодовой базе, CI/CD со встроенными проверками безопасности. Потом аудит собственного продукта глазами атакующего, устранение находок и письменный отчёт. И запуск: подписки, биллинг, мониторинг, план на инцидент — и продажа этого же навыка как услуги.",
      l3i1:"Мульти-агентная разработка и работа с кодом, который писали не вы",
      l3i2:"CI/CD с проверками безопасности прямо в пайплайне",
      l3i3:"Аудит своего продукта по чек-листу атакующего и письменный отчёт",
      l3i4:"Мульти-тенантный SaaS: подписки, биллинг и изоляция клиентов",
      l3i5:"Запуск, цены и продажа навыка: фриланс, агентство, свои клиенты",
      l3Obj:"«Для этого нужна команда». После этого уровня — не нужна: вы проектируете, деплоите, атакуете сами себя, чините и защищаете результат письменно.",
      l3Res:"Живой SaaS с реальными пользователями, письменный отчёт по безопасности, мониторинг и проверенное восстановление из бэкапа.",
      secTitle:"Безопасность — не модуль, а привычка",
      secNum:"02 — Безопасность",
      secLead:"ИИ пишет код быстро — и повторяет одни и те же уязвимости. Поэтому в каждом из 45 занятий есть строка «привычка безопасности», пять занятий посвящены ей целиком, и каждый капстоун оценивается в том числе по ней.",
      secL1:"Beginner 9 · Секреты и ключи", secR1:"Ничто, что вас опознаёт, не лежит в коде",
      secL2:"Beginner 11 · Правила доступа", secR2:"Экран входа — это ещё не защита",
      secL3:"Intermediate 10 · Безопасность денег", secR3:"Проверь каждый платёжный колбэк, прежде чем ему верить",
      secL4:"Advanced 6 · Мыслить как атакующий", secR4:"Проверь свой продукт по чек-листу атакующего",
      secL5:"Advanced 7 · Починить, укрепить, доказать", secR5:"Состязательное тестирование и письменный отчёт",
      vsTitle:"Чем это отличается от автоматизации",
      vsText:"Здесь вы строите собственный продукт: код пишет ИИ, а вы ставите задачу, проверяете и защищаете результат. Если нужно не строить своё, а связать уже готовые сервисы, чтобы рутина шла сама, — это соседнее направление.",
      vsLink:"ИИ для автоматизации →"
    },

    mk: {
      title:"ИИ для маркетинга: от промпта до системы",
      l1Name:"Контент, который работает", l2Name:"Маркетинг, который считается", l3Name:"Система, которая ведёт клиента",
      lead:"Три уровня: от контента, который получается с первого раза, до омниканальной системы, где ИИ ведёт клиента от первого касания до покупки. Офлайн в Ташкенте, на русском и узбекском.",
      f1:"3 уровня · 45 занятий", f2:"15 занятий по 2 часа", f3:"группы до 20 человек", f4:"от 14 лет, без опыта",
      l1Desc:"Перестанете просить у чат-бота «напиши пост» и начнёте получать то, что нужно с первого раза. Научитесь готовить контент для соцсетей, рассылок и сайта, разберётесь, как люди находят вас в поиске.",
      l1i1:"Промптинг, который даёт нужный результат, а не «ещё один текст»",
      l1i2:"Контент для соцсетей, рассылок и сайта — пачками, а не по одному",
      l1i3:"Основы SEO: почему вас находят или не находят в поиске",
      l1i4:"План продвижения для своего проекта, а не абстрактная теория",
      l1Obj:"«Я уже пользуюсь ChatGPT». Пользоваться и получать нужный результат — разное. Здесь вы уйдёте с планом продвижения для своего проекта, а не с папкой текстов, которые никуда не идут.",
      l1Res:"Готовый маркетинг-план вашего проекта с защитой перед группой + сертификационный тест уровня.",
      l2Desc:"Научитесь считать, а не угадывать: какая рассылка принесла деньги, какой канал тратит впустую. Настроите сайт так, чтобы вас находил не только Google, но и ИИ-поисковики, которыми уже пользуются ваши клиенты.",
      l2i1:"Аналитика: какой канал принёс деньги, а какой только тратил бюджет",
      l2i2:"Техническое SEO — и отдельно то, как вас видят ИИ-поисковики",
      l2i3:"Email-кампании, которые читают и по которым переходят",
      l2i4:"Первые AI-агенты в маркетинге: что им можно доверить, а что нет",
      l2Obj:"«Через полгода всё устареет». Инструменты — да. Умение понять, что именно принесло деньги, и повторить это — нет. Мы учим второму, инструменты меняем по ходу.",
      l2Res:"Обновлённый маркетинг-план с цифрами по каналам + сертификационный тест уровня.",
      l3Desc:"Соберёте маркетинг, где все каналы работают согласованно: ИИ ведёт клиента от первого касания до покупки, а вы контролируете риски — от неточных данных до репутации бренда.",
      l3i1:"Омниканальная система: соцсети, рассылки и сайт в одной логике",
      l3i2:"MCP для martech: ИИ работает с вашими реальными данными",
      l3i3:"Управление рисками по NIST AI RMF — что делать, когда ИИ ошибается",
      l3i4:"Разбор enterprise-кейсов: где такие системы ломаются на практике",
      l3Obj:"«У меня нет технической команды». После этого уровня она и не понадобится: вы сами соберёте систему и сами будете ей управлять.",
      l3Res:"Работающая омниканальная система с контролем рисков + сертификационный тест уровня."
    }
  },

  uz: {
    nav: { test:"AI-test", philosophy:"Falsafa", programs:"Kurslar", pricing:"Narxlar", process:"Jarayon", faq:"Savollar", contact:"Aloqa", contactBtn:"Aloqa", cta:"Ro‘yxatdan o‘tish", themeToDark:"Tungi rejimni yoqish", themeToLight:"Kunduzgi rejimni yoqish" },
    hero: {
      eyebrow:"Think Like Tomorrow · Sun'iy intellekt davrida fikrlash akademiyasi · Toshkent",
      title:'<span class="plate">Biz</span> <mark>sun\u2018iy intellektdan foydalanishni</mark> <span class="plate">emas,</span> <mark>fikrlashni</mark> <span class="plate">o\u2018rgatamiz</span>',
      sub:"Toshkentda oflayn kurslar: AI bilan avtomatlashtirish va marketing. Birinchi ssenariydan sizsiz ishlaydigan tizimgacha. Noldan, rus va o\u2018zbek tillarida.",
      ctaPrimary:"Kursga yozilish", ctaGhost:"Bizning falsafamiz ↓",
      meta1:"yo\u2018nalish · 9 daraja", meta2:"dars tillari", meta3:"sun\u2018iy intellektdan qo\u2018rqish",
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
          {label:"Vibe Coding: AI bilan o\u2018z ilovalaringiz", value:"vibecoding"},
          {label:"Avtomatlashtirish: rutinani robotlar bajaradi", value:"automation"},
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
        "vibecoding-beginner":{tag:"Vibe Coding · Beginner", title:"Sizga mos: Vibe Coding, Beginner darajasi", desc:"Replit, Lovable va bitta ham kod yozmasdan birinchi ilova. Hech qachon dasturlashtirmagan bo\u2018lsangiz — aynan shu."},
        "vibecoding-intermediate":{tag:"Vibe Coding · Intermediate", title:"Sizga mos: Vibe Coding, Intermediate darajasi", desc:"Claude Code, ma\u2019lumotlar bazasi va haqiqiy to\u2018lovlar — birinchi prototipini yig\u2018ganlar uchun."},
        "vibecoding-advanced":{tag:"Vibe Coding · Advanced", title:"Sizga mos: Vibe Coding, Advanced darajasi", desc:"CI/CD, multi-agent tizimlar va SaaS ishga tushirish — mahsulotni haqiqiy foydalanuvchilarga yetkazishga tayyor bo\u2018lganlar uchun."},
        "automation-beginner":{tag:"Automation · Beginner", title:"Sizga mos: Avtomatlashtirish uchun AI, Beginner darajasi", desc:"Make.com va mijozlarga o‘zi javob beradigan Telegram-bot. Kodsiz — jadvallardan foydalana olsangiz, uddalaysiz."},
        "automation-intermediate":{tag:"Automation · Intermediate", title:"Sizga mos: Avtomatlashtirish uchun AI, Intermediate darajasi", desc:"Vebhuklar, AI-agentlar va Click yoki Payme orqali to‘lov — birinchi ssenariylari allaqachon ishlayotganlar uchun."},
        "automation-advanced":{tag:"Automation · Advanced", title:"Sizga mos: Avtomatlashtirish uchun AI, Advanced darajasi", desc:"Flowise, n8n va avtohisobotli ko‘p kanalli tizim — agentliksiz agentlik darajasidagi tizim kerak bo‘lganlar uchun."},
        "marketing-beginner":{tag:"Marketing · Beginner", title:"Sizga mos: SI marketing, Beginner darajasi", desc:"Prompting, AI-kontent va SEO asoslari — AI-marketingda birinchi qadamlar uchun."},
        "marketing-intermediate":{tag:"Marketing · Intermediate", title:"Sizga mos: SI marketing, Intermediate darajasi", desc:"Texnik SEO, email-kampaniyalar va AI-agentlar — marketing jarayonlarini quruvchilar uchun."},
        "marketing-advanced":{tag:"Marketing · Advanced", title:"Sizga mos: SI marketing, Advanced darajasi", desc:"Agentli tizimlar, NIST AI RMF va ko\u2018p kanalli strategiyalar — tajribali marketologlar uchun."}
      }
    },
    formats: {
      h2:"O\u2018qish qanday o\u2018tadi", num:"03.5 — Formatlar",
      f1h:"Toshkentda oflayn", f1p:"Darslar auditoriyada o\u2018tadi — video yozuv yoki mustaqil o\u2018rganish emas.",
      f2h:"Kichik guruhlar", f2p:"Guruhda 20 kishigacha — o\u2018qituvchida har birining savolini ko\u2018rib chiqishga vaqt bor.",
      f3h:"2 soatdan 15 ta dars", f3p:"Daraja — 15 ta dars, ular orasida amaliyot, oxirida esa capstone-loyiha.",
      f4h:"Capstone + test", f4p:"Daraja oxirida — o\u2018z ishchi loyihangiz va sertifikatlash testi, shunchaki davomat emas."
    },
    prog: {
      h2:"Kurslar", num:"03 — Dasturlar",
      filterAll:"Barchasi", filterAuto:"Vibe Coding", filterMkt:"Marketing",
      dir1Name:"Vibe Coding", dir1Desc:"Replit, Cursor, Claude Code — o‘z mahsulotingiz: so‘z bilan aytilgan g‘oyadan ishga tushirilgan SaaS gacha. Kodni AI yozadi, siz vazifa qo‘yasiz va natijani himoya qilasiz.",
      a1Desc:"Bitta ham kod yozmasdan birinchi veb-ilovangizni yaratasiz: g\u2018oyani so\u2018z bilan tasvirlaysiz — AI Replit yoki Lovable'da ishlaydigan sahifa yig\u2018adi. Ma\u2019lumotlar bazasini ulaysiz, forma haqiqatan ham arizalarni saqlashi uchun, va saytni jonli havola orqali e\u2019lon qilasiz.",
      a1Tools:"Replit · Lovable · Bolt",
      a1Obj:"«Men hech qachon dasturlashtirmaganman». Bu yerda kerak ham emas: butun daraja — AI bilan oddiy tilda suhbat. G\u2018oyangizni do\u2018stingizga tushuntira olsangiz — ishlaydigan ilova olish uchun shu yetarli.",
      a1Who:"2 soatdan 15 ta dars · 14 yoshdan · tajribasiz",
      a2Desc:"O\u2018quv prototiplaridan haqiqiy mahsulotlarga o\u2018tasiz: Claude Code va Cursor'ni agent rejimida egallaysiz, bir necha bog\u2018langan jadvalli ma\u2019lumotlar bazasini loyihalaysiz va haqiqiy to\u2018lovni ulaysiz — Click.uz yoki Payme. Haqiqiy jamoadagidek Git bilan ishlashni o\u2018rganasiz.",
      a2Tools:"Cursor · Claude Code · Click / Payme / Eskiz",
      a2Obj:"«Mening prototipim shunday ham ishlayapti». Noutbukingizda, sinfda ishlayapti. Haqiqiy mahsulot sekin internetli, eski telefonli tasodifiy foydalanuvchini ham chidashi kerak — daraja aynan shunga o\u2018rgatadi.",
      a2Who:"2 soatdan 15 ta dars · Beginner'dan keyin",
      a3Desc:"Tayyor SaaS-mahsulotni ishga tushirasiz: o\u2018zgarishlar sizsiz chiqishi uchun CI/CD sozlaysiz, haqiqiy to\u2018lovli obunani qo\u2018shasiz va tizimni haqiqiy odamlar foydalanadigan holatga yetkazasiz — nafaqat demo uchun.",
      a3Tools:"CI/CD · Security-audit · SaaS-billing",
      a3Obj:"«Buning uchun dasturchilar jamoasi kerak». Bu darajadan keyin kerak emas: siz o\u2018zingiz arxitekturani loyihalaysiz, joylaysiz va mahsulotni yolg\u2018iz xizmat qilasiz.",
      a3Who:"2 soatdan 15 ta dars · Intermediate'dan keyin",
      dir2Name:"SI marketing uchun", dir2Desc:"Promptingdan to to\u2018liq ko\u2018p kanalli AI-marketing tizimigacha.",
      m1Desc:"Chatbotdan «post yozib ber» deb so\u2018rashni bas qilasiz va birinchi urinishdayoq kerakli natijani olasiz. Ijtimoiy tarmoq, xat yuborish va sayt uchun kontent tayyorlashni o\u2018rganasiz, odamlar sizni qidiruvda qanday topishini tushunasiz.",
      m1Tools:"Prompting · AI-kontent · SEO asoslari",
      m1Obj:"«Men allaqachon ChatGPT'dan foydalanaman». Foydalanish va kerakli natijani olish — boshqa-boshqa narsa. Bu yerdan hech qayerga ketmaydigan matnlar papkasi bilan emas, o\u2018z loyihangiz uchun targ\u2018ibot rejasi bilan chiqasiz.",
      m1Who:"2 soatdan 15 ta dars · 14 yoshdan · tajribasiz",
      m2Desc:"Taxmin qilishni emas, hisoblashni o\u2018rganasiz: qaysi xat yuborish pul keltirdi, qaysi kanal behuda sarflaydi. Saytni shunday sozlaysizki, sizni faqat Google emas, mijozlaringiz allaqachon foydalanayotgan AI-qidiruvlar ham topsin.",
      m2Tools:"Texnik SEO · Email-kampaniyalar · AI-agentlar",
      m2Obj:"«Yarim yildan keyin hammasi eskiradi». Vositalar — ha. Aynan nima pul keltirganini tushunish va uni takrorlash ko\u2018nikmasi — yo\u2018q. Biz ikkinchisini o\u2018rgatamiz, vositalarni yo\u2018l-yo\u2018lakay yangilaymiz.",
      m2Who:"2 soatdan 15 ta dars · Beginner'dan keyin",
      m3Desc:"Barcha kanallar birgalikda ishlaydigan marketing yig\u2018asiz: AI mijozni birinchi aloqadan xaridgacha olib boradi, siz esa xatarlarni nazorat qilasiz — noto\u2018g\u2018ri ma'lumotdan brend obro\u2018sigacha.",
      m3Tools:"Martech uchun MCP · NIST AI RMF · Ko\u2018p kanalli tizimlar",
      m3Obj:"«Menda texnik jamoa yo\u2018q». Bu darajadan keyin u kerak ham bo\u2018lmaydi: tizimni o\u2018zingiz yig\u2018asiz va o\u2018zingiz boshqarasiz.",
      m3Who:"2 soatdan 15 ta dars · Intermediate'dan keyin",
      filterFlow:"Avtomatlashtirish",
      dir3Name:"Avtomatlashtirish uchun AI",
      dir3Band:"kodsiz dars",
      dir3Desc:"Make, n8n, Telegram-botlar — rutinani robotlar oladi. Bitta ham kod yozmasdan.",
      n1Short:"Kodsiz birinchi bog‘lanish: mijoz formani to‘ldirdi — ma’lumot jadvalda, sizga esa Telegramga xabar keldi. Va ko‘p beriladigan savollarga javob beradigan bot.",
      n2Short:"Alohida ssenariylar tizimga aylanadi: vebhuklar, katalogingiz bo‘yicha AI-agent va qolgan hammasini ishga tushiradigan Click yoki Payme to‘lovi.",
      n3Short:"Ko‘p kanalli tizim: Telegram, pochta va Instagram bitta oqimda, xotirali Flowise agenti va har dushanba avtohisobot.",
      n1Tools:"Make.com · Zapier · Telegram-botlar",
      n2Tools:"Vebhuklar · AI-agentlar · Claude Desktop · Airtable",
      n3Tools:"Flowise · n8n · Airtable · Glide",
      n1Who:"2 soatdan 15 ta dars · 14 yoshdan · tajribasiz",
      n2Who:"2 soatdan 15 ta dars · Beginner'dan keyin",
      n3Who:"2 soatdan 15 ta dars · Intermediate'dan keyin",
      more:"Kurs haqida batafsil →",
      a1Short:"To‘g‘ridan-to‘g‘ri brauzerda birinchi ilova: g‘oyani so‘z bilan tasvirlaysiz — AI ishlaydigan sahifa yig‘adi. Ma’lumotlar bazasi, akkaunt orqali kirish va kirish qoidalari. Hech narsa o‘rnatish kerak emas.",
      a2Short:"Vositalar sizning kompyuteringizga ko‘chadi: Cursor va Claude Code, baza sxemalari, server mantig‘i, serverda tekshiriladigan Click va Payme to‘lovi, rollar, testlar va Git.",
      a3Short:"Ishga tushirish va himoya: xavfsizlik tekshiruvli CI/CD, o‘z mahsulotini hujumchi ko‘zi bilan audit qilish, obunalar va billing — hamda ko‘nikmani xizmat sifatida sotish.",
      m1Short:"Birinchi urinishdayoq kerakli natija beradigan prompting: ijtimoiy tarmoq, xat yuborish va sayt uchun kontent hamda qidiruvda topilish asoslari.",
      m2Short:"Taxmin qilish emas, hisoblash: qaysi kanal pul keltirdi, qaysi biri behuda sarfladi. Va Google ham, AI-qidiruvlar ham topadigan sayt.",
      m3Short:"Barcha kanallar birgalikda ishlaydigan marketing: AI mijozni birinchi aloqadan xaridgacha olib boradi, siz xatarlarni nazorat qilasiz."
    },
    price: {
      h2:"Narxlar", num:"04 — Tariflar",
      note:"Narxlar bir oylik o‘qish uchun ko‘rsatilgan. Daraja — 2 soatdan 15 ta dars; yakuniy summa va to‘lov grafigini yo‘nalish va darajangizga qarab bepul konsultatsiyada hisoblaymiz. Beginner darajasining birinchi darsi — bepul.",
      currency:"so\u2018m / oy",
      a1_1:"15 ta 2 soatlik dars", a1_2:"20 kishigacha guruh", a1_3:"Capstone-loyiha + test",
      a2_1:"15 ta 2 soatlik dars", a2_2:"Ishlarni shaxsiy tekshirish", a2_3:"To\u2018lovli full-stack mahsulot",
      a3_1:"15 ta 2 soatlik dars", a3_2:"Production-keyslarni tahlil qilish", a3_3:"SaaS-mahsulotni ishga tushirish",
      m1_1:"15 ta 2 soatlik dars", m1_2:"20 kishigacha guruh", m1_3:"Marketing-reja + himoya",
      m2_1:"15 ta 2 soatlik dars", m2_2:"Ishlarni shaxsiy tekshirish", m2_3:"Yangilangan marketing-reja",
      m3_1:"15 ta 2 soatlik dars", m3_2:"Enterprise-keyslarni tahlil qilish", m3_3:"Ko\u2018p kanalli tizim",
      n1_1:"15 ta 2 soatlik dars", n1_2:"20 kishigacha guruh", n1_3:"Ishlaydigan avtomatlashtirish + test",
      n2_1:"15 ta 2 soatlik dars", n2_2:"Ishlarni shaxsiy tekshirish", n2_3:"To‘lovli AI-agent",
      n3_1:"15 ta 2 soatlik dars", n3_2:"Haqiqiy tizimlar tahlili", n3_3:"Ko‘p kanalli tizim",
      freeFirst:"1-dars bepul",
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
      a4:"Daraja — 20 kishigacha guruhlarda 2 soatdan 15 ta dars, darslar orasida amaliyot va oxirida capstone-loyiha bilan. Odatda haftasiga 2–3 dars; aniq grafik guruhga bog‘liq.",
      q5:"Daraja oxirida nima olaman?",
      a5:"O‘zingiz yig‘gan va taqdim etgan ishchi loyiha, shuningdek sertifikatlash testi — shunchaki davomat belgisi emas.",
      q6:"O‘qish qancha turadi va muddatli to‘lov bormi?",
      a6:"«Narxlar» bo‘limida bir oylik o‘qish narxi ko‘rsatilgan. Daraja — 2 soatdan 15 ta dars, shuning uchun yakuniy summani bepul konsultatsiyada birga hisoblaymiz — muddatli to‘lovni ham o‘sha yerda kelishamiz. Beginner darajasining birinchi darsi bepul: to‘lovdan oldin kelib ko‘rish mumkin.",
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
    contact: { telegramLabel:"Telegram", phoneLabel:"Telefon", emailLabel:"Pochta", addressLabel:"Manzil", addressShort:"Qorataosh massivi, 2 — «Korzinka» binosi 2-qavat, Toshkent", address:"Qorataosh massivi, 2-uy, Shayxontohur tumani, Toshkent («Korzinka» binosi, 2-qavat, «Samarqand Darvoza» ro\u2018parasida)" },
    cta: { h2:"Boshqacha fikrlashni hoziroq boshla.", btn:"Yuqoridagi arizani to\u2018ldiring ↑" },
    foot: { city:"Toshkent.", contact:"Ariza qoldirish", tagline:"Think Like Tomorrow · Sun\u2018iy intellekt davrida fikrlash akademiyasi", navTitle:"Navigatsiya", contactTitle:"Aloqa", legalTitle:"Hujjatlar", offer:"Ommaviy oferta", privacy:"Maxfiylik siyosati", address:"Toshkent, Shayxontohur t., Qorataosh massivi 2, «Korzinka» binosi 2-qavat" },

    tools: {
      h2:"Biz ishlaydigan vositalar", num:"03.6 — Vositalar",
      d1:"Birinchi prototipdan o‘zini oqlaydigan mahsulotgacha.",
      d2:"Birinchi promptdan mijozni o‘zi yetaklaydigan tizimgacha.",
      d3:"Ikki ilovaning birinchi bog‘lanishidan sizsiz ishlaydigan tizimgacha.",
      tgBots:"Telegram-botlar", webhooks:"Vebhuklar", sheets:"Google Jadvallar",
      db:"Ma’lumotlar bazasi", billing:"SaaS-billing", security:"Xavfsizlik",
      prompting:"Prompting", aiContent:"AI-kontent", techSeo:"Texnik SEO",
      email:"Email-kampaniyalar", agents:"AI-agentlar", omni:"Ko‘p kanalli tizimlar",
      note:"Vositalar har bir guruhda yangilanadi: ertaga xuddi shuni yaxshiroq qiladigan servis chiqsa, siz uni bir kechada o‘zlashtirasiz — chunki u aynan nima qilishi kerakligini tushunasiz."
    },

    pay: {
      onlineTitle:"Onlayn to‘lov",
      onlineDesc:"Odatdagi ilovalar orqali o‘tkazma — kvitansiya to‘lovlar tarixingizda qoladi.",
      cardTitle:"Karta va o‘tkazma",
      cardDesc:"Markaz kartasiga o‘tkazma yoki karta bilan to‘lov — rekvizitlarni konsultatsiyada beramiz.",
      cashTitle:"Markazda naqd pul",
      cashBadge:"Naqd pul",
      cashDesc:"Qorataoshda, joyida — daraja har bir oyi uchun alohida, oylik to‘lash mumkin."
    },

    page: {
      home:"Bosh sahifa", courses:"Kurslar", back:"← Bosh sahifaga",
      ctaTitle:"Bepul konsultatsiyadan boshlang",
      ctaText:"Darajangiz va maqsadingizni aniqlaymiz, yo‘nalish tanlaymiz va yakuniy summani hisoblaymiz.",
      ctaBtn:"Ariza qoldirish",
      ctaTg:"Telegramga yozish",
      pricesLink:"Narxlar va muddatli to‘lov →",
      levelsTitle:"Kurs darajalari", levelsNum:"01 — Dastur",
      toolsTitle:"Daraja vositalari", resultTitle:"Natijada nima bo‘ladi", objectionTitle:"Ko‘p uchraydigan shubha"
    },

    au: {
      title:"Avtomatlashtirish uchun AI: kodsiz rutina",
      lead:"Uch daraja: «forma → jadval → Telegram» birinchi bog‘lanishidan siz uxlayotganda ham mijozlarni o‘zi yetaklaydigan tizimgacha. Bitta ham kod yo‘q — rus va o‘zbek tillarida, Toshkentda oflayn.",
      f1:"3 daraja · 45 dars", f2:"2 soatdan 15 ta dars", f3:"20 kishigacha guruh", f4:"kodsiz, noldan",
      l1Name:"Birinchi ishlaydigan avtomatlashtirish",
      l1Desc:"Kodsiz birinchi ishlaydigan avtomatlashtirishni yig‘asiz: mijoz formani to‘ldiradi — ma’lumot o‘zi jadvalga tushadi, sizga esa o‘n soniyada Telegramga xabar keladi. Va siz band bo‘lganingizda narx, yetkazib berish va manzil haqidagi savollarga javob beradigan o‘z botingiz.",
      l1i1:"Make.com va Zapier: ssenariy sichqoncha bilan yig‘iladi, bitta ham kodsiz",
      l1i2:"«Forma → Google Jadval → Telegram» bog‘lanishi — O‘zbekistondagi biznes uchun eng kerakli avtomatlashtirish",
      l1i3:"BotFather orqali besh daqiqada o‘z Telegram-botingiz",
      l1i4:"Ssenariy ichida AI-qadam: bot mijozga javobni o‘zi yozadi",
      l1Obj:"«Men dasturchi emasman». Kerak ham emas: butun daraja — bloklarni sichqoncha bilan surish. Google Jadvallardan foydalana olsangiz — shu yetarli.",
      l1Res:"3+ qadamdan iborat ishlaydigan avtomatlashtirish va kamida 3 xil savolga javob beradigan Telegram-bot + daraja sertifikatlash testi.",
      l2Name:"Alohida ssenariylar emas, tizim",
      l2Desc:"Alohida ssenariylardan siz kasal bo‘lib telefonga qaramaganingizda ham ishlaydigan tizimga o‘tasiz: kutish o‘rniga vebhuklar, mijoz savolini o‘zi tushunib prays-listingiz bo‘yicha javob beradigan AI-agent va qolgan hammasini ishga tushiradigan Click yoki Payme to‘lovi.",
      l2i1:"Vebhuklar: Click.uz va Payme to‘lov haqida o‘sha soniyada xabar beradi",
      l2i2:"Savolni o‘qib, katalogingiz bo‘yicha javob beradigan AI-agent — o‘zbek va rus tillarida",
      l2i3:"Claude Desktop va MCP: jadvallaringizdan oddiy so‘z bilan so‘raysiz",
      l2i4:"Airtable baza sifatida va murakkab holatlarni jonli odamga uzatish",
      l2Obj:"«Menda shunday ham hammasi ishlayapti». Siz qarab turganingizda ishlaydi. Bu daraja — tizim dam olish kunini, ta’tilni va bir vaqtning o‘zida yuzta mijozni chidashi haqida.",
      l2Res:"To‘lov vebhuki, bazasi va odamga uzatishi ulangan AI-agent + daraja sertifikatlash testi.",
      l3Name:"Flowise’dagi ko‘p kanalli tizim",
      l3Desc:"Mijozni o‘zi yetaklaydigan tizim yig‘asiz: Telegram, pochta va Instagram bitta oqimga birlashadi, Flowise’dagi AI-agent yozishmani eslab qoladi va bilim bazangiz bo‘yicha javob beradi, dushanba tongida esa sizga hafta uchun tayyor hisobot keladi.",
      l3i1:"Flowise: AI-agent bloklarni surish bilan yig‘iladi, suhbat xotirasi bilan",
      l3i2:"Murakkab ssenariylar uchun n8n — Make’dan kuchliroq, baribir kodsiz",
      l3i3:"Ko‘p kanallilik: Telegram, pochta va Instagram bitta oqimda",
      l3i4:"Dushanbalik avtohisobot va tizim buzilganda nima qilish kerak",
      l3Obj:"«Bunday narsani agentliklar katta pulga yig‘adi». Bu darajadan keyin siz uni o‘zingiz yig‘asiz va xizmat qilasiz — va u sizga haftasiga necha soat qaytarganini hisoblaysiz.",
      l3Res:"AI-agent, bilim bazasi va haftalik avtohisoboti bo‘lgan ko‘p kanalli tizim + daraja sertifikatlash testi.",
      vsTitle:"Bu Vibe Coding'dan nimasi bilan farq qiladi",
      vsText:"Bu yerda siz tayyor servislarni bog‘laysiz, rutina o‘zi ketishi uchun — bitta ham kod yozmasdan. Agar o‘zganikini bog‘lash emas, bazasi, to‘lovi va foydalanuvchilari bo‘lgan o‘z mahsulotingizni qurish kerak bo‘lsa — bu qo‘shni yo‘nalish.",
      vsLink:"Vibe Coding →"
    },
    vc: {
      title:"Vibe Coding: AI bilan mahsulot yig‘ing va uni himoya qiling",
      lead:"Uch daraja va 45 dars: to‘g‘ridan-to‘g‘ri brauzerda so‘z bilan yig‘ilgan birinchi ilovadan jonli foydalanuvchilari va yozma xavfsizlik hisoboti bo‘lgan ishga tushirilgan SaaS mahsulotgacha. Birinchi dars — bepul va hamma uchun ochiq.",
      f1:"3 daraja · 45 dars", f2:"haftasiga 2–3 dars", f3:"20 kishigacha guruh", f4:"birinchi dars bepul",
      freeBadge:"1-dars bepul",
      l1Name:"Noldan jonli va xavfsiz ilovagacha",
      l1Desc:"AI aslida nima va nega u to‘satdan dastur yig‘a oladi — shundan boshlaymiz. Keyin brauzerdagi birinchi ilova, jonli havolali ko‘p sahifali sayt, ma’lumotlar bazasi, akkaunt orqali kirish va kirish qoidalari. Butun daraja brauzerda o‘tadi: hech narsa o‘rnatish kerak emas.",
      l1i1:"Prompt — texnik topshiriq: AI aynan siz istagan narsani yig‘ishi uchun qanday tushuntirish kerak",
      l1i2:"Replit, Lovable va Bolt — uchinchi darsdayoq jonli havolali ishlaydigan sayt",
      l1i3:"Ikki darsda ma’lumotlar bazasi: haqiqatan saqlaydigan forma",
      l1i4:"Akkauntlar, kirish va kirish qoidalari — kim nimani ko‘radi",
      l1i5:"Kalitlar va sirlar: kodda hech qachon yotmasligi kerak bo‘lgan narsalar",
      l1Obj:"«Men hech qachon dasturlashtirmaganman». Birinchi dars bepul va hamma uchun ochiq — keling va tekshiring. Butun daraja brauzerda: kodni AI yozadi, siz nima kerakligini tushuntirasiz.",
      l1Res:"E’lon qilingan ilova: ma’lumot saqlanadi, kirish ishlaydi, kirish qoidalari ikkita akkauntda tekshirilgan, kodda sirlar yo‘q.",
      l2Name:"Jonli foydalanuvchilarga chidaydigan full-stack mahsulot",
      l2Desc:"Vositalar sizning kompyuteringizda paydo bo‘ladigan birinchi daraja: Cursor va terminal — ehtiyotkorlik bilan, noldan. Keyin baza sxemalari, server mantig‘i, Click va Payme orqali haqiqiy to‘lovlar, sinov muhitida Eskiz SMS, rollar va huquqlar, testlar va haqiqiy jamoadagidek Git.",
      l2i1:"Cursor va Claude Code: agent butun loyiha bilan ishlaydi, siz diff o‘qiysiz",
      l2i2:"Spetsifikatsiya va arxitektura promptdan keyin emas, oldin",
      l2i3:"Sinov muhitida Click, Payme va Eskiz — to‘lov brauzerda emas, serverda tekshiriladi",
      l2i4:"Rollar, huquqlar va o‘zganing shaxsiy ma’lumotlari",
      l2i5:"AI yozgan kodga testlar — xavfsizlik qoidalaringiz bilan birga",
      l2Obj:"«Mening prototipim shunday ham ishlayapti». Sinfda ishlayapti. Bu daraja — pul va kirish huquqiga tegishli hamma narsa serverda tekshirilishi va buni avtotest isbotlashi haqida.",
      l2Res:"Pul va kirishga tegishli hamma narsa serverda tekshiriladigan full-stack mahsulot va buni isbotlaydigan avtotest.",
      l3Name:"Ishga tushirish, himoya qilish, sotish",
      l3Desc:"Promptlardan oldin arxitektura, bitta kod bazasida bir necha agent, xavfsizlik tekshiruvlari o‘rnatilgan CI/CD. Keyin o‘z mahsulotingizni hujumchi ko‘zi bilan audit qilish, topilganlarni tuzatish va yozma hisobot. Va ishga tushirish: obunalar, billing, monitoring, hodisa rejasi — hamda shu ko‘nikmani xizmat sifatida sotish.",
      l3i1:"Multi-agentli ishlab chiqish va siz yozmagan kod bilan ishlash",
      l3i2:"CI/CD — xavfsizlik tekshiruvlari to‘g‘ridan-to‘g‘ri payplaynda",
      l3i3:"Hujumchi ro‘yxati bo‘yicha o‘z mahsulotingizni audit qilish va yozma hisobot",
      l3i4:"Multi-tenant SaaS: obunalar, billing va mijozlarni izolyatsiya qilish",
      l3i5:"Ishga tushirish, narx va ko‘nikmani sotish: frilans, agentlik, o‘z mijozlaringiz",
      l3Obj:"«Buning uchun jamoa kerak». Bu darajadan keyin kerak emas: siz loyihalaysiz, joylaysiz, o‘zingizga hujum qilasiz, tuzatasiz va natijani yozma himoya qilasiz.",
      l3Res:"Haqiqiy foydalanuvchilari bo‘lgan jonli SaaS, yozma xavfsizlik hisoboti, monitoring va tekshirilgan zaxiradan tiklash.",
      secTitle:"Xavfsizlik — modul emas, odat",
      secNum:"02 — Xavfsizlik",
      secLead:"AI kodni tez yozadi — va bir xil zaifliklarni takrorlaydi. Shuning uchun 45 darsning har birida «xavfsizlik odati» qatori bor, beshta dars unga to‘liq bag‘ishlangan, va har bir capstone shu bo‘yicha ham baholanadi.",
      secL1:"Beginner 9 · Sirlar va kalitlar", secR1:"Sizni tanitadigan hech narsa kodda yotmaydi",
      secL2:"Beginner 11 · Kirish qoidalari", secR2:"Kirish ekrani — bu hali himoya emas",
      secL3:"Intermediate 10 · Pul xavfsizligi", secR3:"Har bir to‘lov chaqiruvini ishonishdan oldin tekshir",
      secL4:"Advanced 6 · Hujumchi kabi fikrlash", secR4:"O‘z mahsulotingizni hujumchi ro‘yxati bo‘yicha tekshir",
      secL5:"Advanced 7 · Tuzatish, mustahkamlash, isbotlash", secR5:"Raqobatli sinov va yozma hisobot",
      vsTitle:"Bu avtomatlashtirishdan nimasi bilan farq qiladi",
      vsText:"Bu yerda siz o‘z mahsulotingizni quryapsiz: kodni AI yozadi, siz esa vazifa qo‘yasiz, tekshirasiz va natijani himoya qilasiz. Agar o‘zingiznikini qurish emas, tayyor servislarni bog‘lab rutinani o‘zi ketadigan qilish kerak bo‘lsa — bu qo‘shni yo‘nalish.",
      vsLink:"Avtomatlashtirish uchun AI →"
    },

    mk: {
      title:"Marketing uchun AI: promptdan tizimgacha",
      l1Name:"Ishlaydigan kontent", l2Name:"Hisoblanadigan marketing", l3Name:"Mijozni o‘zi yetaklaydigan tizim",
      lead:"Uch daraja: birinchi urinishdayoq chiqadigan kontentdan AI mijozni birinchi aloqadan xaridgacha olib boradigan ko‘p kanalli tizimgacha. Toshkentda oflayn, rus va o‘zbek tillarida.",
      f1:"3 daraja · 45 dars", f2:"2 soatdan 15 ta dars", f3:"20 kishigacha guruh", f4:"14 yoshdan, tajribasiz",
      l1Desc:"Chatbotdan «post yozib ber» deb so‘rashni bas qilasiz va birinchi urinishdayoq kerakli natijani olasiz. Ijtimoiy tarmoq, xat yuborish va sayt uchun kontent tayyorlashni o‘rganasiz, odamlar sizni qidiruvda qanday topishini tushunasiz.",
      l1i1:"Kerakli natija beradigan prompting — «yana bitta matn» emas",
      l1i2:"Ijtimoiy tarmoq, xat yuborish va sayt uchun kontent — bittalab emas, to‘plam bilan",
      l1i3:"SEO asoslari: nega sizni qidiruvda topishadi yoki topishmaydi",
      l1i4:"Mavhum nazariya emas, o‘z loyihangiz uchun targ‘ibot rejasi",
      l1Obj:"«Men allaqachon ChatGPT’dan foydalanaman». Foydalanish va kerakli natijani olish — boshqa-boshqa narsa. Bu yerdan hech qayerga ketmaydigan matnlar papkasi bilan emas, o‘z loyihangiz uchun targ‘ibot rejasi bilan chiqasiz.",
      l1Res:"Guruh oldida himoya qilingan tayyor marketing-reja + daraja sertifikatlash testi.",
      l2Desc:"Taxmin qilishni emas, hisoblashni o‘rganasiz: qaysi xat yuborish pul keltirdi, qaysi kanal behuda sarflaydi. Saytni shunday sozlaysizki, sizni faqat Google emas, mijozlaringiz allaqachon foydalanayotgan AI-qidiruvlar ham topsin.",
      l2i1:"Analitika: qaysi kanal pul keltirdi, qaysi biri faqat byudjet sarfladi",
      l2i2:"Texnik SEO — va alohida, AI-qidiruvlar sizni qanday ko‘radi",
      l2i3:"O‘qiladigan va bosiladigan email-kampaniyalar",
      l2i4:"Marketingda birinchi AI-agentlar: nimani ishonib topshirish mumkin, nimani yo‘q",
      l2Obj:"«Yarim yildan keyin hammasi eskiradi». Vositalar — ha. Aynan nima pul keltirganini tushunish va uni takrorlash ko‘nikmasi — yo‘q. Biz ikkinchisini o‘rgatamiz, vositalarni yo‘l-yo‘lakay yangilaymiz.",
      l2Res:"Kanallar bo‘yicha raqamlari bilan yangilangan marketing-reja + daraja sertifikatlash testi.",
      l3Desc:"Barcha kanallar birgalikda ishlaydigan marketing yig‘asiz: AI mijozni birinchi aloqadan xaridgacha olib boradi, siz esa xatarlarni nazorat qilasiz — noto‘g‘ri ma’lumotdan brend obro‘sigacha.",
      l3i1:"Ko‘p kanalli tizim: ijtimoiy tarmoq, xat yuborish va sayt bitta mantiqda",
      l3i2:"Martech uchun MCP: AI sizning haqiqiy ma’lumotlaringiz bilan ishlaydi",
      l3i3:"NIST AI RMF bo‘yicha xatarlarni boshqarish — AI xato qilganda nima qilish kerak",
      l3i4:"Enterprise-keyslar tahlili: bunday tizimlar amalda qayerda buziladi",
      l3Obj:"«Menda texnik jamoa yo‘q». Bu darajadan keyin u kerak ham bo‘lmaydi: tizimni o‘zingiz yig‘asiz va o‘zingiz boshqarasiz.",
      l3Res:"Xatarlar nazorati bilan ishlaydigan ko‘p kanalli tizim + daraja sertifikatlash testi."
    }
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
const TG_CHAT_ID = '-1004420315034';
const TG_THREAD_ID = 15; // топик «Заявки» в новой группе
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
          message_thread_id: TG_THREAD_ID,
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

    const dataProgram = `${direction === 'automation' ? 'VibeCoding' : 'Marketing'}-${level.charAt(0).toUpperCase() + level.slice(1)}`;
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
   CONTACT DROPDOWN (кнопка «Контакт» в шапке — Telegram/телефон)
   ============================================================ */
(function initContactDropdown() {
  document.querySelectorAll('.contact-switch').forEach(switcher => {
    const toggle = switcher.querySelector('.contact-toggle');
    const menu = switcher.querySelector('.contact-menu');
    if (!toggle || !menu) return;

    function close() {
      switcher.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    function open() {
      document.querySelectorAll('.contact-switch.is-open').forEach(other => {
        if (other !== switcher) other.classList.remove('is-open');
      });
      switcher.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (switcher.classList.contains('is-open')) close(); else open();
    });

    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

    document.addEventListener('click', (e) => {
      if (!switcher.contains(e.target)) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
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
    /* на подстраницах логотип — обычная ссылка на главную,
       перехватываем клик только когда это якорь «наверх» */
    const href = logo.getAttribute('href') || '';
    if (href !== '#' && href !== '') return;
    e.preventDefault();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    history.replaceState(null, '', window.location.pathname + window.location.search);
  });
})();
