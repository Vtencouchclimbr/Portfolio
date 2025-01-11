import BarNav from "../components/BarNav";
import Footer from "../components/Footer";

import nad83 from "../utils/nad83.png";
import drafting from "../utils/drafting.jpg";
import civil3d from "../utils/civil3d.png";
import Trimble from "../utils/Trimble.png";

import "./Projects.css";

export default function Projects() {
  return (
    <div
      className="d-flex flex-column align-items-center m-1"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${nad83})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="barnav">
        <BarNav />
      </div>
      <div className="card bg-dark col-12 col-md-6 col-lg-4 mb-4 mt-4 d-flex flex-column align-items-center">
        <h1 className="text-light">Land Survey and Drafting</h1>
        <p className="text-center text-light desc">Some relevant skills</p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <img
          src={civil3d}
          style={{ maxWidth: "200px" }}
          className="img-fluid my-3"
          alt="Drafting image"
        />
        <img
          src={Trimble}
          style={{ maxWidth: "200px" }}
          className="img-fluid my-3"
          alt="Drafting image"
        />
        <img
          src={drafting}
          style={{ maxWidth: "400px" }}
          className="img-fluid mb-3"
          alt="Drafting image"
        />
      </div>
      <div className="footer col-12 col-md-6 col-lg-4">
        <Footer />
      </div>
    </div>
  );
}
