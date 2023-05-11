const User = require("./../../schemas/user");

module.exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    res.status(200).json({
      message: "Successfully added user",
    });
  } catch (err) {
    res.status(500).json({
      error: "There is a problem adding the user",
    });
  }
};
