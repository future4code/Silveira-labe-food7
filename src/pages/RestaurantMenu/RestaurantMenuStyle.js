import styled from 'styled-components'

export const Restaurante = styled.div`
  width: 360px;
  height: 834px;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProductCard = styled.div`
    width: 360px;
    margin: 8px 0 0;
    border-radius: 8px;
    height: 160px;
`
export const Rectangle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`

export const MenuPhoto = styled.img`
    width: 150px;
    /* height: 112.6px; */
    border-radius: 8px 0 0 8px;
    background-color: #d8d8d8;
    margin-right: 15px; 
    object-fit: cover;
`

export const Button = styled.button`
  width: 80px;
  height: 30px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #000;
`