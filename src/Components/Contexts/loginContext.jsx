import { useContext, createContext, useState } from "react";

const loginContext = createContext();

export const loginContextProvider = ({children}) => {
    const [loginState, setLoginState] = useState(true);

    const toggleLogin = () => {
        setLoginState(!loginState);
    };

    return (
        <loginContext.Provider value = {{loginState, toggleLogin}}>
            {children}
        </loginContext.Provider>
    );
};

export const useLoginState = () => useContext();