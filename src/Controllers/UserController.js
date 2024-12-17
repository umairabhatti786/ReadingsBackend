const { jwt, jwtKey } = require("../Db/Config");
const { con } = require("../Db/MySqlConfig");
const { UserModel } = require("../Models/UserModel");
const { PostData, UpdateOneById } = require("../MongoDb/MongoDbCrud");
const Signup = async (req, res) => {
  try {
    let body = req.body;
    if (!body?.email) {
      res.status(400).send({
        status: false,
        message: "Email is rquired",
      });

      return;
    }
    if (!body?.password) {
      res.status(400).send({
        status: false,
        message: "Password is rquired",
      });

      return;
    }

    // console.log("Boday",body)
    // mongodb  function
    // let data = await UserModel.findOne({ email: body.email });
    // console.log("existingUser", data);
    // if (data) {
    //   res.status(400).send({
    //     isSuccess: false,
    //     message: "User Already Exist",
    //   });
    // } else {
    //   let data = new UserModel(body);
    //   const token = await new Promise((resolve, reject) => {
    //     jwt.sign({ data }, jwtKey, { expiresIn: "1d" }, (err, token) => {
    //       if (err) reject(err);
    //       resolve(token);
    //     });
    //   });
    //   // data.token = token; // Assuming you have a field `token` in your User model
    //   let result = await PostData(data);
    //   result = result.toObject();
    //   delete result._id;
    //   delete result.password;
    //   delete result.__v;

    //   res.status(200).send({
    //     status: true,
    //     message: "User created",
    //     data: result,
    //     token: token,
    //   });
    // }


    /// msql function
    const  data={first_name:"umair abbas",email:"umairabbas719@gmail.com",password:"password"}

    con.query("INsert INTO users SET ?", data, (error, result, fields) => {
      if (error) {
        res.status(500).send({
          status: false,

          message: error,
        });
      } else {
        res.status(200).send({
          status: true,
          message: "User created",
          data: result,
          token: "",
        });
      }
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      status: false,

      message: "Enternal server error",
    });
  }
};

const Login = async (req, res) => {
  try {
    let body = req.body;
    if (!body?.email) {
      res.status(422).send({
        status: false,
        message: "Email is rquired",
      });

      return;
    }
    if (!body?.password) {
      res.status(422).send({
        status: false,
        message: "Password is rquired",
      });

      return;
    }

    let data = await UserModel.findOne({ email: body?.email });
    if (data) {
      const token = await new Promise((resolve, reject) => {
        jwt.sign({ data }, jwtKey, { expiresIn: "1d" }, (err, token) => {
          if (err) reject(err);
          resolve(token);
        });
      });
     let result = data.toObject();
      delete result._id;
      delete result.password;
      delete result.__v;
      res.status(200).send({
        status: true,
        message: "Successfully login",
        data: result,
        token: token,
      });
    } else {
      res.status(401).send({
        status: false,
        message: "User not exist",
      });
    }
  } catch (error) {
    console.log("Error",error)
    res.status(500).send({
      status: false,
      // error:error,

      message: "Enternal server error",
    });
  }
};

const EditProfile = async (req, res) => {
  try {
    let body = req.body;
    let jwtData=req.user?.data
    console.log("jwtData",req.user)
    // Update user and return the complete, updated document
    const updatedUser = await UserModel.findByIdAndUpdate(
      jwtData._id,
      { $set: body },
      { new: true, runValidators: true } // Return updated document and apply schema validation
    );
   let result = updatedUser.toObject();
    delete result._id;
    delete result.password;
    delete result.__v;
    res.status(200).send({
      success: true,

      data: result,
    });
  } catch (error) {
    res.status(500).send({
      status: false,

      message: "Enternal server error",
    });
  }
};

module.exports = {
  Signup,
  Login,
  EditProfile,
};
