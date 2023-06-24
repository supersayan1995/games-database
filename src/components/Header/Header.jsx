import React from 'react';
import classes from './Header.module.scss';

function Header()
{
  return (
    <div id="header" className={classes.header}>
      <input type="text" placeholder="Search" />
      <a href="https://github.com/supersayan1995" target="_blank" rel="noreferrer">Abhishek Satyavolu</a>
    </div>
  );
}

export default Header;
