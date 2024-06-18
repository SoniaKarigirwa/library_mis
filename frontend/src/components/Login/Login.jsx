import React, { useState } from 'react';
import './Login.css';
// import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { notification } from 'antd';
import { AuthApi } from '../api-services/axios.config';
import { FaBookOpen } from "react-icons/fa";

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if (!errors.email && !errors.password) {
            AuthApi.post('/login', values)

                .then(res => {
                    sessionStorage.setItem("token", res.data.data.access_token)
                    if (res.data.data.access_token) {
                        notification.success({
                            message: "Logged in successfully!"
                        })
                        console.log('res', res)
                        window.location.href = '/books'
                    } else {
                        alert("Try again");
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='login-wrapper'>
            <div className='left'>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p>Welcome back! Please login to your account.</p>
                    <div className='input-container'>
                        <div className='input-box'>
                            <label>Email</label>
                            <input type="text" placeholder='Email' name='email' onChange={handleInput} required />
                        </div>

                        <div className='input-box'>
                            <label>Password</label>
                            <input type="password" placeholder='Password' name='password' onChange={handleInput} required />
                        </div>
                        {/* {errors.password && <span> {errors.password}</span>} */}
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="a">Forgot password?</a>
                    </div>
                    <button name='login-btn' type='submit'>Login</button>

                </form>
            </div>
            <div className='right'>
                <FaBookOpen style={{ fontSize: '4em' }} />
                <h1>Library Management System</h1>
            </div>

        </div>
    )
}

export default Login