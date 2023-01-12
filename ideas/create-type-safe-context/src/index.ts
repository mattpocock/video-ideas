import { createContext, useContext } from "react";

export interface UserContextType {
  name: string;
  age: number;
}

export const userContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
