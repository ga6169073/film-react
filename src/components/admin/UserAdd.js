import React, { useState } from 'react';
import './UserAdd.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../firebase"
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
const UserAdd = () => {
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
            navigate("/homeAdmin")
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

    return (
        <div className="container mt-4">
            <div className='form-title'>Create User</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select
                        className="form-control"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
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

export default UserAdd;
