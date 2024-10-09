import React from 'react';
import cartIcon from "./shopping-cart.svg"
import "./FloatingCart.css"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function FloatingCart(props) {
    const shoppingCart = useSelector(state => state.CART);

    let totalItems = 0;
    for (const item of shoppingCart.cart) {
        totalItems += (item.quantity);
    }

    return (
        <Link to={"/shoppingcart"}>
            <div className="floating-cart">
                <p>votre Panier</p>
                <div className="img-notif-container">
                    <img src={cartIcon} alt="icone cadi"/>
                    <span className="notif">{totalItems}</span>
                </div>
            </div>
        </Link>
    );
}

export default FloatingCart;