import React from 'react';
import ShopItem from '../component/ShopItem';
import '../style/shop.css';

import Echeveria from '../asset/Echeveria';
import Cactus from '../asset/Cactus';
import Aloe from '../asset/Aloe';

import Cart from '../component/Cart';
import cartIcon from '../asset/icons/bag.png';

const Shop = (props) => {
    let cartStatus;
    
    const showCart = () => {
        cartStatus = (cartStatus === 'on') ? 'off' : 'on';
        let displayCart = (cartStatus === 'on') ? 'flex' : 'none';
        let displayItem = (cartStatus === 'on') ? 'none' : 'grid';
        document.getElementsByClassName('cartList')[0].style.display = displayCart;
        document.getElementsByClassName('allShopItems')[0].style.display = displayItem;
    };

    return(
        <div className='shop'>
            <div className='status' onClick={showCart}>
                <div className='itemCount'>{props.itemCount}</div>
                <img src={cartIcon} alt='cart icon' className='cartIcon'/>
            </div>
            <Cart content={props.cart} inputField={props.handleChange} minusButton={props.itemDecrease} plusButton={props.itemIncrease} removeButton={props.itemRemove} showCart={showCart}/>
            <div className='allShopItems'>
                <div className='shopSection'>
                    <h2 className='itemsTitle'>ECHEVERIA</h2>
                    <p>Echeveria is a family of rose-shaped succulents native to the semi-desert regions of Central America. Because of its charming leaves' structure, Echeverias are one of the most well-known succulents. They are super easy to grow and take care of.</p>
                    <div className='itemsGrid'>
                        <ShopItem Succulent={Echeveria} addToCart={props.addToCart}/>
                    </div>
                </div>

                <div className='shopSection'>
                    <h2 className='itemsTitle'>CACTUS</h2>
                    <p>A collection of beautiful cacti that have scales and spines instead of leaves to adapt to extremely dry desert areas. Most of them have thick fleshy stems or branches to conserve water, so they can tolerate drought very well. A cactus is a great addition to the home thanks to its striking shape, size, and flowers.</p>
                    <div className='itemsGrid'>
                        <ShopItem Succulent={Cactus} addToCart={props.addToCart}/>
                    </div>
                </div>
                
                <div className='shopSection'>
                    <h2 className='itemsTitle'>ALOE</h2>
                    <p>Aloe leaves are thick and fleshy, triangle-shaped. The inside of Aloe leaves is full of slimy, water-filled tissue. These pretty succulents are easy to care for, grow quickly, can tolerate drought, and perfect for indoor or outdoor gardens.</p>
                    <div className='itemsGrid'>
                        <ShopItem Succulent={Aloe} addToCart={props.addToCart}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shop;