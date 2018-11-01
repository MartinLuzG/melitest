/**
 * @author Martín Luz
 * @version 1.0.0
 * @description Product List Page Controller
 * @package controllers
 */

const ProductListController = (req, res) => {
  let { search } = req.query;

  res.send(`Hello im the product list page, your search is ${search}`);
};

module.exports = ProductListController;
