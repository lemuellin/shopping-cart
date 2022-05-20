import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Footer from './component/Footer';

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default RouteSwitch;