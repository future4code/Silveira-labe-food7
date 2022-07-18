import axios from "axios";
import { BaseUrl } from "../constants/constants"
import { useNavigate } from "react-router-dom"





export const useCadastro = (url, body, clearForm) => {
    const navigate = useNavigate();

    const postCadastro = (cpfChar) => {
        console.log("cpf", cpfChar);
        if (cpfChar.length === 11) {
            axios
            .post(BaseUrl + url, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                const hasAddress = res.data.user.hasAddress;

                clearForm();
                if (hasAddress === true) {
                    navigate("/feed");
                } else {
                    navigate("/endereco");
                }
            })
             .catch((err) => {
                if (err.response.data.message === "Email ou CPF já cadastrado"){
                    alert("Email ou CPF já cadastrado");
                    navigate("/");
                } else {
                    alert(
                        "Ocorreu um erro por favor tente novamente em alguns minutos."
                    );
                }
            } );
            
        } else {
            alert(
                "O CPF digitado não possui 11 números, por favor digite um CPF com 11 números."
            )
        }
    }







    return {postCadastro};
}