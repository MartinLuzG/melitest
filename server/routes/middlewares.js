/**
 * @author Martín Luz
 * @version 1.0.0
 * @description Application MiddleWares
 * @package routes
 */
const ProductListMiddleWare = (req, res, next) => {
  let { search } = req.query;
  if(search == undefined) {
    res.send("No query search recive");
    return;
  }
  next();
};

const ApiMiddleWare = (req, res, next) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,PATCH,DELETE,OPTIONS"
  );
  next();
}

const ViewsMiddleWare = (req, res, next) => {
  res.header("Content-Type", "text/html");
  next();
}

module.exports = {
  ProductListMiddleWare,
  ViewsMiddleWare,
  ApiMiddleWare
};