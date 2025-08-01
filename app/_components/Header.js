import Image from "next/image";
import logo from "@/public/logo2.png";

import MainNavigation from "./MainNavigation";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center justify-between bg-white shadow-md">
      <div className=" min-h-10 p-2 flex-1 relative ">
        <Link href={"/"}>
          <Image
            src={logo}
            fill
            alt="The Partnership Hub Africa"
            className="object-cover"
          />
        </Link>
      </div>
      <MainNavigation />
    </div>
  );
}

export default Logo;
