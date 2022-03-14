import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteList, getLists } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import "./genre-list.css";

const GenreList = () => {
   const { lists, dispatch } = useContext(ListContext);

   useEffect(() => {
      getLists(dispatch);
   }, [dispatch]);

   const handleDelete = (id) => {
      deleteList(id, dispatch);
   };

   const columns = [
      { field: "_id", headerName: "ID", width: 250 },
      { field: "title", headerName: "Title", width: 250 },
      { field: "genre", headerName: "Genre", width: 150 },
      { field: "type", headerName: "Type", width: 150 },
      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link
                     to={{
                        pathname: `/list/${params.row._id}`,
                        list: params.row,
                     }}
                  >
                     <EditOutlined className="productListEdit" />
                  </Link>
                  <DeleteOutline
                     className="productListDelete"
                     onClick={() => handleDelete(params.row._id)}
                  />
               </>
            );
         },
      },
   ];

   return (
      <div className="productList">
         <DataGrid
            rows={lists}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            checkboxSelection
            getRowId={(r) => r._id}
         />
      </div>
   );
};

export default GenreList;
