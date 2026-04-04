import { MetadataRoute } from "next";
import { portfolioProjects } from "./_lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://evaldas-portfolio.com"; // Update with your actual domain

	// Main pages
	const pages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 1.0,
		},
		{
			url: `${baseUrl}/#work`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/#about`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
		{
			url: `${baseUrl}/#contact`,
			lastModified: new Date(),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		},
	];

	// Project pages
	const projectPages = portfolioProjects.map((project) => ({
		url: `${baseUrl}/work/${project.id}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	return [...pages, ...projectPages];
}
