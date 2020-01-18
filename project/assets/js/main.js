const baseURL = "https://bcd-backend.herokuapp.com/";

const getUserProfile = () => {
  try {
    const profile = JSON.parse(localStorage.getItem("userProfile"));
    return profile;
  } catch (e) {
    console.log(e);
    return;
  }
};

const setUserProfile = userProfile => {
  return localStorage.setItem("userProfile", userProfile);
};

const getToken = () => {
  return localStorage.getItem("token");
};

const setToken = token => {
  return localStorage.setItem("setToken", token);
};
