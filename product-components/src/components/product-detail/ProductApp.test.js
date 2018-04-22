import React from "react";
import ReactDOM from "react-dom";
import ProductApp from "./ProductDetailApp";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductApp />, div);
});
