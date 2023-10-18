import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Dropdown, Space } from "antd";

import Logo from "../../img/logo.png";
import { logout } from "../../actions/auth";

 const items = [
   {
     key: "1",
     label: (
       <Link rel="noopener noreferrer" to="/profile">
         Profile
       </Link>
     ),
   },
   {
     key: "2",
     label: (
       <Link
         // target="_blank"
         rel="noopener noreferrer"
         to="/setting"
       >
         User Setting
       </Link>
     ),
   },
   {
     key: "3",
     label: (
       <Link
         onClick={logout}
       >
         logout
       </Link>
     ),
   },
 ];
const Navbar = ({ auth: { isAuthenticated }, logout }) => {
 
  const authLinks = (
    <ul className="d-flex justify-content-around align-items-center text-white">
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/">Info</Link>
      </li>
      <li>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </li>
      <li className="f-20">
        <Link to="/generate-question">
          Generate
          <br />
          Qestions
        </Link>
      </li>
      <li>
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <Space>
            Account
         
          </Space>
        </Dropdown>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="d-flex justify-content-around align-items-center">
      <li>
        <Link to="/search">Search</Link>
      </li>
      <li>
        <Link to="/">Info</Link>
      </li>
      <li>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </li>
      <li className="f-20">
        <Link to="/generate-question">
          Generate
          <br />
          Qestions
        </Link>
      </li>
      <li className="f-20">
        <Link to="/register">Register</Link>/<Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="f-33 bg-dark">
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
