import React from 'react';
import inventory from "../../data/inventory";
import "./Products.css"
import {Link} from "react-router-dom";
import heart from "./heart.svg"

function Products(props) {
    return (
        <div className={"container-products"}>
            {inventory.map((product) => (
                <Link key={product.id} to={`/produits/${product.title.replace(/\s+/g, "").trim()}`}>
                    <div className="bloc-card">
                        <div className="product-card">
                            <div className="visual-aspect">
                                <img className={"img-product"}
                                     src={process.env.PUBLIC_URL + `/images/${product.img}.png`} alt="produit"/>
                                <div className="like-container">
                                    <img src={heart} alt="icone j'aime"/>
                                </div>
                            </div>
                            <div className="info">
                                <p>{product.title}</p>
                                <p>Prix : {product.price}</p>
                            </div>
                        </div>
                        <div className="back-card"></div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Products;