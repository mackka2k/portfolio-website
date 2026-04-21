export const siteConfig = {
	name: "Evaldas Mackonis",
	title: "Evaldas - Skilled Web Developer",
	description:
		"Evaldas Mackonis, full-stack web developer. Creating intuitive, visually stunning and highly functional web applications using React, Next.js, TypeScript, and modern web technologies.",
	url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://evaldas-portfolio.com",
	email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "mackonis777@gmail.com",
	ogImage: "/og-image.svg",
	links: {
		github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/mackka2k",
		linkedin:
			process.env.NEXT_PUBLIC_LINKEDIN_URL ??
			"https://www.linkedin.com/in/evaldas-mackonis",
		instagram: "https://www.instagram.com/mackka_777/",
	},
} as const;

export interface TechCardItem {
	name: string;
	description: string;
	imageUrl: string;
	bgColor: string;
}

export const techCardsItems: TechCardItem[] = [
	{
		name: "Figma",
		description: "Design Tool",
		imageUrl: "/imgs/logos/figma-logo.svg",
		bgColor: "bg-[#0ACF83]/20",
	},
	{
		name: "TypeScript",
		description: "JavaScript but better",
		imageUrl: "/imgs/logos/typescript.svg",
		bgColor: "bg-[#3178C6]/20",
	},
	{
		name: "React",
		description: "JavaScript Library",
		imageUrl: "/imgs/logos/react.svg",
		bgColor: "bg-[#61DAFB]/20",
	},
	{
		name: "NextJS",
		description: "React framework",
		imageUrl: "/imgs/logos/nextjs.svg",
		bgColor: "bg-gray-800/80",
	},
	{
		name: "Tailwind",
		description: "CSS framework",
		imageUrl: "/imgs/logos/tailwind.svg",
		bgColor: "bg-[#0EA5E9]/20",
	},
	{
		name: "Git",
		description: "Version control",
		imageUrl: "/imgs/logos/git.svg",
		bgColor: "bg-[#F1502F]/20",
	},
	{
		name: "Firebase",
		description: "Backend platform",
		imageUrl: "/imgs/logos/firebase.svg",
		bgColor: "bg-yellow-400/20",
	},
	{
		name: "SQL",
		description: "Database language",
		imageUrl: "/imgs/logos/sql.svg",
		bgColor: "bg-gray-800/80",
	},
];

export interface PortfolioProject {
	id: string;
	heading: string;
	subheading: string;
	description: string;
	imageUrl: string;
	techStack: string[];
	liveDemoUrl: string;
	sourceCodeUrl: string;
}

export const portfolioProjects: PortfolioProject[] = [
	{
		id: "barteree",
		heading: "Barteree",
		subheading: "a modern item exchange app",
		description:
			"A modern mobile app for exchanging items locally and securely. Users can browse listings, add their own items, favorite offers, chat in real time, and verify their identity with OTP phone authentication. The app is built with React Native, TypeScript, Firebase, Zustand, and NativeWind.",
		imageUrl: "/imgs/projects/portfolio-mockup1.jpg",
		techStack: [
			"ReactNative",
			"Zustand",
			"TypeScript",
			"Firebase",
			"NativeWind",
		],
		liveDemoUrl: "",
		sourceCodeUrl: "https://github.com/mackka2k/barteree-app",
	},
	{
		id: "datingapp",
		heading: "Swiperr",
		subheading: "a simple dating application",
		description:
			"A mobile app that helps users connect and meet new people. Includes secure authentication, real-time chat, and a swipe-based interface for a modern dating experience.",
		imageUrl: "/imgs/projects/portfolio-mockup2.jpg",
		techStack: ["ReactNative", "TypeScript", "Firebase", "NativeWind"],
		liveDemoUrl: "",
		sourceCodeUrl: "https://github.com/mackka2k/swiperr-app.git",
	},
];
