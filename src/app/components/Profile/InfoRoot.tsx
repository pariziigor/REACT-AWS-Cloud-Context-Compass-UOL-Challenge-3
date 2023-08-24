import { ReactNode } from "react"

interface InfoRootProps {
  children: ReactNode
}

export function InfoRoot({ children }: InfoRootProps) {
  return (
    <div className="h-[60%] w-[90%] py-4 px-6 space-y-4 bg-dark-30 rounded-2xl text-dark-10 lg:w-[40%]">{children}</div>
  )
}