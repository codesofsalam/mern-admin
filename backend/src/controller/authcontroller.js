import User from "../models/user-model.js";
export const home = async (req, res) => {
  try {
    res.status(200).send("Home Page");
  } catch (error) {
    console.log("Error in Home Page", error);
  }
};
export const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists" });
    }
    const newUser = await User.create({ username, email, phone, password });
    res.status(200).json({ data: newUser });
  } catch (error) {
    console.log("Error in Registration Page", error);
  }
};
