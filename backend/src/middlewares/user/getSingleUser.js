const User = require("./../../schemas/user");

module.exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(200).json({
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error collecting data",
    });
  }
};
