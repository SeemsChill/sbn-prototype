//  Import the built-in.
import React from "react";

//  Import core.
import saigonAuthProvider from "./sbn-core-context";

//  Create the context.
const authContext = React.createContext();

//  Context Component.
const AuthProvider = ({ children }) => {
    return (
        <authContext.Provider value={saigonAuthProvider()}>
            {children}
        </authContext.Provider>
    );
};

//  using the context hook.
const useAuth = () => {
    return React.useContext(authContext);
};

//  Export context hooks.
export { AuthProvider, useAuth };