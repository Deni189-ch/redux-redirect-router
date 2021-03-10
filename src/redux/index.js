import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { authReducer } from "./auth-reducer";
import { stateReducer } from "./state-reducer";


const rootReducer = combineReducers({
  auth: authReducer,
  state: stateReducer,
});

const configurationStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};

export default configurationStore();
