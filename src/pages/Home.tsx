import myImage from "../utils/me3.png";
import mountain from "../utils/mountain.png";
import "./Home.css";

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
        <div className="about-card card shadow-lg bg-dark">
          <div className="card-body bg-dark">
            <p className="text-light">
              My name is Jesse Anderson. I am a seasoned professional with over
              15 years of experience, including more than 10 years working in
              the field as a Land Surveyor. My expertise extends to AutoCAD
              drafting and design, where I've worked for 6 years with data
              files, AutoCAD Civil3D and Advance Steel as well as Trimble
              Business Center. I have produced construction documents including
              preparation for stakeout, ALTA surveys, boundary surveys,
              exhibits, topographical maps and other document types, using
              parcel maps for property research and preparing for submission to
              county clerks. My experience continues beyond what I've stated.
              Recently, I completed a Full Stack Web Development bootcamp at the
              University of Utah, proving my interest in continuing education.
              Having completed a course which includes cutting edge technologies
              including front end, back end, api's, database software, testing
              pipelines, and the latest processes and procedures relevant to
              developing software with potential for scalability and mobile
              first designs. Thank you for considering my profile. I welcome the
              opportunity to discuss how my experience can contribute to your
              projects.
            </p>
          </div>
        </div>
        {/* Right Section with Image */}
        <div className="col-12 col-lg-6 text-center">
          <h2 className="mb-3 text-light">
            CAD Technician,<br />
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
