module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", { title: "eqqwe" });
    } catch (error) {
      console.log(error);
    }
  },
  viewCategory: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
