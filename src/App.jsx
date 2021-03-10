import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { setLogOut, setDataIsAuth, setIsError, getDatas } from "./redux/actions";
import { Main, Login, News, Navbar, } from "./data/index";

import "antd/dist/antd.css";
import "./data/styles/index.scss";

function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuth);
  const dataIsAuth = useSelector(state => state.auth.dataIsAuth);
  const isError = useSelector(state => state.auth.isError);
  const newsData = useSelector(state => state.state.newsData);

  return (
    <div className="App content">
      <Navbar isAuth={isAuth} />
      <Switch>
        <Route path="/main" render={() => <Main />} />
        <Route path="/news" render={() => <News 
        getDatas={getDatas}
        dispatch={dispatch}
        newsData={newsData}
        />}
        />
        <Route
          path="/login"
          render={() => {
            return (
              <Login
                isAuth={isAuth}
                dataIsAuth={dataIsAuth}
                dispatch={dispatch}
                setLogOut={setLogOut}
                setDataIsAuth={setDataIsAuth}
                isError={isError}
                setIsError={setIsError}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
