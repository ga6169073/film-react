import React, { useState } from 'react';
import './Navbar.scss';
import img from './../assets/filmflix-logo.png';
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar-component scrolled" : "navbar-component"}>
            <div className='navbar-container'>
                <div className='left'>
                    <img src={img} alt='Logo' />
                    <span>Homepage</span>
                    <span>Categories</span>
                    <span>Movies</span>
                    <span>Popular</span>
                    <span>My List</span>
                </div>


                <div className='right'>
                    <i className="fa-solid fa-magnifying-glass icon"></i>
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <i className="fa-solid fa-gear icon"></i>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar