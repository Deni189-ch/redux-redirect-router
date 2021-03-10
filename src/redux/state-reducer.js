import {SHOW_NEWS_DATA, } from "../data/constants";

const initialState = {
  newsData: [],
};

export const stateReducer = (state = initialState, action) => {
  switch (action.type) {

    case SHOW_NEWS_DATA:
      return { ...state,
        
        newsData: [...action.data]
      };
      
    default:
      return state;
  }
};