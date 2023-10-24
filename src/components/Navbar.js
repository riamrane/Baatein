import React from "react";
import profile from '../img/profile.jpg'
const Navbar =()=>{
    return (
        <div className="navbar">
            <span className="logo">
                Baatein
            </span>
            <div className="user">
                <img src={profile} alt=""/>
                <span>Ria</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar