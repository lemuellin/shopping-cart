import '../style/contact.css';
import facebook from '../asset/contact/facebook.png';
import github from '../asset/contact/github.png';
import instagram from '../asset/contact/instagram.png';
import linkedin from '../asset/contact/linkedin.png';
import messenger from '../asset/contact/messenger.png';
import twitter from '../asset/contact/twitter.png';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='link'>
        <a href='https://github.com/lemuellin' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' className='icon'/>
        </a>
        <a href='https://www.linkedin.com/in/lemuel-lin/' target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='linkedin' className='icon'/>
        </a>
        
        <img src={facebook} alt='facebook' className='icon'/>
        
        <img src={messenger} alt='messenger' className='icon'/>
        
        <img src={instagram} alt='instagram' className='icon'/>

        <img src={twitter} alt='twitter' className='icon'/>        
      </div>
      <div className='address'>
        <h2>Minimal Garden</h2>
        <h2>Los Angeles, CA</h2>
      </div>
    </div>
  );
}
  
  export default Contact;