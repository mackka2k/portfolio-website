import { ChevronRight } from "lucide-react";
import { portfolioProjects, siteConfig } from "../_lib/constants";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";

const ProjectsSection = () => {
	return (
		<section id="work" aria-labelledby="projects-heading" className="py-32">
			<div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
				<h2
					id="projects-heading"
					className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
				>
					My portfolio
				</h2>

				<ShinyButton
					href={siteConfig.links.github}
					icon={<ChevronRight aria-hidden />}
				>
					All Projects
				</ShinyButton>
			</div>

			<div className="grid lg:grid-cols-2 gap-4 mt-8">
				{portfolioProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
