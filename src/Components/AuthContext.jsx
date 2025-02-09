import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const Signin = (newUser)=>{
        setUser(newUser)
         localStorage.setItem("user", JSON.stringify(newUser));
    }
    const SingOut = ()=>{
        setUser(null)
        localStorage.removeItem("user")
}
    return (
        <AuthContext.Provider value={{user , Signin , SingOut}}>
            {children}
        </AuthContext.Provider>
    )

}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {AuthContext , AuthProvider};
