import axios from "axios";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../constants";

export const authenticateUser =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: { email, password },
    });

    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem('MBL_USER_INFO', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const logOut  = () => (dispatch, state) => {
      dispatch({
          type: LOG_OUT,
      });
      localStorage.removeItem('MBL_USER_INFO');
      document.location.href = '/login';
  }