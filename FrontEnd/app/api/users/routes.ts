
import { UserProps } from "@/app/model/user/user-model";
import { baseUrl } from "@/config/base";

const GetUser = async (filterUser:string): Promise<UserProps[]> => {
  const url = `${baseUrl}/api/user/`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Conexão com a rede está com problema");
  }
  const users: UserProps[] = await response.json();

  return users;
};

export { GetUser };
