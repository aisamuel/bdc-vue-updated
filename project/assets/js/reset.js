const loginApp = new Vue({
    el: "#ResetApp",
    data: {
      email: "",
      password: "",
      newPassWord: "",
      userProfile: {},
      passwordFieldType: 'password',
      passwordFieldType2: 'password',
      isLoading: false,
      loginURL: `${baseURL}reg/login/`,
      resetURL: `${baseURL}reg/changePass/`,
      errorMessage: "",
      errorTimeOut: 3000
    },
    methods: {
  
      resetPassword: function() {
        this.isLoading = true;
        fetch(`${this.resetURL}${this.userProfile._id}`, {
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
            //   this.setToken(data.token);
              this.setUserProfile(JSON.stringify(data.user));
            //   localStorage.removeItem("userProfile")
              
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
      },

      switchVisibilityTwo() {
        this.passwordFieldType2 = this.passwordFieldType2 === 'password' ? 'text' : 'password'
      }
    },
    mounted: function() {
        this.logout = logout;
        this.getUserProfile = getUserProfile;
        if (this.getUserProfile()) {
            this.userProfile = this.getUserProfile();
        } else {
          window.location.href = "login"
        }
    //   if (this.getUserProfile()) {
    //       window.location.href = "/new-transaction"
    //   }
    }
  });
  