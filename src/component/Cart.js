import React from 'react';
import '../style/cart.css';

import Echeveria from '../asset/Echeveria';
import Cactus from '../asset/Cactus';
import Aloe from '../asset/Aloe';

import CartItem from './CartItem';


const Cart = (props) => {
    let startPosEcheveria = 0; // 0-4
    let startPosCactus = 5; // 5-15
    let startPosAloe = 16; // 16-19
    let sum = 0;

    const checkout = () => {
        alert('Did you really just tried to buy these fake plants?');
    }

    return(    
        <div className='cartList'>
            <div className='cartCard'>
                <h2 className='itemsTitle'>YOUR CART</h2>
                <div>
                    {props.content.map((item,index) => {
                        if (item !== 0 && index < startPosCactus){
                            sum += item * Echeveria[index].price;
                            return(
                                CartItem(props, item, index, Echeveria, startPosEcheveria)
                            );
                        }else if(item !== 0 && index < (startPosAloe)){
                            sum += item * Cactus[index - 5].price;
                            return(
                                CartItem(props, item, index, Cactus, startPosCactus)
                            );
                        }else if(item !== 0){
                            sum += item * Aloe[index - 16].price;
                            return(
                                CartItem(props, item, index, Aloe, startPosAloe)
                            );
                        }else{
                            return null;
                        }
                    })}                
                </div>
                <div className='total'>
                    <h4>Subtotal: </h4>
                    <h4>{'$ ' + sum.toFixed(2)}</h4>
                    <h4>Shipping:</h4>
                    <h4>free</h4>
                    <h4>Tax:</h4>
                    <h4>{'$ ' + (sum * 0.12).toFixed(2)}</h4>
                    <h3>Grand Total: </h3>
                    <h3 data-testid='gTotal'>{'$ ' + (sum * 1.1).toFixed(2)}</h3>
                </div>
                <div className='buttons'>
                    <button onClick={props.showCart} className='backToShop'>Back To Shop</button>
                    <button onClick={checkout} className='checkout'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;