// console.log("Vue app runs")

const profileApp = new Vue({
  el: "#profileApp",
  data: {
    userData: {},
    updateURL: `${baseURL}reg/update-user/`
  },
  methods: {
    updateProfile: function() {
      fetch(this.updateURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emailOrPhone: this.email,
          password: this.password
        })
      });
      console.log(this.userData);
    }
  },
  mounted: function() {
    console.log("Vue app mounted");
    this.setUserProfile = setUserProfile;
    this.getUserProfile = getUserProfile;
    this.userData = getUserProfile();
  }
});
