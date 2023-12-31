import { ButtonHTMLAttributes } from "react";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className: string;
}

export default function FormButton({
  text,
  className,
  onClick,
}: FormButtonProps) {
  return (
    <>
      <button
        className={`w-full rounded-md py-2 text-center font-small ${className}`}
        style={{ color: '#FFF' }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
