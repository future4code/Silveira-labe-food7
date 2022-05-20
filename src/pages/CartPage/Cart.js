import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import GlobalStateContext from "../../context/global/GlobalStateContext";
import { goBack } from "../../routes/coordinator";
import { MenuContainer, MenuPhoto, ProductCard, Rectangle, Button, Restaurante } from '../RestaurantMenu/RestaurantMenuStyle';


const Banner = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 150px;
    background-color: salmon;
    left: 0;
`

const Cart = () => {
    // const [cartItem, setCartItem] = useState([{}]);
    const [paymentMethod, setPaymentMethod] = useState("")
    const { states, setters } = useContext(GlobalStateContext)
    const { cartItem, isBannerOpen } = states
    const { setCartItem, setIsBannerOpen } = setters

    const navigate = useNavigate()

  const onChangePaymentMethod = (event) => {
      setPaymentMethod(event.target.value)
  }

  const onClickRemoverProduto = (item) => {
    if(item.quantity > 1){
      const newCart = [...cartItem]
      for(let produto of newCart){
        if(produto.id === item.id){
          produto.quantity -= 1
        }
      }
      setCartItem(newCart)
    }else {
      const newCart = cartItem.filter((produto) => {
        return produto.id !== item.id
      })
      setCartItem(newCart)
    }
  }

  const itens = cartItem.map((produto) => {
    return (
      <div>
          <MenuContainer>
            <ProductCard>
             <Rectangle>
             <MenuPhoto src={produto.photoUrl}/>
            <div>
                <p>{produto.name}</p>
                <p> Descrição: {produto.description}</p>
                <p> R${produto.price} </p>
                <p> Quantidade: {produto.quantity} </p>
            </div>
            <Button onClick={() => onClickRemoverProduto(produto)} >Remover</Button>
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

  for (let i = 0; i < cartItem.length; i++) { // for (let item of cartItem) retirando linha 75
    let item = cartItem[i];
    totalPrice = item.price * item.quantity + totalPrice;
  }


  return (
    <div>
      {itens}
      <p>Preço Total: R${totalPrice},00 </p>
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
      <button onClick={() => goBack(navigate)}>Voltar</button>
      {isBannerOpen && <Banner/>}
    </div>
  );
};

export default Cart;
