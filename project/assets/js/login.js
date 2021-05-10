const loginApp = new Vue({
  el: "#loginApp",
  data: {
    email: "",
    password: "",
    passwordFieldType: 'password',
    newPassWord: "",
    isLoading: false,
    password_viewer: "password",
    loginURL: `${baseURL}reg/login/`,
    errorMessage: "",
    errorTimeOut: 3000
  },
  methods: {
    login: function() {
      this.isLoading = true;
      fetch(this.loginURL, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emailOrPhone: this.email,
          password: this.password
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
          if (data && data.token) {
            this.setToken(data.token);
            this.setUserProfile(JSON.stringify(data.user));
            window.location.href = "/new-transaction"
          } else if (data) {
            this.errorMessage = data.message;
            this.clearError();
          } else {
            this.errorMessage = "No response from server";
            this.clearError();
          }
          this.isLoading = false;
        })
        .catch(error => {
          this.isLoading = false;
          console.error("Error:", error);
        });
    },

    resetPassword: function() {
      this.isLoading = true;
      fetch(this.loginURL, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emailOrPhone: this.email,
          password: this.password,
          newPassWord: this.newPassWord,

        })
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
          if (data && data.token) {
            this.setToken(data.token);
            this.setUserProfile(JSON.stringify(data.user));
            window.location.href = "/new-transaction"
          } else if (data) {
            this.errorMessage = data.message;
            this.clearError();
          } else {
            this.errorMessage = "No response from server";
            this.clearError();
          }
          this.isLoading = false;
        })
        .catch(error => {
          this.isLoading = false;
          console.error("Error:", error);
        });
    },

    clearError: function() {
      setTimeout(() => {
        this.errorMessage = "";
      }, this.errorTimeOut);
    },

    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }
  },
  mounted: function() {
    this.getUserProfile = getUserProfile;
    this.setUserProfile = setUserProfile;
    this.setToken = setToken;
    this.getToken = getToken;
    if (this.getUserProfile()) {
        window.location.href = "/new-transaction"
    }
  }
});
