"use client";
import { Button } from "@/app/_components/ui/button";

import { useToast } from "@/app/_components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArquivoCreateI } from "@/app/_interface/setting-interface";
import { UploadFile } from "@/app/api/settings/routes";
import { useForm } from "react-hook-form";
import { Label } from "@/app/_components/ui/label";
import { useRouter } from "next/navigation";
import UpdateBase from "./_component/update-base";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf",
];

const formSchema = z.object({
  file: z
    .any()
    // To not allow empty files
    .refine((files) => files?.length >= 1, { message: "Image is required." })
    // To not allow files other than images
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), {
      message: ".pdf files are accepted.",
    })
    // To not allow files larger than 5MB
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `Max file size is 5MB.`,
    }),
});

type FormData = z.infer<typeof formSchema>;
const SettingsPage = () => {
  const router = useRouter();
  const [fileName, setFileName] = useState("");
  const { toast } = useToast();
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: ArquivoCreateI) => {
      return UploadFile(data).then((response) => response);
    },
    onError: (error) => {
      toast({
        title: error.message,
      });
    },
    onSuccess: (data) => {
      if (data.error) {
        toast({
          variant: "destructive",
          title: data.error,
        });
      } else {
        toast({
          title: "Arquivo salvo com sucesso",
        });
        router.push(`/`);
      }
    },
  });

  const onSubmit = async (data: FormData) => {
    const dataEntrega: ArquivoCreateI = {
      file: data.file,
    };
    mutation.mutate(dataEntrega);
  };

  return (
    <>
      <UpdateBase />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-4 mt-10 text-center text-2xl font-bold">
          Upload file
        </h1>
        <div className="mb-4">
          <Label htmlFor="file">File</Label>
          {fileName}
          <input
            type="file"
            id="file"
            {...register("file")}
            placeholder="Arquivo"
            className="mb-2 mt-1 w-full rounded-md border bg-transparent  p-2 "
            required
          />
          {errors.file?.message && (
            <p className="text-sm text-red-400">{"Arquivo obrigatorio"}</p>
          )}
        </div>
        <Button className="font-bold text-white" type="submit">
          Upload
        </Button>
      </form>
    </>
  );
};

export default SettingsPage;
