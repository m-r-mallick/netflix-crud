import React from "react";
import "./topbar.css";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";

const Topbar = () => {
   return (
      <div className="topbar">
         <div className="topbar-wrapper">
            <div className="top-left">
               <span className="logo">mrmallick</span>
            </div>
            <div className="top-right">
               <div className="topbar-icons">
                  <NotificationsNone />
                  <span className="top-icons-badge">2</span>
               </div>
               <div className="topbar-icons">
                  <Language />
               </div>
               <div className="topbar-icons">
                  <Settings />
               </div>
               <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meme-arsenal.com%2Fmemes%2F851c80f9fcc23dfb2a951de85e168c74.jpg&f=1&nofb=1"
                  alt=""
                  className="top-avatar"
               />
            </div>
         </div>
      </div>
   );
};

export default Topbar;
