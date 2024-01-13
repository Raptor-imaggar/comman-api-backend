const nodemailer = require("nodemailer");

// Create a Nodemailer transporter using SMTP for Hostinger mail
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", 
  port: 587, 
  secure: false, 
  auth: {
    user: "thowfick@imaggar.com", 
    pass: "Aezakmi#1412", 
  },
});


// HTML email content
const htmlEmail = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Confirmation</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; text-align: center;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="70%" style="max-width: 600px; background-color: #ffffff; border-radius: 8px;">
        <tr>
            <td style="padding: 20px;">
                <img src="https://imaggar.com/static/media/Asset%202.d695a7070328ce8676c0.png" alt="Imaggar Technologies Pvt Ltd." width="150" style="margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;">
                <p style="color: #333333; margin-bottom: 20px;">Dear User,</p>
                <p style="color: #333333; margin-bottom: 20px;">Your registration with Imaggar Technologies Pvt Ltd. has been successful!</p>
                <a href="https://www.imaggar.com" style=" padding: 10px 20px; background-color: #8c36d8; color: #ffffff; text-decoration: none; border-radius: 5px; margin-top: 20px;">Visit Our Site</a>
                <div style="margin-top: 20px;">
                    <a href="https://www.facebook.com/yourcompany" target="_blank"><img src="path/to/your/facebook-icon.png" alt="Facebook" style="margin: 0 10px;"></a>
                    <a href="https://www.twitter.com/yourcompany" target="_blank"><img src="path/to/your/twitter-icon.png" alt="Twitter" style="margin: 0 10px;"></a>
                    <a href="https://www.linkedin.com/company/yourcompany" target="_blank"><img src="path/to/your/linkedin-icon.png" alt="LinkedIn" style="margin: 0 10px;"></a>
                </div>
                <div style="margin-top: 20px; color: #777777;">
                    <p>Contact us at <a href="mailto:info@yourcompany.com" style="color: #8c36d8; text-decoration: none;">info@yourcompany.com</a></p>
                    <p>123 Company Street, Cityville, Country</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <p><a href="/privacy-policy" style="color: #8c36d8; text-decoration: none;">Privacy Policy</a></p>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>


`;

// Define the email options
const mailOptions = {
  from: "thowfick@imaggar.com", // Sender email address
  to: "tfspeed00@gmail.com", // Recipient email address
  subject: "Registration Confirmation",
  html: htmlEmail,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
