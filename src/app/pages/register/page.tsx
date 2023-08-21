import { HeaderComponents } from "@/app/components/Header";
import RegisterComponent from "@/app/components/Register/RegisterComponent";
import Footer from "@/app/components/Footer/Footer";

export default function Register() {
  return (
    <>
      {/* header */}
      <HeaderComponents.Root>
        <HeaderComponents.Logo />
        <HeaderComponents.NavBar>
          <HeaderComponents.Link href="/" text="Sobre o orkut" />
          <HeaderComponents.Link href="/" text="Centro de segurança" />
        </HeaderComponents.NavBar>
      </HeaderComponents.Root>
      {/* main content */}
      <RegisterComponent />
      {/* footer */}
      <Footer />
    </>
  );
}
