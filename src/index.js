import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import {unregister} from './registerServiceWorker';

import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

// import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

// unregister();