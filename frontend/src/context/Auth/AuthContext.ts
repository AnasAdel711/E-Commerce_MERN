import { createContext, useContext } from "react";

interface AuthContextType {
    username: string | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (username: string, token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({username: null, token: null, isAuthenticated: false, login: () => {}, logout: () => {}})

export const useAuth = () => useContext(AuthContext);