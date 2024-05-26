import { ArquivoCreateI } from "@/app/_interface/setting-interface";
import { UserProps } from "@/app/model/user/user-model";
import { baseUrl } from "@/config/base";

const UploadFile = async (data: ArquivoCreateI): Promise<any> => {
  const url = `${baseUrl}/upload`;

  if (!data.file) {
    throw new Error("O arquivo nao existe");
  }
  //@ts-ignore
  const file = data.file[0];
  console.log("datafiles", file);

  const formData = new FormData();
  formData.append("file", file); // Adiciona o arquivo ao FormData

  const response = await fetch(url, {
    method: "POST",
    headers: {
      // Não é necessário definir Content-Type para FormData, o navegador cuidará disso
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Conexão com a rede está com problema");
  }
  const responseFile = await response.json();

  return responseFile;
};

const UploadDataBase = async (): Promise<any> => {
  const url = `${baseUrl}/extract`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Conexão com a rede está com problema");
  }
  const responseExtract: any = await response.json();

  return responseExtract;
};

export { UploadFile, UploadDataBase };
