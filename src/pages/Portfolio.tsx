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
      <div className="information d-flex flex-column justify-content-center align-items-center flex-lg-row flex-grow-1">
        <div className="btns1">
          <h2 className="portDesc">
            Here are some of the projects I've been working on recently
          </h2>
          {/* <h3 className="portDesc">
            along with some code I have been cataloging while problem solving
          </h3>
          <h3 className="portDesc">(Code better viewed on</h3>
          <h3 className="portDesc">full sized screens)</h3> */}
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h2 className="portDesc">View Projects</h2>
            <Link to="/projects">
              <button
                className="portDesc glow eachbtn btn-outline-secondary"
                type="button"
              >
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
