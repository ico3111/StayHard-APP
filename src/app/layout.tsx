import type { Metadata } from "next";

// @ts-ignore: CSS global import type declarations are missing in the TS config
import "./globals.css";

export const metadata: Metadata = {
  title: "Stay Hard",
  description: "Organize your Workout",
  icons:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xytBFU2qHR6IyNn5LrwurcwvpipzIp9gBQ&s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
