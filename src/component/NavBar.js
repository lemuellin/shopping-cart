import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';
import menu from '../asset/menu.png';

const NavBar = () => {
    const [menuBtn, setMenuBtn] = useState(false);
    const menuRef = useRef();

    const closeOpenMenus = (e)=>{
        e.preventDefault();
        if(menuRef.current && menuBtn && !menuRef.current.contains(e.target) && (e.target.id !== 'menuIcon')){
            setMenuBtn(false);
        }
    }

    document.addEventListener('mouseup',closeOpenMenus);

    return(
        <nav>
            <h1 className='navLogo'>Minimal Garden</h1>
            <button className='menuBtn' onClick={(e) => {e.preventDefault(); setMenuBtn(!menuBtn);}} id="menuIcon">
                <img src={menu} className="menu" alt="menu button" id="menuIcon"/>
            </button>
            <ul ref={menuRef} className={(menuBtn ? " navLinkContainer " : " hideNavLinkContainer ")}>
                <Link to='/' onClick={()=>setMenuBtn(false)} className='navLink' name='Home'>
                    <li>Home</li>
                </Link>
                <Link to='/shop' onClick={()=>setMenuBtn(false)} className='navLink'>
                    <li>Shop</li>
                </Link>
                <Link to='/contact' onClick={()=>setMenuBtn(false)} className='navLink'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;