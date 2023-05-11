const User = require("./../../schemas/user");

module.exports.deleteUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findByIdAndDelete(req.params.id, {
      useFindAndModify: false,
    });

    res.status(200).json({
      message: "Successfully deleted user",
    });
  } catch (err) {
    res.status(500).json({
      error: "There is a problem deleting the user",
    });
  }
};
