// create-file.js
const fs = require("fs");

// Write "Hello Node" to a file named "welcome.txt"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("File 'welcome.txt' has been created with the content 'Hello Node'.");
  }
});

// Read and log the data from "welcome.txt"
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Data read from 'welcome.txt':", data);
  }
});
