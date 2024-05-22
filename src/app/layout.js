import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Care",
  description: "",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Care",
    // startUpImage: [],
  },
};

export const viewport = {
  themeColor: "#f5f5f5",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gradient-to-b 
                 from-pink-300 to-blue-500">{children}</body>
    </html>
  );
}

