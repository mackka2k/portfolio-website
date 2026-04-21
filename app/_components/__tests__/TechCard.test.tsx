import React from "react";
import { render, screen } from "@testing-library/react";
import TechCard from "../TechCard";

describe("TechCard", () => {
	const mockCardInfo = {
		name: "React",
		description: "JavaScript Library",
		imageUrl: "/test-image.svg",
		bgColor: "bg-blue-500/20",
	};

	it("renders card with tech name and description", () => {
		render(<TechCard cardInfo={mockCardInfo} />);

		expect(screen.getByText("React")).toBeInTheDocument();
		expect(screen.getByText("JavaScript Library")).toBeInTheDocument();
	});

	it("renders image with descriptive alt text", () => {
		render(<TechCard cardInfo={mockCardInfo} />);

		const image = screen.getByAltText("React logo");
		expect(image).toBeInTheDocument();
	});

	it("applies custom background color class", () => {
		const { container } = render(<TechCard cardInfo={mockCardInfo} />);

		const bgDiv = container.querySelector(".bg-blue-500\\/20");
		expect(bgDiv).toBeInTheDocument();
	});

	it("renders heading as h3 for proper hierarchy", () => {
		render(<TechCard cardInfo={mockCardInfo} />);

		const heading = screen.getByRole("heading", { level: 3, name: /React/ });
		expect(heading).toBeInTheDocument();
	});
});
