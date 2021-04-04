import {LOGIN_OUT, USER_NAME_PASSWORD, IS_ERROR, SHOW_NEWS_DATA} from "../data/constants";
import {datasAPI} from "../api/api";


//auth-reducer
export function setLogOut() {
  return (dispatch) => {
    dispatch({type: LOGIN_OUT})
  }
};

export function setDataIsAuth(value) {
  return (dispatch) => {
    dispatch({type: USER_NAME_PASSWORD, value})
  }
};

export function setIsError(value) {
  return (dispatch) => {
    dispatch({type: IS_ERROR, value})
  }
};

export function setLoginOut(value) {
  return (dispatch) => {
    dispatch({type: LOGIN_OUT, value})
  }
};
// end auth-reducer.

//state-reducer
export const getDatas = () => async (dispatch) => {
  //dispatch(showIsDisabled(true))  
  try {
    const response = await datasAPI.getDatas()
     if (response.status === 200) {
       const data = response.data
        dispatch({type: SHOW_NEWS_DATA, data })
       // dispatch(hideIsDisabled(false))
     }
  } catch (error) {
      alert('Ошибка при отправки запроса, повторите попытку позже.')
     // dispatch(hideIsDisabled(false))
  } 
};




