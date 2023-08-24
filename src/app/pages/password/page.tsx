import { HeaderComponents } from "@/app/components/Header";
import PasswordComponent from "@/app/components/InfoPassword/InfoComponent";
import Footer from "@/app/components/Footer/Footer";

export default function Recover() {
  return (
    <>
      {/* header */}
      <HeaderComponents.Root>
        <HeaderComponents.Logo />
        <HeaderComponents.NavBar>
          <HeaderComponents.Link href="/" text="Centro de segurança" />
        </HeaderComponents.NavBar>
      </HeaderComponents.Root>
      {/* main content */}
      <PasswordComponent />
      {/* footer */}
      <Footer />
    </>
  );
}
