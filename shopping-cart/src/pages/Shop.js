import React, { useState } from 'react';
import '../style/style.css';

import Succulents from '../asset/Succulents';
import Cart from '../component/Cart';
import cartIcon from '../asset/icons/bag.png';

const Shop = () => {
    const [cart, setCart] = useState(Array(20).fill(0));
    let cartStatus;

    const addToCart = (e) => {
        let pos = e.target.parentNode.id - 1;
        setCart(
            cart.map((item, index) => {
                if (index === pos){
                    item += 1;
                }
                return item;
            })    
        );
    }

    const showCart = () => {
        cartStatus = (cartStatus === 'on') ? 'off' : 'on';
        let displayCart = (cartStatus === 'on') ? 'block' : 'none';
        let displayItem = (cartStatus === 'on') ? 'none' : 'grid';
        document.getElementsByClassName('cartList')[0].style.display = displayCart;
        document.getElementsByClassName('itemsGrid')[0].style.display = displayItem;
    }

    const itemCount = cart.reduce(
        (prev, curr) => prev + curr,
        0
    );
    

    return(
        <div>
            <div className='status'>
                <div className='itemCount'>{itemCount}</div>
                <img src={cartIcon} alt='cart icon' className='cartIcon' onClick={showCart}/>
            </div>
            <Cart content={cart}/>
            <div className='itemsGrid'>
                {Succulents.map(succulent => {
                    return(
                        <div key={succulent.key} id={succulent.key} className='itemCard'>
                            <img src={succulent.img} alt='Succulent Photos' className='shopItemPhoto'/>
                            <h4>{succulent.name}</h4>
                            <button type='button' onClick={addToCart}>Add To Cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shop;