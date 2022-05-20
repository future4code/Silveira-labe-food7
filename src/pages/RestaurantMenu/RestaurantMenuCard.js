import React, { useContext, useState } from 'react';
import { MenuContainer, MenuPhoto, ProductCard, Rectangle, Button, Restaurante, MenuText } from './RestaurantMenuStyle';
import GlobalStateContext from "../../context/global/GlobalStateContext";


export default function MenuRestaurantCard(props) {
    const { states, setters } = useContext(GlobalStateContext)
    const { cartItem } = states
    const { setCartItem } = setters

    const onClickAddToCart = (produto) => {
        const newCart = [...cartItem]
        let haveInCart = false

        for (let item of newCart) {
            if(item.id === produto.id){
                item.quantity += 1
                haveInCart = true
            }
            
        }if(haveInCart === false){
            newCart.push({...produto, quantity: 1})
        }
        setCartItem(newCart)
    }
    

    
    return (
        <MenuContainer>
            <ProductCard>
             <Rectangle>
             <MenuPhoto src={props.photoUrl}/>
            <MenuText>
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p> R${props.price} </p>
            </MenuText>
             <Button onClick={() => onClickAddToCart(props.produto)}>Adicionar</Button>
             </Rectangle>
            </ProductCard>
        </MenuContainer>
    );
}