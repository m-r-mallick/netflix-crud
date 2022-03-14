import React, { useContext, useState } from "react";
import { createMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { fileToDataURI } from "../../misc/helpers";
import "./new-movie.css";

const NewMovie = () => {
   const { dispatch } = useContext(MovieContext);
   const [movie, setMovie] = useState({});

   const handleCreate = () => {
      createMovie(movie, dispatch);
   };

   const handleChange = (e) => {
      const value = e.target.value;
      setMovie({ ...movie, [e.target.name]: value });
   };

   return (
      <div className="newProduct">
         <h1 className="addProductTitle">New Movie</h1>
         <form className="addProductForm">
            <div className="addProductItem">
               <label>Image</label>
               <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={(e) =>
                     fileToDataURI(e.target.files[0])
                        .then((res) => setMovie({ ...movie, img: res }))
                        .catch((err) => console.log(err))
                  }
               />
            </div>
            <div className="addProductItem">
               <label>Image Title</label>
               <input
                  type="text"
                  placeholder="Image title"
                  name="imgTitle"
                  onChange={handleChange}
               />
            </div>
            <div className="addProductItem">
               <label>Title</label>
               <input
                  type="text"
                  placeholder="e.g., John Wick"
                  name="title"
                  onChange={handleChange}
               />
            </div>
            <div className="addProductItem">
               <label>Description</label>
               <input
                  type="text"
                  placeholder="Description"
                  name="desc"
                  onChange={handleChange}
               />
            </div>
            <div className="addProductItem">
               <label>Year</label>
               <input
                  type="text"
                  placeholder="Year"
                  name="year"
                  onChange={handleChange}
               />
            </div>
            <div className="addProductItem">
               <label>Genre</label>
               <input
                  type="text"
                  placeholder="Genre"
                  name="genre"
                  onChange={handleChange}
               />
            </div>

            <div className="addProductItem">
               <label>Limit</label>
               <input
                  type="text"
                  placeholder="Limit"
                  name="limit"
                  onChange={handleChange}
               />
            </div>
            <div className="addProductItem">
               <label>Is Series?</label>
               <select name="isSeries" id="isSeries" onChange={handleChange}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
               </select>
            </div>
            <div className="addProductItem">
               <label>Trailer (URL)</label>
               <input
                  type="text"
                  placeholder="Trailer"
                  name="trailer"
                  onChange={handleChange}
               />
            </div>
            <div className="addProductItem">
               <label>Video (YT video ID)</label>
               <input
                  type="text"
                  placeholder="Video"
                  name="video"
                  onChange={handleChange}
               />
            </div>
         </form>
         <button className="addProductButton" onClick={handleCreate}>
            Create
         </button>
      </div>
   );
};

export default NewMovie;
