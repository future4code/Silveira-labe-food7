import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const [email, setEmail] = useState("");
 const [senha, setSenha] = useState("")

 const navigate = useNavigate();

 const goBack = (event) => {
    event.preventDefault();
    navigate("/")
};

const goToCadastro = () => {
    navigate("/cadastro")
};

const onChangeEmail = (event) => {
      setEmail(event.target.value);
};

const onChangeSenha = (event) => {
      setSenha(event.target.value);
};


const onSubmitLogin = (event) => {
     event.preventDefault();

 
     const body = {
         email: email,
         password: senha,
     };
      
     
     axios
       .post(
           "https://us-central1-missao-newton.cloudfunctions.net/{{rappi4C}}/login", body
       )
     
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        const hasAddress = response.data.user.hasAddress;


        if (hasAddress === true) {
            navigate("/feed");
            console.log(response.data)
        } else {
            navigate("/endereco")
            console.log(response.data)
        }
    })
    .catch((error) => {
        alert(error.response.data.message);
    })


};




    return(
        <div>
            <h3>Login</h3>
            <form onSubmit={onSubmitLogin}>
                <input placeholder="E-mail" type="email" value={email} onChange={onChangeEmail} >

                </input>
                <input placeholder="Senha" type="password" value={senha} onChange={onChangeSenha}>
                
                </input>
                <div>
                    <button>Entrar</button>
                    <button onClick={goBack}>Voltar</button>
                </div>
            </form>
            <div>
            <h3>Não tem conta?</h3>
            <button onClick={goToCadastro}>Cadastre-se</button>
            </div>
        </div>
    )
}

export default Login