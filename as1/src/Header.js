//Header.js
import React from 'react';
import { Link } from 'react-router-dom';

//for navigating from one page to another page.
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/comments">Comment Section</Link></li>
          <li><Link to="/rating">Rate Us</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;

