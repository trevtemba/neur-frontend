import React, { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const [activeButton, setActiveButton] = useState("home"); // Default to "home"

    const goPage = (buttonId, navigate) => {
        setActiveButton(buttonId);
        navigate(`/${buttonId}`);
    };

    return (
        <NavigationContext.Provider value={{ activeButton, goPage }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => useContext(NavigationContext);