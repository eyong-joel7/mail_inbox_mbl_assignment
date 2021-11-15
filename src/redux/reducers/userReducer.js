import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../constants";

export const users = (state = {}, action) => {
switch(action.type){
    case LOGIN_REQUEST: return {
        loading:true,
    }
    case LOGIN_SUCCESS: return {
        loading:false,
        user:action.payload,
    }
    case LOGIN_FAIL: return {
        loading: false,
        error: action.payload,
    }
    case LOG_OUT: return {
        loading: false,
        user: null
    }
    default: 
    return state;
}
}