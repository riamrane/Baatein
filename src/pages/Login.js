import React from "react";
import  img from '../img/img2.png'
const Login=()=>{
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Baatein</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    
                    <button>Sign in</button>
                </form>
                <p>Don't have an account?. Register</p>
            </div>
        </div>
    )
}


export default Login;