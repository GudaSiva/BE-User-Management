// const getUser = (req, res) => {
//   res.status(200).json({ message: "This user get response" });
//   console.log(req.body)
// };

const User = require("../models/user.model");

const getAllUser = async (req, res) => {
  const findUsers =  await User.find()
  res.json(findUsers)
};
const createUser = async (req, res) => {
  try {
    const { first_name, middle_name, last_name, email, phone_no } = req.body;
    const createUser = await User.create({
      first_name,
      middle_name,
      last_name,
      email,
      phone_no,
    });
    console.log(/res/,req.body)
    await createUser.save();
    res.status(200).json(createUser);
  } catch (error) {
    console.error("Error while creating user");
  }
};
module.exports = { getAllUser, createUser };
//
