// import { useEffect } from 'react'
// import { useNavigate } from 'react-router'

// export const Logout = () => {
  
//   const navigate = useNavigate();

//   useEffect(()=>{
//     localStorage.removeItem('token')
//     navigate("/login")
//   })

//   return (
//     <></>
//   )
// }

// Logout.jsx
import React from 'react';
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Logout = () => {
    const handleLogout = () => {
        sessionStorage.removeItem("token"); // or whatever you use to manage sessions
        window.location.href = '/'; // or wherever your login page is
    }

    return (
        <FaArrowRightFromBracket style={{fontSize: '2em'}} onClick={handleLogout}>Log out</FaArrowRightFromBracket>   
    )
}

export default Logout;