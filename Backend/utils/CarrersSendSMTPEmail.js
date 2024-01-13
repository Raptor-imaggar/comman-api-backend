const nodemailer = require("nodemailer");
require('dotenv').config();

// Function to generate transporter based on config
function createTransporter(config) {
  return nodemailer.createTransport(config);
}

// Function to send an email using SMTP
async function CarrersSendSMTPEmail(recipientEmail, subject, message, chosenTransporterConfig) {

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.CarrersSendSMTPEmail_user,
      pass: process.env.CarrersSendSMTPEmail_pass,
    },
    debug: true, // Enable debugging
  });
  
  
  const mailOptions = {
    from: "career@imaggar.com",
    to: recipientEmail,
    subject: subject,
    html: `<h1>${subject}</h1><p>${message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error occurred:", error);
    throw new Error("Failed to send email");
  }
}

module.exports = CarrersSendSMTPEmail;
