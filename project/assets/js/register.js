const registerApp = new Vue({
  el: "#registerApp",
  data: {
    userData: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      password: ""
    }
  },
  methods: {
    register: function() {
      console.log(this.userData);
    }
  },
  mounted: function() {
    this.getUserProfile = getUserProfile;
    this.setUserProfile = setUserProfile;
  }
});
