import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      
      <Link to='/math' className='NavBar-link'>MATH</Link>
      <Link to='/la' className='NavBar-link'>LANGUAGE ARTS</Link>
      <Link to='/social' className='NavBar-link'>SOCIAL STUDIES</Link>
      <Link to='/science' className='NavBar-link'>SCIENCE</Link>
      <Link to='/other' className='NavBar-link'>OTHER</Link>

      <Link to='/' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='' className='NavBar-link'>MATH</Link>
      <Link to='' className='NavBar-link'>LANGUAGE ARTS</Link>
      <Link to='' className='NavBar-link'>SOCIAL STUDIES</Link>
      <Link to='' className='NavBar-link'>SCIENCE</Link>
      <Link to='' className='NavBar-link'>OTHER</Link>

      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;