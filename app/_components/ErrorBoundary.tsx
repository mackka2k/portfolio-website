"use client";

import React, { type ReactNode } from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
	fallback?: (_error: Error, _reset: () => void) => ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		if (process.env.NODE_ENV !== "production") {
			console.error("Error caught by boundary:", error, errorInfo);
		}
	}

	resetError = () => {
		this.setState({ hasError: false, error: null });
	};

	render() {
		if (this.state.hasError && this.state.error) {
			if (this.props.fallback) {
				return this.props.fallback(this.state.error, this.resetError);
			}

			return (
				<div
					role="alert"
					className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-dark-100 text-dark-200 dark:text-stone-200 px-4 text-center"
				>
					<h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
					<p className="text-dark-200/70 dark:text-stone-200/70 mb-8 max-w-md">
						{this.state.error.message || "An unexpected error occurred"}
					</p>
					<button
						type="button"
						onClick={this.resetError}
						className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
					>
						Try again
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
