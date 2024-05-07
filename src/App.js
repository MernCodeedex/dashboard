import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct';
import Products from './Pages/Products';
import Customers from './Pages/Customers';
import CustomerDetails from './Pages/CustomerDetails';

function App() {
  return (
    <div >
  
   <Routes>
   <Route path={"/"} element={ <AddProduct/>}></Route>
   <Route path={"/products"} element={<Products/>}></Route>
   <Route path={"/customers"} element={<Customers/>}></Route>
   <Route path={"/details"} element={<CustomerDetails/>}></Route>

   </Routes>
    </div>
  );
}

export default App;
