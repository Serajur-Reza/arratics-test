const Item = require("./../../schemas/item");

module.exports.createItem = async (req, res) => {
  try {
    console.log(req.body);
    const item = new Item(req.body);

    await item.save();

    res.status(200).json({
      message: "Successfully added item",
    });
  } catch (err) {
    res.status(500).json({
      error: "There is a problem adding the item",
    });
  }
};
