import Axios from 'axios';
import {
  GET_MESSAGES_FAIL,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  UPDATE_MESSAGE_FAIL,
  UPDATE_MESSAGE_REQUEST,
  UPDATE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAIL,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
} from "../constants";

export const getAllMessages = () => async (dispatch) => {
  dispatch({
    type: GET_MESSAGES_REQUEST,
    payload: null,
  });

  try {
    const { data } = await Axios.get("/api/messages/");
    dispatch({
      type: GET_MESSAGES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MESSAGES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const updateReadStatus = (id) => async (dispatch) => {
dispatch({
  type: UPDATE_MESSAGE_REQUEST,
  payload:null
})
try {
  const {data}  = await Axios.put(`/api/messages/${id}`);
  dispatch({
    type: UPDATE_MESSAGE_SUCCESS,
    payload: data,
  })
}catch(error){
  dispatch({
    type: UPDATE_MESSAGE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
}
}
export const deleteMessage = (id) => async (dispatch) => {
dispatch({
  type: DELETE_MESSAGE_REQUEST,
  payload:null
})
try {
  const {data}  = await Axios.delete(`/api/messages/${id}`);
  dispatch({
    type: DELETE_MESSAGE_SUCCESS,
    payload: data,
  })
}catch(error){
  dispatch({
    type: DELETE_MESSAGE_FAIL,
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  });
}
}

export const sendMessage = ({name, content, subject}) => async (dispatch) => {
  dispatch({
    type: SEND_MESSAGE_REQUEST,
    payload: {name, subject, content},
  });

  try {
    const {data} = await Axios.post('api/messages', {name, content, subject})
    dispatch({
      type: SEND_MESSAGE_SUCCESS,
      payload: data,
    })
  }
  catch(error) {
    dispatch({
      type: DELETE_MESSAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}