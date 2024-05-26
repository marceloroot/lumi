"use client";
import { createContext, useContext, useState } from "react";

import { UserContextProps, ContextProviderType } from "./interface";
import useFetchUsers from "./hooks/fetch-users";

const UserContext = createContext({} as UserContextProps);

export function UserContextProvider({ children }: ContextProviderType) {
  const [filterUser, setFilterUser] = useState("");
  const { data: user, isLoading } = useFetchUsers(filterUser);

  return (
    <UserContext.Provider
      value={{
        fetchUsers: () => {},
        isLoading,
        user: user || [],
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
