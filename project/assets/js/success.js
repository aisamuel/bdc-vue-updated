const successApp = new Vue({
    el: "#panel",
    data: {
        transactionData: JSON.parse(localStorage.getItem("transaction")),
        userProfile: getUserProfile(),
        date: new Date().toLocaleString(),
        
    },
    methods: {
        landingPage: function() {
            console.log("landing working");
            window.location.href = "/landing"
        }
    }
})