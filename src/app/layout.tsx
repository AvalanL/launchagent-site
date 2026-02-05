import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LaunchAgent - AI Marketing Team for iOS App Store Launches",
  description: "Launch your iOS app on the App Store with AI. ASO optimization, App Store Connect integration via Fastlane, marketing content — all automated.",
  keywords: "iOS app launch, App Store launch, ASO, app store optimization, AI marketing, indie iOS developer, iOS app marketing, Fastlane, App Store Connect",
  authors: [{ name: "Ben", url: "https://twitter.com/benwarb" }],
  openGraph: {
    title: "LaunchAgent - AI Marketing Team for iOS App Store Launches",
    description: "Launch your iOS app on the App Store with AI. ASO, Fastlane integration, marketing content — automated.",
    url: "https://launchagent.dev",
    siteName: "LaunchAgent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchAgent - AI Marketing Team for iOS App Store Launches",
    description: "Launch your iOS app on the App Store with AI. ASO, Fastlane integration, marketing content — automated.",
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
