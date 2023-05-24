import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css'; 

const Navbar = () => {
    return (
        <div>
            <div className='elipse-1'>
            </div>
            <div className='elipse-2'>
            </div>
            <div>
                <NavLink to="/"><img src="./images/Logo.svg" alt="LZero logo" id='logo' /></NavLink>
                <Button />
            </div>
        </div>
    );
};

export default Navbar;