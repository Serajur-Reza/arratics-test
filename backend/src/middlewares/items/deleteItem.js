const Item = require("./../../schemas/item");

module.exports.deleteItem = async (req, res) => {
  try {
    console.log(req.body);
    await Item.findByIdAndDelete(req.params.id, {
      useFindAndModify: false,
    });
    res.status(200).json({
      message: "Successfully deleted item",
    });
  } catch (err) {
    res.status(500).json({
      error: "There is a problem deleting the item",
    });
  }

  // item.save((err) => {
  //   if (!err) {
  //   } else {
  //   }
  // });
};
