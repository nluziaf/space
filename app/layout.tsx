import Link from "next/link";
import "../styles/globals.css";
import { Atkinson_Hyperlegible } from "@next/font/google";

const font = Atkinson_Hyperlegible({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="my-6 flex items-center space-x-6 rounded-md bg-neutral-800 p-4 drop-shadow-lg">
      <Link
        href="/"
        className="text-xl font-bold text-emerald-500 transition duration-200 hover:text-[#a4885c]"
      >
        NL
      </Link>
      <Link
        href="/posts"
        className="transition duration-200 hover:text-emerald-500"
      >
        Posts
      </Link>
    </header>
  );

  const footer = (
    <footer className="my-6 text-center">Made by NLuziaf with 💜</footer>
  );

  return (
    <html lang="en" className={font.className}>
      <head />
      <body className="mx-auto max-w-2xl bg-neutral-900 px-6 pb-6 text-neutral-300">
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
