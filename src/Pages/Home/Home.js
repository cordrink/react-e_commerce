import React from 'react';
import './Home.css'
import imgHome from "./shopimg.jpg"

function Home(props) {
    return (
        <div className={"global-container"}>
            <h1 className="home-title">Bienvenue au <span>Shop</span></h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic molestias omnis quas reiciendis sequi? Alias aliquid, asperiores, beatae delectus dolore ex fugit modi necessitatibus nulla odio, pariatur quasi quidem tenetur.</p>

            <img src={imgHome} alt="accueil shop"/>
        </div>
    );
}

export default Home;