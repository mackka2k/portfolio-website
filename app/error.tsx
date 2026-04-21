"use client";

import { useEffect } from "react";

interface ErrorPageProps {
	error: Error & { digest?: string };
	reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main
			role="alert"
			className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-dark-100 text-dark-200 dark:text-stone-200 px-4 text-center"
		>
			<h1 className="text-3xl sm:text-4xl font-semibold mb-4">
				Something went wrong
			</h1>
			<p className="text-base sm:text-lg text-dark-200/70 dark:text-stone-200/70 mb-8 max-w-md">
				{error.message || "An unexpected error occurred. Please try again."}
			</p>
			<button
				type="button"
				onClick={reset}
				className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
			>
				Try again
			</button>
		</main>
	);
};

export default ErrorPage;
