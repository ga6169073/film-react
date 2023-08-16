import React, { useState } from 'react';
import './Navbar.scss';
import img from './../assets/netflix.png';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify'
import { PROCESS_LOGOUT } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const user = useSelector((state) => state.user);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(PROCESS_LOGOUT())
        toast.success('Logout succeed !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

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
                    <span>{user.isLoggedIn ? user.userInfo : "Null"}</span>
                    {console.log(user)}
                    <div className="profile">
                        <i className="fa-solid fa-gear icon"></i>
                        <div className="options">
                            <button>Settings</button>
                            <button onClick={logOut 
                            }>Logout</button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
        </div >
    )
}

export default Navbar