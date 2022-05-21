import '../style/footer.css';
import github from '../asset/contact/github.png';

const Footer = () => {
    return(
        <footer>
            <h5>Copyright © 2022 lemuellin</h5>
            <a href='https://github.com/lemuellin' target="_blank" rel="noopener noreferrer">
                <img src={github} alt='github' className='iconFooter'/>
            </a>
        </footer>
    )
}

export default Footer;