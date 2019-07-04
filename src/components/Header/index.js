import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './sass/Header.scss';

const Header = ({ spacing, size }) => (
  <header style={{ paddingTop: spacing }}>
    <Link to="/">
      <h1 className="primary-title" style={{ fontSize: size }}>
        Github
        <span className="secondary-title"> Search</span>
      </h1>
    </Link>
  </header>
);

Header.propTypes = {
  spacing: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired
};

export default Header;
