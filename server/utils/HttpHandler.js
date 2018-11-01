/**
 * @author Martín Luz
 * @version 1.0.0
 * @description HttpHandler Request
 * @package utils
 */
const axios = require("axios");
const config = require("../config");

// HttpHandler Request
const HttpHandler = (path, params = {}, method = "GET", contentType = "application/json") => {
  const {api: {endpoint}} = config;
  let urlRequest = `${endpoint}/${path}`;
  let request = {
    method: method,
    url: urlRequest,
    headers: {
      'Content-type': contentType,
    }
  };

  if(Object.keys(params).length > 0) {
    switch (method) {
      case "GET":
        let i = 0;
        Object.entries(params).forEach(([key, value]) => {
          request.url += (i == 0) ? `?${key}=${value}` : `&${key}=${value}`
          i++;
        }); 
      break;
      case "POST":
        request.body = params;
      break;
    }
  }
  return axios(request);
}

module.exports = HttpHandler;
