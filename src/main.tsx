import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.tsx';
import { GlobalStyle } from './Styles/GlobalStyle.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store.ts';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle/>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
