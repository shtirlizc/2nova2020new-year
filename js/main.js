+(function ($) {
  "use strict";
  var Form = function () {
    this.$form = $(".js-form");
    this.$success = $(".js-success");
    this.code = "USITVFrWAN";
    if (this.$form.length > 0) {
      this.prepareVars();
      this.init();
      this.initFormEvents();
    }
  };

  Form.prototype.prepareVars = function () {
    this.$from = this.$form.find(".js-from");
    this.$to = this.$form.find(".js-to");
    this.$message = this.$form.find(".js-message");
    this.$nospam = this.$form.find('input[name="nospam"]');
    this.$type = this.$form.find('input[name="type"]');
    // this.$accepted = this.$form.find('input#accepted');
    this.validateOptions = {
      errorElement: "em",
      ignore: ":hidden:not(:checkbox)",
      errorPlacement: function (error, element) {
        return true;
      },
      highlight: function (element, errorClass, validClass) {
        $(element).parent().addClass("has-error");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).parent().removeClass("has-error");
      },
    };
  };

  Form.prototype.init = function () {
    this.$form.validate(this.validateOptions);

    $.validator.addMethod("ruName", function (value, element) {
      return this.optional(element) || /^[а-яА-ЯёЁA-Za-z\s]+$/.test(value);
    });

    $.validator.addMethod("customAgree", function (value, element) {
      console.log(value);
      console.log(element);
      return this.optional(element) || $(element).prop("checked");
    });

    this.$from.rules("add", {
      required: true,
      email: false,
      messages: {
        required: "Заполните поле",
      },
    });
    this.$to.rules("add", {
      required: true,
      email: false,
      messages: {
        required: "Заполните поле",
      },
    });
    this.$message.rules("add", {
      required: true,
      email: false,
      messages: {
        required: "Заполните поле",
      },
    });

    /*this.$accepted.rules('add', {
            required: true,
            customAgree: true,
            messages: {
                required:'Потвердите согласие на обработку ваших персональных данных'
            }
        });*/
  };

  Form.prototype.initFormEvents = function () {
    var self = this;

    self.$form.on("mouseover", 'input[type="submit"]', function (e) {
      self.$nospam.val(self.code);
    });

    self.$form.on("click", 'input[type="submit"]', function (e) {
      e.preventDefault();
      var $this = $(this);

      if (self.$form.valid()) {
        var from = self.$from.val(),
          to = self.$to.val(),
          message = self.$message.val(),
          isSubscribe = self.$form.find("input#subscribe").prop("checked")
            ? 1
            : 0,
          nospam = self.$nospam.val(),
          type = self.$type.val();

        var params = {
          from: from,
          to: to,
          message: message,
          subscribe: isSubscribe,
          handler: "onSubscribe",
          nospam: nospam,
          type: type,
        };

        $.post("ajax.php", params, function (data) {
          if (data["message"] === "success") {
            self.success();
          } else {
            self.error();
          }
        }).fail(function () {
          self.error();
        });
      }
    });
  };

  Form.prototype.success = function () {
    // this.$form.hide();
    // this.$success.show();
    ShowScreen.success();
  };

  Form.prototype.error = function () {
    alert("Ошибка! Перезагрузите страницу и попробуйте еще раз...");
  };

  $(document).ready(function () {
    var form = new Form();
  });
})(window.jQuery);
