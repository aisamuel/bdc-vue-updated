// const baseURL = "https://bcd-backend.herokuapp.com/";
const baseURL = "https://smartapps.com.ng/bdc-back/";

const getUserProfile = () => {
  try {
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    return profile;
  } catch (e) {
    console.log(e);
    return;
  }
};

const setUserProfile = userProfile => {
  return localStorage.setItem("userProfile", userProfile);
};

const logout = () => {
    localStorage.removeItem("userProfile")
    window.location.href = "/landing"
}

const getToken = () => {
  return localStorage.getItem("token");
};

const setToken = token => {
  return localStorage.setItem("token", token);
};

const payWithPaystack = (userProfile, amountInNaira, ref, callback) => {
    console.log("paying with paystack")
  var handler = PaystackPop.setup({
    key: "pk_test_8bfb374a7ff4b8054250f5aa7b6b3fef8d9f7a2a",
    email: userProfile.email,
    amount: amountInNaira * 100,
    currency: "NGN",
    ref: ref,
    metadata: {
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: userProfile.phone
        }
      ]
    },
    callback: function(response) {
      alert("success. transaction ref is " + response.reference);
      callback();

    },
    onClose: function() {
      alert("window closed");
      callback();
    }
  });
  handler.openIframe();
};


const landingNav = new Vue({
  el: "#landingNavbar",
  data: {
    userProfile: getUserProfile()
  },
  methods: {
    logInOrOut() {
      if(this.userProfile) {
        logout()
      } else {
        window.location.href = "login"
      }
    }
  },
  mounted: function () {
  }
})
