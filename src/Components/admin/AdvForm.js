import React, { Component } from "react";
import { createNewAdv } from "../../services/api";

const categories = ["phones", "laptops"];

const initialState = {
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
  category: categories[0],
};

class AdvForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await createNewAdv(this.state);
    // console.log(`response`, response);
    this.props.addNewAdv({ ...this.state, id: response.data.name });
    this.setState({ ...initialState });
  };

  render() {
    const { name, image, description, price, isSale, category } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={image}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          isSale:
          <input
            type="checkbox"
            name="isSale"
            checked={isSale}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          <select
            name="category"
            value={category}
            onChange={this.onHandleChange}
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Adv</button>
      </form>
    );
  }
}

export default AdvForm;
