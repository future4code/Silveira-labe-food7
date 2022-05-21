import axios from "axios";
import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../../context/global/GlobalStateContext";
import styled from "styled-components";

const Banner = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 150px;
  background-color: salmon;
  left: 0;
`;

const CardOrderInProgress = () => {
  const { states, setters } = useContext(GlobalStateContext);

  const { details, isBannerOpen } = states;
  const { setDetails, setIsBannerOpen } = setters;
  const token = localStorage.getItem("token");
  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/rappi4C/active-order";
  const body = {
    headers: {
      auth: token,
    },
  };

  useEffect(() => {
    if (details === null) {
      showBanner();
    }
  }, [isBannerOpen]);

  const showBanner = () => {
    axios
      .get(url, body)
      .then((response) => {
        if (response.data.order !== null) {
          setDetails(response.data.order);
          setIsBannerOpen(true);
          setTimeout(() => {
            setIsBannerOpen(false);
          }, response.data.order.expiresAt - Date.now());
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (isBannerOpen === true) {
    return (
      <Banner>
        <p>Preço: R${details.totalPrice}</p>
        <p>Restaurante: {details.restaurantName}</p>
        <p>Tempo de entrega: {new Date(details.expiresAt).toLocaleTimeString()}</p>
      </Banner>
    );
  }

  return null;
};

export default CardOrderInProgress;
