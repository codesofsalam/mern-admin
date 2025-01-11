export const home = async (req, res) => {
  try {
    res.status(200).send("Home Page");
  } catch (error) {
    console.log("Error in Home Page", error);
  }
};
export const register = async (req, res) => {
  try {
    res.status(200).send("Registration Page");
  } catch (error) {
    console.log("Error in Registration Page", error);
  }
};
