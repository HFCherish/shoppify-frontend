import React from "react";
import ReactDOM from "react-dom";
import routes from "./config/routes";
import "./index.css";
// import ProductDetailApp from "./components/product-detail/ProductDetailApp";

// ReactDOM.render(
//     <ProductDetailApp productId="f3ac4da95adf421cb5247b63058292e4"/>,
//   document.getElementById('root')
// );

ReactDOM.render(
    routes,
    document.getElementById('root')
);
