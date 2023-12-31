import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dropbox clone",
	description: "Generated by Emino.Dev",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className=''>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange>
						<Header />
						{children}
						<Toaster />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
