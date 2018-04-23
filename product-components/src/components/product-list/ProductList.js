import React, {Component} from "react";
import productLogo from "./product.png";
import ServerClient from "./ServerClient";
import "./ProductList.css";

class ProductList extends Component {
    state = {
        products: []
    };


    componentWillMount() {
        ServerClient.getProducts(json => {
            this.setState({
                products: json,
            });
        });
    }

    render() {
        return (
            <ul className="Product-list">
                {
                    this.state.products.map(product =>
                        <ProductListItem productDetail={product}/>
                    )
                }
            </ul>
        );
    }
}

class ProductListItem extends Component {
    getName() {
        return this.props.productDetail.product.name;
    }

    getPrice() {
        return this.props.productDetail.price;
    }

    render() {
        return (
            <li className="Product-list-item">
                <ProductImg />
                <div className="product-name-price">
                    <ProductName productName={this.getName()}/>
                    <ProductPrice price={this.getPrice()}/>
                </div>
            </li>
        );
    }
}

class ProductName extends Component {
    render() {
        return (
            <div className="Product-name">
                {this.props.productName}
            </div>
        );
    }
}

class ProductPrice extends Component {
    render() {
        return (
            <div className="Product-price">
                <label className="Product-price-value">￥ {this.props.price}</label>
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

export default ProductList;
