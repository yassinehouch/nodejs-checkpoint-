// email-sender.js
const nodemailer = require("nodemailer");

// Create a transporter with your email service configuration
const transporter = nodemailer.createTransport({
  service: "your-email-service", // e.g., 'gmail', 'outlook', etc.
  auth: {
    user: "your-email@example.com",
    pass: "your-email-password",
  },
});

// Define the email data
const mailOptions = {
  from: "your-email@example.com",
  to: "recipient@example.com",
  subject: "Hello from Node.js",
  text: "This is a test email sent from Node.js.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
