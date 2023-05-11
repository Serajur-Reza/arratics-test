const Item = require("./../../schemas/item");

module.exports.getSingleItem = async (req, res) => {
  try {
    const item = await Item.find({ _id: req.params.id });
    res.status(200).json({
      data: item,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error collecting data",
    });
  }
};
