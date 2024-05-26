import { InvoiceModel } from "../model/invoice/invoice-model";
import { UserProps } from "../model/user/user-model";

export interface UserContextProps {
  fetchUsers: () => void;
  isLoading: boolean;
  user: UserProps[];
}

export interface ContextProviderType {
  children: React.ReactNode;
}

export interface InvoiceProps {
  fetchAllInvoce: (filterUser: string, skip: number) => void;
  isLoading: boolean;
  invoice: InvoiceModel[];
  setFilterUser: (filter: string) => void;
  setSkipped: (skip: number) => void;
  skip: number;
}

export const messageDefaultError =
  "Ocorreu um erro interno no servidor da API. Por favor, tente novamente mais tarde ou entre em contato com o suporte técnico.";
