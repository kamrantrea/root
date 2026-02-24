import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Root Atlas",
  description: "A multi-user learning platform for studying human history, primary texts, and traditions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900 antialiased">
        <Header />
        <div className="flex pt-14">
          <Sidebar />
          <main className="ml-64 flex-1 min-h-[calc(100vh-3.5rem)] p-8 max-w-4xl">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
