import Link from "next/link";


interface FormLinkPops {
  text: string;
  href: string;
}

export default function RecoverLink({ href, text }: FormLinkPops) {
  return (
    <Link className="text-brand-color py-1 text-sm font-normal" href={href}>{text}</Link>
  );
}