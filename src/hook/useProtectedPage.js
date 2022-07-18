import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {
  const Navigate = useNavigate();

  const protect = () => {
    const token = localStorage.getItem("token");

    if (token === null) {
      alert("Você deve estar logado para continuar");
      Navigate("/");
    }
  };

  useEffect(() => {
    protect();
  }, []);
};

export default useProtectedPage;
