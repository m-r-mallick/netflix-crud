import { Publish } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { fileToDataURI } from "../../misc/helpers";
import "./movie.css";

const Movie = () => {
   const location = useLocation();
   const movie = location?.movie;
   const [updatedMovie, setUpdatedMovie] = useState(movie);
   const [updatedImage, setUpdatedImage] = useState(movie?.img);
   const { dispatch } = useContext(MovieContext);

   const handleChange = (e) => {
      setUpdatedMovie({ ...updatedMovie, [e.target.name]: e.target.value });
   };

   const handleUpdate = (e) => {
      e.preventDefault();
      if (updatedImage !== updatedMovie?.img)
         fileToDataURI(updatedImage)
            .then((res) => setUpdatedMovie({ ...updatedMovie, img: res }))
            .catch((err) => console.log(err));
      updateMovie(updatedMovie._id, updatedMovie, dispatch);
   };

   return (
      <div className="product">
         <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newMovie">
               <button className="productAddButton">Create</button>
            </Link>
         </div>
         <div className="productTop">
            <div className="productTopRight">
               <div className="productInfoTop">
                  <img
                     src={movie?.img}
                     alt={movie?.imgTitle}
                     className="productInfoImg"
                  />
                  <span className="productName">{movie?.title}</span>
               </div>
               <div className="productInfoBottom">
                  <div className="productInfoItem">
                     <span className="productInfoKey">ID:</span>
                     <span className="productInfoValue">{movie?._id}</span>
                  </div>
                  <div className="productInfoItem">
                     <span className="productInfoKey">Genre:</span>
                     <span className="productInfoValue">{movie?.genre}</span>
                  </div>
                  <div className="productInfoItem">
                     <span className="productInfoKey">Year:</span>
                     <span className="productInfoValue">{movie?.year}</span>
                  </div>
                  <div className="productInfoItem">
                     <span className="productInfoKey">Limit:</span>
                     <span className="productInfoValue">{movie?.limit}</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="productBottom">
            <form className="productForm">
               <div className="productFormLeft">
                  <label>Movie Title</label>
                  <input
                     name="title"
                     type="text"
                     placeholder={movie?.title}
                     onChange={handleChange}
                  />
                  <label>Year</label>
                  <input
                     name="year"
                     type="text"
                     placeholder={movie?.year}
                     onChange={handleChange}
                  />
                  <label>Genre</label>
                  <input
                     name="genre"
                     type="text"
                     placeholder={movie?.genre}
                     onChange={handleChange}
                  />
                  <label>Limit</label>
                  <input
                     name="limit"
                     type="text"
                     placeholder={movie?.limit}
                     onChange={handleChange}
                  />
                  <label>Trailer</label>
                  <input
                     name="trailer"
                     type="text"
                     placeholder={movie?.trailer}
                     onChange={handleChange}
                  />
                  <label>Video</label>
                  <input
                     name="video"
                     type="text"
                     placeholder={movie?.video}
                     onChange={handleChange}
                  />
               </div>
               <div className="productFormRight">
                  <div className="productUpload">
                     <img
                        src={movie?.img}
                        alt={movie?.imgTitle}
                        className="productUploadImg"
                     />
                     <label htmlFor="file">
                        <Publish />
                     </label>
                     <input
                        type="file"
                        id="file"
                        onChange={(e) => setUpdatedImage(e.target.files[0])}
                        style={{ display: "none" }}
                     />
                  </div>
                  <button className="productButton" onClick={handleUpdate}>
                     Update
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Movie;
