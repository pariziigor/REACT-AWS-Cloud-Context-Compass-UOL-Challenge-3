import { ReactNode } from "react";

interface HeaderRootProps {
  children: ReactNode;
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className="flex items-center justify-around bg-dark-30 py-3">
      {children}
    </header>
  );
}
