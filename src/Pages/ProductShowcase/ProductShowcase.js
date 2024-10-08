import React, {useState} from 'react';
import "./ProductShowcase.css"
import {useParams} from "react-router-dom";
import inventory from "../../data/inventory";

function ProductShowcase(props) {

    const [nbMugs, setNbMugs] = useState(1)

    const {id} = useParams()

    const productClicked = inventory.findIndex(object => object.title.replace(/\s+/g, "").trim() === id)

    const updateMugs = e => {
        setNbMugs(Number(e.target.value))
    }

    return (
        <div className={"showcase"}>
            <div className="container-img-showcase">
                <img className={"img-showcase"} src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} alt="image de produit"/>
            </div>
            <div className="product-infos">
                <h2>{inventory[productClicked].title}</h2>
                <p>Prix: {inventory[productClicked].price} </p>
                <form>
                    <label htmlFor="quantity">Quantite`</label>
                    <input type="number" id={"quantity"} value={nbMugs} onChange={updateMugs} />
                    <button>Ajouter au panier</button>
                    <span className="adding-info"></span>
                </form>
            </div>
        </div>
    );
}

export default ProductShowcase;