import { ButtonHTMLAttributes } from "react";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className: string;
}

export default function RecoverButton({
  text,
  className,
  onClick,
}: FormButtonProps) {
  return (
    <>
      <button
        className={`w-full rounded-md py-2 text-center font-small ${className}`}
        style={{ color: '#ED6D25' }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
