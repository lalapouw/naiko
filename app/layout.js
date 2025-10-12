import { Calistoga, Wendy_One } from "next/font/google";
import "./globals.css";

const calistoga = Calistoga({
  subsets: ["latin"], weight: ["400"],
});

const wendyOne = Wendy_One({
  subsets: ["latin"], weight: ["400"],
});

export const metadata = {
  title: "naiko webpage",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-lightNaiko">
      <body
        className={`${calistoga.className} ${wendyOne.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
