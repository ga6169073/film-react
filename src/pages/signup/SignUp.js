import React, { useState, useEffect } from 'react';
import './SignUp.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../firebase"
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log('Form data:', formData);
        try {
            const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            await setDoc(doc(db, "users", res.user.uid), {
                ...formData,
                timeStamp: serverTimestamp(),
            })
            toast.success('Register succeed', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            navigate("/login")
        } catch (err) {
            toast.error('Register failed: '+err, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            console.log(err);
        }
    };
    useEffect(()  => {
        document.body.classList.add('body-white');
    
        return () => {
            document.body.classList.remove('body-white');
        };
    });
    return (
        <div className="container signup mt-4">
            <div className='form-title'>Create User</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control col-9"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control col-9"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control col-9"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group" >
                    <label htmlFor="role">Role</label>
                    <select
                        className="form-control col-9"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        disabled
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
