import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { UserProvider } from "./contexts/UserContex";
import { RegisterProvider } from "./contexts/RegisterContext";

const SF_font = localFont({
  src: [
    {
      path: "../../public/Fonts/SFProDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/SFProDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/SFProDisplay-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orkut",
  description: "Challenge 2 Compass.UOL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={SF_font.className}>
      <body className="bg-body">
        <UserProvider>
          <RegisterProvider>{children}</RegisterProvider>
        </UserProvider>
      </body>
    </html>
  );
}
