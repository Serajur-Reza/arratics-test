const User = require("./../../schemas/user");

module.exports.editUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    res.status(200).json({
      message: "Successfully edited user",
    });
  } catch (err) {
    res.status(500).json({
      error: "There is a problem editing the user",
    });
  }
};
