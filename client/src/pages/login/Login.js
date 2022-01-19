import React, { useRef, useState } from "react";
import "./login.scss";

const Login = () => {
   const [user, setUser] = useState({ email: "", password: "" });
   const emailRef = useRef();
   const passwordRef = useRef();

   const handleLogin = () => {
      setUser({
         email: emailRef.current?.value,
         password: passwordRef.current?.value,
      });
   };
   console.log(user);

   return (
      <div className="login">
         <div className="top">
            <div className="wrapper">
               <img
                  className="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  alt=""
               />
            </div>
         </div>
         <div className="container">
            <form>
               <h1>Sign In</h1>
               <input
                  type="email"
                  placeholder="Enter email or phone number"
                  ref={emailRef}
               />
               <input
                  type="password"
                  placeholder="Enter password"
                  ref={passwordRef}
               />
               <button className="loginButton" onClick={handleLogin}>
                  Sign In
               </button>
               <span>
                  New to Netflix? <b>Sign Up now</b>
               </span>
               <small>
                  This page is protected by Google reCAPTCHA to ensure you are
                  not a bot. <b>Learn more</b>
               </small>
            </form>
         </div>
      </div>
   );
};

export default Login;
