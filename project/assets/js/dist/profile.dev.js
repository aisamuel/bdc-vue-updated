"use strict";

// console.log("Vue app runs")
var profileApp = new Vue({
  el: "#profileApp",
  data: {
    userData: {},
    updateURL: "".concat(baseURL, "reg/update-user/")
  },
  methods: {
    updateProfile: function updateProfile() {
      fetch(this.updateURL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.userData.username,
          fname: this.userData.fname,
          lname: this.userData.lname,
          address: this.userData.address,
          city: this.userData.city,
          country: this.userData.country,
          aboutMe: this.userData.aboutMe
        })
      });
      console.log(this.userData);
    }
  },
  mounted: function mounted() {
    console.log("Vue app mounted");
    this.setUserProfile = setUserProfile;
    this.getUserProfile = getUserProfile;
    this.logout = logout;
    this.userData = getUserProfile();

    if (!this.userData) {
      window.location.href = "/login";
    }
  }
});