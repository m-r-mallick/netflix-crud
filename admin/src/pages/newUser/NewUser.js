import React from "react";
import "./new-user.css";

const NewUser = () => {
   return (
      <div className="new-user">
         <h1 className="new-user-title">New User</h1>
         <form className="new-user-form">
            <div className="new-user-item">
               <label> Username</label>
               <input type="text" placeholder="Username" />
            </div>
            <div className="new-user-item">
               <label> Full Name</label>
               <input type="text" placeholder="Full Name" />
            </div>
            <div className="new-user-item">
               <label> Email</label>
               <input type="email" placeholder="Email" />
            </div>
            <div className="new-user-item">
               <label> Password</label>
               <input type="password" placeholder="Password" />
            </div>
            <div className="new-user-item">
               <label> Phone</label>
               <input type="text" placeholder="Phone" />
            </div>
            <div className="new-user-item">
               <label> Address</label>
               <input type="text" placeholder="Address" />
            </div>
            <div className="new-user-item">
               <label>Gender</label>
               <div className="new-user-gender">
                  <input type="radio" name="gender" id="male" value="male" />
                  <label htmlFor="male">Male</label>
                  <input
                     type="radio"
                     name="gender"
                     id="female"
                     value="female"
                  />
                  <label htmlFor="female">Female</label>
                  <input type="radio" name="gender" id="other" value="other" />
                  <label htmlFor="other">Other</label>
               </div>
            </div>
            <div className="new-user-item">
               <label>Active</label>
               <select className="new-user-select">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
            </div>
         </form>
         <button className="new-user-button">Create</button>
      </div>
   );
};

export default NewUser;
