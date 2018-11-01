/**
 * @author Martín Luz
 * @version 1.0.0
 * @description App
 * @package src/shared/Product
 */

import React, { Component } from "react";
import axios from "axios";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || null
    };
  }
  render() {
    if (this.state.data == null) {
      return <h3>Cargando ...</h3>
    } 
    const { data } = this.state;
    return (
      <div className="main-section product-detail">
        <div className="row">
          <div className="col-sm-8">
            <img src={data.thumbnail} width={300}/>
          </div>
          <div className="col-sm-4">
            <span>{data.condition == "new" ? "Nuevo": "Usado"} - {`${data.sold_quantity} vendidos`}</span>
            <h4>{data.title}</h4> 
            <h1>{`$ ${data.price}`}</h1>
            <button className="btn btn-primary">Comprar</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            <h4>Descripcion del producto</h4> 
            <p>{data.description[0].plain_text}</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default Product;