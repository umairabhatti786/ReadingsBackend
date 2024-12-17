const { isValidPhoneNumber } = require("libphonenumber-js");
const { PostData } = require("../MongoDb/MongoDbCrud");
// const AddressModel = require("../Models/AddressModel");
// const { PaymentMethodModel } = require("../Models/PaymentMethodModel");
const {AddressesModel}=require("../Models/AddressModel")
const PostAddress = async(req, res) => {
  try {
    let jwtData = req?.user?.data;
    console.log("jwtData",jwtData?._id)
    let body = req?.body;

    if (!body?.address) {
      res.status(422).send({
        status: false,
        error: "Address is rquired",
      });

      return;
    }
    if (!body?.city) {
      res.status(422).send({
        status: false,
        error: "City is rquired",
      });

      return;
    }
    if (!body?.state) {
      res.status(422).send({
        status: false,
        error: "State is rquired",
      });

      return;
    }
    if (!body?.country) {
      res.status(422).send({
        status: false,
        error: "Country is rquired",
      });

      return;
    }
    if (!body?.zip_code) {
      res.status(422).send({
        status: false,
        error: "Zip Code is rquired",
      });

      return;
    }

    if (!body.phone) {
      res.status(422).send({
        status: false,
        error: "Phone Number is rquired",
      });

      return;
    }
    if (!isValidPhoneNumber(body?.phone)) {
      res.status(422).send({
        status: false,
        error: "InValid phone number",
      });

      return;
    }
    // let data = new ({
    //     ...body,
    //     user_id: jwtData?._id,
    //   });

    let data=new AddressesModel({
        ...body,
        user_id: jwtData?._id,


    })
    console.log("data",data)
    await PostData(data);
    res.status(200).send({
      success: true,
      message: "Address add successfully",
    })
  } catch (error) {

    res.status(500).send({
        success: false,
        message: error,
      });

  }
};

module.exports = {
  PostAddress,
};
