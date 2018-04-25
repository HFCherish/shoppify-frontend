import React, {Component} from "react";
import productLogo from "./product.png";
import ServerClient from "./ServerClient";
import "./ProductDetail.css";

class ProductDetail extends Component {
    state = {
        productJson: []
    };


    componentWillMount() {
        console.log("******* props: ", this.props);
        console.log("******* match: ", this.props.match);
        console.log("******* match: ", this.props.match.params.productId);
        ServerClient.getPricingDetail(this.props.productId, json => {
            this.setState({
                productJson: json,
            });
        });
    }

    render() {
        return (
            <div className="Product-detail">
                <ProductImg />
                { this.state.productJson.length > 0 && <ProductDescBoard productDetail={this.state.productJson[0]}/>}
            </div>
        );
    }
}

class ProductDescBoard extends Component {
    getName() {
        return this.props.productDetail.product.name;
    }

    getPrice() {
        return this.props.productDetail.price;
    }

    render() {
        return (
            <div className="Product-desc-board">
                <ProductName productName={this.getName()}/>
                <ProductDesc />
                <ProductPrice price={this.getPrice()}/>
            </div>
        );
    }
}

class ProductName extends Component {
    render() {
        return (
            <div className="Product-name">
                {/*this is product name (should get from product service by id)*/}
                {this.props.productName}
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
                {/*this is product current price (should get from pricing service by product id)*/}
                <label>Price: </label>
                <label className="Product-price-value">{this.props.price}</label>
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
