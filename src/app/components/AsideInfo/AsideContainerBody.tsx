interface AsideContainerBodyProps {
    children: React.ReactNode;
  }
  
  export default function AsideContainerBody({ children }: AsideContainerBodyProps) {
    return (
      <>
        <nav className="grid grid-cols-3 justify-between ">{children}</nav>
      </>
    );
  }