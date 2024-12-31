import { Route, Routes } from "react-router-dom";
import AuthForm from "./Components/AuthForm/AuthForm";
import Navigation from "./Components/Navigation/Navigation"
import Profile from "./Components/Profile/Profile"
import Home from "./Components/Home/Home"
import Appointments from "./Components/Appointments/Appointments"
import Earnings from "./Components/Earnings/Earnings"
import Explore from "./Components/Explore/Explore"
import { useLogin } from "./Components/Contexts/loginContext";
import { useEffect } from "react";
import api from "./Components/Config/axios";

const App = () => {

  const { loginState, handleLoginState, setUser } = useLogin();

  const validateToken = async (e) => {
 
    try {
        const response = await api.get("/auth/getUser");

        console.log("got response");
        if (response.status == 200) {
            handleLoginState("login");
            const result = await response.data;
            setUser(result);
            console.log("Success: ", result);
        } else {
            console.log("JWT non-existent or expired");
        }
    } catch (error) {
        console.log("Error: ", error);
        localStorage.removeItem
    }
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken") != null) {
      validateToken();
    }
  }, []);

  return (
    <>
      <nav>
        < Navigation />
      </nav>
      
      <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/explore" element={<Explore />} />
      </Routes>
    </>

  );
}

export default App;