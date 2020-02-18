import React from "react";

import "../styles/product.css";

class Product extends React.Component {
  render() {
    return (
      <div className="product__wrapper">
        <h5>Product: {this.props.productName}</h5>
        <h5>${this.props.productPrice} usd</h5>
        <h5>Description: {this.props.productDescription}</h5>
      </div>
    );
  }
}

export default Product;
