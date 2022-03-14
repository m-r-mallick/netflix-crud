import axios from "axios";
import {
   loginFailure,
   loginStart,
   loginSuccess,
   logoutAttempt,
} from "./AuthAction";

export const login = async (user, dispatch) => {
   dispatch(loginStart());
   try {
      const res = await axios.post(`auth/login`, user);
      res.data.user.isAdmin && dispatch(loginSuccess(res.data));
   } catch (error) {
      dispatch(loginFailure());
   }
};

export const logout = (dispatch) => {
   try {
      localStorage.removeItem("user");
      dispatch(logoutAttempt());
   } catch (error) {
      console.log(error);
   }
};
