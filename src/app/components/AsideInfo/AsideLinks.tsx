import Link from "next/link";


interface AsideLinksProps {
  href: string;
  text: string;
  className: string;
}


export default function AsideLinks({ href, text, className }: AsideLinksProps) {
  return (
    <Link className={`font-medium ${className}`} href={href}>{text}</Link>
  );
}