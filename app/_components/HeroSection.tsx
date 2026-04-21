import { ChevronRight, Download } from "lucide-react";
import ShinyButton from "./ui/ShinyButton";

const HeroSection = () => {
	return (
		<>
			<div
				aria-hidden
				className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.06] flex items-center justify-center absolute top-0 left-0"
			>
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			</div>

			<section
				id="home"
				aria-label="Introduction"
				className="pb-20 pt-36 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
			>
				<div className="flex flex-col justify-center items-center relative z-10 text-center">
					<p className="uppercase font-bold text-sm tracking-widest">
						Based in Lithuania
					</p>
					<h1 className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide">
						Quality{" "}
						<span className="text-green-500">Design &amp; Web Development</span>{" "}
						Synergy
					</h1>
					<p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
						Hi, I&apos;m Evaldas, I create intuitive, visually stunning and
						highly functional web applications.
					</p>
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<ShinyButton href="#work" icon={<ChevronRight aria-hidden />}>
							See My Work
						</ShinyButton>
						<a
							href="/resume/CV_en.pdf"
							download
							className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-md"
						>
							<Download className="text-green-500" aria-hidden />
							<span className="group-hover:text-dark-200/70 dark:group-hover:text-white/70 transition-colors duration-200 font-semibold">
								Download CV
							</span>
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
