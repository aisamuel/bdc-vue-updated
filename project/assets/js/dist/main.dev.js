"use strict";

// const baseURL = "https://bcd-backend.herokuapp.com/";
var baseURL = "http://localhost:2194/";

var getUserProfile = function getUserProfile() {
  try {
    var profile = JSON.parse(localStorage.getItem("userProfile"));
    return profile;
  } catch (e) {
    console.log(e);
    return;
  }
};

var setUserProfile = function setUserProfile(userProfile) {
  return localStorage.setItem("userProfile", userProfile);
};

var logout = function logout() {
  localStorage.removeItem("userProfile");
  window.location.href = "/login";
};

var getToken = function getToken() {
  return localStorage.getItem("token");
};

var setToken = function setToken(token) {
  return localStorage.setItem("token", token);
};

var payWithPaystack = function payWithPaystack(userProfile, amountInNaira, ref, _callback) {
  console.log("paying with paystack");
  var handler = PaystackPop.setup({
    key: "pk_test_8bfb374a7ff4b8054250f5aa7b6b3fef8d9f7a2a",
    email: userProfile.email,
    amount: amountInNaira,
    currency: "NGN",
    ref: ref,
    metadata: {
      custom_fields: [{
        display_name: "Mobile Number",
        variable_name: "mobile_number",
        value: userProfile.phone
      }]
    },
    callback: function callback(response) {
      alert("success. transaction ref is " + response.reference);

      _callback();
    },
    onClose: function onClose() {
      alert("window closed");

      _callback();
    }
  });
  handler.openIframe();
};