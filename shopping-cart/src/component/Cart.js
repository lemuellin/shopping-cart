import React from 'react';
import '../style/style.css';

import Succulents from '../asset/Succulents';


const Cart = (props) => {

    const handleChange = (e) => {        
        // let pos = e.target.parentNode.parentNode.id - 1;
        // cart[pos] =  Number(e.target.value);
        // console.log(cart);
    }

    const minusButton = (e) => {
        // let pos = e.target.parentNode.parentNode.id - 1;
        // let value = Number(e.target.parentNode[1].value) - 1;
        // e.target.parentNode[1].value = value;
        // cart[pos] =  value;
        // console.log(cart);
    }

    const plusButton = (e) => {
        // let pos = e.target.parentNode.parentNode.id - 1;
        // let value = Number(e.target.parentNode[1].value) + 1;
        // e.target.parentNode[1].value = value;
        // cart[pos] =  value;
        // console.log(cart);
    }

    return(    
        <div className='cartList'>
            CART LIST
            <div>
                {props.content.map((item,index) => {
                    if (item !== 0){
                        return(
                            <div key={index}>
                                <h4>{Succulents[index].name}</h4>
                                <img src={Succulents[index].img} alt='Succulent Photos' className='shopItemPhoto'/>
                                <form className='amount'>
                                    <button type='button' className='amountBtn' onClick={minusButton}>-</button>
                                    <input type='number' className='amountInput' onChange={handleChange}/>
                                    <button type='button' className='amountBtn' onClick={plusButton}>+</button>
                                </form>
                            </div>
                        )
                    }
                })}                
            </div>
        </div>
    )
}

export default Cart;