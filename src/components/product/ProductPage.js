import React from "react";
import ProductList from "./ProductList";

export default class ProductPage extends React.Component {
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
        <h3 className="mt-3 text-light">Product Page</h3>
        <ProductList products={this.state.products} />
      </div>
    );
  }
}
