import { ReactNode } from "react";


interface AsideInfoRootProps {
  children: ReactNode;
}

export function AsideInfoRoot ({ children } : AsideInfoRootProps) {
  return (
    <section className="w-[90%] rounded-2xl bg-dark-30 py-4 px-2 flex flex-col lg:w-[25%]">
      {children}
    </section>
  )
}