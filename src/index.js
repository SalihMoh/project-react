import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the change here
import App from './App';
import { BrowserRouter  , Routes , Route } from 'react-router-dom';

import Addproduct from './components/Addproduct'; // Import the ProductAction component
import DisplayProducts  from './components/Products';
import Header from './components/Header' ;

const root = ReactDOM.createRoot(document.getElementById('root-header')); // Use createRoot()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootproductdisplay = ReactDOM.createRoot(document.getElementById('root-productdisplay'));



rootproductdisplay.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes> 
       <Route path="/" element={ [<Header />,<DisplayProducts />]} />
       <Route path="/Addform" element={[<Header />, <Addproduct />]} />
       
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
)




