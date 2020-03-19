const axios = require("axios");
const { PORT } = require("../config/constants");

async function meExample() {
  try {
    // 1. first login to get a token
    // this assumes you seeded the test user using sequelize cli seeds
    // if you havent follow the setup steps from the readme first
    const responseLogin = await axios.post(`http://localhost:${PORT}/login`, {
      email: "test@test.com",
      password: "test1234"
    });
    console.log("RESPONSE FROM SERVER", responseLogin.data);

    const token = responseLogin.data.token;

    // 2. now we can use the token in the /me endpoint to get
    // the email & name of this user
    const responseMe = await axios.get(`http://localhost:${PORT}/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(responseMe);
  } catch (error) {
    console.log("OH NO AN ERROR", error.message);
    console.log("WHAT HAPPENED?", error.response.data);
  }
}

meExample();
