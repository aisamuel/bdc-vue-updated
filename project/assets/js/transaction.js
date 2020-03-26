const transactionApp = new Vue({
    el: "#transactionApp",
    data: {
        bdcBankAccounts: [
            {
                currency: "NAIRA",
                accountName: "F.C.M.B 313",
                accountNumber: "2168669089",
                bankName: "First City Monument Bank (FCMB)"
            },
            {
                currency: "USD",
                accountName: "F.C.M.B 313",
                accountNumber: "2168669096",
                bankName: "First City Monument Bank (FCMB)"
            },
            {
                currency: "GBP",
                accountName: "F.C.M.B 313",
                accountNumber: "2168669106",
                bankName: "First City Monument Bank (FCMB)"
            },
            {
                currency: " EUR",
                accountName: "F.C.M.B 313",
                accountNumber: "2168669113",
                bankName: "First City Monument Bank (FCMB)"
            },
            {
                currency: "NAIRA",
                accountName: "G.T.B BDC LTD",
                accountNumber: "0212987103",
                bankName: "Guarantee Trust Bank (GTB)"
            },
            {
                currency: "USD",
                accountName: "G.T.B BDC LTD",
                accountNumber: "0212987718",
                bankName: "Guarantee Trust Bank (GTB)"
            },
            {
                currency: "GBP",
                accountName: "G.T.B BDC LTD",
                accountNumber: "0212987770",
                bankName: "Guarantee Trust Bank (GTB)"
            },
            {
                currency: "EUR",
                accountName: "G.T.B BDC LTD",
                accountNumber: "0212987794",
                bankName: "Guarantee Trust Bank (GTB)"
            },
            {
                currency: "NAIRA",
                accountName: "STANBIC IBTC 313 BDC LTD",
                accountNumber: "0034916851",
                bankName: "stanbic"
            },
            {
                currency: "USD",
                accountName: "STANBIC IBTC 313 BDC LTD",
                accountNumber: "0034916868",
                bankName: "stanbic"
            },
            {
                currency: "GBP",
                accountName: "STANBIC IBTC 313 BDC LTD",
                accountNumber: "0034916882",
                bankName: "stanbic"
            },
            {
                currency: "EUR",
                accountName: "STANBIC IBTC 313 BDC LTD",
                accountNumber: "0034916882",
                bankName: "stanbic"
            },
            {
                currency: "NAIRA",
                accountName: "STERLING 313 BDC LTD",
                accountNumber: "0076151182",
                bankName: "Sterling Bank"
            },
            {
                currency: "USD",
                accountName: "STERLING 313 BDC LTD",
                accountNumber: "0076153454",
                bankName: "Sterling Bank"
            },
            {
                currency: "EUR",
                accountName: "STERLING 313 BDC LTD",
                accountNumber: "0076151168",
                bankName: "Sterling Bank"
            },
            {
                currency: "GBP",
                accountName: "STERLING 313 BDC LTD",
                accountNumber: "0096151034",
                bankName: "Sterling Bank"
            },
            {
                currency: "NARIA",
                accountName: "JAIZ 313 BDC LTD",
                accountNumber: "0005598375",
                bankName: "Jaiz Bank"
            },
            {
                currency: "USD",
                accountName: "JAIZ 313 BDC LTD",
                accountNumber: "0005598375",
                bankName: "Jaiz Bank"
            },
            {
                currency: "GBP",
                accountName: "JAIZ 313 BDC LTD",
                accountNumber: "0005598399",
                bankName: "Jaiz Bank"
            },
            {
                currency: "EUR",
                accountName: "JAIZ 313 BDC LTD",
                accountNumber: "0005598351",
                bankName: "Jaiz Bank"
            },
            {
                currency: "NAIRA",
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
                currency: "GBP",
                accountName: "313 BDC LTD",
                accountNumber: "1232777090",
                bankName: "Access Bank"
            },
            {
                currency: "EUR",
                accountName: "313 BDC LTD",
                accountNumber: "1232614135",
                bankName: "Access Bank"
            },
            {
                currency: "NAIRA",
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
                currency: "GBP",
                accountName: "313 BDC LTD",
                accountNumber: "5250207112",
                bankName: "Fidelity Bank"
            },
            {
                currency: "EUR",
                accountName: "313 BDC LTD",
                accountNumber: "5250207105",
                bankName: "Fidelity Bank"
            },
            {
                currency: "NAIRA",
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
                currency: "GBP",
                accountName: "313 BDC LTD(PROJECT)",
                accountNumber: "1009064895",
                bankName: "Keystone Bank"
            },
            {
                currency: "EUR",
                accountName: "313 BDC LTD(PROJECT)",
                accountNumber: "1009064905",
                bankName: "Keystone Bank"
            },
            {
                currency: "NAIRA",
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
                currency: "GBP",
                accountName: "313 BDC LTD",
                accountNumber: "3002781779",
                bankName: "United Bank for Africa (UBA)"
            },
            {
                currency: "EUR",
                accountName: "313 BDC LTD",
                accountNumber: "3002781810",
                bankName: "United Bank for Africa (UBA)"
            },
            {
                currency: "NAIRA",
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
                currency: "GBP",
                accountName: "313 BDC LTD",
                accountNumber: "5080305944",
                bankName: "Zenith Bank"
            },
            {
                currency: "EUR",
                accountName: "313 BDC LTD",
                accountNumber: "5060312654",
                bankName: "Zenith Bank"
            },
        ],
        bdcFilteredAccount: [],
        userBankAccounts: [],
        exchangeRates: [],
        selectedexchangeRates: [],
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
        // userBanks: [],
        buyTransactionLogs: [],
        sellTransactionLogs: [],
        selectedCurrency: {},
        amountInCurrency: null,
        amountInNaira: null,
        withBank: false,
        randomString: "",
        bankAccountsURL: "reg/accounts",
        getBanksURL: "reg/user-banks/",
        exchangeRatesURL: "fx/all-currency/",
        addBankURL: "reg/addBank/",
        userBankAccountsURL: "reg/user-banks/",
        buyTransURL: "trans/buy/",
        sellTransURL: "trans-sell/sell",
        buyTransLogURL: "trans/all-buy/",
        sellTransLogURL: "trans-sell/all-sell/",
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

        async fetchBuyTransactionLogs() {
            const res = await fetch(`${baseURL}${this.buyTransLogURL}${this.userProfile._id}`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                this.buyTransactionLogs = JSON.parse(JSON.stringify(result));
                console.log(this.buyTransactionLogs);
            }
        },

        async fetchSellTransactionLogs() {
            const res = await fetch(`${baseURL}${this.sellTransLogURL}${this.userProfile._id}`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                this.sellTransactionLogs = JSON.parse(JSON.stringify(result.result));
                console.log(this.sellTransactionLogs);
            }
        },

        // async fetchUserBanks() {
        //     const res = await fetch(`${baseURL}${this.getBanksURL}${this.userProfile._id}`, {
        //         mode: "cors"
        //     });
        //     if (res) {
        //         const result = await res.json();
        //         this.userBanks = JSON.parse(JSON.stringify(result.bank));
        //         console.log(this.userBanks);
        //     }
        // },

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
                this.fetchUserBanks();
            }
        },

        async buyTransactionAccount() {
            const requestBody = {
                giveCurrency: "NGN",
                giveAmount: this.amountInNaira,
                recieveCurrency: this.selectedCurrency.currency,
                recieveAmount: this.amountInCurrency,
                transactionId: this.userProfile._id,
                // userId: this.userProfile._id,
                // isDelivered: false,
                // deliveryMethod: phone,
                bcdAccountName: this.bdcSelectedBankAccount.accountName,
                bcdAccountNumber: this.bdcSelectedBankAccount.accountNumber,
                bcdBankName: this.bdcSelectedBankAccount.bankName,
                reference: this.randomString,
                userId: this.userProfile._id,
                // accountNumber: this.userSelectedBankAccount.accountNumber,
                // accountName: this.userSelectedBankAccount.accountName,
                // bankName: this.userSelectedBankAccount.bankName,
                token: getToken()
            };
            const res = await fetch(`${baseURL}${this.buyTransURL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });
            if (res) {
                const result = await res.json();
                console.log(result);
                console.log("buy transaction was successful");
                this.fetchBuyTransactionLogs();
                window.location.href = "/success";
                // this.fetchUserAccounts();
            }
        },

        async sellTransactionAccount() {
            const requestBody = {
                payCurrency: this.selectedCurrency.currency,
                payAmount: this.amountInCurrency,
                recieveCurrency: "NGN",
                recieveAmount: this.amountInNaira,
                bcdAccountName: this.bdcSelectedBankAccount.accountName,
                refference: this.randomString,
                bcdAccountNumber: this.bdcSelectedBankAccount.accountNumber,
                bcdBankName: this.bdcSelectedBankAccount.bankName,
                userId: this.userProfile._id,
                // isDelivered: false,
                // deliveryMethod: phone,
                // creditAccount: this.bdcSelectedBankAccount.accountNumber,
                // accountNumber: this.userSelectedBankAccount.accountNumber,
                // accountName: this.userSelectedBankAccount.accountName,
                // bankName: this.userSelectedBankAccount.bankName,
                token: getToken()
            };
            const res = await fetch(`${baseURL}${this.sellTransURL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });
            if (res) {
                const result = await res.json();
                console.log(result);
                // this.buyTransactionAccount();
                this.fetchSellTransactionLogs();
                window.location.href = "/success";
                // this.fetchUserAccounts();
            }
        },

        
        async fetchUserAccounts() {
            const res = await fetch(`${baseURL}${this.userBankAccountsURL}${this.userProfile._id}`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                console.log(result);
                this.userBankAccounts = result;
            }
        },

        filterbdc() {
            this.bdcFilteredAccount = [];
            this.bdcBankAccounts.forEach((element) => {
                if (element.bankName == this.userSelectedBankAccount.bankName && element.currency == this.selectedCurrency.currency) {
                    console.log(element);
                    this.bdcFilteredAccount.push(element);
                }
            this.bdcSelectedBankAccount = this.bdcFilteredAccount[0];
        });
        },

        payWithBank() {
            this.withBank = true;
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
        selectbdcAccount() {


        },
        payWithFlutterwave() {
            payWithFlutterwave(this.userProfile, this.amountInNaira, this.randomString, this.generateRandomString);
        },
        payWithPaystack() {
            payWithPaystack(this.userProfile, this.amountInNaira, this.randomString, this.generateRandomString);
        },
        checkoutBankTransaction() {
            const transaction = {
                refference: this.randomString,
                giveCurrency: "NGN",
                giveAmount: this.amountInNaira,
                recieveCurrency: this.selectedCurrency.currency,
                recieveAmount: this.amountInCurrency,
                creditAccount: this.bdcSelectedBankAccount.accountNumber,
                debitAccount: this.userSelectedBankAccount.accountNumber,
                user: this.userProfile,
                userId: this.userProfile._id,
                transactionId: this.randomString,
                isDelivered: false,
                bankName: this.bdcSelectedBankAccount.accountName,
                accountHolder: this.bdcSelectedBankAccount.bankName,
                mode: this.activeMode
            };
            localStorage.setItem("transaction", JSON.stringify(transaction));
            this.sellOrBuyTransaction();
            // window.location.href = "/success";
        },

        sellOrBuyTransaction() {
            if (this.activeMode == "buy") {
                console.log("buy transaction taking place");
                this.buyTransactionAccount();
            } else {
                console.log("sell transaction taking place");
                this.sellTransactionAccount();
            }
        },

        switchPaymentMethod() {}
    },
    mounted: function() {
        this.logout = logout;
        this.randomString = this.generateRandomString();
        this.getUserProfile = getUserProfile;
        if (this.getUserProfile()) {
            this.userProfile = this.getUserProfile();
        } else {
          window.location.href = "login"
        }
        this.fetchExchangeRates();
        this.fetchUserAccounts();
        this.fetchBuyTransactionLogs();
        this.fetchSellTransactionLogs();
        // this.fetchUserBanks();
    }
});