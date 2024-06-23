import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, PropsWithChildren, useState } from 'react';

type AuthToken = string | null;
type AuthContextT = {
  token: AuthToken;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextT>({
  token: null,
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

interface AuthContextProviderT extends PropsWithChildren {}

function AuthContextProvider({ children }: AuthContextProviderT) {
  const [authToken, setAuthToken] = useState<AuthToken>(null);

  const authenticate = (token: string) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
