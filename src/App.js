import React from "react";

import Form from "./components/Form";
import Product from "./components/Product";

import "./styles/global.css";
// import api from "./api";

class App extends React.Component {
  state = {
    form: {
      name: "",
      price: "",
      description: ""
    }
  };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     await api.products.create(this.state.form);
  //   } catch (error) {
  //     this.setState({});
  //   }
  // };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form
          onChange={this.handleChange}
          formValues={this.state.form}
          onSubmit={this.handleSubmit}
        />
        <Product
          productName={this.state.form.name}
          productPrice={this.state.form.price}
          productDescription={this.state.form.description}
        />
      </React.Fragment>
    );
  }
}

export default App;
