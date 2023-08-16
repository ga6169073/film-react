/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import './Login.scss';
import { useNavigate } from "react-router-dom";
import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from '../../redux/userSlice';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    const dispatch = useDispatch();
    const userRedux = useSelector((state) => state.user);
    const navigate = useNavigate()
    const handleOnChangeInput = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch(USER_LOGIN_SUCCESS({userInfo: user.email}));
                navigate("/")
                navigate(0)
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setErrMessage(error.message)
                dispatch(USER_LOGIN_FAIL())
            });
    };

    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const handleSignup = () => {
        navigate("/signup")
    }
    return (
        <div className="login-background">
            <div className="login-container">
                <div className="login-content">
                    <div className='col-12 login-text'>Login</div>
                    <div className='col-12 form-group login-input'>
                        <label>Username</label>
                        <input type="text" className='form-control' placeholder='Enter your username'
                            value={username}
                            name="username"
                            onChange={handleOnChangeInput}></input>
                    </div>
                    <div className='col-12 form-group login-input'>
                        <label>Password</label>
                        <div className='custom-input-password'>
                            <input type={isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter your password'
                                value={password}
                                name="password"
                                onChange={handleOnChangeInput}></input>
                            <span onClick={handleShowHidePassword}>
                                <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                            </span>
                        </div>

                    </div>

                    <div className='col-12' style={{ color: 'red' }}>
                        {errMessage}
                    </div>

                    <div className='col-12'>
                        <button className='btn-login' onClick={handleLogin}>Login</button>
                    </div>
                    <div className='col-12'>
                        <span className='signup' onClick={handleSignup}>Signup</span>
                    </div>
                    <div className='col-12 text-center mt-3'>
                        <span className='text-other-login'>Or Login with</span>
                    </div>
                    <div className='col-12 social-login'>
                        <i className='fab fa-facebook-f facebook'></i>
                        <i className='fab fa-google-plus-g google'></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
