const { Router } = require("express");
const Homepage = require("../models").homepage;
const authMiddleware = require("../auth/middleware");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const homepages = await Homepage.findAll();
    res.send(homepages);
  } catch (e) {
    next(e);
  }
}); // /homepages/ - GET

router.patch("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { title, description, color, backgroundColor } = req.body;
    const { id } = req.params;
    const toUpdate = await Homepage.findByPk(id);

    const updated = await toUpdate.update({
      title,
      description,
      color,
      backgroundColor,
    });

    res.json(updated);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
