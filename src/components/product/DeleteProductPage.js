import React from "react";
import DeleteList from "./DeleteList";
import { Link } from "react-router-dom";

export default class DeleteProductPage extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    fetch("http://3.21.234.30:5000/product/")
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
        <Link
          to="/products"
          className="btn btn-primary btn-m active float-right"
          role="button"
          aria-pressed="true"
        >
          Go Back
        </Link>
        <h4 className="mt-3 text-light ">Delete Page</h4>
        <p className="text-light">Delete product by clicking on red button</p>
        <DeleteList products={this.state.products} />
      </div>
    );
  }
}
