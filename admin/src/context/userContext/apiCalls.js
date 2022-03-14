import axios from "axios";
import {
   createUserFailure,
   createUserStart,
   createUserSuccess,
   deleteUserFailure,
   deleteUserStart,
   deleteUserSuccess,
   getUsersFailure,
   getUsersStart,
   getUsersSuccess,
   updateUserFailure,
   updateUserStart,
   updateUserSuccess,
} from "./UserActions";

export const getUsers = async (dispatch, latest = false) => {
   dispatch(getUsersStart());
   try {
      const res = await axios.get(!latest ? "/users/" : "/users?new=true", {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(getUsersSuccess(res.data.users));
   } catch (error) {
      dispatch(getUsersFailure());
   }
};
export const deleteUser = async (id, dispatch) => {
   dispatch(deleteUserStart());
   try {
      await axios.delete(`/users/${id}`, {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(deleteUserSuccess(id));
   } catch (error) {
      dispatch(deleteUserFailure());
   }
};

export const createUser = async (data, dispatch) => {
   dispatch(createUserStart());
   try {
      const res = await axios.post(`/users/`, data, {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(createUserSuccess(res.data));
   } catch (error) {
      dispatch(createUserFailure());
   }
};

export const updateUser = async (id, data, dispatch) => {
   dispatch(updateUserStart());
   try {
      const res = await axios.put(`/users/${id}`, data, {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(updateUserSuccess(res.data));
   } catch (error) {
      dispatch(updateUserFailure());
   }
};
