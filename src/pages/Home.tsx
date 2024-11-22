

import MediaTab from '../components/MediaTab';
import myImage from '../utils/me3.png';
import mountain from '../utils/mountain.png';
import './Home.css';

export default function Home() {
  return (
    <div className="d-flex flex-column w-100"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${mountain})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='media-tab'>
      <MediaTab />
      </div>
      {/* Main Content */}
      <div className="mainContain container-fluid d-flex flex-column flex-lg-row justify-content-center align-items-center py-5">
      
        {/* Left Section with Text */}
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start mb-5 mb-lg-0">
          <div className="cardContainer d-flex flex-column justify-content-center align-items-center p-3 w-100">
            <h2 className="welcome text-center mb-3">
              Welcome to my portfolio
            </h2>
            <div className="aboutCard card shadow-lg">
              <div className="card-body">
                <p style={{color:'rgb(244, 245, 247)'}} className="card-text">
                Hello, my name is Jesse Anderson. Hailing originally from Maryland, my career journey has taken me across various regions of the U.S..<br />
                I began my professional life as a Field Land Surveyor, which required a significant adjustment when I transitioned to an office role. Over the years, I've climbed the ranks, taking on responsibilities for coordinating and training surveyors, and managing data for production processes. My experience spans Civil Engineering and extends into Structural Engineering, revealing a universal thread among these disciplines: adherence to purpose-specific parameters, client expectation management, standardized nomenclature, and effective inter-team collaboration.<br/>
                My background has equipped me not just with technical know-how but also with leadership skills.<br />
                Recently, I've expanded my expertise by completing an intensive six-month full stack development bootcamp, fueling my ambition to delve deeper into software development. I am eager to leverage my diverse experience in an environment where my drive to succeed can flourish.<br />
                Thank you for considering my portfolio. I look forward to the opportunity to contribute and grow with your team.<br />
-Jesse

                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
          <div className="">
            <h1 className="signature mb-3">Jesse Anderson</h1>
            <h2 className="titleText mb-3">
              Full Stack Developer<br />&&<br />Software Engineer
            </h2>
            <img
              className="myPic img-fluid mb-3"
              style={{ maxWidth: '200px' }}
              src={myImage}
              alt="Image of the developer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
