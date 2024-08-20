import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from '@vercel/analytics/react';
import Ribbon from "@/components/ui/ribbon";
import { Header } from "@/components/ui/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sedekah Je",
	description: "Curated and crowdsourced list of mosques/surau in Malaysia",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn(inter.className, "py-12 flex flex-col gap-4 bg-white dark:bg-zinc-900 text-black dark:text-zinc-100")}>
				<Header />
				{children}
				<Analytics />
				<Toaster richColors/>
				<Ribbon />
			</body>
		</html>
	);
}
