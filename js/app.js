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

const Music = {
  play: function () {
    $(".music__play").click(function () {
      const target = $(this).data("target");

      console.log(target);

      $(".music__items audio").each(function () {
        $(this)[0].pause();
      });
      $(".music__items audio")[Number(target)].play();
    });
  },
};

window.addEventListener("load", (event) => {
  Loading.init();
  Music.play();
});
