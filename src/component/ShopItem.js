import '../style/shop.css';

const ShopItem = (props) => {
    return(
            props.Succulent.map(succulent => {
            return(
                <div key={succulent.key} id={succulent.key} className='itemCard'>
                    <div className='imgContainer'>
                        <img src={succulent.img} alt='Succulent Photos' className='shopItemPhoto'/>
                        <div className='shopItemDescription'>{succulent.description}</div>
                    </div>
                    <div className='item'>
                        <h3>{succulent.name}</h3>
                        <h4>{'$ ' + succulent.price}</h4>
                        <button type='button' onClick={props.addToCart} className='addToCart'>Add To Cart</button>
                    </div>
                </div>
            )
        })
    );
}

export default ShopItem;