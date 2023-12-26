// password-generator.js
const generatePassword = require("generate-password");

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({ length: 12, numbers: true });
  console.log("Generated password:", password);
}

// Call the function to generate a random password
generateRandomPassword();
