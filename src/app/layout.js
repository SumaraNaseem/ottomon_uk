import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ottoman Beds",
  description: "Ottoman bed, divan beds, custom bed, mattress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Providers>
        <Navbar />{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
