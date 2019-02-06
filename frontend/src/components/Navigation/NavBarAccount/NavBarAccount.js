import React from "react";
import PropTypes from "prop-types";

const NavBarAccount = ({ isAuthenticated }) => {
  return <React.Fragment>{isAuthenticated && <span>Ola</span>}</React.Fragment>;
};

NavBarAccount.propTypes = {
  isAuthenticated: PropTypes.func.isRequired
};

export default NavBarAccount;