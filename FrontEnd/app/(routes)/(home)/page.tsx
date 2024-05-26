import { UserContextProvider } from "@/app/contexts/user-context";
import PageTitle from "../../_components/page-title";
import HomeBoard from "@/app/(routes)/(home)/_component/home-board";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-5">
      <PageTitle title="DashBoard" />
      <UserContextProvider>
        <HomeBoard />
      </UserContextProvider>
    </div>
  );
}
