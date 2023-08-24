"use client";
import { HeaderComponents } from "@/app/components/Header";
import ProfileComponent from "@/app/components/ProfileComponent/ProfileComponent";

export default function Profile() {
  return (
    <div>
      {/* header */}
      <HeaderComponents.Root>
        <HeaderComponents.Logo />
        <HeaderComponents.NavBar>
          <HeaderComponents.Link href="/" text="Início" />
          <HeaderComponents.Link
            href="/"
            text="Perfil"
            className="font-semibold text-brand-color"
          />
          <HeaderComponents.Link href="/" text="Comunidades" />
          <HeaderComponents.Link href="/" text="Jogos" />
        </HeaderComponents.NavBar>
        <HeaderComponents.Search />
        <HeaderComponents.ProfileMenu />
      </HeaderComponents.Root>
      {/* main content */}
      <ProfileComponent />
      {/* footer */}
    </div>
  );
}