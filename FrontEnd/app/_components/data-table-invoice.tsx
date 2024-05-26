"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/_components/ui/table";
import { Button } from "./ui/button";

import Link from "next/link";
import { InvoiceModel } from "../model/invoice/invoice-model";
import { CloudDownload, FolderOpenDot } from "lucide-react";
import { baseUrl } from "@/config/base";

interface DataTableInvoiceProps {
  invoices: InvoiceModel[];
  user?: string;
  setSkiped: (skip: number) => void;
  skip: number;
}

const DataTableInvoice = ({
  invoices,
  user,
  setSkiped,
  skip,
}: DataTableInvoiceProps) => {
  const handlePagePrev = () => {
    console.log(skip);
    setSkiped(Math.max(skip - 1, 0));
  };

  const handlePageNext = () => {
    setSkiped(invoices.length - 1 >= 0 ? skip + 1 : skip);
  };
  return (
    <>
      {user && (
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Number Client: {user}</p>
          <Link
            href="/invoice"
            className="rounded-md bg-gray-300 p-3 font-semibold"
          >
            List All Invoices
          </Link>
        </div>
      )}
      <div className="rounded-md border">
        <Table>
          <TableCaption>A list of your recent Invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Avatar</TableHead>
              <TableHead>Installation Number</TableHead>
              <TableHead>Client Number</TableHead>
              <TableHead>Month Referring</TableHead>
              <TableHead>Amount To Be Paid</TableHead>
              {!user && (
                <TableHead className="text-center">User Invoices</TableHead>
              )}
              <TableHead className="text-center">Download</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices?.map((invoice) => (
              <TableRow key={invoice.props.id}>
                <TableCell className="font-medium">
                  <img
                    className="h-10 w-10"
                    src={`https://api.dicebear.com/7.x/lorelei/svg?seed=pity`}
                    alt="user image"
                  />
                </TableCell>
                <TableCell>{invoice.props.installationNumber}</TableCell>
                <TableCell>{invoice.props.userId}</TableCell>
                <TableCell>{invoice.props.monthReferring}</TableCell>
                <TableCell>R$ {invoice.props.amountToBePaid}</TableCell>
                {!user && (
                  <TableCell className="">
                    <Link
                      href={`/invoice/${invoice.props.userId}`}
                      className="flex w-full items-center justify-center text-center"
                    >
                      <FolderOpenDot
                        cursor={"pointer"}
                        className="flex w-full items-center justify-center text-center"
                      />
                    </Link>
                  </TableCell>
                )}
                <TableCell className="">
                  <Link
                    href={`${baseUrl}/${invoice.props.path}`}
                    target="_blank"
                    className="flex w-full items-center justify-center text-center"
                  >
                    <CloudDownload fontSize={10} cursor={"pointer"} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" onClick={handlePagePrev}>
          Previous
        </Button>
        <span className="gap-3 p-3 font-semibold">{skip}</span>
        <Button variant="outline" size="sm" onClick={handlePageNext}>
          Next
        </Button>
      </div>
    </>
  );
};

export default DataTableInvoice;
