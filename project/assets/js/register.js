const registerApp = new Vue({
  el: "#registerApp",
  data: {
    errors: [],
    userData: {
      fname: "",
      lname: "",
      userName: "",
      address: "",
      Dob: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      acctType: "",
      rcNumber: "",
      busPhoneNum: "",
      busEmail: "",
      aboutMe: "",
      bank: [
        {
          accountNumber: "",
          accountName: "",
          bankName: ""
        }
      ]
    }
  },
  methods: {
    register: async function() {
      if(this.userData.password !== this.userData.confirmPassword){
        alert("Passwords must match!")
        return
      }
      const res = await fetch(`${baseURL}reg/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.userData)
      })

      if(res) {
        const result = await res.json();

        if(result && result.message === "success") {
          setTimeout(() => {
            window.location.href = "/login";
          }, 4000)
        } else if(result.message === "error"){
          this.errors = result.errors;
        } else {
          alert(result.message);
        }
      }

    }
  },
  mounted: function() {
    this.getUserProfile = getUserProfile;
    this.setUserProfile = setUserProfile;
    if(this.getUserProfile()) {
        window.location.href = "/profile";
    }
  }
});
