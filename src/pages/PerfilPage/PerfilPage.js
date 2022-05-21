import React, { useState, useEffect} from "react";
import axios from 'axios'
import { BaseUrl, header, token } from "../../constants/constants";
import useProtectedPage from "../../hook/useProtectedPage";
import { UserAddressContainer, UserInfoContainer, UserOrdersHistory, EditImage, UserProfileContainer } from "./PerfilPageStyle";
import edit from '../../img/edit.png'
import { goToEditPerfilPage, goToEditAddressPage2 } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const PerfilPage = () => {
    useProtectedPage()
    const navigate = useNavigate() 
    const [userInfo, setUserInfo] = useState([])
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getProfileInfo()
    }, [])

    useEffect(() => {
        getOrders()
    }, [])

    const getProfileInfo = () => {
        axios.get(`${BaseUrl}orders/history`, header)
            .then((res) => {
                setOrders(res.data)
            })
            .catch((er) => {
                console.log(er)
            })
    }

    const getOrders = () => {
        axios.get(`${BaseUrl}profile`, header)
            .then((res) => {
                setUserInfo(res.data.user)
            })
            .catch((er) => {
                console.log(er)
            })
    }

    const listOrders = orders.length > 0 ? (
        orders.map((order, index) => (
            <div key={index}>
                <p>{order.restaurantName}</p>
                <p>{order.createdAt}</p>
                <p>SUBTOTAL R$ {order.totalPrice.toFixed(2).replace(/\./g, ',')}</p>
            </div>
        ))
    ) : (
        <p style={{ textAlign: 'center' }}>Você não realizou nenhum pedido</p>
    );

    return(
        <div>
          <UserProfileContainer>
                 <UserInfoContainer>
                     <p> {userInfo.name} </p>
                     <p> {userInfo.email} </p>
                     <p> {userInfo.cpf} </p>
                     <div onClick={() => goToEditPerfilPage(navigate)}>
                     <EditImage src={edit}/> 
                     </div>
                 </UserInfoContainer>
                 <UserAddressContainer>
                     <p>Endereço Cadastrado: <br></br>{userInfo.address}</p>
                     <div onClick={() => goToEditAddressPage2(navigate)}>
                     <EditImage  src={edit}/>
                     </div>
                 </UserAddressContainer>
                 <UserOrdersHistory>
                     <p> Histórico dos Pedidos:</p>
                     {listOrders}
                 </UserOrdersHistory>
             </UserProfileContainer>
        <Footer/>
        </div>
    )
}

export default PerfilPage