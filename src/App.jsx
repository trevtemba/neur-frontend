import { Route, Routes } from "react-router-dom";
import AuthForm from "./Components/AuthForm/AuthForm";
import Navigation from "./Components/Navigation/Navigation"
import Profile from "./Components/Profile/Profile"
import Home from "./Components/Home/Home"
import Appointments from "./Components/Appointments/Appointments"
import Earnings from "./Components/Earnings/Earnings"
import Explore from "./Components/Explore/Explore"

const App = () => {
  return (
    <>
      <nav>
        < Navigation />
      </nav>
      
      <Routes>
        <Route path="/" element={<AuthForm />} />
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