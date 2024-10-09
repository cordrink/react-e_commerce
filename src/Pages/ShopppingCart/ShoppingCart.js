import React from 'react';
import "./ShoppingCart.css"
import {useDispatch, useSelector} from "react-redux";
import {updateItem} from "../../store/cart/cart-slice";

function ShoppingCart(props) {

    const storeState = useSelector((state) => state.CART);

    const dispatch = useDispatch();

    const handleInput = (e, id) => {
        const indexItem = storeState.cart.findIndex(obj => obj.id === id);

        const objUpdate = {
            ...storeState.cart[indexItem],
            quantity: Number(e.currentTarget.value),
        }

        dispatch(updateItem(objUpdate));
    }

    let totalPrice = 0;
    for (const item of storeState.cart) {
        const itemPrice = item.quantity * item.price;
        totalPrice += itemPrice;
    }

    return (
        <div className={"global-container"}>
            <p className="heading-cart">Votre panier: </p>
            <ul className="cart-list">
                {storeState.cart.map((item) => (
                    <li key={item.id}>
                        <img src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt="item"/>
                        <div className="bloc-cart-infos">
                            <h4>{item.title}</h4>
                            <p>price: {item.price}</p>
                        </div>
                        <div className="bloc-input">
                            <label htmlFor="quantityInput">Quantite</label>
                            <input
                                onInput={e => handleInput(e, item.id)}
                                type="number"
                                id={"quantityInput"}
                                value={item.quantity}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <p className="total-price">Total : {totalPrice.toFixed(2)} $</p>
            <button className="btn-cart">Proceder au paiement</button>
        </div>
    );
}

export default ShoppingCart;