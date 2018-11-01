/**
 * @author Martín Luz
 * @version 1.0.0
 * @description App Page Controller
 * @package controllers
 */

import React from "react";
import { renderToString } from "react-dom/server" ;
import { StaticRouter, matchPath } from "react-router-dom"

import App from "../../src/shared/App";
import htmlTemplate from "../views/Template";
import routes from "../../src/shared/routes/routes";
import NotFound from "../../src/shared/NotFound";

export default function AppController(req, res, next) {
  // Find the match route 
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
  // If has fetchInitialData, request it
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req, res)
    : Promise.resolve({data: {}});

  promise.then((response) => {
    const { data } = response;
    const initialData = Object.assign({}, data, {requestedUrl: req.url})
    const html = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <App data={initialData}/>
      </StaticRouter>
    );
    htmlTemplate(html, initialData).then((response) => {
      res.send(response);
    }).catch(e => {
      res.send("Opps! Something was wrong");
    });
  }).catch(e => {
    const notFound = renderToString(<NotFound />);
    htmlTemplate(notFound).then((response) => {
      res.send(response);
    }).catch(e => {
      res.send("Opps! Something was wrong");
    });
  });
};