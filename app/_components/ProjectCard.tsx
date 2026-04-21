"use client";

import { Github, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "../_lib/constants";
import ProjectTechnologiesMini from "./ProjectTechnologiesMini";

interface ProjectCardProps {
	project: PortfolioProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const { id, heading, imageUrl, techStack, sourceCodeUrl } = project;
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.article
			initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 75 }}
			whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: 0.25 }}
			className="bg-[#F3F4F3] dark:bg-dark-200 rounded-lg p-4 sm:p-8 space-y-8"
		>
			<Link
				href={`/work/${id}`}
				className="rounded-lg overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
				aria-label={`Open ${heading} project details`}
			>
				<Image
					src={imageUrl}
					width={1000}
					height={1000}
					alt={`${heading} project preview`}
					className="hover:scale-110 transition-transform duration-700 motion-reduce:transition-none motion-reduce:hover:scale-100"
					loading="lazy"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</Link>
			<div>
				<h3 className="text-2xl sm:text-3xl font-semibold">{heading}</h3>
				<div className="mt-4 flex flex-col sm:flex-row justify-between gap-5">
					<ProjectTechnologiesMini techStack={techStack} />
					<div className="flex gap-3 self-start sm:self-end">
						{sourceCodeUrl && (
							<a
								href={sourceCodeUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 bg-gray-700 hover:bg-gray-800 transition-colors duration-200 rounded-lg flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
								title={`View ${heading} source code on GitHub`}
								aria-label={`View ${heading} source code on GitHub`}
							>
								<Github className="size-5 sm:size-6" aria-hidden />
								<span className="text-sm font-semibold hidden sm:inline text-white">
									Code
								</span>
							</a>
						)}
						<Link
							href={`/work/${id}`}
							className="p-3 bg-green-500 hover:bg-green-600 transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
							aria-label={`Open ${heading} project details`}
						>
							<MoveUpRight
								className="size-5 sm:size-8 text-[#F3F4F3] dark:text-dark-200"
								aria-hidden
							/>
						</Link>
					</div>
				</div>
			</div>
		</motion.article>
	);
};

export default ProjectCard;
