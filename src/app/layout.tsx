import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LaunchAgent - Your AI Marketing Team for App Launches",
  description: "Open in Cursor. Talk to the agent. Launch your app to thousands of users. AI-powered ASO, content generation, and App Store optimization.",
  keywords: "app launch, ASO, app store optimization, AI marketing, indie developer, iOS app, app marketing, launch agent",
  authors: [{ name: "Ben", url: "https://twitter.com/benwarb" }],
  openGraph: {
    title: "LaunchAgent - Your AI Marketing Team for App Launches",
    description: "Open in Cursor. Talk to the agent. Launch your app to thousands of users.",
    url: "https://launchagent.dev",
    siteName: "LaunchAgent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchAgent - Your AI Marketing Team for App Launches",
    description: "Open in Cursor. Talk to the agent. Launch your app to thousands of users.",
    creator: "@benwarb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
