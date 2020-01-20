"use strict";

var landingApp = new Vue({
  el: "#landingApp",
  data: {
    bankAccounts: [],
    userBankAccounts: [],
    exchangeRates: [],
    sellingRates: [],
    buyingRates: [],
    userSelectedBankAccount: {
      accountNumber: "",
      accountName: "",
      bankName: ""
    },
    userProfile: {},
    selectedCurrency: {},
    amountInCurrency: null,
    amountInNaira: null,
    randomString: "",
    bankAccountsURL: "reg/accounts",
    exchangeRatesURL: "fx/all-currency/",
    addBankURL: "reg/addBank/",
    userBankAccountsURL: "reg/user-bank/",
    activeMode: "buy",
    paymentMethod: "card",
    acceptAgreement: false,
    accountIsUnique: true
  },
  methods: {
    storeLandingData: function storeLandingData() {
      localStorage.setItem("landingData", {
        amountInNaira: this.amountInNaira,
        amountInCurrency: this.amountInCurrency,
        selectedCurrency: this.selectedCurrency
      });
    },
    fetchExchangeRates: function fetchExchangeRates() {
      var res, result;
      return regeneratorRuntime.async(function fetchExchangeRates$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(baseURL).concat(this.exchangeRatesURL), {
                mode: "cors"
              }));

            case 2:
              res = _context.sent;

              if (!res) {
                _context.next = 12;
                break;
              }

              _context.next = 6;
              return regeneratorRuntime.awrap(res.json());

            case 6:
              result = _context.sent;
              if (result) this.exchangeRates = result;
              this.selectedCurrency = this.exchangeRates[0]; //TODO selling rates and buying rates should come from DB

              this.sellingRates = JSON.parse(JSON.stringify(this.exchangeRates));
              this.buyingRates = JSON.parse(JSON.stringify(this.exchangeRates));
              console.log("exchange rates", this.exchangeRates);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  },
  mounted: function mounted() {
    this.logout = logout;
    this.getUserProfile = getUserProfile;

    if (this.getUserProfile()) {
      this.userProfile = this.getUserProfile();
    }

    this.fetchExchangeRates();
  }
});