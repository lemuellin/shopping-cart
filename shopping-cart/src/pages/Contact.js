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
        <a href='https://www.youtube.com/shorts/AWOyEIuVzzQ?&ab_channel=UFCHub' target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt='facebook' className='icon'/>
        </a>
        <a href='https://www.youtube.com/shorts/lKz1fr18GE4?&ab_channel=Btfun' target="_blank" rel="noopener noreferrer">
          <img src={messenger} alt='messenger' className='icon'/>
        </a>
        <a href='https://www.youtube.com/watch?v=H9K8-3PHZOU&ab_channel=HamptonTheHampster-Topic' target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt='instagram' className='icon'/>
        </a>
        <a href='https://www.youtube.com/watch?v=CmIKR458M0A&ab_channel=VeggieTalesOfficial' target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt='twitter' className='icon'/>
        </a>
      </div>
      <div className='address'>
        <h2>Minimal Garden</h2>
        <h2>Los Angeles, CA</h2>
      </div>
    </div>
  );
}
  
  export default Contact;