import React, { createContext, useContext, useState } from "react";
import { useLogin } from "./loginContext";


const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [activeButton, setActiveButton] = useState("home"); // Default to "home"
    const { loginState, handleLoginState } = useLogin();

    const goPage = (buttonId, navigate) => {

        if (buttonId == "logout") {
            handleLoginState("logout");
        }
        else {
            setActiveButton(buttonId);
            navigate(`/${buttonId}`);
        }

    };

    return (
        <NavigationContext.Provider value={{ activeButton, goPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);