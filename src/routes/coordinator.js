export const goToSignUpPage = (navigate) => {
    navigate("/cadastro") 
}
export const goToLoginPage = (navigate) => {
    navigate("/") 
}
export const goToCartPage = (navigate) => {
    navigate("/carrinho") 
}
export const goToEditPerfilPage = (navigate) => {
    navigate("/perfil") 
}
export const goToFeedPage = (navigate) => {
    navigate("/feed") 
}
export const goToRestaurantMenuPage = (navigate, id) => {
    navigate(`/menu/${id}`) 
}
export const goToEditAddressPage = (navigate) => {
    navigate("/endereco") 
}

