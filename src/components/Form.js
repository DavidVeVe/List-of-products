import React from "react";

import "../styles/form.css";

function Form(props) {
  return (
    <form className="form__wrapper">
      <input
        value={props.formValues.name}
        onChange={props.onChange}
        name="name"
        type="text"
        placeholder="Name of the product"
      />
      <input
        value={props.formValues.price}
        onChange={props.onChange}
        name="price"
        type="text"
        placeholder="Price"
      />
      <textarea
        value={props.formValues.description}
        onChange={props.onChange}
        name="description"
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
      ></textarea>
      <button onClick={props.handleClick}>Add</button>
    </form>
  );
}

export default Form;
