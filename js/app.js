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

window.addEventListener("load", (event) => {
  Loading.init();
});
