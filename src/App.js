import React from "react";
import "./App.css";
import HomePage from "./components/home/HomePage";
import Navbar from "./components/common/Navbar";
import ProductPage from "./components/product/ProductPage";
import CreateProductPage from "./components/product/CreateProductPage";
import SearchProductPage from "./components/product/SearchProductPage";
import DeleteProductPage from "./components/product/DeleteProductPage";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path="/products" component={ProductPage} />
          <Route path="/product/" component={SearchProductPage} />
          <Route path="/delete" component={DeleteProductPage} />
          <Route path="/create" component={CreateProductPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
