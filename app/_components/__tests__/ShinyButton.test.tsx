import React from "react";
import { render, screen } from "@testing-library/react";
import ShinyButton from "../ui/ShinyButton";

describe("ShinyButton", () => {
	it("renders as a <button> by default", () => {
		render(<ShinyButton>Click me</ShinyButton>);
		const button = screen.getByRole("button", { name: /click me/i });
		expect(button).toBeInTheDocument();
		expect(button.tagName).toBe("BUTTON");
	});

	it("defaults the button type to 'button' to prevent form submission", () => {
		render(<ShinyButton>Click me</ShinyButton>);
		const button = screen.getByRole("button", { name: /click me/i });
		expect(button).toHaveAttribute("type", "button");
	});

	it("renders as an <a> when href is provided", () => {
		render(<ShinyButton href="/work">Go to work</ShinyButton>);
		const link = screen.getByRole("link", { name: /go to work/i });
		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute("href", "/work");
	});

	it("adds target=_blank and rel=noopener noreferrer for external links", () => {
		render(
			<ShinyButton href="https://github.com/example">External</ShinyButton>
		);
		const link = screen.getByRole("link", { name: /external/i });
		expect(link).toHaveAttribute("target", "_blank");
		expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
		expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
	});

	it("does not add target=_blank for internal links", () => {
		render(<ShinyButton href="/about">Internal</ShinyButton>);
		const link = screen.getByRole("link", { name: /internal/i });
		expect(link).not.toHaveAttribute("target");
	});

	it("renders icon on the right by default", () => {
		render(
			<ShinyButton icon={<span data-testid="icon">→</span>}>Label</ShinyButton>
		);
		const button = screen.getByRole("button");
		const icon = screen.getByTestId("icon");
		expect(button).toContainElement(icon);
	});

	it("renders icon on the left when iconPosition=left", () => {
		const { container } = render(
			<ShinyButton icon={<span data-testid="icon">→</span>} iconPosition="left">
				Label
			</ShinyButton>
		);
		const firstChild = container.querySelector("button")?.firstElementChild;
		expect(firstChild).toHaveAttribute("data-testid", "icon");
	});
});
