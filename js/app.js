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

const Form = {
  watch: function () {
    const form = document.getElementById("js-form");

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const from = document.getElementById("form-from").value;
      const to = document.getElementById("form-to").value;
      const message = document.getElementById("form-message").value;

      const params = {
        from,
        to,
        message,
      };

      console.log(params);
    });
  },
};

window.addEventListener("load", (event) => {
  Loading.init();
  Form.watch();
});
