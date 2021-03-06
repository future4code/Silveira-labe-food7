import { useNavigate } from "react-router-dom";
import React from "react";
import { useLogout } from "../../hook/useLogout";

export const HeaderPage = () => {
    const logout= useLogout()
    const navigate = useNavigate();

  return (
      <div>
         <div>
             <span 
             role="img"
             aria-label="Navegar para o Feed"
             onClick={() => navigate("/feed")}>
             </span>
             ๐ก
        
            <span
            role="img"
             aria-label="Navegar para o perfil"
            onClick={() => navigate("/profile")}
            >
            ๐คน
            </span>
            <span
            role="img"
            aria-label="Navegar para o carrinho"
            onClick={() => navigate("/cart")}
            >
            ๐
            </span>
            <span
            role="img"
            aria-label="Navegar para o pedido"
            onClick={() => navigate("/pedido")}
            >
            ๐งพ
            </span>
            <span
            role="img"
            aria-label="Fazer logout"
            onClick={logout}
            >
            X
            </span>
         </div>
      </div>

  );


};


export default HeaderPage





