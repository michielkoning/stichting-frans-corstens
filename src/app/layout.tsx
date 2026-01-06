import { Ubuntu } from "next/font/google";
import "./css/globals.css";
import { Header } from "./components/Header/Header";
import { CenterWrapper } from "./components/CenterWrapper/CenterWrapper";
import { Metadata, Viewport } from "next";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-family-body",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Stichting Frans Corstens",
    template: "%s | Stichting Frans Corstens",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" dir="ltr" className={`${ubuntu.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
