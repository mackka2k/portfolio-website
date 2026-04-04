import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "./_components/ThemeProvider";

const raleway = Raleway({ subsets: ["latin"] });

const baseUrl = "https://evaldas-portfolio.com"; // Update with your actual domain
const ogImage = `${baseUrl}/og-image.jpg`; // Add this image to public folder

export const metadata: Metadata = {
	title: {
		template: "Evaldas - %s",
		default: "Evaldas - Skilled Web Developer",
	},
	description:
		"Evaldas Mackonis, full-stack web developer. Creating intuitive, visually stunning and highly functional web applications using React, Next.js, TypeScript, and modern web technologies.",
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
	authors: [{ name: "Evaldas Mackonis", url: baseUrl }],
	creator: "Evaldas Mackonis",
	publisher: "Evaldas Mackonis",
	alternates: {
		canonical: baseUrl,
	},
	openGraph: {
		type: "website",
		url: baseUrl,
		title: "Evaldas - Skilled Web Developer",
		description:
			"Explore my portfolio of innovative web applications built with React, Next.js, and modern technologies.",
		images: [
			{
				url: ogImage,
				width: 1200,
				height: 630,
				alt: "Evaldas Portfolio",
			},
		],
		siteName: "Evaldas Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Evaldas - Skilled Web Developer",
		description:
			"Explore my portfolio of innovative web applications.",
		images: [ogImage],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* JSON-LD Schema Markup */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Evaldas Mackonis",
							description: "Full-stack web developer specialized in React and Next.js",
							url: "https://evaldas-portfolio.com",
							sameAs: [
								"https://github.com/mackka2k",
								"https://linkedin.com/in/evaldas", // Update with actual LinkedIn
							],
							jobTitle: "Full-Stack Developer",
							areaServed: "LT",
						}),
					}}
				/>
			</head>
			<body
				className={`${raleway.className} antialiased bg-white dark:bg-dark-100 text-dark-200 dark:text-stone-200`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
