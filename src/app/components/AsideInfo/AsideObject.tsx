import Image from "next/image";
import Link from "next/link";

//
interface AsideObjectProps {
  href: string;
  text: string;

  src: string;
  round?: boolean;
}

export default function AsideObject({ href, text, round, src }: AsideObjectProps) {
  return (
    <Link
      className="font-normal my-3 items-center flex flex-col justify-center text-sm text-dark-10"
      href={href}>
      <Image
        className={`h-14 w-14 my-2 ${round? "rounded-full" : "rounded-xl"}`}
        alt="foto-perfil"
        src={src}
        width={50}
        height={50} />
      {text}
    </Link>
  );
}