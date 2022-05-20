import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { RestaurantContainer, RestaurantLogo, Restaurante, RestauranteBox, RestaurantTitle, Filtro } from "./FeedPageStyle";
import {goToRestaurantMenuPage} from '../../routes/coordinator'
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/global/GlobalStateContext";

const url = `https://us-central1-missao-newton.cloudfunctions.net/rappi4C/restaurants`

const FeedPage = () => {
    const navigate = useNavigate() 
    const { states, setters } = useContext(GlobalStateContext)
    const [ search, setSearch ] = useState("")
    const [ category, setCategory ] = useState("")
    const { restaurants } = states
    const { setRestaurants } = setters

    const onClickCard = (id) => {
        goToRestaurantMenuPage(navigate, id)
    }

    useEffect(() => {
        getRestaurants()
    }, )

    const getRestaurants = () => {
        axios.get(url, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikp6cHgyNWcyMVl2MGR2VGQ1T2N6IiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJ0ZXN0ZUBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTAwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1Mjg4Mzc5Mn0.dib6FPK53T3GtcZnDBvCeJIS1XOArSH6ASjpYYghh0E"
            }
        })
            .then((res) => {
                setRestaurants(res.data.restaurants)
            })
            .catch((er) => {
                console.log(er)
            })
    }

    const restaurantList = restaurants && restaurants.filter(
        ((restaurant) => {
            return (
                (!search ? true : restaurant.name.toLowerCase().includes(search.toLowerCase())) && 
                (!category ? true : restaurant.category.toLowerCase().includes(category.toLowerCase()))
            )
        })
    ).map((restaurant) => {
        return (
        <RestaurantContainer key={restaurant.id}>
            <RestauranteBox onClick={() => onClickCard(restaurant.id)}>
             <RestaurantLogo src={restaurant.logoUrl}/>
             <RestaurantTitle> {restaurant.name} </RestaurantTitle>
             <p className="deliverytime"> Taxa de entrega: {restaurant.deliveryTime}min </p>
             <p className="shipping"> Frete: R${restaurant.shipping} </p>
            </RestauranteBox>
        </RestaurantContainer>
    )})

    const restaurantFilter = (chosenCategory) => {
        if (chosenCategory === category){
            setCategory("")
        }
        else {
            setCategory(chosenCategory)
        }
    }

    return (
        <Restaurante>
        <Filtro>
        <button onClick={() => restaurantFilter("Hamburguer")}> HAMBURGUER </button>
        <button onClick={() => restaurantFilter("Árabe")}> ARABE </button>
        <button onClick={() => restaurantFilter("Italiana")}> ITALIANA </button>
        <button onClick={() => restaurantFilter("Mexicana")}> MEXICANA </button>
        <button onClick={() => restaurantFilter("Asiática")}> ASIÁTICA </button>
        <button onClick={() => restaurantFilter("Sorvetes")}> SORVETES </button>
        <button onClick={() => restaurantFilter("Carnes")}> CARNES </button>
        <button onClick={() => restaurantFilter("Baiana")}> BAIANA </button>
        <button onClick={() => restaurantFilter("Petiscos")}> PESTISCOS </button>
        </Filtro>
        <input type="text" placeholder="Restaurante" name="search" value={search} onChange = {(e) => setSearch(e.target.value)}></input>
        {restaurantList}
        </Restaurante>
    )
}

export default FeedPage