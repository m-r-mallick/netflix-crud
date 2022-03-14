import axios from "axios";
import {
   createListFailure,
   createListStart,
   createListSuccess,
   deleteListFailure,
   deleteListStart,
   deleteListSuccess,
   getListsFailure,
   getListsStart,
   getListsSuccess,
   updateListFailure,
   updateListStart,
   updateListSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
   dispatch(getListsStart());
   try {
      const res = await axios.get("/lists/", {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(getListsSuccess(res.data));
   } catch (error) {
      dispatch(getListsFailure());
   }
};

export const deleteList = async (id, dispatch) => {
   dispatch(deleteListStart());
   try {
      await axios.delete(`/lists/${id}`, {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(deleteListSuccess(id));
   } catch (error) {
      dispatch(deleteListFailure());
   }
};

export const createList = async (list, dispatch) => {
   dispatch(createListStart());
   try {
      const res = await axios.post("/lists/", list, {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(createListSuccess(res.data));
   } catch (error) {
      dispatch(createListFailure());
   }
};

export const updateList = async (id, list, dispatch) => {
   dispatch(updateListStart());
   try {
      const res = await axios.put(`/lists/${id}`, list, {
         headers: {
            token: `Bearer ${
               JSON.parse(localStorage.getItem("user")).accessToken
            }`,
         },
      });
      dispatch(updateListSuccess(res.data));
   } catch (error) {
      dispatch(updateListFailure());
   }
};
