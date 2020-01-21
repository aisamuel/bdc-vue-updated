// console.log("Vue app runs")
const profileApp = new Vue({
    el: "#profileApp",
    data: {
        userData: {},
        updateURL: `${baseURL}reg/update-user/`
    },
    methods: {
        updateProfile: async function() {
            const res = await fetch(`${this.updateURL}${this.userData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.userData)
            });
            if (res) {
                const result = await res.json();
                console.log(result)
                this.setUserProfile(JSON.stringify(this.userData))
                alert(result.message)
            }
            console.log(this.userData);
        }
    },
    mounted: function() {
        console.log("Vue app mounted");
        this.setUserProfile = setUserProfile;
        this.getUserProfile = getUserProfile;
        this.logout = logout;
        setTimeout(() => {
            this.userData = getUserProfile();
            if (!this.userData) {
                window.location.href = "/login"
            }
        }, 1000)
    }
});