import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GlobalStateContext from "../../context/global/GlobalStateContext";
import useProfile from "../../hook/useProfile";
import { goBack } from "../../routes/coordinator";
import {
  MenuContainer,
  MenuPhoto,
  ProductCard,
  Rectangle,
  Button,
  Restaurante,
} from "../RestaurantMenu/RestaurantMenuStyle";



const Cart = () => {
  // const [cartItem, setCartItem] = useState([{}]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const { states, setters } = useContext(GlobalStateContext);
  const { details, cartItem, isBannerOpen } = states;
  const { setDetails, setCartItem, setIsBannerOpen } = setters;
  const profile = useProfile();
  const navigate = useNavigate();

  const onChangePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const onClickRemoverProduto = (item) => {
    if (item.quantity > 1) {
      const newCart = [...cartItem];
      for (let produto of newCart) {
        if (produto.id === item.id) {
          produto.quantity -= 1;
        }
      }
      setCartItem(newCart);
    } else {
      const newCart = cartItem.filter((produto) => {
        return produto.id !== item.id;
      });
      setCartItem(newCart);
    }
  };

  const onSubmitConfirmOrder = (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token");

    const url = `https://us-central1-missao-newton.cloudfunctions.net/rappi4C/restaurants/${details.id}/order`
    const body = {
      products: cartItem,
      paymentMethod: paymentMethod,
    }
    axios.post(url, body, {headers:{
      auth: token
    }
    })
    .then((response) => {
      console.log("deu certo")
      setDetails(response.data.order);
      setIsBannerOpen(true)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  

  const itens = cartItem.map((produto) => {
    return (
      <div>
        <MenuContainer>
          <ProductCard>
            <Rectangle>
              <MenuPhoto src={produto.photoUrl} />
              <div>
                <p>{produto.name}</p>
                <p> Descrição: {produto.description}</p>
                <p> R${produto.price} </p>
                <p> Quantidade: {produto.quantity} </p>
              </div>
              <Button onClick={() => onClickRemoverProduto(produto)}>
                Remover
              </Button>
            </Rectangle>
          </ProductCard>
        </MenuContainer>
      </div>
    );
  });
  if (itens.length === 0) {
    return <h3>"Carrinho Vazio"</h3>;
  }

  let totalPrice = 0;

  for (let i = 0; i < cartItem.length; i++) {
    // for (let item of cartItem) retirando linha 75
    let item = cartItem[i];
    totalPrice = item.price * item.quantity + totalPrice;
  }

  return (
    <div>
      <p>Endereço de entrega</p>
      <p>{profile && profile.address}</p>
      {itens}
      <p>Preço Total: R${totalPrice}</p>
      <form onSubmit={onSubmitConfirmOrder}>
        <input
          onChange={onChangePaymentMethod}
          type="radio"
          id="money"
          name="paymentMethod"
          value="money"
          checked={paymentMethod === "money"}
          required
        />
        <label for="money">Dinheiro</label>
        <input
          onChange={onChangePaymentMethod}
          type="radio"
          id="creditcard"
          name="paymentMethod"
          value="creditcard"
          checked={paymentMethod === "creditcard"}
          required
        />
        <label for="creditcard">Cartão</label>
        <button>Confirmar</button>
      </form>
      
    </div>
  );
};

export default Cart;
