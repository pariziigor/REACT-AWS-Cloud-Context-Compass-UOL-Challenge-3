import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return (
    <section className=" w-[90%] h-[60%] space-y-6 lg:w-[25%]">{children}</section>
  )
}