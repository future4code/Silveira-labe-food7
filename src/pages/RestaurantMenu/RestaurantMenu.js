import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import MenuRestaurantCard from './RestaurantMenuCard'
import axios from 'axios'
import { Restaurante } from "./RestaurantMenuStyle";
import GlobalStateContext from "../../context/global/GlobalStateContext";


const RestaurantMenu = (props) => {
    // const [menuRestaurant, setMenuRestaurant] = useState([])
    const {states, setters} = useContext(GlobalStateContext)
    const {menuRestaurant} = states
    const {setMenuRestaurant} = setters
    const params = useParams()

    useEffect(() => {
        getRestaurantDetails()
    }, [])

    // const titleRestaurant = posts && posts.map((post) => {
    //   if (post.id === params.id) {
    //     return (
    //       <PostContainer key={post.id}>
    //         <p>User:{post.username}</p>
    //         <p>Título:{post.title}</p>
    //         <p>Descrição:{post.body}</p>
    //       </PostContainer>
    //     )
    //   }
    // })

    const getRestaurantDetails = () => {
          axios.get(`https://us-central1-missao-newton.cloudfunctions.net/rappi4C/restaurants/${params.id}`, {
            headers: {
              auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ikp6cHgyNWcyMVl2MGR2VGQ1T2N6IiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJ0ZXN0ZUBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTAwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTY1Mjg4Mzc5Mn0.dib6FPK53T3GtcZnDBvCeJIS1XOArSH6ASjpYYghh0E"
            }
          })
          .then((res) => {
            setMenuRestaurant(res.data.restaurant.products)
            console.log(res.data.restaurant)
          })
          .catch((er) => {
            console.log(er)
          })
    } 

    const restaurantMenuList = menuRestaurant && menuRestaurant.map((menu) => {
        return (
        <MenuRestaurantCard
        key={menu.id}
        description={menu.description}
        name={menu.name}
        category={menu.category}
        price={menu.price}
        photoUrl={menu.photoUrl}
        idProduto={menu.id}
      />
    )})

    return(
        <Restaurante> 
        {restaurantMenuList}
        </Restaurante>
    )
}

export default RestaurantMenu