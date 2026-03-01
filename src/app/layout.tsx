import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/redux/Providers";

export const metadata: Metadata = {
  title: "LinkedIn Sign-In Demo",
  description:
    "Modern LinkedIn OAuth implementation with Next.js and Spring Boot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
