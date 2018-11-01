/**
 * @author Martín Luz
 * @version 1.0.0
 * @description server
 */

// Require libs
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

// Create express App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/config', express.static(__dirname + '/../config'));
app.use('/public', express.static('public'));
app.use('/build', express.static('build'));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});

app.use((req, res) => {
  res.status(404).send({ code: 404, message: "Resource not found" });
});
