const transactionApp = new Vue({
    el: "#landingApp",
    data: {
        bdcBankAccounts: [
            {
                currency: "NGN",
                accountName: "313 BDC LTD",
                accountNumber: "1227771089",
                bankName: "Access Bank"
            },
            {
                currency: "USD",
                accountName: "313 BDC LTD",
                accountNumber: "1232616218",
                bankName: "Access Bank"
            },
            {
                currency: "POUNDS",
                accountName: "313 BDC LTD",
                accountNumber: "1232777090",
                bankName: "Access Bank"
            },
            {
                currency: "EUROS",
                accountName: "313 BDC LTD",
                accountNumber: "1232614135",
                bankName: "Access Bank"
            },
            {
                currency: "NGN",
                accountName: "313 BDC LTD",
                accountNumber: "4011356047",
                bankName: "Fidelity Bank"
            },
            {
                currency: "USD",
                accountName: "313 BDC LTD",
                accountNumber: "5250207095",
                bankName: "Fidelity Bank"
            },
            {
                currency: "POUNDS",
                accountName: "313 BDC LTD",
                accountNumber: "5250207112",
                bankName: "Fidelity Bank"
            },
            {
                currency: "EUROS",
                accountName: "313 BDC LTD",
                accountNumber: "5250207105",
                bankName: "Fidelity Bank"
            },
            {
                currency: "NGN",
                accountName: "313 BDC LTD(PROJECT)",
                accountNumber: "1009064840",
                bankName: "Keystone Bank"
            },
            {
                currency: "USD",
                accountName: "313 BDC LTD(PROJECT)",
                accountNumber: "1009064888",
                bankName: "Keystone Bank"
            },
            {
                currency: "POUNDS",
                accountName: "313 BDC LTD(PROJECT)",
                accountNumber: "1009064895",
                bankName: "Keystone Bank"
            },
            {
                currency: "EUROS",
                accountName: "313 BDC LTD(PROJECT)",
                accountNumber: "1009064905",
                bankName: "Keystone Bank"
            },
            {
                currency: "NGN",
                accountName: "313 BDC LTD",
                accountNumber: "1022361766",
                bankName: "United Bank for Africa (UBA)"
            },
            {
                currency: "USD",
                accountName: "313 BDC LTD",
                accountNumber: "3002781762",
                bankName: "United Bank for Africa (UBA)"
            },
            {
                currency: "POUNDS",
                accountName: "313 BDC LTD",
                accountNumber: "3002781779",
                bankName: "United Bank for Africa (UBA)"
            },
            {
                currency: "EUROS",
                accountName: "313 BDC LTD",
                accountNumber: "3002781810",
                bankName: "United Bank for Africa (UBA)"
            },
            {
                currency: "NGN",
                accountName: "313 BDC LTD",
                accountNumber: "1016787752",
                bankName: "Zenith Bank"
            },
            {
                currency: "USD",
                accountName: "313 BDC LTD",
                accountNumber: "5071226935",
                bankName: "Zenith Bank"
            },
            {
                currency: "POUNDS",
                accountName: "313 BDC LTD",
                accountNumber: "5080305944",
                bankName: "Zenith Bank"
            },
            {
                currency: "EUROS",
                accountName: "313 BDC LTD",
                accountNumber: "5060312654",
                bankName: "Zenith Bank"
            },
        ],
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
        bdcSelectedBankAccount: {
            accountNumber: "",
            accountName: "",
            bankName: ""
        },
        selectedexchangeRates: [],
        bdcFilteredAccount: [],
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
        async fetchBDCBankAccounts() {
            const res = await fetch(`${baseURL}${this.bankAccountsURL}`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                console.log(result);
            }
        },
        async fetchExchangeRates() {
            const res = await fetch(`${baseURL}${this.exchangeRatesURL}`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                if (result) this.exchangeRates = result;
                this.selectedCurrency = this.exchangeRates[1];
                //TODO selling rates and buying rates should come from DB
                this.sellingRates = JSON.parse(JSON.stringify(this.exchangeRates));
                this.buyingRates = JSON.parse(JSON.stringify(this.exchangeRates));
                console.log("exchange rates", this.exchangeRates);

                this.selectedRates();
            }
        },
        async addBankAccount() {
            const requestBody = {
                accountNumber: this.userSelectedBankAccount.accountNumber,
                accountName: this.userSelectedBankAccount.accountName,
                bankName: this.userSelectedBankAccount.bankName,
                token: getToken()
            };
            const res = await fetch(`${baseURL}${this.addBankURL}${this.userProfile._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });
            if (res) {
                const result = await res.json();
                console.log(result);
            }
        },
        async fetchUserAccounts() {
            const res = await fetch(`${baseURL}${this.userBankAccountsURL}${this.userProfile._id}`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                console.log(result);
                this.userBankAccounts = result.bank;
            }
        },
        filterbdc() {
            this.bdcFilteredAccount = [];
            this.bdcBankAccounts.forEach((element) => {
                if (element.bankName == this.userSelectedBankAccount.bankName) {
                    console.log(element);
                    this.bdcFilteredAccount.push(element);
                }
        });

        },
        selectedRates() {
            // selectedexchangeRates
            this.exchangeRates.forEach((element) => {
                if (element.currency != "NAIRA") {
                    this.selectedexchangeRates.push(element);
                }
            })

        },
        generateRandomString() {
            return (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
        },
        convertCurrency(toNaira = true) {
            if (toNaira) {
                this.amountInNaira = Math.round((this.selectedCurrency.rateToNaira * this.amountInCurrency) * 100) / 100;
            } else {
                this.amountInCurrency = Math.round((this.amountInNaira / this.selectedCurrency.rateToNaira) * 100) /100;
            }
        },
        switchMode(mode = "buy") {
            this.activeMode = mode;
            console.log("switching mode", mode);
            if ((mode = "buy")) {
                this.exchangeRates = JSON.parse(JSON.stringify(this.buyingRates));
                this.convertCurrency();
            } else {
                this.exchangeRates = JSON.parse(JSON.stringify(this.sellingRates));
                this.convertCurrency();
            }
        },
        checkAccountIsUnique() {
            this.accountIsUnique = true;
            this.userBankAccounts.find(val => {
                console.log(val);
                if (Number(val.accountNumber) === Number(this.userSelectedBankAccount.accountNumber)) {
                    console.log("Account is not unique");
                    this.accountIsUnique = false;
                } else {
                    console.log("Account is unique");
                }
            });
        },
        payWithPaystack() {
            payWithPaystack(this.userProfile, this.amountInNaira, this.randomString, this.generateRandomString);
        },
        routeToRegister() {
            window.location.href = "/signup"
        },
        switchPaymentMethod() {}
    },
    mounted: function() {
        this.logout = logout;
        this.randomString = this.generateRandomString();
        this.getUserProfile = getUserProfile;
        if (this.getUserProfile()) {
            window.location.href = "new-transaction"
            // this.userProfile = this.getUserProfile();
        }
        this.fetchExchangeRates();
        this.fetchUserAccounts();
    }
});