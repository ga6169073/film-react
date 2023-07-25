
import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Login.scss';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    const handleOnChangeInput = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleLogin = async () => {
        setErrMessage('');
        try {
            // let data = await handleLoginApi(username, password);
            // if (data && data.errCode !== 0) {
            //     setErrMessage(data.message);
            // }
            // if (data && data.errCode === 0) {
            //     props.userLoginSuccess(data.user);
            //     console.log('login succeed');
            // }
        } catch (e) {
            if (e.response && e.response.data) {
                setErrMessage(e.response.data.message);
            }
        }
    };

    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword);
    };
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
                        <span className='forgot-password'>Forgot your password</span>
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

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
