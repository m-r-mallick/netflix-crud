import { Visibility } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";
import { getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import "./widget-sm.css";

const WidgetSm = () => {
   const { users, dispatch } = useContext(UserContext);
   useEffect(() => {
      getUsers(dispatch, true);
   }, [dispatch]);

   return (
      <div className="widget-sm">
         <span className="widget-sm-title">Latest Members</span>
         <ul className="widget-sm-list">
            {users.length > 0 &&
               users.map((user) => {
                  return (
                     <li key={user._id} className="widget-sm-list-item">
                        <img
                           className="widget-sm-image"
                           src={
                              user.profilePic ||
                              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2Fnj1LJGpHx7g_xz8VUhHWx0UgAZ2jVtyRoMDXJ7c7m2g.gif%3Fformat%3Dpng8%26s%3D3c378f3cf1a9590dda0b3b3ddbf75647f9ec2987&f=1&nofb=1"
                           }
                           alt="profile_pic"
                        />
                        <div className="widget-sm-user">
                           <span className="widget-sm-username">
                              {user.username}
                           </span>
                           <span className="widget-sm-usertitle">
                              {user.email}
                           </span>
                        </div>
                        <button
                           className="widget-sm-button"
                           onClick={() => console.table(user)}
                        >
                           <Visibility className="widget-sm-icons" /> Display
                        </button>
                     </li>
                  );
               })}
         </ul>
      </div>
   );
};

export default WidgetSm;
