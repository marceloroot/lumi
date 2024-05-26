import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-3 shadow-lg shadow-gray-300">
      <Image src="/logo.png" alt="logo" width={80} height={80} />
      <div>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
