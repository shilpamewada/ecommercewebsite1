import './App.css';
import Navbar from './Component/Navbar';
import Products from './Component/Products';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';


import Carts from './Component/Carts';
import Logout from './Component/Logout'
import AboutUs from './Component/AboutUs';
import Table from './Component/Table';
import Help from './Component/Help';
function App() {
  return (
   <div>
<BrowserRouter>

<Navbar/>
{/* <Home/> */}
<Routes>
  <Route   path='/Home' element={<Home/>}></Route>
  <Route   path='/login' element={<Login/>}></Route>
  <Route  path='/register' element={<Register/>}></Route>
  <Route  path='/products' element={<Products/>}></Route>
  <Route  path='/aboutus' element={<AboutUs/>}></Route>
  <Route  path='/carts' element={<Carts/>}></Route>
  <Route  path='/logout' element={<Logout/>}></Route>
  <Route path="/tables" element={<Table/>}></Route>
  <Route path='/Help' element={<Help/>}></Route>
</Routes>
</BrowserRouter>

   </div>
  );
}

export default App;



