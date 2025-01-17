import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductShowcase from "./Pages/ProductShowcase/ProductShowcase";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShopppingCart/ShoppingCart";
import {Provider} from "react-redux";
import store from "./store/index"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/produits" element={<Products/>}/>
                    <Route path="/produits/:id" element={<ProductShowcase/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/shoppingcart" element={<ShoppingCart/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
