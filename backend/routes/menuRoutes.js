const router = require("express").Router();
const { getMenu, addMenu, deleteMenu } = require("../controllers/menuController");

router.get("/", getMenu);
router.post("/", addMenu);
router.delete("/:id", deleteMenu);

module.exports = router;