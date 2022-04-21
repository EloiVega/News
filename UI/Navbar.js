import Link from "next/link";
import { useState } from "react";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const [isInternational, setIsInternational] = useState(true);

  const handleNavbarLinks = (state) => {
    // console.log(state);
    setIsInternational(state);
  };

  const searchHandler = (event) => {
    event.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
      <div className="container-fluid text-warning">
        <Link href="/">
          <a className={`navbar-brand text-warning ${classes.navLogo}`}>News</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li onClick={() => handleNavbarLinks(true)} className="nav-item">
              <Link href="/">
                <a
                  className={`nav-link ${classes.link} ${
                    isInternational ? classes.active : null
                  }`}
                >
                  International
                </a>
              </Link>
            </li>
            <li onClick={() => handleNavbarLinks(false)} className="nav-item">
              <Link href="/national">
                <a
                  className={`nav-link ${classes.link} ${
                    !isInternational ? classes.active : null
                  }`}
                >
                  National
                </a>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning bg-gradient" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
