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
                accountName: "313 BUSINESS POINT",
                accountNumber: "2035231767",
                bankName: "First Bank"
            },
            {
                currency: "USD",
                accountName: "313 BDC LTD",
                accountNumber: "2026046433",
                bankName: "First Bank"
            },
            {
                currency: "GBP",
                accountName: "313 BDC LTD",
                accountNumber: "2026040457",
                bankName: "First Bank"
            },
            {
                currency: "EUR",
                accountName: "313 BDC LTD",
                accountNumber: "2026046464",
                bankName: "First Bank"
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
            bankName: "",
            currencyType: ""
        },
        bdcSelectedBankAccount: {
            accountNumber: "",
            accountName: "",
            bankName: ""
        },
        userProfile: {},
        noOfPendingTrans: [],
        noOfSuccessfulTrans: [],
        noOfFailedTrans: [],
        // userBanks: [],
        buyTransactionLogs: [],
        no_of_buy_trans: 1,
        sellTransactionLogs: [],
        selectedCurrency: {},
        amountInCurrency: null,
        amountInNaira: null,
        withBank: false,
        // mode: "buy",
        randomString: "",
        bankAccountsURL: "reg/accounts",
        getBanksURL: "reg/user-banks/",
        exchangeRatesURL: "fx/all-currency/",
        addBankURL: "reg/addBank/",
        deleteBankURL: "reg/delUser-bank/",
        userBankAccountsURL: "reg/user-banks/",
        buyTransURL: "trans/buy/",
        sellTransURL: "trans-sell/sell",
        buyTransLogURL: "trans/all-buy/",
        sellTransLogURL: "trans-sell/all-sell/",
        noOfTrans: "trans-logs/user-trans-logs?uid=",
        activeMode: "buy",
        paymentMethod: "card",
        acceptAgreement: false,
        accountIsUnique: true
    },
    watch: {
        amountInNaira: function(newValue) {
          const result = newValue.replace(/\D/g, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          Vue.nextTick(() => this.amountInNaira = result);
        }
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
                this.no_of_buy_trans = this.buyTransactionLogs.length;
                console.log(this.buyTransactionLogs);
                console.log(this.buyTransactionLogs.length);
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

        async fetchNoOfPendingTransactions() {
            const res = await fetch(`${baseURL}${this.noOfTrans}${this.userProfile._id}&status=pending`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                // console.log(result);
                this.noOfPendingTrans = JSON.parse(JSON.stringify(result));
                console.log("fetching no of pending trans");
                console.log(this.noOfPendingTrans);
            }
            else {
                console.log("not fetching no of pending trans");
            }
           
        },


        async fetchNoOfSuccessfulTransactions() {
            const res = await fetch(`${baseURL}${this.noOfTrans}${this.userProfile._id}&status=successful`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                this.noOfSuccessfulTrans = JSON.parse(JSON.stringify(result));
                console.log("fetching no of successful trans");
                console.log(this.noOfSuccessfulTrans);
            }
            else {
                console.log("not fetching no of successful trans");
            }
           
        },

        async fetchNoOfFailedTransactions() {
            const res = await fetch(`${baseURL}${this.noOfTrans}${this.userProfile._id}&status=failed`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                this.noOfFailedTrans = JSON.parse(JSON.stringify(result));
                console.log("fetching no of failed trans");
                console.log(this.noOfFailedTrans);
            }
            else {
                console.log("not fetching no of failed trans");
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
            console.log(this.userSelectedBankAccount);
            const requestBody = {
                accountNumber: this.userSelectedBankAccount.accountNumber,
                accountName: this.userSelectedBankAccount.accountName,
                bankName: this.userSelectedBankAccount.bankName,
                currencyType: this.userSelectedBankAccount.currencyType,
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
                alert("Account has been successfully added!")
                console.log(result);
                this.fetchUserAccounts();
                console.log(this.userSelectedBankAccount);
            }
        },

        async deleteBankAccount(bankID) {
            const res = await fetch(`${baseURL}${this.deleteBankURL}${this.userProfile._id}/${bankID}`, {
                mode: "cors"
            });
            if (res) {
                const result = await res.json();
                console.log(result);
                alert("Account successfully deleted");
                this.fetchUserAccounts();
            }
            // const res = await fetch(`${baseURL}${this.deleteBankURL}${this.userProfile._id}/${bankID}`, {
            //     method: "DELETE",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     // body: JSON.stringify(this.item)
            // });
            // if (res) {
            //     const result = await res.json();
            //     console.log(result)
            //     alert(result.message)
            // }
            // console.log(this.image);
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
        convertCurrencySell(toNaira = true) {
            console.log("convert currency")
            if (toNaira) {
                this.amountInNaira = Math.round((this.selectedCurrency.rateToNaira * this.amountInCurrency) * 100) / 100;
            } else {
                this.amountInCurrency = Math.round((this.amountInNaira / this.selectedCurrency.rateToNaira) * 100) /100;
            }
        },
        convertCurrencyBuy(toNaira = true) {
            console.log("convert currency sell")
            if (toNaira) {
                this.amountInNaira = Math.round((this.selectedCurrency.rateFromNaira * this.amountInCurrency) * 100) / 100;
            } else {
                this.amountInCurrency = Math.round((this.amountInNaira / this.selectedCurrency.rateFromNaira) * 100) /100;
            }
        },
        switchMode(mode = "buy") {
            this.activeMode = mode;
            console.log("switching mode", mode);
            this.amountInNaira = null;
            this.amountInCurrency = null;
            if ((mode = "buy")) {
                this.exchangeRates = JSON.parse(JSON.stringify(this.buyingRates));
                this.convertCurrencyBuy();
            } else {
                this.exchangeRates = JSON.parse(JSON.stringify(this.sellingRates));
                this.convertCurrencySell();
                
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
        addCommas(nStr)
{
            nStr += '';
            x = nStr.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        },
        payWithFlutterwave() {
            payWithFlutterwave(this.userProfile, this.amountInNaira, this.randomString, this.generateRandomString);
            console.log(this.amoutInNaira);
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
        this.fetchNoOfPendingTransactions();
        this.fetchNoOfSuccessfulTransactions();
        this.fetchNoOfFailedTransactions();
        this.fetchBuyTransactionLogs();
        this.fetchSellTransactionLogs();
        
        // this.fetchUserBanks();
    }
});