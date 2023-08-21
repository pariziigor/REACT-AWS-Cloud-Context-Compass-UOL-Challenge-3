import Image from "next/image";
interface FormTitleLogoProps {
  title: string;
}

export default function FormTitleLogo({ title }: FormTitleLogoProps) {
  return (
    <div className="space-y-2 text-xl font-semibold text-brand-color">
      <Image
        className="m-auto"
        src="https://i.imgur.com/vRPPvfA.png"
        alt="logo-pequena"
        width={35}
        height={35}
      />
      <p>{title}</p>
    </div>
  );
}
