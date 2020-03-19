const axios = require("axios");
const { PORT } = require("../config/constants");

async function helloExample() {
  const response = await axios.get(`http://localhost:${PORT}/`);

  console.log("RESPONSE FROM SERVER", response.data);
}

helloExample();
