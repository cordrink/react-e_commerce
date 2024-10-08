import React from 'react';
import cartIcon from "./shopping-cart.svg"
import "./FloatingCart.css"
import {Link} from "react-router-dom";

function FloatingCart(props) {
    return (
        <Link to={"shoppingcart"}>
            <div className="floating-cart">
                <p>votre Panier</p>
                <div className="img-notif-container">
                    <img src={cartIcon} alt="icone cadi"/>
                    <span className="notif">0</span>
                </div>
            </div>
        </Link>
    );
}

export default FloatingCart;