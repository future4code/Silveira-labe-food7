import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import React from "react";


const GlobalState = (props) => {
    const [restaurants, setRestaurants] = useState([]) //Variável que recebe os restaurantes.
    const [menuRestaurant, setMenuRestaurant] = useState([])//Variável que recebe o menu do restaurante.
    const [isBannerOpen, setIsBannerOpen] = useState(false)
    const [cartItem, setCartItem] = useState([]);
    const [details, setDetails] = useState(null)

    const states = {restaurants, menuRestaurant, isBannerOpen, cartItem, details}
    const setters = {setRestaurants, setMenuRestaurant, setIsBannerOpen, setCartItem, setDetails}
    const requests = {}

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}} >
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState