import React from "react";
import useForm from "../../hook/useForm";
import { useCadastro } from "../../hook/useCadastro"
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Container, H3, Form, Input, ContainerBut, Button, ContainerLogin, ButtonLogin } from "./styled";

const SignUp = () => {
 const navigate = useNavigate();

 const { form, onChangeForm, clearForm } = useForm({
     name: "",
     email: "",
     cpf: "",
     password: "",
 });

 const { postCadastro } = useCadastro("rappi4C/signup", form, clearForm);

 const onSignUp = (e) => {
    e.preventDefault()
    postCadastro(form.cpf);
 }
 
    return(
        <>
        <Header/>
        <Container>
            <H3>Cadastro</H3>
            <Form onSubmit={onSignUp}>
                <Input
                type="text"
                name={"name"}
                value={form.name}
                onChange={onChangeForm}
                placeholder="Nome"
                required>
                </Input>

                <Input
                type="email"
                name={"email"}
                value={form.email}
                onChange={onChangeForm}
                placeholder="E-mail"
                required>
                </Input>

                <Input
                type="number"
                name={"cpf"}
                value={form.cpf}
                onChange={onChangeForm}
                placeholder="CPF"
                title="O CPF deve conter apenas 11 números, sem traços ou pontos."
                required>
                </Input>

                <Input
                type="password"
                name={"password"}
                value={form.password}
                onChange={onChangeForm}
                placeholder="Senha"
                required>
                </Input>
               <ContainerBut>
                   <Button type="submit">Criar</Button>
               </ContainerBut> 
            </Form>

            <ContainerLogin>
                <H3>Já tem uma conta?</H3>
                <ButtonLogin onClick={() => navigate("/")} >Login</ButtonLogin>
            </ContainerLogin>
        </Container>
        </>
    )
}

export default SignUp