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

window.addEventListener("load", (event) => {
  Loading.init();
});
