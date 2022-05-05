import React from 'react';
import '../style/style.css';

const ShopItem = () => {
    const handleChange = () => {
        console.log('detect change');
    }

    const minusButton = () => {

    }

    const plusButton = () => {

    }

    return(
        <div>
            <div className='square'></div>
            <form>
                <button type='button' onClick={minusButton}>-</button>
                <input type='number' onChange={handleChange}/>
                <button type='button' onClick={plusButton}>+</button>
            </form>
        </div>
    )
}

export default ShopItem;