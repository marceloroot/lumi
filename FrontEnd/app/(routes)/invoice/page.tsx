"use client";
import {
  InovoiceContextProvider,
  useInvoice,
} from "@/app/contexts/invoice-context";
import PageInoviceTable from "./_component/page-invoice-table";
const InvoicesPage = () => {
  return (
    <InovoiceContextProvider>
      <PageInoviceTable />
    </InovoiceContextProvider>
  );
};

export default InvoicesPage;
