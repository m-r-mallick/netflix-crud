import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./movie-list.css";

const MovieList = () => {
   const { movies, dispatch } = useContext(MovieContext);

   useEffect(() => {
      getMovies(dispatch);
   }, [dispatch]);

   const handleDelete = (id) => {
      deleteMovie(id, dispatch);
   };

   const columns = [
      { field: "_id", headerName: "ID", width: 200 },
      {
         field: "movie",
         headerName: "Movie",
         width: 200,
         renderCell: (params) => {
            return (
               <div className="productListItem">
                  <img
                     className="productListImg"
                     src={params.row.img}
                     alt={params.row.imgTitle}
                  />
                  {params.row.title}
               </div>
            );
         },
      },
      { field: "genre", headerName: "Genre", width: 120 },
      { field: "year", headerName: "Year", width: 120 },
      { field: "limit", headerName: "Limit", width: 120 },
      { field: "isSeries", headerName: "Is Series?", width: 120 },

      {
         field: "action",
         headerName: "Action",
         width: 150,
         renderCell: (params) => {
            return (
               <>
                  <Link
                     to={{
                        pathname: `/movie/${params.row._id}`,
                        movie: params.row,
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
            rows={movies}
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

export default MovieList;
