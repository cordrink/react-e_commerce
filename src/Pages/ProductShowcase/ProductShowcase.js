import React, {useEffect, useRef, useState} from 'react';
import "./ProductShowcase.css"
import {useParams} from "react-router-dom";
import inventory from "../../data/inventory";
import {useDispatch} from "react-redux";
import {addItem} from "../../store/cart/cart-slice";

function ProductShowcase(props) {

    const [nbMugs, setNbMugs] = useState(1)

    const {id} = useParams()

    const dispatch = useDispatch();

    const addingInfo = useRef();
    let timerInfo;
    let display = true;

    const productClicked = inventory.findIndex(object => object.title.replace(/\s+/g, "").trim() === id)

    const updateMugs = e => {
        setNbMugs(Number(e.target.value))
    }

    const addToCart = e => {
        e.preventDefault();

        const itemAdded = {
            ...inventory[productClicked],
            quantity: nbMugs,
        };

        dispatch(addItem(itemAdded));

        addingInfo.current.innerText = "Ajoute au panier";

        if (display) {
            display = false;
            timerInfo = setTimeout(() => {
                addingInfo.current.innerText = "";
                display = true;
            }, 500);
        }
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerInfo);
        }
    }, []);

    return (
        <div className={"showcase"}>
            <div className="container-img-showcase">
                {/* process.env.PUBLIC_URL : facilite la localisation de l'imge en mode production */}
                <img className={"img-showcase"}
                     src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`}
                     alt="illustration de produit"/>
            </div>
            <div className="product-infos">
                <h2>{inventory[productClicked].title}</h2>
                <p>Prix: {inventory[productClicked].price} </p>
                <form onSubmit={addToCart}>
                    <label htmlFor="quantity">Quantite`</label>
                    <input type="number" id={"quantity"} value={nbMugs} onChange={updateMugs}/>
                    <button>Ajouter au panier</button>
                    <span ref={addingInfo} className="adding-info"></span>
                </form>
            </div>
        </div>
    );
}

export default ProductShowcase;