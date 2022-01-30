import React from "react";
import "./user-list.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const UserList = () => {
   const handleEdit = (params) => {
      console.log(params);
   };
   const handleDelete = (params) => {
      console.log(params);
   };
   const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
         field: "user",
         headerName: "User",
         width: 150,
         renderCell: (params) => (
            <div className="user-list-user">
               <img
                  className="user-list-image"
                  src={params.row.avatar}
                  alt="avatar"
               />
               {params.row.username}
            </div>
         ),
      },
      {
         field: "status",
         headerName: "Status",
         width: 150,
      },
      {
         field: "transaction",
         headerName: "Transaction",
         width: 200,
      },
      {
         field: "action",
         headerName: "Action",
         width: 160,
         renderCell: (params) => (
            <div className="action-icons-container">
               <Link to={`/user/${params.row.id}`}>
                  <EditOutlined
                     className="user-list-edit"
                     onClick={() => {
                        handleEdit(params);
                     }}
                  />
               </Link>

               <DeleteOutline
                  className="user-list-delete"
                  onClick={() => {
                     handleDelete(params);
                  }}
               />
            </div>
         ),
      },
   ];

   const rows = [
      {
         id: 1,
         username: "Jon Snow",
         avatar:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.livemint.com%2Frf%2FImage-621x414%2FLiveMint%2FPeriod2%2F2018%2F10%2F03%2FPhotos%2FProcessed%2Fjonsnow-kHOF--621x414%40LiveMint.jpg&f=1&nofb=1",
         email: "jon@gmail.com",
         status: "active",
         transaction: "$120.00",
      },
   ];
   return (
      <div className="user-list">
         <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
         />
      </div>
   );
};

export default UserList;
