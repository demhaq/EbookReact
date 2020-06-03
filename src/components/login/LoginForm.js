import React from "react";
import TextInput from "../common/TextInput";

export default function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="username"
        label="username"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="username"
        value={props.user.username}
      />
      <TextInput
        id="password"
        label="password"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="password"
        value={props.user.password}
      />
      <TextInput
        id="role"
        label="role"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        name="role"
        value={props.user.role}
      />

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
