export const BaseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4C/";
export const token = localStorage.getItem("token");
export const header = {
    headers: {
        auth: token,
    },
};