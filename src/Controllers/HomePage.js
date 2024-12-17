const BookModel = require("../Models/BooksModel");
const { HomeSlider } = require("../Models/SliderModel");

const getHomePage = async (req, res) => {
  try {
    let books = await BookModel.find();
    let sliders = await HomeSlider.find();

    res.status(200).send({
      success: true,

      data: {
        slider: sliders,
        books: books,
      },
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Enternal server error",
    });
  }
};

module.exports = {
  getHomePage,
};
