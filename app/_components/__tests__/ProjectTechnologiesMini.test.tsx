import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectTechnologiesMini from "../ProjectTechnologiesMini";

describe("ProjectTechnologiesMini", () => {
	it("renders each tech as a list item", () => {
		render(
			<ProjectTechnologiesMini
				techStack={["React", "TypeScript", "Firebase"]}
			/>
		);

		const list = screen.getByRole("list", { name: /technologies used/i });
		expect(list).toBeInTheDocument();

		const items = screen.getAllByRole("listitem");
		expect(items).toHaveLength(3);
		expect(items[0]).toHaveTextContent("React");
		expect(items[1]).toHaveTextContent("TypeScript");
		expect(items[2]).toHaveTextContent("Firebase");
	});

	it("renders nothing when techStack is empty", () => {
		render(<ProjectTechnologiesMini techStack={[]} />);
		expect(screen.queryAllByRole("listitem")).toHaveLength(0);
	});
});
