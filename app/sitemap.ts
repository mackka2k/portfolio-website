import type { MetadataRoute } from "next";
import { portfolioProjects, siteConfig } from "./_lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return [
		{
			url: siteConfig.url,
			lastModified,
			changeFrequency: "monthly",
			priority: 1.0,
		},
		...portfolioProjects.map((project) => ({
			url: `${siteConfig.url}/work/${project.id}`,
			lastModified,
			changeFrequency: "monthly" as const,
			priority: 0.7,
		})),
	];
}
