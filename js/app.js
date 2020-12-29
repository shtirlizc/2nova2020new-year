const Loading = {
  init: function () {
    TweenMax.set("svg", {
      visibility: "visible",
    });

    var tl = new TimelineMax({ repeat: -1 });
    tl.to("#gradPattern", 5, {
      attr: {
        x: 400,
      },
      ease: Linear.easeNone,
    });
  },
  finish: function () {
    $(".loading").fadeOut(500);
    $("body").css("overflow", "auto");
  },
};

const Wish = {
  variants: [
    "Ты не умрешь одиноким",
    "Река сама вынесет трупы твоих врагов",
    "Ты будешь хорошо и вкусно кушать",
    "Тебе нужен попугайчик",
    "Кажется, в этом году все будет хорошо",
    "Не бойся, подарки принесут всем",
    "В следующем году часы будут списываться сами",
    "Хитрые и злые - счастливыми не бывают, будь добрее",
    "Возможно ты станешь взрослым!",
    "Ты решиться на несколько глупостей",
    "Помни, что ты не молодеешь, займись спортом и пройди check up",
    "Покатайся на коньках, поверь, так надо",
    "Возможно, это отличный год чтобы заняться рыбалкой",
    "Что посеешь-то и пожнешь, заведи микрозелень на подоконнике",
    "В жизни так много вещей, без которых можно прожить, разбери шкафы",
    "Самые важные в жизни вещи - это не вещи, позвони близким",
  ],
  init: function () {
    const rand = Math.round(-0.5 + Math.random() * this.variants.length);
    $(".cracker-message__inner").html(this.variants[rand]);

    this.watch();
  },
  watch: function () {
    $("#cracker").click(function () {
      $(".cracker__label").fadeToggle(500);
      $(this).toggleClass("active");
    });
  },
};

const Tree = {
  watch: function () {
    $("._tree .settings h1").click(function () {
      $("._tree .settings").toggleClass("active");
    });
  },
};

const ShowScreen = {
  success: function () {
    $("#js-success").slideDown(250);
    $(".form").slideUp(250);

    $("html, body").animate(
      {
        scrollTop: $("#js-success").offset().top,
      },
      350
    );
  },
};

const Meta = {
  init: function () {
    $("#meta-image").attr(
      "content",
      `${window.location.protocol}//${window.location.host}/images/team.jpg`
    );
  },
};

const Music = {
  play: function () {
    $(".music__play").click(function () {
      $(".music__items audio").each(function () {
        $(this)[0].pause();
        $(this)[0].currentTime = 0;
      });

      $(".music__play").removeClass("active");

      if (!$(this).hasClass("stop-player")) {
        const target = $(this).data("target");
        $(this).addClass("active");

        $(".music__items audio")[Number(target)].play();
      }
    });
  },
};

const State = {
  init: function () {
    if (window.location.search) {
      let params = new URL(document.location).searchParams;
      let switchState = params.get("switch");
      let treeState = params.get("tree");
      let skyState = params.get("sky");

      if (switchState) {
        $(`#${switchState}`)[0].checked = true;
      }
      if (treeState) {
        $(`#${treeState}`)[0].checked = true;
      }
      if (skyState) {
        $(`#${skyState}`)[0].checked = true;
      }

      $("html, body").animate(
        {
          scrollTop: $("#moon").offset().top,
        },
        350
      );
    }

    this.watch();
    this.share();
  },
  watch: function () {
    $("._tree .settings label").click(function () {
      const switchState = $(this).data("switch");
      const treeState = $(this).data("tree");
      const skyState = $(this).data("sky");

      var url = new URL(window.location.href);
      var search_params = url.searchParams;

      if (switchState) search_params.set("switch", switchState);
      if (treeState) search_params.set("tree", treeState);
      if (skyState) search_params.set("sky", skyState);

      url.search = search_params.toString();
      var new_url = url.toString();

      window.history.pushState(
        {
          id: "1",
        },
        "pageTitle",
        new_url
      );
    });
  },
  share: function () {
    $("#share").click(function () {
      $(this).addClass("active");
      setTimeout(() => {
        $("#share").removeClass("active");
      }, 1500);
      $("#share-input").val(window.location.href);
      var copyText = document.getElementById("share-input");
      copyText.select();
      document.execCommand("copy");

      console.log("###: buffer", copyText.value);
    });
  },
};

const Results = {
  data: [
    {
      fistName: "Дима",
      lastName: "Богаткин",
      from: "от Марата",
      message:
        "Спасибо за то, что никогда не отказываешь в помощи. И счастливого Нового года!",
    },
    {
      fistName: "Аня",
      lastName: "Л.",
      from: "от Лены А.",
      message: "Пусть в новом году проекты будут приносить удовольствие!",
    },
    {
      fistName: "Ксения",
      lastName: "Ц.",
      from: "от Яны У.",
      message:
        "Ты - моя вторая мама, желаю, чтобы в новом году тебя окружали такие же заботливые люди, пусть все задумки, даже самые невероятные дают свои первые плоды, и чтобы во всех нерабочих сферах, где ты успела попробовать себя, был заметен прогресс , и это только мотивировало бы тебя двигаться вперёд!  Спасибо за этот год! Ты обалденная, и ты знаешь это.",
    },
    {
      fistName: "Даша",
      lastName: "",
      from: "от Яны У.",
      message:
        "Ты мой луч света в мраке вёрстки со своим уникальным юмором, который всегда вызывает улыбку умиления. Надеюсь, этот год не подорвал твои стремления и позитив, я надеюсь, что новый год тебе подарит больше приятных впечатлений! Почаще улыбайся, наше солнце! С Новым годом!",
    },
    {
      fistName: "Надя",
      lastName: "П.",
      from: "от Яны У.",
      message:
        "В этот новый 2021 я хочу пожелать тебе поменьше грустить и получить больше тепла от всех людей, кто окружает. Благодарна тебе безмерно за все, что ты делаешь для нас. Надеюсь, с опытом мы будем поменьше тебе докучать со сменой паролей :D В любом случае, пусть этот год будет для тебя интереснее, полезнее и богаче на счастливые моменты!",
    },
    {
      fistName: "Аня",
      lastName: "К.",
      from: "от Яны У.",
      message:
        "У меня есть даже что-то конкретное: Счастья и гармонии в новой семейной жизни! Спасибо тебе за помощь и твое время, мне всегда приятно с тобой говорить и вне работы, надеюсь, когда-нибудь в офисе эти беседы участятся. С наступающим!",
    },
    {
      fistName: "Ксюша",
      lastName: "Танакова",
      from: "от Яны У.",
      message:
        "Спасибо тебе за твою энергию и поддержку! Ты на самом деле безумно внимательна к другим людям и вообще к деталям, мне это в тебе импонирует. Желаю в новом году меньше стресса, больше сил и меньше странных задач! С новым годом!",
    },
    {
      fistName: "Митя",
      lastName: "",
      from: "от Яны У.",
      message:
        "Спасибо за совместную работу, помощь и знакомство с Шерри! Надеюсь, этот год подарит тебе больше здоровья и новых достижений в любых увлечениях. С новым годом!",
    },
    {
      fistName: "Денис",
      lastName: "",
      from: "от Яны У.",
      message:
        "Спасибо за твои музыкальные рекомендации! Что-нибудь да нахожу для себя интересным. Пусть и у тебя в новом году будет больше открытий, и не болей!",
    },
    {
      fistName: "Катя",
      lastName: "Моргунова",
      from: "от Яны У.",
      message:
        "Я ловлю все больше твою волну! И шутки сейчас воспринимаются  особеннее! Пусть в новом году будет больше и юмора, и просто приятных моментов, работа не угнетала, а настрой не подводил. Пусть все цели, что ты задумала на этот год осуществятся! С наступающим.",
    },
    {
      fistName: "всем-всем",
      lastName: "",
      from: "от Яны У.",
      message:
        "Наташе Сокур, Ксюше Хоменко, Ане Богатиковой, Наде Коротченко, Ане Логвиненко, Насте Тюленевой, Ире Титовой и всей команде 2nova и Икре огромное спасибо за этот год, за поддержку, за обалденные ивенты!",
    },
    {
      fistName: "Всей команде Biocad",
      lastName: "",
      from: "от Ани",
      message:
        "Ребята, огромное спасибо вам, много за что, особенно:\n" +
        "- за то, что готовы были быстро вникать и разбираться с большой авоськой новых продуктов и новых стеков,\n" +
        "- за вашу вовлеченность и готовность искать конкретные решения в абсолютно разных ситуациях,\n" +
        "-  за большую отзывчивость и готовность прийти на помощь клиенту, мне и друг другу!",
    },
    {
      fistName: "Наде К., Ане Б. и Кате З,",
      lastName: "",
      from: "от Кати Моргуновой",
      message:
        "Спасибо за наши спонтанные выходы в свет, когда многие даже в офис выйти боялись!) Кажется, за весь прошлый год не тусила так часто, как в те несколько недель.",
    },
    {
      fistName: "Даша",
      lastName: "",
      from: "от Ксюши",
      message:
        "Спасибо тебе за этот замечательный, продуктивный, веселый год! В новом году желаю тебе: побольше высыпаться, поменьше нервничать, исполнения желаний, новых интересных увлечений и открытий!",
    },
    {
      fistName: "Команда 2Nova",
      lastName: "",
      from: "от Кати Моргуновой",
      message:
        'Спасибо за корпоратив! Мне кажется, в этом году он прошел еще круче, чем в прошлом, не смотря на сорванную "Мафию" =) И он был действительно нужен всем нам, чтобы вспомнить, что мы еще вместе, и вместе мы - сила, которая порвет танцпол!)',
    },
    {
      fistName: "Всем",
      lastName: "",
      from: "от Санты на Волге",
      message:
        "каждый раз, когда вы начинаете переживать о чем-то - подумайте, будет ли это важно через год.\n" +
        "как правило, нет :)\n" +
        "\n" +
        "с новым годом!",
    },
    {
      fistName: "Дима",
      lastName: "Ч.",
      from: "от Ани",
      message:
        "Спасибо большое за твою вовлеченность! Идеи и шаринг опыта для корпоративных систем!",
    },
    {
      fistName: "Марату и Ксюше",
      lastName: "",
      from: "от Ани",
      message:
        "Спасибо за такой чудесный сюрприз в конце года!\n" +
        "П.С. я залипаю на украшение елочки)))",
    },
  ],
  shuffle: function (array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  addItem: function (item) {
    // front
    const firstName = document.createElement("span");
    firstName.classList.add("first");
    firstName.innerText = item.fistName;
    const lastName = document.createElement("span");
    lastName.classList.add("last");
    lastName.innerText = item.lastName;
    const from = document.createElement("span");
    from.classList.add("title");
    from.innerText = item.from;

    const nameWrap = document.createElement("div");
    nameWrap.classList.add("name");
    nameWrap.appendChild(firstName);
    nameWrap.appendChild(lastName);
    nameWrap.appendChild(from);

    const front = document.createElement("div");
    front.classList.add("front");
    front.appendChild(nameWrap);

    // back
    const logo = document.createElement("figure");
    logo.classList.add("logo-white");

    const logoWrap = document.createElement("div");
    logoWrap.classList.add("container-sm");
    logoWrap.appendChild(logo);

    const message = document.createElement("p");
    message.classList.add("results__text");
    message.innerText = item.message;

    const messageWrap = document.createElement("div");
    messageWrap.classList.add("container-lg");
    messageWrap.appendChild(message);

    const back = document.createElement("div");
    back.classList.add("back");
    back.appendChild(logoWrap);
    back.appendChild(messageWrap);

    // wrappers
    const flipper = document.createElement("div");
    flipper.classList.add("flipper");
    flipper.appendChild(front);
    flipper.appendChild(back);

    const businessCard = document.createElement("div");
    businessCard.classList.add("business-card");
    businessCard.appendChild(flipper);

    const results = document.createElement("div");
    results.classList.add("results");
    results.appendChild(businessCard);

    const lettersItem = document.createElement("div");
    lettersItem.classList.add("letters__item");
    lettersItem.appendChild(results);

    return lettersItem;
  },
  init: function () {
    this.shuffle(this.data);
    const letters = document.querySelector(".letters__items");

    this.data.map((item) => {
      letters.appendChild(this.addItem(item));
    });

    this.watch();
  },
  watch: function () {
    $(".business-card").click(function () {
      $(this).toggleClass("hover");
    });
  },
};

Loading.init();

window.addEventListener("load", (event) => {
  Loading.finish();
  Meta.init();
  State.init();
  Music.play();
  Wish.init();
  Tree.watch();
  Results.init();
});
