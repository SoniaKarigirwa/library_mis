import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { AuthApi } from '../api-services/axios.config';
import SignupValidation from './SignupValidation';
import { FaBookOpen } from "react-icons/fa";

const Signup = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = SignupValidation(values);
        if (Object.keys(validationErrors).length > 0) {
            // Display validation errors to the user
            for (const error in validationErrors) {
                notification.error({
                    message: validationErrors[error],
                });
            }
        } else {
            try {
                const res = await AuthApi.post('/users/addUser', values);
                sessionStorage.setItem("token", res.data.data.access_token);
                if (res.data.data.access_token) {
                    notification.success({
                        message: "Successful registration!"
                    });
                    window.location.href = '/books';
                } else {
                    notification.error({
                        message: "Registration failed. Please try again."
                    });
                }
            } catch (err) {
                console.error(err);
                notification.error({
                    message: err.message || "An error occurred. Please try again."
                });
            }
        }
    }


    


    return (
        <div className='signup-wrapper'>
            <div className='left'>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Signup</h1>
                    <p>Welcome! Please create an account.</p>
                    <div className='input-container'>
                        <div className='input-box'>
                            <label>First name</label>
                            <input type="text" placeholder='Enter your first name' name='firstName' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <label>Last name</label>
                            <input type="text" placeholder='Enter your last name' name='lastName' onChange={handleInput} required />
                        </div>
                        <div className='input-box'>
                            <label>Email</label>
                            <input type="text" placeholder='Enter your email' name='email' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <label>Password</label>
                            <input type="password" placeholder='Enter your password' name='password' onChange={handleInput} required />
                        </div>
                        {/* {errors.password && <span> {errors.password}</span>} */}
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="a">Forgot password?</a>
                    </div>
                    <button name='signup-btn' type='submit'>Signup</button>

                </form>
            </div>
            <div className='right'>
                <FaBookOpen style={{fontSize: '4em'}}/>
                <h1>Library Management System</h1>
            </div>

        </div>
    )


}


export default Signup;