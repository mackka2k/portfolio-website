"use client";
import { cn } from "@/app/_lib/utils";
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from "framer-motion";
import Link from "next/link";
import type { JSX } from "react";
import { useState } from "react";

export interface NavItem {
	name: string;
	link: string;
	icon?: JSX.Element;
}

interface NavbarProps {
	navItems: NavItem[];
	className?: string;
}

export const Navbar = ({ navItems, className }: NavbarProps) => {
	const { scrollYProgress } = useScroll();

	const [visible, setVisible] = useState(true);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		if (typeof current !== "number") return;

		const previous = scrollYProgress.getPrevious() ?? 0;
		const direction = current - previous;

		if (current < 0.05) {
			setVisible(true);
			return;
		}

		setVisible(direction < 0);
	});

	return (
		<AnimatePresence mode="wait">
			<motion.nav
				aria-label="Primary"
				initial={{ opacity: 1, y: -100 }}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{ duration: 0.2 }}
				className={cn(
					"flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-dark-700 rounded-lg bg-dark-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-center space-x-4",
					className
				)}
			>
				{navItems.map((navItem, idx) => (
					<Link
						key={`${navItem.name}-${idx}`}
						href={navItem.link}
						aria-label={navItem.name}
						className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
					>
						<span className="block sm:hidden" aria-hidden>
							{navItem.icon}
						</span>
						<span className="hidden sm:block font-medium">{navItem.name}</span>
					</Link>
				))}
			</motion.nav>
		</AnimatePresence>
	);
};
