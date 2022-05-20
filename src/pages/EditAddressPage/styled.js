import styled from "styled-components"



export const Container = styled.div`
margin-top: -6%;
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
  width: 55vw;
  outline: 0px;
  border-radius: 10px;
  border: 0px;
  height: 4vh;
  margin: 7px;
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

export const ContainerBack = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
`
export const Button = styled.button`
  background-color: white;
  width: 30%;
  margin: 10px;
  background-color:#E86E5A;
  border-radius: 5px;
  border: 0px;
  height: 5vh;
  font-size: 1rem;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  color: black;
  
`


export const ButtonBack = styled.button`
  background-color: #E86E5A;
  width: 35%;
  margin: 7px;
  border: 0px;
  border-radius: 10px;
  font-size: 1rem;
  height: 5vh;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  color: black;
  
`


export const H3 = styled.h3` 
font-size: 1.5rem;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`