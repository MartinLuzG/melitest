/**
 * @author Martín Luz
 * @version 1.0.0
 * @description Application Routes
 * @package routes
 */

const express = require("express");
const { ApiMiddleWare, ViewsMiddleWare } = require("./middlewares");
// Views Controllers
const AppController = require("../controllers/AppController").default;
// Api Controllers
const ApiProductListController = require("../controllers/api/ApiProductListController");
const ApiProductDetailController = require("../controllers/api/ApiProductDetailController");
// Create the Router
const routes = express.Router();

// Api Routes
routes.get("/api/items", ApiMiddleWare, ApiProductListController);
routes.get("/api/items/:id", ApiMiddleWare, ApiProductDetailController);
// App Controller
routes.get("*", ViewsMiddleWare, AppController);

module.exports = routes;