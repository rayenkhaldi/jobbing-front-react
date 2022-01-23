import React from "react";
import "./Navbar.css";

function Navbar() {
  console.log(localStorage.getItem("username"));
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="navbar-container collapse navbar-collapse"
          id="navbarTogglerDemo01"
        >
          <a className="navbar-brand" href="/">
            Chercheur d'emploi !
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="ListEmployes">
                Employés
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="ListJobs">
                Offres
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="listHires">
                Embauche
              </a>
            </li>
          </ul>
          <form className="d-flex input-group w-auto"></form>
        </div>
        <button
          onClick={() => {
            localStorage.clear();
            window.location = "/login";
          }}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
