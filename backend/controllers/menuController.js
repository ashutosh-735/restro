const Menu = require("../models/Menu");

exports.getMenu = async (req, res) => {
  const menu = await Menu.find();
  res.json(menu);
};

exports.addMenu = async (req, res) => {
  const item = await Menu.create(req.body);
  res.json(item);
};

exports.deleteMenu = async (req, res) => {
  await Menu.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};