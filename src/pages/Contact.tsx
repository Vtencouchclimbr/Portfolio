
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import './Contact.css';

function Contact() {

  return (
    
    <div className="d-flex flex-column justify-content-center flex-lg-row flex-grow-1" style={{
      minHeight: '100vh',
      backgroundImage: `url()`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Contact Information */}
      <div className="contact-info d-flex mt-4 justify-content-center">
        <ul className="list-unstyled">
          <li style={{ fontSize: '18px', fontFamily: 'Sans', color: 'rgb(245, 245, 250)' }}>Contact Information:</li>
          <li style={{ fontFamily: 'Lucida Handwriting', color: 'rgb(245, 245, 250)' }}>Jesse Anderson</li>
          <li style={{ fontFamily: 'Sans', color: 'rgb(245, 245, 250)' }}>(254)423-5822</li>
          <li>
            <a href="mailto:LmntryLmnt@gmail.com" style={{ color: 'rgb(245, 245, 250)', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faGoogle} size="1x" className="me-2" />LmntryLmnt@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/Vtencouchclimbr" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(245, 245, 250)', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faGithub} size="1x" className="me-2" />Vtencouchclimbr
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jesse-anderson-991108297/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(245, 245, 250)', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faLinkedin} size="1x" className="me-2" />jesse-anderson-991108297
            </a>
          </li>
        </ul>
      </div>
    </div>
)}
  


export default Contact;

