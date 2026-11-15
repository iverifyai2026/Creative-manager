import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Creative Manager", description: "Your creative department, managed by AI." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
