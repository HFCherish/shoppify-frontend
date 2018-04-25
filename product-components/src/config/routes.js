import React from "react";
import ProductListApp from "../components/product-list/ProductList";
import ProductDetail from "../components/product-detail/ProductDetailApp";
import {BrowserRouter as Router, Route} from "react-router-dom";

function parseQuery(queryString) {
    var resolvedQuery = {};

    var trimmedQueryString = queryString.trim();
    var pairs = (trimmedQueryString[0] === '?' ? trimmedQueryString.substr(1) : trimmedQueryString).split('&');

    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[0].split('=');
        resolvedQuery[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }

    return resolvedQuery;
}


var WrapperComponent = (props) => {
    var query = parseQuery(props.location.search);
    if (query.product_id !== '') return <ProductDetail {...props} productId={query.product_id}/>
};

const routes = (
    <Router>
        <div>
            <Route exact path="/" component={ProductListApp}/>
            <Route path="/products"
                   component={WrapperComponent}/>
        </div>
    </Router>);


export default routes;