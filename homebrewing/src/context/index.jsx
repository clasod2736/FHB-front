import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

export function UserDataProvider ({ children }) {
    const [isLogIn, setIsLogIn] = useState(false); 
    const [userEmail, setUserEmail] = useState('')
    
    const toggleUserLogIn = () => setIsLogIn((data) => !data)
    const getUserEmail = (email) => setUserEmail(email)

    const value = {isLogIn, toggleUserLogIn, userEmail, getUserEmail}

    return (
    <UserDataContext.Provider value={value}>
        {children}
    </UserDataContext.Provider> )
}