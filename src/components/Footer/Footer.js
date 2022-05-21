import React from 'react'
import { Container, FooterIcones } from './FooterStyle'
import { useNavigate } from 'react-router-dom'
import { goToFeedPage, goToProfilePage, goToCartPage } from '../../routes/coordinator'
import avatar from '../../img/avatar.png'
import avatarA from '../../img/avatarA.png'
import shopping from '../../img/shopping.png'
import shoppingA from '../../img/shoppingA.png'
import homepage from '../../img/homepage.png'
import homepageA from '../../img/homepageA.png'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <FooterIcones>
                <img src={navigate.pathname === "/feed" ? homepage : homepageA} onClick={() => goToFeedPage(navigate)} />
                <img src={navigate.pathname === "/carrinho" ? shopping : shoppingA}  onClick={() => goToCartPage(navigate)} />
                <img src={navigate.pathname === "/perfil" ? avatar : avatarA} onClick={() => goToProfilePage(navigate)} />
            </FooterIcones>
        </Container>
    )
}

export default Footer;