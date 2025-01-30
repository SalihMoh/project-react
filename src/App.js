import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';  
import {store} from './components/store';  
import Header from './components/Header';
import DisplayProducts from './DisplayProducts';
import UpdateForm from './UpdateForm';
import AddForm from './AddForm'; 

const root = document.getElementById('root');

if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
    <Provider store={store}>
      <BrowserRouter>
      
        <Header />
      </BrowserRouter>
    </Provider>
  );
} else {
  console.error("Root element not found");
}
