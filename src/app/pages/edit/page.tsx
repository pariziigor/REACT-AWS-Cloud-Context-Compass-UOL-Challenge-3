import { HeaderComponents } from "@/app/components/Header";
import Footer from "@/app/components/Footer/Footer";
import EditComponent from "@/app/components/Edit/EditComponent";

export default function Edit() {
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
        <EditComponent />
        {/* footer */}
        <Footer />
      </>
    );
  }