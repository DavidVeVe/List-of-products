import React from "react";

import "../styles/product.css";

class Product extends React.Component {
  render() {
    return (
      <div className="product__wrapper">
        <h5>
          Product:{" "}
          <span className="product__name">{this.props.productName} </span>
        </h5>
        <h5 className="product__price">${this.props.productPrice} usd</h5>
        <h5 className="description__area">
          Description:{" "}
          <span className="product__description">
            {" "}
            {this.props.productDescription}
          </span>
        </h5>
      </div>
    );
  }
}

export default Product;
