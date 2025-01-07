import { useContext, createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [loginState, setLoginState] = useState(false);

    const [userInfo, setUserInfo] = useState({
        id: null,
        username: "",
        email: "",
        role: "",
        bio: "",
    });

    const [userServices, setUserServices] = useState([]);
    
    const setUser = (data) => {
        setUserInfo ({
            id: Number(data.id),
            username: data.username,
            email: data.email,
            role: data.role,
            bio: data.bio,
        });
    };

    const setServices = (data) => {
        const transformedServices = data.map((service) => ({
            id: Number(service.id),
            name: service.name,
            duration: Number(service.duration),
            price: Number(service.price),
            description: service.description,
            listPos: 0,
        }));
        setUserServices(transformedServices);
    };
    
    const addService = (data) => {
        const newService = {
            id: Number(data.id),
            name: data.name,
            duration: Number(data.duration),
            price: Number(data.price),
            description: data.description,
            listPos: 0,
        }
        setUserServices((prevState) => [...prevState, newService]);
    }

    const removeService = (serviceId) => {
        const newServices = userServices.filter((service) => service.id !== serviceId)
        setUserServices(newServices);
    }

    const setUserBio = (text) => {
        setUserInfo((userInfo) => ({
            ...userInfo,
            bio: text,
        }))
    };

    const handleLoginState = (type) => {

        if (type == "logout") {
            localStorage.removeItem("accessToken");
        }
        setLoginState(type == "login" ? true : false);

    };

    return (
        <LoginContext.Provider value = {{ loginState, userInfo, userServices, handleLoginState, setUser, setUserBio, setServices, addService, removeService }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLogin = () => useContext(LoginContext);