import React, { useState } from "react";
import styled from 'styled-components'

const Banner = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 150px;
    background-color: salmon;
    left: 0;
`

const Cart = () => {
  //   const [cartItem, setCartItem] = useState([{}]);
    const [paymentMethod, setPaymentMethod] = useState("")
    const [isBannerOpen, setIsBannerOpen] = useState(false)

  const onChangePaymentMethod = (event) => {
      setPaymentMethod(event.target.value)
  }

  const itens = [
    {
      name: "a",
      price: 100,
      quantity: 3,
      description: "Cafezinho da manhã",
    },
    {
      name: "b",
      price: 150,
      quantity: 2,
      description: "Aquela Lasanha",
    },
    {
      name: "c",
      price: 200,
      quantity: 1,
      description: "Hamburguer gostoso",
    },
  ];

  const newItens = itens.map((item) => {
    return (
      <div>
        {item.name}
        {item.price * item.quantity}
        {item.description}
      </div>
    );
  });
  if (itens.length === 0) {
    return <p>"Carrinho Vazio"</p>;
  }

  let totalPrice = 0;

  for (let i = 0; i < itens.length; i++) {
    let item = itens[i];
    totalPrice = item.price * item.quantity + totalPrice;
  }


  return (
    <div>
      {newItens}
      <p>Preço Total: {totalPrice} </p>
      <form>
          <input 
          onChange={onChangePaymentMethod}
          type="radio" 
          id="dinheiro" 
          name="paymentMethod" 
          value="dinheiro" 
          checked={paymentMethod === "dinheiro"}
          />
          <label for="dinheiro">Dinheiro</label>
          <input 
          onChange={onChangePaymentMethod}
          type="radio" 
          id="cartao" 
          name="paymentMethod" 
          value="cartao"
          checked={paymentMethod === "cartao"}
          />
          <label for="cartao">Cartão</label>


      </form>
      {isBannerOpen && <Banner/>}
    </div>
  );
};

export default Cart;
