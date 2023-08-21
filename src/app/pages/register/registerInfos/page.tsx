import Footer from "@/app/components/Footer/Footer";
import { HeaderComponents } from "@/app/components/Header";
import InfoComponent from "@/app/components/RegisterInfo/InfoComponent";
export default function RegisterInfo() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <HeaderComponents.Root>
        <HeaderComponents.Logo />
        <HeaderComponents.NavBar>
          <HeaderComponents.Link href="/" text="Sobre o orkut" />
          <HeaderComponents.Link href="/" text="Centro de segurança" />
        </HeaderComponents.NavBar>
      </HeaderComponents.Root>
      {/* main content */}
      <div className="flex-grow">
        <InfoComponent />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
