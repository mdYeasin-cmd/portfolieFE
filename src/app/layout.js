import { Inter } from "next/font/google";
import "./globals.css";
import { COLORS } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md Yeasin - Fullstack Developer",
  description: "I'm Yeasin, a MERN Stack Web Developer. Try to solve real life problems using programming which impacts human life. I am coming here because of my passion and I want to do something remarkable with it. Have advanced knowledge about Frontend Development focused on React. Also have a comportable idea about the backend with node. Explore new technology daily to build a strong knowledge of full stack development. Now I'm acquiring deep knowledge about MERN Stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[${COLORS.BACKGROUND}] text-white`}>{children}</body>
    </html>
  );
}
