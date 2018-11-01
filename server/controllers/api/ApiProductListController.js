/**
 * @author Martín Luz
 * @version 1.0.0
 * @description Api Product List Controller
 * @package controllers/api
 */
const HttpHandler = require("../../utils/HttpHandler");

const ApiProductListController = (req, res) => {
  const { search } = req.query;
  return HttpHandler("sites/MLA/search", {q: search, limit: 4})
};  

module.exports = ApiProductListController;