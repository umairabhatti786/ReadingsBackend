const { PaymentMethodModel } = require("../Models/PaymentMethodModel");
const { PostData } = require("../MongoDb/MongoDbCrud");

const AddPaymentMethod = async (req, res) => {
  try {
    let body = req.body;
    let jwtData = req.user?.data;

    if (!body?.card_number) {
      res.status(422).send({
        status: false,
        message: "Card Number is rquired",
      });

      return;
    }
    let data = new PaymentMethodModel({
      ...body,
      user_id: jwtData?._id,
    });
    await PostData(data);
    res.status(200).send({
      success: true,
      message: "Payment Method add successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};

const GetPaymentMethod = async (req, res) => {
  try {
    let jwtData = req?.user?.data;
    console.log("jwtData", jwtData);
    const paymentModel = await PaymentMethodModel.find({
      user_id: jwtData?._id,
    });
    console.log("paymentModel", paymentModel);

    res.status(200).send({
      success: true,
      data: paymentModel,
      length: paymentModel.length,
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Enternal server error",
    });
  }
};

module.exports = {
  AddPaymentMethod,
  GetPaymentMethod,
};
