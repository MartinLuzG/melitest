/**
 * @author Martín Luz
 * @version 1.0.0
 * @description index entry for App client side
 * @package browser
 */
import React from 'react'
import { hydrate } from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'

const initialData = window.__INITIAL_DATA__;
delete window.__INITIAL_DATA__;

hydrate(
  <BrowserRouter>
    <App data={initialData} />
  </BrowserRouter>,
  document.getElementById('app')
);