"use strict";

var successApp = new Vue({
  el: "#panel",
  data: {
    transactionData: JSON.parse(localStorage.getItem("transaction")),
    userProfile: getUserProfile()
  }
});