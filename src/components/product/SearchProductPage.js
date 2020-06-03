import React from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";

export default class SearchSProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`http://3.21.234.30:5000/product/search/${this.state.input}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="search-container mt-5 active-purple-3 ">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              onChange={this.handleChange}
              value={this.state.input}
            />
            <button type="submit">search</button>
          </form>
          <div className="btn-group mt-3">
            <Link to="/create" className="btn btn-success active-purple-3">
              Add product
            </Link>
            <Link to="/delete" className="btn btn-danger">
              Delete product
            </Link>
          </div>
        </div>
        <h4 className="mt-3 text-light">Search results</h4>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}
