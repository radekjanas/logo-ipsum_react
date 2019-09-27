import React from 'react';
import './TopBar.css';
import logo from '../../../assets/logo.svg';

function TopBar() {
    return(
        <>
            <div className="top__bar">
                <img src={logo} alt="Logo Ipsum" height="40" className="top__image" />
            </div>
        </>
    );
}

export default TopBar;