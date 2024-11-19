import Footer from '../components/Footer';
import BarNav from '../components/BarNav';
import JsCode from '../components/jsCode';


// import './Code.css';

export default function Code() {
  return (
    
      <div className="projectContainer d-flex flex-column align-items-center min-vh-100"
      style={{
        minHeight: '100vh',
        backgroundImage: `url()`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <div className='barnav w-100'>
        <BarNav />
        </div>
        <div>
        <JsCode />
        </div>    
        <div className="footer1 col-12 mt-auto">
        <Footer />
        </div>
      </div>
    
  );
}



        {/* <div className='m-2'>
          <video width="600" autoPlay muted controls>
            <source src={mc1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}