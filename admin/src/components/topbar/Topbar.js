import React, { useContext } from "react";
import "./topbar.css";
import {
   ExitToAppOutlined,
   Language,
   NotificationsNone,
} from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/apiCalls";
import { Link, useHistory } from "react-router-dom";

const Topbar = () => {
   const { user } = JSON.parse(localStorage.getItem("user"));
   const { dispatch } = useContext(AuthContext);
   const history = useHistory();
   const handleLogout = () => {
      logout(dispatch);
      history.push("/login");
   };
   return (
      <div className="topbar">
         <div className="topbar-wrapper">
            <Link to="/" className="link">
               <div className="top-left">
                  <span className="logo">{user.username}</span>
               </div>
            </Link>
            <div className="top-right">
               <div className="topbar-icons">
                  <NotificationsNone />
                  <span className="top-icons-badge">2</span>
               </div>
               <div className="topbar-icons">
                  <Language />
               </div>
               <div className="topbar-icons" onClick={handleLogout}>
                  <ExitToAppOutlined />
               </div>
               <img
                  src={
                     user?.profilePic ||
                     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meme-arsenal.com%2Fmemes%2F851c80f9fcc23dfb2a951de85e168c74.jpg&f=1&nofb=1"
                  }
                  alt="avatar"
                  className="top-avatar"
               />
            </div>
         </div>
      </div>
   );
};

export default Topbar;
