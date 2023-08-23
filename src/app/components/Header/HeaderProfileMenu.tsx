import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/Ri";

export default function HeaderProfileMenu() {
  return (
    <div className="flex items-center">
      <Image
        className="h-10 w-10 rounded-full"
        src="https://i.imgur.com/jguCgC7.png"
        width={50}
        height={50}
        alt="foto perfil"
      />
      <p className="ml-2 font-medium text-dark-10">Hello Word</p>
      <RiArrowDownSLine className="text-4xl text-[#ED6D25]" />
    </div>
  );
}
