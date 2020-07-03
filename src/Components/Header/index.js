import React from 'react';
import './index.css';

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__title">Stock Market Recommender test</h1>
      {props.children}
    </header>
  );
}

export default Header;
