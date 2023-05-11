const Item = require("./../../schemas/item");

module.exports.getItems = async (req, res) => {
  try {
    const item = await Item.find();
    console.log("getitemms :", item);
    res.status(200).json({
      data: item,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error collecting data",
    });
  }
};
