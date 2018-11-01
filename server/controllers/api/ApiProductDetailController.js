/**
 * @author Martín Luz
 * @version 1.0.0
 * @description Api Product Detail Controller
 * @package controllers/api
 */

const HttpHandler = require("../../utils/HttpHandler");

const ApiProductDetialController = (req, res) => {
  const id  = req.path.split('/').pop();
  return new Promise((resolve, reject) => {
    HttpHandler(`items/${id}`).then(response => {
      const { data } = response;
      HttpHandler(`items/${data.id}/descriptions`).then((responseDesc) => {
        response.data = Object.assign({}, response.data, { description: responseDesc.data});
        resolve(response);
      }).catch(e => reject(e))
    }).catch(e => {
      reject(e);
    })
  });
}


module.exports = ApiProductDetialController;