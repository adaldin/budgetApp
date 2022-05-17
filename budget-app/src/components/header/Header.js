import { Link } from "react-router-dom";
import React from "react";
function Header() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/welcome">Home</Link>
            </li>
            <li>
              <Link to="/budget">Get Your Budget</Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
