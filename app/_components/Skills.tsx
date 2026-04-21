"use client";

import { motion, useReducedMotion } from "framer-motion";
import { techCardsItems } from "../_lib/constants";
import TechCard from "./TechCard";

const Skills = () => {
	const shouldReduceMotion = useReducedMotion();

	const fadeLeft = shouldReduceMotion
		? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
		: {
				initial: { opacity: 0, x: -75 },
				whileInView: { opacity: 1, x: 0 },
			};

	const fadeUp = shouldReduceMotion
		? { initial: { opacity: 0 }, whileInView: { opacity: 1 } }
		: {
				initial: { opacity: 0, y: 75 },
				whileInView: { opacity: 1, y: 0 },
			};

	return (
		<section
			id="about"
			aria-labelledby="skills-heading"
			className="relative z-10 py-16 sm:py-24"
		>
			<div className="space-y-4 mb-10">
				<motion.h2
					id="skills-heading"
					{...fadeLeft}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.25 }}
					className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200"
				>
					Current technologies
				</motion.h2>
				<motion.p
					{...fadeLeft}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.25 }}
					className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70"
				>
					I&apos;m proficient in a range of modern technologies that empower me
					to build highly functional solutions. These are some of my main
					technologies.
				</motion.p>
			</div>

			<motion.ul
				{...fadeUp}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.25 }}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 list-none p-0"
			>
				{techCardsItems.map((cardItem) => (
					<li key={cardItem.name}>
						<TechCard cardInfo={cardItem} />
					</li>
				))}
			</motion.ul>
		</section>
	);
};

export default Skills;
