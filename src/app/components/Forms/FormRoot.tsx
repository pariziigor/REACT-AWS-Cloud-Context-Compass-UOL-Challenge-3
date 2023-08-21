import { FormEventHandler } from "react";

interface FormProps {
  children: React.ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export default function FormRoot({ children, onSubmit }: FormProps) {
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="relative flex h-[450px] w-[300px] flex-col items-center gap-4 rounded-2xl bg-dark-30 px-4 py-8 "
      >
        {children}
      </form>
    </>
  );
}
