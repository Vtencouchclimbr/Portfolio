import myImage from "../utils/me3.png";
import mountain from "../utils/mountain.png";

export default function Home() {
  return (
    <div
      className="d-flex flex-column w-100"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${mountain})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Main Content */}
      <div className="container-fluid d-flex flex-column flex-lg-row justify-content-center align-items-center py-5">
        {/* Left Section with Text */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <div className="d-flex flex-column justify-content-center align-items-center p-3 w-100">
            {/* <div className="btn-group">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle bg-dark"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Me
              </button>
              <ul className="dropdown-menu">
                Hello, my name is Jesse Anderson. Hailing originally from
                Maryland, my career journey has taken me across various regions
                of the U.S..<br />
                I began my professional life as a Field Land Surveyor, which
                required a significant adjustment when I transitioned to an
                office role. Over the years, I've climbed the ranks, taking on
                responsibilities for coordinating and training surveyors, and
                managing data for production processes. My experience spans
                Civil Engineering and extends into Structural Engineering,
                revealing a universal thread among these disciplines: adherence
                to purpose-specific parameters, client expectation management,
                standardized nomenclature, and effective inter-team
                collaboration.<br />
                My background has equipped me not just with technical know-how
                but also with leadership skills.<br />
                Recently, I've expanded my expertise by completing an intensive
                six-month full stack development bootcamp, fueling my ambition
                to delve deeper into software development. I am eager to
                leverage my diverse experience in an environment where my drive
                to succeed can flourish.<br />
                Thank you for considering my portfolio. I look forward to the
                opportunity to contribute and grow with your team.<br />
                -Jesse
              </ul>
            </div> */}
            <div className="card shadow-lg bg-dark">
              <div className="card-body bg-dark">
                <p className="text-light">
                  Hello, my name is Jesse Anderson. Hailing originally from
                  Maryland, my career journey has taken me across various
                  regions of the U.S..<br />
                  I began my professional life as a Field Land Surveyor, which
                  required a significant adjustment when I transitioned to an
                  office role. Over the years, I've climbed the ranks, taking on
                  responsibilities for coordinating and training surveyors, and
                  managing data for production processes. My experience spans
                  Civil Engineering and extends into Structural Engineering,
                  revealing a universal thread among these disciplines:
                  adherence to purpose-specific parameters, client expectation
                  management, standardized nomenclature, and effective
                  inter-team collaboration.<br />
                  My background has equipped me not just with technical know-how
                  but also with leadership skills.<br />
                  Recently, I've expanded my expertise by completing an
                  intensive six-month full stack development bootcamp, fueling
                  my ambition to delve deeper into software development. I am
                  eager to leverage my diverse experience in an environment
                  where my drive to succeed can flourish.<br />
                  Thank you for considering my portfolio. I look forward to the
                  opportunity to contribute and grow with your team.<br />
                  -Jesse
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="col-12 col-lg-6 text-center">
          <h2 className="mb-3 text-light">
            Full Stack Developer<br />&&<br />Software Engineer
          </h2>
          <img
            className="img-fluid mb-3 rounded shadow-lg"
            style={{ maxWidth: "200px", margin: "0 auto" }}
            src={myImage}
            alt="Image of the developer"
          />
        </div>
      </div>
    </div>
  );
}
