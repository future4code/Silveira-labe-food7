import React from "react";
import useForm from "../../hook/useForm"
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import useProtectedPage from "../../hook/useProtectedPage";
import usePutChangeAddress from "../../hook/usePutChangeAddress";
import { Container, Form, Input, ContainerBut, ContainerBack, Button, ButtonBack, H3 } from "./styled";

const SignUpAddress = () => {
    
  useProtectedPage()
  const navigate = useNavigate();

  const goTo = () => {
      navigate("/feed");
  };

  const goBack = () => {
      navigate(-1);
  };

  const {form, onChangeForm, clearForm} = useForm({
      street: "",
      number: "",
      neighbourhood: "",
      city: "",
      state: "",
      complement: "",
  });

  const onAddAddress = (e) => {
     e.preventDefault();
     clearForm();
     putAddAddress();
  };

  const { putAddAddress } = usePutChangeAddress("rappi4C/address", form, goTo, goBack);

  return(
      <>
      <Header/>
        <Container>
            <H3>Meu endereço</H3>
            <Form onSubmit={onAddAddress}>
                <Input 
                type="text"
                name={"street"}
                value={form.street}
                onChange={onChangeForm}
                placeholder="Logradouro ou Rua"
                required>
                </Input>

                <Input 
                type="number"
                name="number"
                value={form.number}
                onChange={onChangeForm}
                placeholder="Número"
                required>
                </Input>

                <Input 
                type="text"
                name="neighbourhood"
                value={form.neighbourhood}
                onChange={onChangeForm}
                placeholder="Bairro"
                required>
                </Input>

                <Input 
                type="text"
                name="city"
                value={form.city}
                onChange={onChangeForm}
                placeholder="Cidade"
                required>
                </Input>

                <Input 
                type="text"
                name="state"
                value={form.state}
                onChange={onChangeForm}
                placeholder="Estado"
                required>
                </Input>

                <Input 
                type="text"
                name="complement"
                value={form.complement}
                onChange={onChangeForm}
                placeholder="Complemento"
                required>
                </Input>

                <ContainerBut>
                    <Button type="submit">Salvar</Button>
                </ContainerBut>


            </Form>
            <ContainerBack>
                <ButtonBack onClick={() => navigate(-1)}>Voltar</ButtonBack>
            </ContainerBack>
        </Container>
        </>
    )
}

export default SignUpAddress