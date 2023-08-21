import Link from "next/link";
interface HeaderLinksProps {
  href: string;
  text: string;
  className?: string;
}

export default function HeaderLinks({
  href,
  text,
  className,
}: HeaderLinksProps) {
  return (
    <Link className={`text-dark-10 ${className}`} href={href}>
      {text}
    </Link>
  );
}
