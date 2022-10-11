import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './component/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Footer from './component/Footer';

const RouteSwitch = () => {
    const [cart, setCart] = useState(Array(20).fill(0));

    const addToCart = (e) => {
        let pos = e.target.parentNode.parentNode.id - 1;
        setCart(
            cart.map((item, index) => {
                if (index === pos){
                    item += 1;
                }
                return item;
            })    
        );
    };

    const itemCount = cart.reduce(
        (prev, curr) => prev + curr,
        0
    );

    const changeQuantity = (e, value) => {
        let pos = Number(e.target.parentNode.parentNode.parentNode.id);
        setCart(
            cart.map((item, index) => {
                if (index === pos){
                    item = value;
                }
                return item;
            })  
        );
    };

    const handleChange = (e) => {      
        changeQuantity(e, Number(e.target.value));
    };

    const itemDecrease = (e) => {
        changeQuantity(e, Number(e.target.parentNode[1].value) - 1);
    };

    const itemIncrease = (e) => {
        changeQuantity(e, Number(e.target.parentNode[1].value) + 1);
    };

    const itemRemove = (e) => {
        let pos = Number(e.target.parentNode.id);
        setCart(
            cart.map((item, index) => {
                if (index === pos){
                    item = 0;
                };
                return item;
            })    
        );
    };

    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/minimal-garden' element={<Home/>} />
                <Route exact path='/minimal-garden/shop' element=
                    {<Shop
                        cart={cart}
                        addToCart={addToCart}
                        itemCount={itemCount}
                        handleChange={handleChange}
                        itemDecrease={itemDecrease}
                        itemIncrease={itemIncrease}
                        itemRemove={itemRemove}
                    />} 
                />
                <Route exact path='/minimal-garden/contact' element={<Contact/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouteSwitch;