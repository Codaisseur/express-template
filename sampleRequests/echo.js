const axios = require("axios");
const { PORT } = require("../config/constants");

async function echoExample() {
  const response = await axios.post(`http://localhost:${PORT}/echo`, {
    hello: "World"
  });

  console.log("RESPONSE FROM SERVER", response.data);
}

echoExample();
