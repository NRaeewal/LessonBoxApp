import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header (props) {
    return (
        <div>
        <Link to="/"><h1 className="Header-title">Lesson Box</h1></Link>
        </div>
    )
};


export default Header; 
