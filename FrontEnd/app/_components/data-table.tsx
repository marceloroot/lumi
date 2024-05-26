"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Button } from "./ui/button";
import { useUser } from "@/app/contexts/user-context";
import { EditIcon, Receipt } from "lucide-react";
import Link from "next/link";
import { UserTestIdEnum } from "@/__test__/users-enum/userEnum";

const DataTable = () => {
  const { isLoading, user } = useUser();
  if (isLoading) {
    return <p>Loadding..</p>;
  }
  return (
    <>
      <div className="rounded-md border">
        <Table data-testid={UserTestIdEnum.LINK_USER_ENUM}>
          <TableCaption>A list of your recent Users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Avatar</TableHead>
              <TableHead>Number Client</TableHead>
              <TableHead>Data de Criação</TableHead>
              <TableHead className="text-center">Invoices</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {user?.map((user) => (
              <TableRow key={user.props.id}>
                <TableCell className="font-medium">
                  <img
                    className="h-10 w-10"
                    src={`https://api.dicebear.com/7.x/lorelei/svg?seed=pity`}
                    alt="user image"
                  />
                </TableCell>
                <TableCell>{user.props.id}</TableCell>
                <TableCell>{user.props.createdAt.toString()}</TableCell>
                <TableCell className="items-conter flex justify-center text-left">
                  <Link href={`/invoice`} className="text-center">
                    <Receipt fontSize={10} cursor={"pointer"} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </>
  );
};

export default DataTable;
