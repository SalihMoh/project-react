import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Router , Routes , Route} from 'react-router-dom';  
import Header from './components/Header';
import Body from './components/Body';
import DisplayProducts from './components/Products';
import { Provider } from 'react-redux';
import {store} from './components/store'; 
import AddForm from './components/AddForm';

import UpdateForm from './components/UpdateForm'; 


const root = document.getElementById('root');

if (root) {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(
    <Provider store={store}>
      
    <BrowserRouter>
    <Header />
    <Body />
      <Routes>
        <Route path="/" element={<DisplayProducts />} />
        <Route path="/update/:id" element={<UpdateForm />} />
        <Route path="/AddForm" element={<AddForm />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
} else {
  console.error("Root element not found");
}

