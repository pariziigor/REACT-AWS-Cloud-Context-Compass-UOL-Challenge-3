import { ReactNode } from "react";

interface BannerRootProps {
  children: ReactNode;
}

export function BannerRoot({ children }: BannerRootProps) {
  return (
    <>
      <div className="relative h-[450px] w-[600px] rounded-2xl overflow-hidden hidden lg:flex" >
        <div className="absolute z-20 w-full h-full bg-gradient-to-b from-corT/50 to-corB/95" />
        {children}
      </div>
    </>
  )
}