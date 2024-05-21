// Set requirements for server.js
const express = require("express");
const routes = require("./routes");
const app = express();


// Define port options
const PORT = process.env.PORT || 3001;

// Set up Express app public folder
app.use(express.static("public"));


// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


// Console log server start message
app.listen(PORT, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Server is listening on ${PORT}`);
    }
});