/**
 * @author Martín Luz
 * @version 1.0.0
 * @description Search Page Controller
 * @package controllers
 */
const htmlTemplate = require("../views/Template");
const SearchController = (req, res) => {
  htmlTemplate("Hello World").then((response) => {
    res.send(response);
  }).catch(e => {
    res.send("Opps! Something was wrong");
  })
};

module.exports = SearchController;