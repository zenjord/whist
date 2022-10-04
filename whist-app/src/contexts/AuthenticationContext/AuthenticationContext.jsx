import React, { useState, useContext, useEffect } from "react";
import firebaseAuthService from "../../lib/firebase/firebaseAuthService";

import NotAuthenticated from "./NotAuthenticated";

const {
    loginUser,
    logoutUser,
    sendPasswordResetEmail,
    subscribeToAuthChanges
} = firebaseAuthService;

const UserContext = React.createContext();

export function useAuthentication() {
    return useContext(UserContext)
}

export default function AuthenticationProvider ({ children }) {
    const [ user, setUser ] = useState(null);
    const isAuthenticated = !!user;

    // register setUser function to firebase auth changes
    useEffect(() => subscribeToAuthChanges(setUser));

    return (
        <UserContext.Provider value={{ isAuthenticated, user, loginUser, logoutUser, sendPasswordResetEmail }}>
            { isAuthenticated ? children : <NotAuthenticated /> }
        </UserContext.Provider>
    )
}