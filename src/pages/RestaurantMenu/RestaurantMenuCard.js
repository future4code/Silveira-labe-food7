import React from 'react';
import { MenuContainer, MenuPhoto, ProductCard, Rectangle, Button, Restaurante } from './RestaurantMenuStyle';


export default function MenuRestaurantCard(props) {
    return (
        <MenuContainer>
            <ProductCard>
             <Rectangle>
             <MenuPhoto src={props.photoUrl}/>
            <div>
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p> R${props.price} </p>
            </div>
             <Button>Adicionar</Button>
             </Rectangle>
            </ProductCard>
        </MenuContainer>
    );
}