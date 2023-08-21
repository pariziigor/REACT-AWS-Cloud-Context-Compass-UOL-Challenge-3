import Image from "next/image";

export default function HeaderLogo() {
  return (
    <div className="relative">
      <Image
        className="w-24"
        src="https://i.imgur.com/xNrtuzV.png"
        width={50}
        height={50}
        alt="Logo"
        priority={true}
      />
    </div>
  );
}
