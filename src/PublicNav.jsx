import React from "react";
import { Link, withRouter } from "react-router-dom";

function PublicNav(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container">
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
              <Link class="nav-link" to="/about">
                About
              </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/signup" ? "active" : ""
                }`}
              >
              <Link class="nav-link" to="/signup">
                Create Account
              </Link>
                
              </li>
            </ul>
          </div>
          <Link class="navbar-brand" to="/home">
            Log In
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default withRouter(PublicNav);