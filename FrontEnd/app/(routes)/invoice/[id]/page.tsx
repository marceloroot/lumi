"use client";

import { InovoiceContextProvider } from "@/app/contexts/invoice-context";
import PageInoviceTable from "../_component/page-invoice-table";

const InvoicesPage = ({ params }: { params: { id: string } }) => {
  return (
    <InovoiceContextProvider>
      <PageInoviceTable userId={params.id} />
    </InovoiceContextProvider>
  );
};

export default InvoicesPage;
