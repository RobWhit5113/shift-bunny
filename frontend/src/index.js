import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {BrowserRouter} from'react-router-dom'
import {configureStore} from'./store'
import App from './App';

const store = configureStore()

if (ProcessingInstruction.env.NODE_ENV !== 'production'){
  window.store = store;
}

function Root() {
  return (
    <Provider sotre={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
