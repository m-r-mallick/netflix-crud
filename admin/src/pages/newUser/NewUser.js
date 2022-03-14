import React, { useContext, useState } from "react";
import { createUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import { fileToDataURI } from "../../misc/helpers";
import "./new-user.css";

const NewUser = () => {
   const { dispatch } = useContext(UserContext);
   const [user, setUser] = useState({});

   const handleCreate = (e) => {
      e.preventDefault();
      dispatch(createUser(user, dispatch));
   };

   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
   };

   return (
      <div className="new-user">
         <h1 className="new-user-title">New User</h1>
         <form className="new-user-form">
            <div className="new-user-item">
               <label> Avatar</label>
               <input
                  type="file"
                  id="profilePic"
                  name="profilePic"
                  style={{ border: "none", paddingLeft: "0px" }}
                  onChange={(e) =>
                     fileToDataURI(e.target.files[0])
                        .then((res) => setUser({ ...user, profilePic: res }))
                        .catch((err) => console.log(err))
                  }
               />
            </div>
            <div className="new-user-item">
               <label> Username</label>
               <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
               />
            </div>
            <div className="new-user-item">
               <label> Email</label>
               <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
               />
            </div>
            <div className="new-user-item">
               <label> Password</label>
               <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
               />
            </div>
            <div className="new-user-item">
               <label>Admin</label>
               <select
                  className="new-user-select"
                  name="isAdmin"
                  onChange={handleChange}
               >
                  <option value="">Select</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
               </select>
            </div>
         </form>
         <button className="new-user-button" onClick={handleCreate}>
            Create
         </button>
      </div>
   );
};

export default NewUser;
