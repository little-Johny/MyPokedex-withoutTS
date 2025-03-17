import React, { useContext, createContext, useState } from 'react';

export const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        console.log('Login: successfully');
    }
    const logout = () => {
        setUser(null);
        console.log('Logout: successfully');
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}