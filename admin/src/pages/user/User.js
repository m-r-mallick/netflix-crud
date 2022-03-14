import React, { useContext, useState } from "react";
import "./user.css";
import { Link, useLocation } from "react-router-dom";
import { fileToDataURI } from "../../misc/helpers";
import {
   CalendarToday,
   MailOutline,
   PermIdentity,
   Publish,
} from "@material-ui/icons";
import { updateUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

const User = () => {
   const location = useLocation();
   const user = location.user;
   const { dispatch } = useContext(UserContext);
   const [updatedUser, setUpdatedUser] = useState(user);
   const [updatedImage, setUpdatedImage] = useState(null);

   const handleChange = (e) => {
      setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
   };

   const handleUpdate = (e) => {
      e.preventDefault();
      if (updatedImage !== updatedUser?.profilePic)
         fileToDataURI(updatedImage)
            .then((res) => setUpdatedUser({ ...updatedUser, profilePic: res }))
            .catch((err) => console.log(err));
      updateUser(updatedUser._id, updatedUser, dispatch);
   };
   return (
      <div className="user">
         <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
               <button className="userAddButton">Create</button>
            </Link>
         </div>
         <div className="userContainer">
            <div className="userShow">
               <div className="userShowTop">
                  <img
                     src={
                        user?.profilePic ||
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"
                     }
                     alt="avatar"
                     className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                     <span className="userShowUsername">{user.username}</span>
                     <span className="userShowUserTitle">
                        {user.isAdmin ? (
                           <span
                              style={{
                                 color: "red",
                                 fontWeight: "bold",
                              }}
                           >
                              admin
                           </span>
                        ) : (
                           <span
                              style={{
                                 color: "green",
                                 fontWeight: "bold",
                              }}
                           >
                              subadmin
                           </span>
                        )}
                     </span>
                  </div>
               </div>
               <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                     <PermIdentity className="userShowIcon" />
                     <span className="userShowInfoTitle">{user.username}</span>
                  </div>
                  <div className="userShowInfo">
                     <CalendarToday className="userShowIcon" />
                     <span className="userShowInfoTitle">
                        {new Date(user.createdAt).toDateString()}
                     </span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>

                  <div className="userShowInfo">
                     <MailOutline className="userShowIcon" />
                     <span className="userShowInfoTitle">{user.email}</span>
                  </div>
               </div>
            </div>
            <div className="userUpdate">
               <span className="userUpdateTitle">Edit</span>
               <form className="userUpdateForm">
                  <div className="userUpdateLeft">
                     <div className="userUpdateItem">
                        <label>Username</label>
                        <input
                           type="text"
                           name="username"
                           placeholder={user.username}
                           onChange={handleChange}
                           className="userUpdateInput"
                        />
                     </div>

                     <div className="userUpdateItem">
                        <label>Email</label>
                        <input
                           type="text"
                           name="email"
                           placeholder={user.email}
                           onChange={handleChange}
                           className="userUpdateInput"
                        />
                     </div>
                  </div>
                  <div className="userUpdateRight">
                     <div className="userUpdateUpload">
                        <img
                           className="userUpdateImg"
                           src={
                              user?.profilePic ||
                              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"
                           }
                           alt="avatar"
                        />
                        <label htmlFor="file">
                           <Publish className="userUpdateIcon" />
                        </label>
                        <input
                           type="file"
                           id="file"
                           style={{ display: "none" }}
                           onChange={(e) => setUpdatedImage(e.target.files[0])}
                        />
                     </div>
                     <button
                        className="userUpdateButton"
                        onClick={handleUpdate}
                     >
                        Update
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default User;
