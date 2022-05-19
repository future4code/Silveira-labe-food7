import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login  from "../pages/LoginPage/Login";
import SignUp  from "../pages/SignUpPage/SignUp";
import React from 'react';
import Cart from "../pages/CartPage/Cart";
import EditPerfil from "../pages/EditPerfil/EditPerfil";
import FeedPage from "../pages/FeedPage/FeedPage";
import RestaurantMenu from "../pages/RestaurantMenu/RestaurantMenu";
import EditAddress from "../pages/EditAddressPage/EditAddress";
import HeaderPage from "../components/Header/HeaderPage";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/cadastro" element={<SignUp/>}/>
          <Route path="/carrinho" element={<Cart/>}/>
          <Route path="/perfil" element={<EditPerfil/>}/>
          <Route path="/feed" element={<FeedPage/>}/>
          <Route path="/menu" element={<RestaurantMenu/>}/>
          <Route path="/endereco" element={<EditAddress/>}/>
          
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;