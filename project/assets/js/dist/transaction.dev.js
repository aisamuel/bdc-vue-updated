"use strict";

var transactionApp = new Vue({
  el: "#transactionApp",
  data: {
    bdcBankAccounts: [{
      accountName: "Test Account",
      accountNumber: "24373284322",
      bankName: "Zenith Bank"
    }],
    userBankAccounts: [],
    exchangeRates: [],
    sellingRates: [],
    buyingRates: [],
    userSelectedBankAccount: {
      accountNumber: "",
      accountName: "",
      bankName: ""
    },
    bdcSelectedBankAccount: {
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
    fetchBDCBankAccounts: function fetchBDCBankAccounts() {
      var res, result;
      return regeneratorRuntime.async(function fetchBDCBankAccounts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(baseURL).concat(this.bankAccountsURL), {
                mode: "cors"
              }));

            case 2:
              res = _context.sent;

              if (!res) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return regeneratorRuntime.awrap(res.json());

            case 6:
              result = _context.sent;
              console.log(result);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    fetchExchangeRates: function fetchExchangeRates() {
      var res, result;
      return regeneratorRuntime.async(function fetchExchangeRates$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(baseURL).concat(this.exchangeRatesURL), {
                mode: "cors"
              }));

            case 2:
              res = _context2.sent;

              if (!res) {
                _context2.next = 12;
                break;
              }

              _context2.next = 6;
              return regeneratorRuntime.awrap(res.json());

            case 6:
              result = _context2.sent;
              if (result) this.exchangeRates = result;
              this.selectedCurrency = this.exchangeRates[0]; //TODO selling rates and buying rates should come from DB

              this.sellingRates = JSON.parse(JSON.stringify(this.exchangeRates));
              this.buyingRates = JSON.parse(JSON.stringify(this.exchangeRates));
              console.log("exchange rates", this.exchangeRates);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    addBankAccount: function addBankAccount() {
      var requestBody, res, result;
      return regeneratorRuntime.async(function addBankAccount$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              requestBody = {
                accountNumber: this.userSelectedBankAccount.accountNumber,
                accountName: this.userSelectedBankAccount.accountName,
                bankName: this.userSelectedBankAccount.bankName,
                token: getToken()
              };
              _context3.next = 3;
              return regeneratorRuntime.awrap(fetch("".concat(baseURL).concat(this.addBankURL).concat(this.userProfile._id), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
              }));

            case 3:
              res = _context3.sent;

              if (!res) {
                _context3.next = 9;
                break;
              }

              _context3.next = 7;
              return regeneratorRuntime.awrap(res.json());

            case 7:
              result = _context3.sent;
              console.log(result);

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    fetchUserAccounts: function fetchUserAccounts() {
      var res, result;
      return regeneratorRuntime.async(function fetchUserAccounts$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(fetch("".concat(baseURL).concat(this.userBankAccountsURL).concat(this.userProfile._id), {
                mode: "cors"
              }));

            case 2:
              res = _context4.sent;

              if (!res) {
                _context4.next = 9;
                break;
              }

              _context4.next = 6;
              return regeneratorRuntime.awrap(res.json());

            case 6:
              result = _context4.sent;
              console.log(result);
              this.userBankAccounts = result.bank;

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    },
    generateRandomString: function generateRandomString() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    },
    convertCurrency: function convertCurrency() {
      var toNaira = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (toNaira) {
        this.amountInNaira = this.selectedCurrency.rateToNaira * this.amountInCurrency;
      } else {
        this.amountInCurrency = this.amountInNaira / this.selectedCurrency.rateToNaira;
      }
    },
    switchMode: function switchMode() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "buy";
      this.activeMode = mode;
      console.log("switching mode", mode);

      if (mode = "buy") {
        this.exchangeRates = JSON.parse(JSON.stringify(this.buyingRates));
        this.convertCurrency();
      } else {
        this.exchangeRates = JSON.parse(JSON.stringify(this.sellingRates));
        this.convertCurrency();
      }
    },
    checkAccountIsUnique: function checkAccountIsUnique() {
      var _this = this;

      this.accountIsUnique = true;
      this.userBankAccounts.find(function (val) {
        console.log(val);

        if (Number(val.accountNumber) === Number(_this.userSelectedBankAccount.accountNumber)) {
          console.log("Account is not unique");
          _this.accountIsUnique = false;
        } else {
          console.log("Account is unique");
        }
      });
    },
    payWithPaystack: function (_payWithPaystack) {
      function payWithPaystack() {
        return _payWithPaystack.apply(this, arguments);
      }

      payWithPaystack.toString = function () {
        return _payWithPaystack.toString();
      };

      return payWithPaystack;
    }(function () {
      payWithPaystack(this.userProfile, this.amountInNaira, this.randomString, this.generateRandomString);
    }),
    checkoutBankTransaction: function checkoutBankTransaction() {
      var transaction = {
        refference: this.randomString,
        giveCurrency: "NGN",
        giveAmount: this.amountInNaira,
        recieveCurrency: this.selectedCurrency.currency,
        recieveAmount: this.amountInCurrency,
        creditAccount: this.bdcSelectedBankAccount.accountNumber,
        debitAccount: this.userSelectedBankAccount.accountNumber,
        userId: this.userProfile._id,
        transactionId: this.randomString,
        isDelivered: false,
        bankName: this.bdcSelectedBankAccount.accountName
      };
      localStorage.setItem("transaction", JSON.stringify(transaction));
      window.location.href = "/success";
    },
    switchPaymentMethod: function switchPaymentMethod() {}
  },
  mounted: function mounted() {
    this.logout = logout;
    this.randomString = this.generateRandomString();
    this.getUserProfile = getUserProfile;

    if (this.getUserProfile()) {
      this.userProfile = this.getUserProfile();
    }

    this.fetchExchangeRates();
    this.fetchUserAccounts();
  }
});