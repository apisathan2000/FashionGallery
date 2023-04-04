import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"

import React from 'react';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";

import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import EmailVerification from "./pages/EmailVerification.jsx";
import SizeGuide from "./pages/SizeGuide";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { AHome } from "./pages/adminHome/AHome";
import "./app.css"

export const App = () => {
  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <AHome/>
      </div>
    </div>
  )
};




// const App = () => {
//   return (
    
//       <Router>
//         <Routes>
    
//         <Route exact path="/" element={<Home/>} />
//         <Route path="/pages/Register" element={<Register/>} />
//         <Route path="/pages/Register/verifyemail" element={<EmailVerification />} />
//         <Route path="/pages/Login" element={<Login/>} />
//         <Route path="/pages/Login/Register" element={<Register/>} />
//         <Route path="/pages/cart" element={<Cart/>} />
//         <Route path="/pages/productlist" element={<ProductList/>} />
//         <Route path="/pages/singleproduct" element={<SingleProduct/>} />
//         <Route path="/pages/checkout" element={<Checkout />} />
//         <Route path="/pages/orderconfirmation" element={<OrderConfirmation />} />
//         <Route path="/pages/sizeguide" element={<SizeGuide />} />
    
//       </Routes>
//       </Router>
    
//   );
// };

export default App;