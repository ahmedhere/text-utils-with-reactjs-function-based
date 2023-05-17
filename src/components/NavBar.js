import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-md navbar-${
          props.mode === "dark" ? "warning" : "secondary"
        } bg-${props.mode === "dark" ? "warning" : "secondary"}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/" aria-current="page">
                  Home <span className="visually-hidden">current</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            {/* <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input
                type="checkbox"
                name="mode"
                id="mode"
                onClick={props.toggleMode}
                className={`form-check-input `}
              />
              <label
                htmlFor="mode"
                className={`text-${props.mode === "light" ? "dark" : "dark"}`}
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.prototype = {
  title: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: "Set Title here",
};
