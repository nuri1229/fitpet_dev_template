import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { appState } from './entires/store';
import { rootSaga } from './entires/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


ReactDOM.render (
  <Provider store = {store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>
  , document.getElementById('root')
)