import Link from "next/link";
import { siteConfig } from "../_lib/constants";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import ShinyButton from "./ui/ShinyButton";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Work", href: "/#work" },
	{ label: "About", href: "/#about" },
	{ label: "Contact", href: "/#contact" },
];

const projectLinks = [
	{
		label: "Barteree",
		href: "https://github.com/mackka2k/barteree-app.git",
	},
	{
		label: "Swiperr",
		href: "https://github.com/mackka2k/swiperr-app.git",
	},
];

const socialLinks = [
	{ label: "LinkedIn", href: siteConfig.links.linkedin },
	{ label: "GitHub", href: siteConfig.links.github },
	{ label: "Instagram", href: siteConfig.links.instagram },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer
			id="contact"
			aria-labelledby="contact-heading"
			className="flex flex-col justify-center antialiased relative border border-dark-300 rounded-xl mb-5"
		>
			<div>
				<div className="space-y-8 p-10">
					<h2
						id="contact-heading"
						className="text-5xl font-bold max-w-2xl leading-[110%] relative z-10"
					>
						Like what you see? Reach out{" "}
						<Link
							href={`mailto:${siteConfig.email}`}
							className="text-green-500 hover:text-green-600 border-b-2 border-green-500 hover:border-green-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
						>
							via email
						</Link>{" "}
						to collaborate!
					</h2>

					<ShinyButton href={`mailto:${siteConfig.email}`}>
						Schedule call
					</ShinyButton>
				</div>

				<div className="mt-16 p-10 border-t border-dark-200 dark:border-white/10 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
					<div className="space-y-2.5">
						<h3 className="text-xl font-bold relative z-10">
							{siteConfig.name}
						</h3>
						<p className="text-dark-200/70 dark:text-stone-200/70 relative z-10">
							&copy; {currentYear} | All rights reserved.
						</p>
					</div>

					<div className="flex justify-between gap-0 sm:gap-16">
						<nav aria-label="Footer navigation">
							<ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
								<li className="text-base sm:text-lg font-semibold">Navigate</li>
								{navLinks.map(({ label, href }) => (
									<li
										key={label}
										className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white"
									>
										<Link href={href}>{label}</Link>
									</li>
								))}
							</ul>
						</nav>

						<nav aria-label="Projects">
							<ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
								<li className="text-lg font-semibold">Projects</li>
								{projectLinks.map(({ label, href }) => (
									<li
										key={label}
										className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white"
									>
										<Link href={href} target="_blank" rel="noopener noreferrer">
											{label}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						<nav aria-label="Social">
							<ul className="space-y-2.5 relative z-10 text-sm sm:text-base">
								<li className="text-lg font-semibold">Socials</li>
								{socialLinks.map(({ label, href }) => (
									<li
										key={label}
										className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white"
									>
										<Link href={href} target="_blank" rel="noopener noreferrer">
											{label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<BackgroundBeams className="hidden sm:flex" />
		</footer>
	);
};

export default Footer;
