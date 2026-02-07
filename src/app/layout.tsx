import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manaal Waheed Khan — Portfolio",
  description: "Smart contract security researcher and full‑stack builder."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">{children}</body>
    </html>
  );
}
