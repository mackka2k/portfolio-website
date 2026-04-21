import "@/app/_styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";
import ThemeToggle from "./_components/ui/ThemeToggle";
import ErrorBoundary from "./_components/ErrorBoundary";
import { siteConfig } from "./_lib/constants";

const raleway = Raleway({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
};

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		template: "Evaldas - %s",
		default: siteConfig.title,
	},
	description: siteConfig.description,
	keywords: [
		"web developer",
		"React",
		"Next.js",
		"TypeScript",
		"full-stack",
		"JavaScript",
		"portfolio",
		"Evaldas",
	],
	authors: [{ name: siteConfig.name, url: siteConfig.url }],
	creator: siteConfig.name,
	publisher: siteConfig.name,
	alternates: {
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		url: siteConfig.url,
		title: "Evaldas - Full-Stack Developer",
		description:
			"Explore my portfolio of innovative web applications built with React, Next.js, and modern technologies.",
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: "Evaldas Portfolio",
			},
		],
		siteName: "Evaldas Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: "Explore my portfolio of innovative web applications.",
		images: [siteConfig.ogImage],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: siteConfig.name,
	description: "Full-stack web developer specialized in React and Next.js",
	url: siteConfig.url,
	sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
	jobTitle: "Full-Stack Developer",
	areaServed: "LT",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${raleway.className} antialiased bg-white dark:bg-dark-100 text-dark-200 dark:text-stone-200`}
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<ErrorBoundary>{children}</ErrorBoundary>
					<ThemeToggle />
				</ThemeProvider>
			</body>
		</html>
	);
}
