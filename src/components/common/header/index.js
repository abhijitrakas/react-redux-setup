import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" replace={true} to="/">React Basic</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/" replace={true}>Home</Link></li>
              <li><Link to="/about-us" replace={true}>About</Link></li>
              <li><Link to="/users" replace={true}>Users</Link></li>
            </ul>
          </div>
        </nav>
    );
};

export default Header;