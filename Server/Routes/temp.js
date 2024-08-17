"use strict";
const nodemailer = require("nodemailer");
require('dotenv').config(); // Loads environment variables from a .env file

// async function to send the email
async function main() {

  // Gmail SMTP configuration
  let config = {
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Gmail user loaded from environment variable
      pass: process.env.GMAIL_PASS  // Gmail password loaded from environment variable
    }
  };

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(config);

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'dsasheet.notification@gmail.com', // sender address
    to: "raunaksingh20bcs124@iiitkottayam.ac.in", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// Execute the main function
main().catch(console.error);
