/**
 * @author Martín Luz
 * @version 1.0.0
 * @description Html Template 
 * @package views
 */
const fs = require('fs');
const config = require("../config");

const { app } = config;

const htmlTemplate = (reactDom, initialData = {}, title = app.title ) => {
  return new Promise((resolve, reject) => {
    fs.readFile("public/index.html", (err, html) => {
      if(err) {
        reject(err)
      }
      const template = html.toString().
      replace("${title}", title).
      replace("${app}", reactDom).
      replace("${initialData}", JSON.stringify(initialData));

      resolve(template);
    });
  });
}

module.exports = htmlTemplate;