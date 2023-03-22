import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.scss';
import { Provider } from 'react-redux';
import store from './store'
import './i18next';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <React.StrictMode>
  <Provider store={store} >
  <Suspense fallback={null}>
    <App />
  </Suspense>
  </Provider>
  </React.StrictMode>
  
);

reportWebVitals();
