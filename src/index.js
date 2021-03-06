import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import configurationStore from "./redux/index";
import { BrowserRouter } from 'react-router-dom';

import App from './App';


const store = configurationStore;

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
    </Provider>,
  </BrowserRouter>,
  document.getElementById('root')
);

