import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Squeeze The Next.js",
  description: "스프링부트, Next.js 연동 연습 사이트",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen">
        <header>
          <nav className="flex">
            {/*a나 link나 같은 사용이나, Link가 훨씬 더 빠르고 최적화가 됨.*/}
            <Link href="/" className="p-2 rounded hover:bg-gray-100">
              메인
            </Link>
            <Link href="/posts" className="p-2 rounded hover:bg-gray-100">
              글 목록
            </Link>
          </nav>
        </header>
        <main className="flex-grow flex flex-col p-2">{children}</main>
        <footer className="text-center p-2">footer</footer>
      </body>
    </html>
  );
}
