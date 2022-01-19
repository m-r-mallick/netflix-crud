import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
   const [show, setShow] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 100) {
            setShow(true);
         } else {
            setShow(false);
         }
      });
      return () => {
         window.removeEventListener("scroll", null);
      };
   }, []);

   return (
      <div className={show ? "navbar scrolled" : "navbar"}>
         <div className="container">
            <div className="left">
               <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  alt="netflix-logo"
               />
               <Link to="/" className="link">
                  <span>Home</span>
               </Link>
               <Link to="/series" className="link">
                  <span>Series</span>
               </Link>
               <Link to="/movies" className="link">
                  <span>Movies</span>
               </Link>
               <span>New {"&"} Popular</span>
               <span>My List</span>
            </div>
            <div className="right">
               <Search className="icon" />
               <span>KID</span>
               <Notifications className="icon" />
               <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meme-arsenal.com%2Fmemes%2F851c80f9fcc23dfb2a951de85e168c74.jpg&f=1&nofb=1"
                  alt="profile-pic"
               />
               <div className="profile">
                  <ArrowDropDown className="icon" />
                  <div className="options">
                     <span>Settings</span>
                     <span>Logout</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
