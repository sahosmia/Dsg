import { Link } from "react-router-dom";
import { WhiteLogo } from "../../resource/image";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-absolute left-0  top-0 z-1 w-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={WhiteLogo} alt="Bootstrap" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <Link className="navbar-brand" to="/">
              <img className="logo w-75" src={WhiteLogo} alt="Bootstrap" />
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/our-firm">
                  Our Firm
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/capabilities"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Capabilities
                </Link>
                <ul className="dropdown-menu ">
                  <div
                    className="d-flex flex-column flex-wrap flex-lg-row "
                  >
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="/capabilities">
                        View All Capabilities
                      </a>
                    </li>
                    {/* <div className=" flex-grow-1">
                    <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  </div>
                  <div className=" flex-grow-1">
                    <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  </div> */}
                  </div>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/industries"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Industries
                </Link>
                <ul className="dropdown-menu ">
                  <div
                    className="d-flex flex-column flex-wrap flex-lg-row "
                  >
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="w-50">
                      <a className="dropdown-item" href="/industries">
                        View All Industries
                      </a>
                    </li>
                    {/* <div className=" flex-grow-1">
                    <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  </div>
                  <div className=" flex-grow-1">
                    <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  </div> */}
                  </div>
                </ul>
              </li>
              {/* header contact button  */}
              <li className="nav-item">
                <Link to="/" className="nav-link header-contact-button">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
