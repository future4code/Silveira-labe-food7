import axios from "axios";
import { useEffect, useState } from "react";

const useProfile = () => {
  const [profile, setProfile] = useState();
  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/rappi4C/profile";
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setProfile(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return profile;
};
export default useProfile;
