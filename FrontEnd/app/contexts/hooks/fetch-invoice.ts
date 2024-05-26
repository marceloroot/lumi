import { useToast } from "@/app/_components/ui/use-toast";

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { GetInvoice } from "@/app/api/invoice/routes";
import { InvoiceModel } from "@/app/model/invoice/invoice-model";

const useFetchInovice = (
  filterUser: string,
  skip: number,
): UseQueryResult<InvoiceModel[], Error> => {
  const { toast } = useToast();

  const errorToast = (err: string) => {
    toast({
      variant: "destructive",
      title: err,
    });
  };

  const queryOptions: UseQueryOptions<InvoiceModel[], Error> = {
    queryKey: ["invoices", filterUser, skip],
    queryFn: () => GetInvoice(filterUser, skip),
  };

  return useQuery<InvoiceModel[], Error>(queryOptions);
};

export default useFetchInovice;
