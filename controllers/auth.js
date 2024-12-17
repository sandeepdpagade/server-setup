const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the home page! :D");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home };
