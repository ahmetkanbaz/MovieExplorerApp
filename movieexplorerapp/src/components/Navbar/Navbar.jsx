import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-1">
          <BiCameraMovie size='2rem' />
          <span className="fs-3">Movie Explorer</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#movieexplorernavbar"
          aria-controls="movieexplorernavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="movieexplorernavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/allmovies" className="nav-link">
                Tüm Filmler
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
