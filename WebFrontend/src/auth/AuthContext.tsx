import React, { createContext, useEffect } from "react";

type User = {
    email: string;
    fullName?: string | null;
}
type AuthContextType = {
    user: User | null;
    token: string | null;
    login: (token:string,user:User) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
};

const AuthContext = createContext<AuthContextType |undefined>(undefined);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const [token, setToken] = React.useState<string | null>(null);
    const [user, setUser] = React.useState<User | null>(null);
        
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");
        if(storedToken) {
            setToken(storedToken);
        };
        if(storedUser) {
            setUser (JSON.parse(storedUser));
        };
    },[]);
    const login = (newToken:string, newUser:User) => {
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(newUser));
        setToken(newToken);
        setUser(newUser);
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setToken (null);
        setUser (null);
    }
    return (
        <AuthContext.Provider value={{user, token, login, logout, isAuthenticated: () => !!token}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if(context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};