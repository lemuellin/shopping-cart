import '../style/cart.css';

const CartItem = (props, item, index, Succulent, shift) => {
    return(
        <div key={index} id={index} className='cartItem'>
            <img src={Succulent[index - shift].img} alt='Succulent Photos' className='shopItemPhoto'/>
            <div className='cartItemAmount'>
                <h3>{Succulent[index - shift].name}</h3>
                <h4>{'$ ' + Succulent[index - shift].price}</h4>
                <form className='amount'>    
                    <button type='button' className='amountBtn' onClick={props.minusButton}>-</button>
                    <input type='number' className='amountInput' value={item} onChange={props.inputField}/>
                    <button type='button' className='amountBtn' onClick={props.plusButton}>+</button>
                </form>
            </div>
            <button className='removeButton' onClick={props.removeButton}>X</button>
        </div>
    );
};

export default CartItem;