"use client";
import { Button } from "@/app/_components/ui/button";
import { useToast } from "@/app/_components/ui/use-toast";
import { UploadDataBase } from "@/app/api/settings/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Label } from "recharts";

const UpdateBase = () => {
  const { toast } = useToast();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async () => {
      return UploadDataBase().then((response) => response);
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
  const handleUpdateBase = () => {
    mutation.mutate();
  };
  return (
    <div className="flex items-center justify-end">
      <Label>Updating the database may take some time.</Label>
      <Button onClick={handleUpdateBase}>Update Base</Button>
    </div>
  );
};

export default UpdateBase;
