// Set requirements for server.js
const express = require("express");
const app = express();
const pathway = require("./routes");


// Define port options
const PORT = process.env.PORT || 3000;

// Set up Express app public folder
app.use(express.static("public"));


// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(pathway);


// Console log server start message
app.listen(PORT, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Server is listening on ${PORT}`);
    }
});