import { useContext, createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [loginState, setLoginState] = useState(false);

    const [userInfo, setUserInfo] = useState({
        id: "",
        username: "",
        email: "",
        role: "",
    });
    
    const setUser = (data) => {
        setUserInfo ({
            id: data.id,
            username: data.username,
            email: data.email,
            role: data.role,
        });
    };

    const handleLoginState = (type) => {

        if (type == "logout") {
            localStorage.removeItem("accessToken");
        }
        setLoginState(type == "login" ? true : false);

    };

    return (
        <LoginContext.Provider value = {{ loginState, userInfo, handleLoginState, setUser }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);