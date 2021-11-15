import {
  GET_MESSAGES_FAIL,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  UPDATE_MESSAGE_REQUEST,
  UPDATE_MESSAGE_SUCCESS,
  UPDATE_MESSAGE_FAIL,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAIL
} from "../constants";

export const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MESSAGES_REQUEST:
      return {
        loading: true,
      };
    case GET_MESSAGES_SUCCESS:
      return {
        loading: false,
        messages: action.payload,
      };
    case GET_MESSAGES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_MESSAGE_REQUEST:
      return {
       ...state, loading:true
      };
    case UPDATE_MESSAGE_SUCCESS:
      return {
        loading: false,
        messages:  state?.messages?.map((message) =>
          message._id !== action.payload._id
            ? message
            : Object.assign({}, message, { isRead: true })
        ),
      };
    case UPDATE_MESSAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DELETE_MESSAGE_REQUEST:
      return {
       ...state, loading:true
      };
    case DELETE_MESSAGE_SUCCESS:
      return {
        loading: false,
        messages:  state?.messages?.filter((message) =>
          message._id !== action.payload._id
        ),
      };
    case DELETE_MESSAGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
