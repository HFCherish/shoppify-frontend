import React, {Component} from "react";
import productLogo from "./product.png";
import "./ProductDetail.css";

class ProductDetail extends Component {
    render() {
        return (
            <div className="Product-detail">
                <ProductImg />
                <ProductDescBoard />
            </div>
        );
    }
}

class ProductDescBoard extends Component {
    render() {
        return (
            <div className="Product-desc-board">
                <ProductName />
                <ProductDesc />
                <ProductPrice />
            </div>
        );
    }
}

class ProductName extends Component {
    render() {
        return (
            <div className="Product-name">
                this is product name (should get from product service by id)
            </div>
        );
    }
}

class ProductDesc extends Component {
    render() {
        return (
            <div className="Product-desc">
                this is product description (should get from product server by product id)
            </div>
        );
    }
}

class ProductPrice extends Component {
    render() {
        return (
            <div className="Product-price">
                this is product current price (should get from pricing service by product id)
            </div>
        );
    }
}


class ProductImg extends Component {
    render() {
        return (
            <div className="Product-logo-part">
                <img src={productLogo} className="Product-logo" alt="logo"/>
            </div>
        );
    }
}

export default ProductDetail;
