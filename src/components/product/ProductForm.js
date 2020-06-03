import React from "react";
import TextInput from "../common/TextInput";

export default function CreateProductForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="text-light">
      <TextInput
        id="author"
        label="author"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="author"
        value={props.product.author}
      />
      <TextInput
        id="title"
        label="title"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="title"
        value={props.product.title}
      />
      <TextInput
        id="color"
        label="color"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="color"
        value={props.product.color}
      />
      <TextInput
        id="description"
        label="description"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="description"
        value={props.product.description}
      />

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
