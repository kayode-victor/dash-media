import { Inter } from "@next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Logo from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Header />
      <Nav />
      <main>{children}</main>
      <Logo />
    </div>
  );
}
