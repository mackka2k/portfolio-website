"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = resolvedTheme === "dark";
	const label = mounted
		? `Switch to ${isDark ? "light" : "dark"} mode`
		: "Toggle theme";

	return (
		<button
			type="button"
			aria-label={label}
			title={label}
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="fixed bottom-6 right-6 z-[4999] inline-flex h-11 w-11 items-center justify-center rounded-full border border-dark-700 bg-white dark:bg-dark-200 text-dark-200 dark:text-stone-200 shadow-md hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
		>
			{mounted ? (
				isDark ? (
					<Sun className="size-5" aria-hidden />
				) : (
					<Moon className="size-5" aria-hidden />
				)
			) : (
				<Moon className="size-5 opacity-0" aria-hidden />
			)}
		</button>
	);
};

export default ThemeToggle;
