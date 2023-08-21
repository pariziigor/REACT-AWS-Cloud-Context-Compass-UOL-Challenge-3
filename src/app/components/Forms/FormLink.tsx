import Link from "next/link";


interface FormLinkPops {
  text: string;
  href: string;
}

export default function FormLink({ href, text }: FormLinkPops) {
  return (
    <Link className="text-brand-color py-1 text-sm text-decoration-line: underline font-normal" href={href}>{text}</Link>
  );
}