const Item = require("./../../schemas/item");

module.exports.editItem = async (req, res) => {
  console.log("faeefaf", req.body);
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    res.status(200).json({
      data: item,
    });
    console.log(" itemm:", item);
  } catch (err) {
    res.status(500).json({
      error: "There is a problem editing the item",
    });
  }
};
