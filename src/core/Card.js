import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";

const Card = ({
     product
}) => {
    const [redirect, setRedirect ] = useState(false);
    const [count, setCount ] = useState(product.count);

    // functions
    const showViewButton = showViewProductButton => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                    <button className="btn btn-outline-primary mt-2 mb-2">
                        View Product
                    </button>
                </Link>
            )
        );
    };

    const addToCart = () => {

    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="cart" />;
        }
    };

    const showAddToCart = showAddToCartButton => {

    };

    const showRemoveButton = showRemoveProductButton => {

    };

    const showStock = quantity => {

    };

    const handleChange = productId => event => {

    };

    const showCartUpdateOptions = cartUpdate => {

    };

    return (
        <div className="card">
            <div className="card-header name">{product.name}</div>
            <div className="card-body">
                {shouldRedirect(redirect)}
                <ShowImage item={product} url="product" />
                <p className="lead mt-2">
                    {product.description.substring(0, 100)}
                </p>
                <p className="black-10">${product.price}</p>
                <p className="black-9">
                    Category: {product.category && product.category.name}
                </p>
                <p className="black-8">
                    Added on {moment(product.createdAt).fromNow()}
                </p>
                {showStock(product.quantity)}
                <br />

                {showViewButton(showViewProductButton)}

                {showRemoveButton(showRemoveProductButton)}

                {showCartUpdateOptions(cartUpdate)}
            </div>
        </div>
    );
};

export default Card;