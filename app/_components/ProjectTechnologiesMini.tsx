interface ProjectTechnologiesMiniProps {
	techStack: string[];
}

const ProjectTechnologiesMini = ({
	techStack,
}: ProjectTechnologiesMiniProps) => {
	return (
		<ul
			aria-label="Technologies used"
			className="flex flex-wrap items-center gap-2.5 max-w-sm list-none p-0"
		>
			{techStack.map((tech) => (
				<li
					key={tech}
					className="text-xs text-dark-200/60 hover:text-dark-200 dark:text-white/60 dark:hover:text-white font-medium bg-[#ECEEEC] dark:bg-dark-300 hover:bg-dark-300/10 dark:hover:bg-dark-400 border border-transparent dark:border-dark-400 transition-colors duration-200 w-fit rounded-md py-2 px-4"
				>
					{tech}
				</li>
			))}
		</ul>
	);
};

export default ProjectTechnologiesMini;
