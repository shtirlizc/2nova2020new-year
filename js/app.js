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
      fistName: "Андрей",
      lastName: "Елпаев",
      from: "от Насти",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, deserunt doloribus ducimus labore quisquam tempora velit! Deleniti laborum laudantium praesentium suscipit! Deserunt iure molestiae nemo ratione sunt? Asperiores, dolor, tempore.",
    },
    {
      fistName: "Андрей",
      lastName: "Елпаев",
      from: "от Насти",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, deserunt doloribus ducimus labore quisquam tempora velit! Deleniti laborum laudantium praesentium suscipit! Deserunt iure molestiae nemo ratione sunt? Asperiores, dolor, tempore.",
    },
    {
      fistName: "Андрей",
      lastName: "Елпаев",
      from: "от Насти",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, deserunt doloribus ducimus labore quisquam tempora velit! Deleniti laborum laudantium praesentium suscipit! Deserunt iure molestiae nemo ratione sunt? Asperiores, dolor, tempore.",
    },
    {
      fistName: "Андрей",
      lastName: "Елпаев",
      from: "от Насти",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, deserunt doloribus ducimus labore quisquam tempora velit! Deleniti laborum laudantium praesentium suscipit! Deserunt iure molestiae nemo ratione sunt? Asperiores, dolor, tempore.",
    },
    {
      fistName: "Андрей",
      lastName: "Елпаев",
      from: "от Насти",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, deserunt doloribus ducimus labore quisquam tempora velit! Deleniti laborum laudantium praesentium suscipit! Deserunt iure molestiae nemo ratione sunt? Asperiores, dolor, tempore.",
    },
  ],
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
