import React from 'react';
import '../style/cart.css';

import Echeveria from '../asset/Echeveria';
import Cactus from '../asset/Cactus';
import Aloe from '../asset/Aloe';


const Cart = (props) => {
    let countEcheveria = 5; // 0-4
    let countCactus = 11; // 5-15
    let countAloe = 4; // 16-19
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
                        if (item !== 0 && index < countEcheveria){
                            sum += item * Echeveria[index].price;
                            return(
                                <div key={index} id={index} className='cartItem'>
                                    <img src={Echeveria[index].img} alt='Succulent Photos' className='shopItemPhoto'/>
                                    <div className='cartItemAmount'>
                                        <h3>{Echeveria[index].name}</h3>
                                        <h4>{'$ ' + Echeveria[index].price}</h4>
                                        <form className='amount'>    
                                            <button type='button' className='amountBtn' onClick={props.minusButton}>-</button>
                                            <input type='number' className='amountInput' value={item} onChange={props.inputField}/>
                                            <button type='button' className='amountBtn' onClick={props.plusButton}>+</button>
                                        </form>
                                    </div>
                                    <button className='removeButton' onClick={props.removeButton}>X</button>
                                </div>
                            );
                        }else if(item !== 0 && index < (countEcheveria + countCactus)){
                            sum += item * Cactus[index - 5].price;
                            return(
                                <div key={index} id={index} className='cartItem'>
                                    <img src={Cactus[index - 5].img} alt='Succulent Photos' className='shopItemPhoto'/>
                                    <div className='cartItemAmount'>
                                        <h3>{Cactus[index - 5].name}</h3>
                                        <h4>{'$ ' + Cactus[index - 5].price}</h4>
                                        <form className='amount'>    
                                            <button type='button' className='amountBtn' onClick={props.minusButton}>-</button>
                                            <input type='number' className='amountInput' value={item} onChange={props.inputField}/>
                                            <button type='button' className='amountBtn' onClick={props.plusButton}>+</button>
                                        </form>
                                    </div>
                                    <button className='removeButton' onClick={props.removeButton}>X</button>
                                </div>
                            );
                        }else if(item !== 0){
                            sum += item * Aloe[index - 16].price;
                            return(
                                <div key={index} id={index} className='cartItem'>
                                    <img src={Aloe[index - 16].img} alt='Succulent Photos' className='shopItemPhoto'/>
                                    <div className='cartItemAmount'>
                                        <h3>{Aloe[index - 16].name}</h3>
                                        <h4>{'$ ' + Aloe[index - 16].price}</h4>
                                        <form className='amount'>
                                            <button type='button' className='amountBtn' onClick={props.minusButton}>-</button>
                                            <input type='number' className='amountInput' value={item} onChange={props.inputField}/>
                                            <button type='button' className='amountBtn' onClick={props.plusButton}>+</button>
                                        </form>
                                    </div>
                                    <button className='removeButton' onClick={props.removeButton}>X</button>
                                </div>
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
                    <h3>{'$ ' + (sum * 1.1).toFixed(2)}</h3>
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