// const baseURL = "https://bcd-backend.herokuapp.com/";
// const baseURL = "https://reset313.herokuapp.com/";
const baseURL = "bdc313-test.herokuapp.com";

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
    key: "pk_live_560aba442d03bf010d639e0b4f05ee17e9f9575c",
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
    callback: function (response) {
      alert("success. transaction ref is " + response.reference);
      callback();

    },
    onClose: function () {
      alert("window closed");
      callback();
    }
  });
  handler.openIframe();
};

function payWithFlutterwave(userProfile, amountInNaira, ref, callback) {
  console.log(amountInNaira);
  var x = getpaidSetup({
    PBFPubKey: "FLWPUBK-1b640efbf8ba861d21e53d26854510f8-X",
    customer_email: userProfile.email,
    amount: amountInNaira,
    customer_phone: userProfile.phone,
    currency: "NGN",
    txref: ref,
    meta: [{
      metaname: "mobileNumber",
      metavalue: userProfile.phone
    }],
    onclose: function () {
      // alert("window closed");
      callback();
    },
    callback: function (response) {
      var txref = response.tx.txRef; // collect txRef returned and pass to a           server page to complete status check.
      console.log("This is the response returned after a charge", response);
      if (
        response.tx.chargeResponseCode == "00" ||
        response.tx.chargeResponseCode == "0"
      ) {
        // redirect to a success page
      } else {
        // redirect to a failure page.
      }

      x.close(); // use this to close the modal immediately after payment.
    }
  });
}



const landingNav = new Vue({
  el: "#landingNavbar",
  data: {
    userProfile: getUserProfile()
  },
  methods: {
    logInOrOut() {
      if (this.userProfile) {
        logout()
      } else {
        window.location.href = "login"
      }
    }
  },
  mounted: function () {
  }
})
