import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
   const [email, setEmail] = useState("");
   //eslint-disable-next-line
   const [password, setPassword] = useState("");

   const emailRef = useRef();
   const passwordRef = useRef();

   const handleStart = () => {
      if (emailRef.current.value.trim() !== "") {
         setEmail(emailRef.current.value);
      } else {
         alert("Email cannot be null!");
      }
   };

   const handleFinish = () => {
      if (passwordRef.current.value.trim() !== "") {
         setPassword(passwordRef.current.value);
      } else {
         alert("Password cannot be null!");
      }
   };

   return (
      <div className="register">
         <div className="top">
            <div className="wrapper">
               <img
                  className="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  alt=""
               />
               <button className="loginButton">Sign In</button>
            </div>
         </div>
         <div className="container">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
               Ready to watch? Enter your email to create or recharge your
               membership
            </p>
            {!email ? (
               <div className="input">
                  <input
                     type="email"
                     placeholder="Enter email"
                     ref={emailRef}
                  />
                  <button className="registerButton" onClick={handleStart}>
                     Get Started
                  </button>
               </div>
            ) : (
               <form className="input">
                  <input
                     type="password"
                     placeholder="Enter password"
                     ref={passwordRef}
                  />
                  <button className="registerButton" onClick={handleFinish}>
                     Register
                  </button>
               </form>
            )}
         </div>
      </div>
   );
};

export default Register;
