import { DashBoardDTO } from "@/app/_interface/inovice-dashboard-interface"
import { baseUrl } from "@/config/base";

const GET = async (filterUser:string): Promise<DashBoardDTO> => {
  const url = `${baseUrl}/api/invoice/${filterUser}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Conexão com a rede está com problema");
  }
  const invoices: DashBoardDTO = await response.json();

  return invoices;
};

export { GET };
