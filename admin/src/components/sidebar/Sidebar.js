import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
   BarChart,
   Home,
   ListAltOutlined,
   ListOutlined,
   LocalMovies,
   MovieCreation,
   PermIdentity,
   PersonAddOutlined,
   Report,
   Timeline,
   TrendingUp,
   WorkOutline,
} from "@material-ui/icons";

const Sidebar = () => {
   return (
      <div className="sidebar">
         <div className="sidebar-wrapper">
            <div className="sidebar-menu">
               <h3 className="sidebar-title">Dashboard</h3>
               <ul className="sidebar-list">
                  <Link to="/" className="link">
                     <li className="sidebar-list-item">
                        <Home className="sidebar-icon" /> Home
                     </li>
                  </Link>

                  <li className="sidebar-list-item">
                     <Timeline className="sidebar-icon" /> Analytics
                  </li>
                  <li className="sidebar-list-item">
                     <TrendingUp className="sidebar-icon" /> Sales
                  </li>
               </ul>
            </div>
            <div className="sidebar-menu">
               <h3 className="sidebar-title">Quick Menu</h3>
               <ul className="sidebar-list">
                  <Link to="/users" className="link">
                     <li className="sidebar-list-item">
                        <PermIdentity className="sidebar-icon" /> Users
                     </li>
                  </Link>

                  <Link to="/movies" className="link">
                     <li className="sidebar-list-item">
                        <LocalMovies className="sidebar-icon" /> Movies
                     </li>
                  </Link>

                  <Link to="/lists" className="link">
                     <li className="sidebar-list-item">
                        <ListOutlined className="sidebar-icon" /> Lists
                     </li>
                  </Link>

                  <li className="sidebar-list-item">
                     <BarChart className="sidebar-icon" /> Reports
                  </li>
               </ul>
            </div>
            <div className="sidebar-menu">
               <h3 className="sidebar-title">Notifications</h3>
               <ul className="sidebar-list">
                  <Link to="/newMovie" className="link">
                     <li className="sidebar-list-item">
                        <MovieCreation className="sidebar-icon" /> Movie/Series
                     </li>
                  </Link>

                  <Link to="/newList" className="link">
                     <li className="sidebar-list-item">
                        <ListAltOutlined className="sidebar-icon" /> List
                     </li>
                  </Link>

                  <Link to="/newUser" className="link">
                     <li className="sidebar-list-item">
                        <PersonAddOutlined className="sidebar-icon" /> User
                     </li>
                  </Link>
               </ul>
            </div>
            <div className="sidebar-menu">
               <h3 className="sidebar-title">Staff</h3>
               <ul className="sidebar-list">
                  <li className="sidebar-list-item">
                     <WorkOutline className="sidebar-icon" /> Manage Users
                  </li>
                  <li className="sidebar-list-item">
                     <Timeline className="sidebar-icon" /> Analytics
                  </li>
                  <li className="sidebar-list-item">
                     <Report className="sidebar-icon" /> Reports
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};
export default Sidebar;
