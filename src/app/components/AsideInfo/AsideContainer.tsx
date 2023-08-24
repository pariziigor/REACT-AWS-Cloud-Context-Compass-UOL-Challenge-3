interface AsideContainerProps {
    children: React.ReactNode;
  }
  
  export default function AsideContainer({ children }: AsideContainerProps) {
    return (
      <>
        <nav className="flex flex-row justify-between items-center mx-4 my-1">{children}</nav>
      </>
    );
  }