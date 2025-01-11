import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Portfolio.css";

import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div
      className="d-flex flex-column justify-content-center flex-lg-row flex-grow-1"
      style={{
        minHeight: "100vh",
        backgroundColor: `black`,
        backgroundImage: `url()`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="information d-flex flex-column justify-content-center align-items-center text-align-center flex-lg-row flex-grow-1">
        <div className="btns1">
          <h2 className="portDesc">
            Some recent software delevopment projects can be found by clicking
            below
          </h2>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <Link to="/projects">
              <button
                className="glow eachbtn btn-outline-secondary bg-dark"
                type="button"
              >
                View Software Projects
              </button>
            </Link>
            <hr />
          </div>
          <h2 className="portDesc">
            Examples of Land Survey and Drafting experience can be found by
            clicking below
          </h2>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <Link to="/cad">
              <button
                className="glow eachbtn btn-outline-secondary bg-dark"
                type="button"
              >
                View Land Survey Experience
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
