const { isValidPhoneNumber } = require("libphonenumber-js");
const nodemailer = require('nodemailer');

const SendBookRequest = (req, res) => {
  let body = req.body;

  // res.status(200).send({
  //     token:token

  // })

  try {
    if (!body.your_name) {
      res.status(422).send({
        status: false,
        error: "Name is rquired",
      });

      return;
    }
    if (!body.email) {
      res.status(422).send({
        status: false,
        error: "Email is rquired",
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
    if (!body.book_title) {
      res.status(422).send({
        status: false,
        error: "Book title is rquired",
      });

      return;
    }

    if (!body.author_name) {
      res.status(422).send({
        status: false,
        error: "Auther name is rquired",
      });

      return;
    }
    if (!body.notes) {
      res.status(422).send({
        status: false,
        error: "Notes is rquired",
      });

      return;
    }
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail', // Use Gmail's SMTP
    //     auth: {
    //       user: 'umairabbas719@gmail.com', // Your email
    //       pass: 'A12181236W', // Your email password or app password
    //     },
    //     tls: {
    //         rejectUnauthorized: false,  // Use this if you're having SSL/TLS issues
    //       },
    //       port: 587,  // Change to 465 if needed
    //   });
    //   const mailOptions = {
    //     from: 'umairabbas719@gmail.com', // Sender's email
    //     to:`${body.email}` , // Receiver's email
    //     subject: 'Hello from Node.js!', // Email subject
    //     text: 'This is a test email sent from Node.js using nodemailer.', // Plain text body
    //   };
    //   transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //       console.error('Error sending email:', error);
    //     } else {
    //       console.log('Email sent:', info.response);
    //     }
    //   });

    res.status(200).send({
      status: true,
      message:"Your book request has been send",
    });
  } catch (error) {}
};

module.exports = {
  SendBookRequest,
};
