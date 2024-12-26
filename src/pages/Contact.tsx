import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import Swal from "sweetalert2";
import goat from "../utils/goat2.png";

const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  Swal.fire({
    title: "We had trouble opening your email client",
    text:
      "We're gonna need a bigger boat. Please copy this email address: LmntryLmnt@gmail.com",
    iconHtml: `<img src="${goat}" width="100" height="100">`,
    // icon: 'info',
    iconColor: "transparent",
    confirmButtonText: "Got it",
    customClass: {
      popup: "swal2-popup"
    }
  });
};

function Contact() {
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
      <div>
        {/* Contact Information */}
        <div className="contact-info d-flex mt-4 justify-content-center">
          <ul className="list-unstyled">
            <li
              style={{
                fontSize: "22px",
                fontFamily: "Sans",
                color: "rgb(208, 210, 224)"
              }}
            >
              Contact Information:
            </li>
            <li
              style={{
                fontFamily: "Lucida Handwriting",
                color: "rgb(208, 210, 224)"
              }}
            >
              Jesse Anderson
            </li>
            <li style={{ fontFamily: "Sans", color: "rgb(208, 210, 224)" }}>
              (254)423-5822
            </li>
            <li>
              {/* <h6 style={{ color: 'rgb(208, 210, 224)' }}><FontAwesomeIcon icon={faGoogle} size="1x" className="me-2" />LmntryLmnt@gmail.com</h6> */}
              <a
                href="mailto:LmntryLmnt@gmail.com?subject=Subject%20Here&body=Your%20message%20goes%20here"
                onClick={handleClick}
                style={{ color: "rgb(208, 210, 224)", textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  size="1x"
                  className="me-2"
                />LmntryLmnt@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Vtencouchclimbr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(208, 210, 224)", textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="1x"
                  className="me-2"
                />Vtencouchclimbr
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jesse-anderson-991108297/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgb(208, 210, 224)", textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="1x"
                  className="me-2"
                />jesse-anderson-991108297
              </a>
            </li>
          </ul>
        </div>
        <p
          className="m-1"
          style={{ color: "rgb(208, 210, 224)", fontFamily: "Sans" }}
        >
          Thanks for visiting<br />-Jesse
        </p>
      </div>
    </div>
  );
}

export default Contact;
