import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faGithub,
  faReact,
  faPython,
  faBootstrap,
  faGitlab,
  faSlack
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faCode,
  faCodeBranch,
  faDatabase,
  faGhost,
  faServer
} from "@fortawesome/free-solid-svg-icons";
import resume from "../utils/Resume.pdf";
// import CoverLetter from '../utils/CoverLetter.pdf';
import "./Resume.css";

export default function Resume() {
  return (
    <div
      className="d-flex flex-column justify-content-center flex-lg-row flex-grow-1"
      style={{
        minHeight: "100vh",
        backgroundImage: `url()`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="d-flex flex-column align-items-center text-center py-5">
        <h1
          className="title display-4"
          style={{
            fontFamily: "Arial",
            color: "rgb(208, 210, 224)",
            fontSize: "40px"
          }}
        >
          Download my resume to explore my qualifications and experience
        </h1>

        <a
          href={resume}
          download="JesseAndersonResume.pdf"
          style={{ color: "rgb(208, 210, 224)" }}
          className="btn-x"
        >
          <button
            style={{ color: "rgb(208, 210, 224)", visibility: "hidden" }}
            className="btn btn-lg bg-dark"
          >
            Download
          </button>
        </a>

        <div
          className="icon d-flex flex-wrap justify-content-center"
          style={{ color: "rgb(208, 210, 224)" }}
        >
          <FontAwesomeIcon icon={faCode} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faHtml5} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faCss3} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faDatabase} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faServer} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faReact} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faPython} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faBootstrap} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faBook} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faGitlab} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faSlack} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon
            icon={faCodeBranch}
            size="3x"
            className="mx-3 my-2"
          />
          <FontAwesomeIcon icon={faGithub} size="3x" className="mx-3 my-2" />
          <FontAwesomeIcon icon={faGhost} size="3x" className="mx-3 my-2" />
        </div>
        <div>
          {/* <img src={Icon1} alt="description" style={{ width: '60px', height: '60px' }} />; */}
        </div>
      </div>
    </div>
  );
}
