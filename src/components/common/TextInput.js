import React from "react";

export default function TextInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.label}>{props.label} :</label>
      <input
        type={props.type}
        className="form-control col-md-6 "
        placeholder={`Enter ${props.name}`}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
