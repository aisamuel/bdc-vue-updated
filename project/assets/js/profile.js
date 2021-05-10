// console.log("Vue app runs")
const profileApp = new Vue({
    el: "#profileApp",
    data: {
        userData: {},
        name: 'imageUpload',
        updateURL: `${baseURL}reg/update-user/`,
        uploadURL: `${baseURL}reg/image/`,
        item:{
            //...
            image : null,
            imageUrl: null
        }
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
        },
        upload: async function() {
            const res = await fetch(`${this.uploadURL}${this.userData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.item)
            });
            if (res) {
                const result = await res.json();
                console.log(result)
                alert(result.message)
            }
            console.log(this.image);
        },
        onChange(e) {
            const file = e.target.files[0]
            this.image = file
            this.item.imageUrl = URL.createObjectURL(file)
          },
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