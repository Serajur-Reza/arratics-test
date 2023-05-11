const User = require("./../../schemas/user");

module.exports.getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      error: "Error collecting data",
    });
  }
};
