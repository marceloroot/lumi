import { InvoiceModel } from "@/app/model/invoice/invoice-model";
import { baseUrl, takeBase } from "@/config/base";

const GetInvoice = async (
  filterUser: string,
  skip: number,
): Promise<InvoiceModel[]> => {
  const url = `${baseUrl}/api/invoice/fetchall?id=${filterUser}&skip=${skip}&take=${takeBase}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Conexão com a rede está com problema");
  }
  const invoice: InvoiceModel[] = await response.json();

  return invoice;
};

export { GetInvoice };
