import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login  from "../pages/LoginPage/Login";
import SignUp  from "../pages/SignUpPage/SignUp";
import React from 'react';
import Cart from "../pages/CartPage/Cart";
import EditPerfil from "../pages/EditPerfil/EditPerfil";
import FeedPage from "../pages/FeedPage/FeedPage";
import RestaurantMenu from "../pages/RestaurantMenu/RestaurantMenu";
import SignUpAddress from "../pages/SignUpAddressPage/SignUpAddress";
import PerfilPage from "../pages/PerfilPage/PerfilPage"
import EditAddress from "../pages/EditAddressPage/EditAddress"

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/cadastro" element={<SignUp/>}/>
          <Route path="/carrinho" element={<Cart/>}/>
          <Route path="/perfilEditar" element={<EditPerfil/>}/>
          <Route path="/feed" element={<FeedPage/>}/>
          <Route path="/menu/:id" element={<RestaurantMenu/>}/>
          <Route path="/endereco" element={<SignUpAddress/>}/>
          <Route path="/perfil" element={<PerfilPage/>}/>
          <Route path="/enderecoEditar" element={<EditAddress/>}/>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;