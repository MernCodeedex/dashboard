import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import AddProduct from './Pages/AddProduct';
import Products from './Pages/Products';
import Customers from './Pages/Customers';
import CustomerDetails from './Pages/CustomerDetails';
import ViewProducts from './Pages/ViewProducts';
import ProductDetails from './Pages/ProductDetails'
import { useEffect, useState } from 'react';


function App() {
  return (
    <div >
  
   <Routes>
   <Route path={"/"} element={ <AddProduct/>}></Route>
   <Route path={"/products/:userId"} element={<Products/>}></Route>
   <Route path={"/customers"} element={<Customers/>}></Route>
   <Route path={"/details"} element={<CustomerDetails/>}></Route>
   {/* <Route path="/products/:userId" element={<ViewProducts />}/> */}
<Route path="/product/:productId" element={<ProductDetails/>} />  
   </Routes>
    </div>
  );
}


export default App;
