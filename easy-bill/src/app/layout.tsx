import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasyBill",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
