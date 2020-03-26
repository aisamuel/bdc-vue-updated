const baseURL = "https://bcd-backend.herokuapp.com/";
// const baseURL = "https://smartapps.com.ng/bdc-back/";

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
    key: "pk_test_ad09ec2277fdc777e3eeaa5d51c711ca579a6141",
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

function payWithFlutterwave(userProfile, amountInNaira, ref, callback) {
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
        onclose: function() {
          // alert("window closed");
          callback();
        },
        callback: function(response) {
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
