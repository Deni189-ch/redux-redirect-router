import {LOGIN_OUT, USER_NAME_PASSWORD, IS_ERROR} from "../data/constants";

const initialState = {
  isAuth: false,
  dataIsAuth: {
    username: "admin",
    password: "free",
  },
  isError: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OUT:
      return { ...state,
          isAuth: action.value
      };

    case USER_NAME_PASSWORD:
      if(state.dataIsAuth.password === action.value.password &&
         state.dataIsAuth.username === action.value.username) {
        return { ...state,
           isAuth: true,
           isError: false
          };
      } else {
        return {...state, isError: true}
      }
   
      case IS_ERROR:
        return { ...state, isError: action.value};  
      
    default:
      return state;
  }
};