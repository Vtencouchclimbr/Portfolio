import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MediaTab() {
  return (
    <div className="bg-dark text-center py-4 ">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/jesse-anderson-991108297"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0e76a8" }} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Vtencouchclimbr"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <FontAwesomeIcon icon={faGithub} style={{ color: "#97e3b8" }} />
      </a>
    </div>
  );
}
