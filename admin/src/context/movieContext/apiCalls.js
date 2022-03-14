import axios from "axios";
import {
   createMovieFailure,
   createMovieStart,
   createMovieSuccess,
   deleteMovieFailure,
   deleteMovieStart,
   deleteMovieSuccess,
   getMoviesFailure,
   getMoviesStart,
   getMoviesSuccess,
   updateMovieFailure,
   updateMovieStart,
   updateMovieSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
   dispatch(getMoviesStart());
   try {
      const res = await axios.get("/movies", {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(getMoviesSuccess(res.data));
   } catch (error) {
      dispatch(getMoviesFailure());
   }
};

export const deleteMovie = async (id, dispatch) => {
   dispatch(deleteMovieStart());
   try {
      await axios.delete(`/movies/${id}`, {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(deleteMovieSuccess(id));
   } catch (error) {
      dispatch(deleteMovieFailure());
   }
};

export const createMovie = async (data, dispatch) => {
   dispatch(createMovieStart());
   try {
      const res = await axios.post(`/movies/`, data, {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(createMovieSuccess(res.data));
   } catch (error) {
      dispatch(createMovieFailure());
   }
};

export const updateMovie = async (id, data, dispatch) => {
   dispatch(updateMovieStart());
   try {
      const res = await axios.put(`/movies/${id}`, data, {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(updateMovieSuccess(res.data));
   } catch (error) {
      dispatch(updateMovieFailure());
   }
};
