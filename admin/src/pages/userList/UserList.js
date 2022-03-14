import React, { useContext, useEffect } from "react";
import "./user-list.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext/UserContext";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";

const UserList = () => {
   const { users, dispatch } = useContext(UserContext);

   useEffect(() => {
      getUsers(dispatch);
   }, [dispatch]);

   const handleDelete = (id) => {
      deleteUser(id, dispatch);
   };
   const columns = [
      { field: "_id", headerName: "ID", width: 190 },
      {
         field: "user",
         headerName: "User",
         width: 150,
         renderCell: (params) => (
            <div className="user-list-user">
               <img
                  className="user-list-image"
                  src={
                     params.row.profilePic ||
                     "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"
                  }
                  alt="avatar"
               />
               {params.row.username}
            </div>
         ),
      },
      {
         field: "isAdmin",
         headerName: "Is Admin?",
         width: 150,
      },
      {
         field: "email",
         headerName: "Email",
         width: 200,
      },
      {
         field: "createdAt",
         headerName: "Registration",
         width: 200,
      },
      {
         field: "action",
         headerName: "Action",
         width: 160,
         renderCell: (params) => (
            <div className="action-icons-container">
               <Link
                  to={{ pathname: `/user/${params.row._id}`, user: params.row }}
               >
                  <EditOutlined className="user-list-edit" />
               </Link>

               <DeleteOutline
                  className="user-list-delete"
                  onClick={() => {
                     handleDelete(params.row._id);
                  }}
               />
            </div>
         ),
      },
   ];

   return (
      <div className="user-list">
         <DataGrid
            rows={users}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={(r) => r._id}
         />
      </div>
   );
};

export default UserList;
