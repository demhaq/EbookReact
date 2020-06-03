import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { Link } from "react-router-dom";

export default function CreateProductPage(props) {
  const [product, setProduct] = useState({
    author: "",
    title: "",
    color: "",
    description: "",
  });

  function handleChange(event) {
    setProduct({ ...product, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://3.21.234.30:5000/product/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((result) => {
        //toast.success("New Paper Created!");
        setProduct({
          author: "",
          title: "",
          color: "",
          description: "",
        });
        props.history.push("/products");
      })
      .catch((err) => {
        console.log("something is wrong with the post");
        //toast.error("Something went wrong....");
      });
  }

  return (
    <div>
      <Link
        to="/products"
        className="btn btn-primary btn-m active float-right mt-2"
        role="button"
        aria-pressed="true"
      >
        Go Back
      </Link>
      <h3 className="text-light mt-2">Create a New Product Below</h3>
      <ProductForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        product={product}
      />
    </div>
  );
}
