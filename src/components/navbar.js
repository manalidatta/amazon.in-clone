import React from 'react';
import "../styles/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <MenuIcon className="navbar__menuIcon"/>
                <span>All</span>
            </div>
            <span className="navbar__option">Mobiles</span>
            <span className="navbar__option">Best Sellers</span>
            <span className="navbar__option">Electronics</span>
            <span className="navbar__option">Fashion</span>
            <span className="navbar__option">Customer Service</span>
            <span className="navbar__option">Prime</span>
            <span className="navbar__option">Home & Kitchen</span>
            <span className="navbar__option">Amazon Pay</span>
            <span className="navbar__option">Computers</span>
            <span className="navbar__option">Today's Deals</span>
            <span className="navbar__option">New Releases</span>
            <span className="navbar__last">Great India Festival | SHOP NOW!!</span>
        </div>
    )
}
