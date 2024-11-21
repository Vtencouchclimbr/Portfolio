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
      {/* Main Content */}
      <div className="container-fluid d-flex flex-column flex-lg-row justify-content-center align-items-center py-5">
        {/* Left Section with Text */}
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start mb-5 mb-lg-0">
          <div className="cardContainer d-flex flex-column justify-content-center align-items-center p-3 w-100">
            <h2 className="welcome text-center mb-3">
              Welcome to my portfolio
            </h2>
            <div className="aboutCard card shadow-lg">
              <div className="card-body">
                <p style={{color:'rgb(244, 245, 247)'}} className="card-text">
                  In order to get acquainted. I want to take a minute to introduce myself. Here is a little about me: Originally from Maryland, I have lived and worked in different parts of the country for a lot of years. Starting as a field Land Surveyor, then eventually moving to an office position (not an easy transition), I started from the bottom and worked my way into positions where I was responsible for coordinating and training surveyors as well as preparing data for production. Consequently, I spent a lot of time working in the Civil Engineering and design field. Eventually, I would dabble in Structural Engineering as well. What I found is that all these practices carry a common thread. They all use set parameters developed directly for their purpose and nearly if not always include properties like a need to fulfill clients expectations, conventional naming and structure, cooperation and communication between members of the participating work groups, and the list goes on. These qualities make a successful engineering team in my experience. I not only bring in my professional experience, but I also bring a plethora of skillsets a person can only develop while leading. After completing a complex and challenging, six-month, full stack development bootcamp, I am excited to learn a ton more about development and find a place where an ambitious person can become successful. I risked and sacrificed to get to this point, and I certainly appreciate you taking the time to view my portfolio. Please enjoy.

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
              className="img-fluid myPic mb-3"
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
