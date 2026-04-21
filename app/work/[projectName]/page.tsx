import Footer from "@/app/_components/Footer";
import ProjectTechnologiesMini from "@/app/_components/ProjectTechnologiesMini";
import { Navbar, type NavItem } from "@/app/_components/ui/Navbar";
import ShinyButton from "@/app/_components/ui/ShinyButton";
import { portfolioProjects } from "@/app/_lib/constants";
import {
	BriefcaseBusiness,
	Code,
	Contact as ContactIcon,
	Globe,
	House,
	MoveDown,
	UserRound,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
	params: { projectName: string };
}

export function generateStaticParams() {
	return portfolioProjects.map((project) => ({
		projectName: project.id,
	}));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
	const project = portfolioProjects.find(
		(candidate) => candidate.id === params.projectName
	);

	if (!project) return { title: "Not Found" };

	return {
		title: project.heading,
		description: project.description,
		openGraph: {
			title: `${project.heading} — ${project.subheading}`,
			description: project.description,
			images: [project.imageUrl],
		},
	};
}

const navItems: NavItem[] = [
	{ name: "Home", link: "/", icon: <House /> },
	{ name: "Work", link: "/#work", icon: <BriefcaseBusiness /> },
	{ name: "About", link: "/#about", icon: <UserRound /> },
	{ name: "Contact", link: "/#contact", icon: <ContactIcon /> },
];

const ProjectOverview = ({ params }: ProjectPageProps) => {
	const project = portfolioProjects.find(
		(candidate) => candidate.id === params.projectName
	);

	if (!project) notFound();

	const {
		heading,
		subheading,
		description,
		imageUrl,
		techStack,
		liveDemoUrl,
		sourceCodeUrl,
	} = project;

	return (
		<main className="flex flex-col px-5 sm:px-10 relative">
			<div className="max-w-7xl mx-auto w-full">
				<Navbar navItems={navItems} />

				<article className="pt-36">
					<div
						aria-hidden
						className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] absolute top-0 left-0 flex items-center justify-center"
					>
						<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
					</div>

					<div className="relative z-10">
						<h1 className="text-[40px] md:text-6xl lg:text-7xl text-center max-w-5xl leading-normal tracking-wide uppercase mx-auto">
							<span className="font-black">{heading}</span>
							<br />
							{subheading}
						</h1>

						<div className="flex items-center justify-center my-24">
							<Link
								href="#image"
								aria-label="Scroll to project image"
								className="focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-full"
							>
								<MoveDown className="size-16" strokeWidth={1} aria-hidden />
							</Link>
						</div>

						<div className="rounded-lg overflow-hidden" id="image">
							<Image
								src={imageUrl}
								width={2000}
								height={1000}
								alt={`${heading} — ${subheading}`}
								sizes="100vw"
								priority
							/>
						</div>

						<div className="mt-8 mb-32 flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
							<div className="flex-1">
								<h2 className="text-3xl min-[430px]:text-4xl md:text-5xl dark:text-stone-200 mb-5">
									Project Overview
								</h2>

								<ProjectTechnologiesMini techStack={techStack} />

								<div className="flex flex-wrap items-center gap-4 mt-10">
									{liveDemoUrl && (
										<ShinyButton
											href={liveDemoUrl}
											icon={<Globe aria-hidden />}
											iconPosition="left"
										>
											View Demo
										</ShinyButton>
									)}

									{sourceCodeUrl && (
										<ShinyButton
											href={sourceCodeUrl}
											icon={<Code aria-hidden />}
											iconPosition="left"
										>
											Source Code
										</ShinyButton>
									)}
								</div>
							</div>

							<p className="flex-1">{description}</p>
						</div>
					</div>
				</article>

				<Footer />
			</div>
		</main>
	);
};

export default ProjectOverview;
