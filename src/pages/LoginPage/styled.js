
import styled from "styled-components"




export const ContainerLogin = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
  width: 30vw;
  outline: 0px;
  border-radius: 10px;
  border: 0px;
  height: 4vh;
  margin: 7px;
 
  color: black;
  font-weight: bold;
  padding: 0px 0px 0px 10px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

&::placeholder {
    
    font-weight: bold;
}
`
export const ContainerBut = styled.div`
  margin-top: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;

`


export const ContainerCadastro = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vw;


`

export const ButtonCadastro = styled.button`
  background-color: #E86E5A ;
  width: 20%;
  margin: 7px;
  border: 0px;
  border-radius: 10px;
  height: 4vh;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  color: black;
 

`




export const Button = styled.button`
background-color: #E86E5A ;
  width: 30%;
  margin: 10px;
  border: 0px;
  border-radius: 5px;
  height: 5vh;
  font-size: 1rem;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  color: black;
 

`



export const H3 = styled.h3`

font-size: 2rem;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`