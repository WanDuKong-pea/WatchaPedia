import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
    isLogin: boolean;
    login: (sessionId: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    isLogin: false,
    login: (sessionId:string) => {},
    logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isLogin, setIsLogin] = useState(false);

    const login = (sessionId: string) => {
        localStorage.setItem('sessionId', sessionId);
        setIsLogin(true);
    };

    const logout = () => {
        localStorage.clear();
        setIsLogin(false);
    };

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}