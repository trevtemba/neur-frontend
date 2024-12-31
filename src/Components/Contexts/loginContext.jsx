import { useContext, createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [loginState, setLoginState] = useState(false);

    const toggleLogin = () => {
        setLoginState(!loginState);
    };

    return (
        <LoginContext.Provider value = {{ loginState, toggleLogin }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);