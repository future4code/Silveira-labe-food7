import axios from "axios";
import { BaseUrl } from "../constants/constants";

const usePutChangeAddress = (url, body, go, goBack) => {
    const token = localStorage.getItem("token");

    const putAddAddress = () => {
        axios
        .put(BaseUrl + url, body,{
            headers: {
                auth: token,
            },
        })
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            alert("Dados enviados com sucesso");
            if (window.confirm("Ir para o Feed?")) {
                go();
            } else {
              goBack();
            }
        })
        .catch((err) => {
            alert("Algo deu errado por favor tente novamente")
        })
    }
    
    return{ putAddAddress }
};


export default usePutChangeAddress