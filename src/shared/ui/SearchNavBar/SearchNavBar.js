
/**
 * @author Martín Luz
 * @version 1.0.0
 * @description App
 * @package src/shared/common
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";

const ENTER_KEY = "Enter";

class SearchNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClickIconSearch = this.onClickIconSearch.bind(this);
  }

  onChange(e) {
    const { target } = e;
    this.setState({
      value: target.value
    })
  }

  onKeyPress(e) {
    if(this.state.value != "" && e.key == ENTER_KEY) {
      this.search();
    }
  }
  onClickIconSearch() {
    if(this.state.value != "") {
      this.search();
    } 
  } 
  search() {
    location.replace(`items?search=${this.state.value}`);
  }
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-sm-2">
            <Link to="/">
              <img 
                src={`./public/img/Logo_ML@2x.png.png`} 
                id="logo" 
                width={44}
                alt="Mercado Libre Uruguay"
              />
            </Link>
          </div>
          <div className="col-sm-8">
            <div className="search-wrapper">
              <i className="nav-icon-search" onClick={this.onClickIconSearch}>
                <img src={`./public/img/ic_Search.png`} width={13}/>
              </i>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar productos, marcas y más..."
                onChange={this.onChange}
                onKeyPress={this.onKeyPress}
                value={this.state.value}
              />
            </div> 
          </div>
        </div>
      </header>
    )
  }
} 

export default SearchNavBar;