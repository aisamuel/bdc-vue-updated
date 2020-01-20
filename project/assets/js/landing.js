const landingApp = new Vue({
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
    storeLandingData() {
      localStorage.setItem("landingData", {
        amountInNaira: this.amountInNaira,
        amountInCurrency: this.amountInCurrency,
        selectedCurrency: this.selectedCurrency
      });
    },
    async fetchExchangeRates() {
      const res = await fetch(`${baseURL}${this.exchangeRatesURL}`, {
        mode: "cors"
      });
      if (res) {
        const result = await res.json();
        if (result) this.exchangeRates = result;
        this.selectedCurrency = this.exchangeRates[0];
        //TODO selling rates and buying rates should come from DB
        this.sellingRates = JSON.parse(JSON.stringify(this.exchangeRates));
        this.buyingRates = JSON.parse(JSON.stringify(this.exchangeRates));
        console.log("exchange rates", this.exchangeRates);
      }
    }
  },
  mounted: function() {
    this.logout = logout;
    this.getUserProfile = getUserProfile;
    if (this.getUserProfile()) {
      this.userProfile = this.getUserProfile();
    }
    this.fetchExchangeRates();
  }
});
