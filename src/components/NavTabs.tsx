import "./NavTabs.css";

function NavTabs() {
  return (
    <nav className="navbar fixed-top">
      <div className="btns">
        <button
          className="navTop btn btn-secondary dropdown-toggle bg-dark"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          aria-expanded="false"
        >
          Nav
        </button>
        <ul className="list dropdown-menu bg-dark">
          <li className="bg-dark">
            <a className="litem dropdown-item" href="#home">
              Home
            </a>
          </li>
          <li className="bg-dark">
            <a className="litem dropdown-item" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="bg-dark">
            <a className="litem dropdown-item" href="#resume">
              Resume
            </a>
          </li>
          <li className="bg-dark">
            <a className="litem dropdown-item" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
