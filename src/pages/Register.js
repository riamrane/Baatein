import React from "react";
import  img from '../img/img2.png'
const Register=()=>{
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Baatein</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={img} alt=""/> 
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>If you have an account. Login</p>
            </div>
        </div>
    )
}


export default Register;