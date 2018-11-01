/**
 * @author Martín Luz
 * @version 1.0.0
 * @description App
 * @package src/shared/ProductList
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || null
    };
  }
  onClickProduct(id) {
    location.replace(`/items/${id}`);
  }
  render() {
    if (this.state.data == null) {
      return <h3>Cargando ...</h3>
    } 
    const { results = [], query } = this.state.data;
    return (
      [
        <div className="results-label" key="results-label">
          <span>{`Mostrando  un total de ${results.length} resultados para la busqueda de ${query}`}</span>
        </div>,
        <div className="main-section product-section" key="main-section">
          <div className="row">
            {results.map(item => (
              <Link to="" onClick={(e) => {
                e.preventDefault();
                this.onClickProduct(item.id)}
              }>
                <div className="col-sm-12 item-product" key={item.id}>
                <div className="row item-product-row">
                  <div className="col-sm-4">
                    <img src={item.thumbnail} width={160}/>
                  </div>
                  <div className="col-sm-6">
                    <h3>
                    {`$ ${item.price}`} 
                    {(item.shipping && item.shipping.free_shipping) ? 
                      <i><img src={`public/img/ic_shipping.png`} /></i> : ""
                    }
                    </h3>
                    <h4>{item.title}</h4>
                  </div>
                  <div className="col-sm-2">
                    {(item.address && item.address.state_name) ? 
                      <h5>{item.address.state_name}</h5> : ""
                    }
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      ]
    )
  }
} 

export default ProductList;