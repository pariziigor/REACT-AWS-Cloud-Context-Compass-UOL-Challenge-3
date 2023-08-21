interface HeaderNavbar {
  children: React.ReactNode;
}

export default function HeaderNavbar({ children }: HeaderNavbar) {
  return (
    <>
      <nav className="hidden gap-6 sm:flex">{children}</nav>
    </>
  );
}
