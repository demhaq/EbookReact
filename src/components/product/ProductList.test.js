import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ProductList from "./ProductList";

Enzyme.configure({ adapter: new Adapter() });

describe("ProductList Component", () => {
  const products = [
    {
      id: 1,
      author: "tim howard",
      title: "legal",
      color: "white",
      description: "soft cover",
    },
    {
      id: 2,
      author: "eric turner",
      title: "lemon",
      color: "blue",
      description: "soft cover",
    },
  ];
  const wrapper = shallow(<ProductList products={products} />);
  it("should populate tables", () => {
    const rows = wrapper.find("tr");
    expect(rows.length).toBe(3);
  });
});
