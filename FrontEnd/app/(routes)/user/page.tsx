"use client";
import DataTable from "@/app/_components/data-table";
import PageTitle from "@/app/_components/page-title";
import { UserContextProvider } from "@/app/contexts/user-context";

const UsersPage = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <PageTitle title="Users" />
      <UserContextProvider>
        <DataTable />
      </UserContextProvider>
    </div>
  );
};

export default UsersPage;
