import React from 'react';

const HamburgerIcon = ({ open, onClick }) => {
    return <div className={`${open ? 'open' : ''}`} id='nav-icon' onClick={() => onClick(!open)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
}

export default HamburgerIcon;
