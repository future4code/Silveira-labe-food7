import styled from "styled-components"


export const Container = styled.div`
margin-top: 5%;
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
padding: 24px 0;
`

export const H3 = styled.h3`
font-size: 1.5rem;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
width: 55vw;
height: 4vh;
border-radius: 10px;
border: 0px;
margin: 7px;
padding: 0px 0px 0px 10px ;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

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

export const Button = styled.button`
background-color: #E86E5A;
width: 50%;
height: 7vw;
margin: 10px;
border: 0px;
border-radius: 5px;
font-size: 1.1rem;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: black;

`

export const ContainerLogin = styled.div`
margin-top: -6px;
display: flex;
flex-direction: column;
align-items: center;
width: 80vw;
`
export const ButtonLogin = styled.button`
background-color:#E86E5A ;
width: 20%;
height: 4vh;
margin: 7px;
border: 0px;
border-radius: 5px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1rem;
`