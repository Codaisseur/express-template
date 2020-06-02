const { Router } = require("express");
const Homepage = require("../models").homepage;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const homepages = await Homepage.findAll();
    res.send(homepages);
  } catch (e) {
    next(e);
  }
}); // /homepages/ - GET

module.exports = router;
