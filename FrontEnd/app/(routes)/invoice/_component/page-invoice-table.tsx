"use client";
import DataTableInvoice from "@/app/_components/data-table-invoice";
import PageTitle from "@/app/_components/page-title";
import { useInvoice } from "@/app/contexts/invoice-context";

interface PageInvoiceProps {
  userId?: string;
}
const PageInoviceTable = ({ userId }: PageInvoiceProps) => {
  const { isLoading, invoice, setFilterUser, setSkipped, skip } = useInvoice();
  if (isLoading) {
    return <p>Loadding..</p>;
  }
  if (userId && invoice) setFilterUser(userId);
  return (
    <div className="flex w-full flex-col gap-5">
      <PageTitle title="Invoices" />
      <DataTableInvoice
        invoices={invoice}
        setSkiped={setSkipped}
        skip={skip}
        {...(userId && { user: userId })}
      />
    </div>
  );
};

export default PageInoviceTable;
