import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';

const NavBar = () => {
    return(
        <nav>
            <h1 className='navLogo'>Minimal Garden</h1>
            <ul className='navLinkContainer'>
                <Link to='/shopping-cart' className='navLink' name='Home'>
                    <li>Home</li>
                </Link>
                <Link to='/shop' className='navLink'>
                    <li>Shop</li>
                </Link>
                <Link to='/contact' className='navLink'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;