import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "CamPung",
  description: "Discover Malaysia’s cultural villages.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
