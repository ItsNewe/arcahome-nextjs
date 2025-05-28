import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { Navbar } from "@/components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arca",
  description: "Arca Home",
  openGraph: {
	title: "Arca",
	description: "Arca Home",
	url: "https://arcafin.fr",
	siteName: "Arca",
	images: [
	  {
		url: "https://arcafin.fr/content/arca.png",
		width: 1200,
		height: 630,
	  },
	],
	locale: "en_US",
	type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
		<ThemeProvider
		attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
			<div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
				<Navbar />
				{children}
			</div>
		</ThemeProvider>
      </body>
    </html>
  );
}