"use client";
import { createContext, useContext, useEffect, useState } from "react";

import { ContextProviderType, InvoiceProps } from "./interface";
import useFetchInovice from "./hooks/fetch-invoice";

const InvoiceContext = createContext({} as InvoiceProps);

export function InovoiceContextProvider({ children }: ContextProviderType) {
  const [filterUser, setFilterUser] = useState("");
  const [skip, setSkipped] = useState(0);
  const { data: invoice, isLoading } = useFetchInovice(filterUser, skip);

  return (
    <InvoiceContext.Provider
      value={{
        fetchAllInvoce: (filterUser, skip) => {},
        isLoading,
        invoice: invoice || [],
        setFilterUser: setFilterUser,
        setSkipped: setSkipped,
        skip: skip,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export const useInvoice = () => {
  return useContext(InvoiceContext);
};
