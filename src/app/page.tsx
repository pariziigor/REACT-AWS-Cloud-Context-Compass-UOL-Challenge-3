import { HeaderComponents } from "./components/Header";
import LoginComponent from "./components/Login/LoginComponent";
import Footer from "./components/Footer/Footer";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col">
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
        <LoginComponent />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
