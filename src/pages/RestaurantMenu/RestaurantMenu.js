import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MenuRestaurantCard from "./RestaurantMenuCard";
import axios from "axios";
import { Restaurante,  ResPhoto  } from "./RestaurantMenuStyle";
import GlobalStateContext from "../../context/global/GlobalStateContext";
import { goToCartPage } from "../../routes/coordinator";
import { header } from "../../constants/constants";

const RestaurantMenu = (props) => {
  const { states, setters } = useContext(GlobalStateContext);
  const { restaurants, menuRestaurant } = states;
  const { setMenuRestaurant } = setters;
  const params = useParams();
  const navigate = useNavigate()


  useEffect(() => {
    getRestaurantDetails();
  }, []);


    const titleRestaurant = restaurants && restaurants.map((restaurant) => {
      if (restaurant.id === params.id) {
        return (
          <div key={restaurant.id}>
            <ResPhoto src={restaurant.logoUrl}/>
            <p>{restaurant.name}</p>
            <p>{restaurant.category}</p>
            <p>{restaurant.deliveryTime} min</p>
            <p>Frete R${restaurant.shipping}</p>
            <p>{restaurant.address} </p>
          </div>
        )
      }
    })

    const getRestaurantDetails = () => {
          axios.get(`https://us-central1-missao-newton.cloudfunctions.net/rappi4C/restaurants/${params.id}`, header)
          .then((res) => {
            setMenuRestaurant(res.data.restaurant.products)
            // console.log(res.data.restaurant.products)
          })
          .catch((er) => {
            alert(er)
          })
    } 

  const restaurantMenuList =
    menuRestaurant &&
    menuRestaurant.map((menu) => {
      return (
        <MenuRestaurantCard
          key={menu.id}
          description={menu.description}
          name={menu.name}
          category={menu.category}
          price={menu.price}
          photoUrl={menu.photoUrl}
          idProduto={menu.id}
          produto={menu}
        />
      );
    });

  return (
    <Restaurante>
    
      <button onClick={() => goToCartPage(navigate)}>Vai pro carrinho</button>
       {titleRestaurant}
       <h1> PRINCIPAIS </h1>
       {restaurantMenuList}
    </Restaurante>
  );
};

export default RestaurantMenu;
