"use strict";

var loginApp = new Vue({
  el: "#loginApp",
  data: {
    email: "",
    password: "",
    isLoading: false,
    loginURL: "".concat(baseURL, "reg/login/"),
    errorMessage: "",
    errorTimeOut: 3000
  },
  methods: {
    login: function login() {
      var _this = this;

      this.isLoading = true;
      fetch(this.loginURL, {
        method: "POST",
        // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emailOrPhone: this.email,
          password: this.password
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log("Success:", data);

        if (data && data.token) {
          _this.setToken(data.token);

          _this.setUserProfile(JSON.stringify(data.user));

          window.location.href = "/new-transaction";
        } else if (data) {
          _this.errorMessage = data.message;

          _this.clearError();
        } else {
          _this.errorMessage = "No response from server";

          _this.clearError();
        }

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;
        console.error("Error:", error);
      });
    },
    clearError: function clearError() {
      var _this2 = this;

      setTimeout(function () {
        _this2.errorMessage = "";
      }, this.errorTimeOut);
    }
  },
  mounted: function mounted() {
    this.getUserProfile = getUserProfile;
    this.setUserProfile = setUserProfile;
    this.setToken = setToken;
    this.getToken = getToken;

    if (this.getUserProfile()) {
      window.location.href = "/new-transaction";
    }
  }
});