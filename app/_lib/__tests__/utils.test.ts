import { cn } from "../utils";

describe("cn()", () => {
	it("merges class names", () => {
		expect(cn("a", "b")).toBe("a b");
	});

	it("resolves Tailwind conflicts (last one wins)", () => {
		expect(cn("p-2", "p-4")).toBe("p-4");
	});

	it("handles conditional classes", () => {
		expect(cn("a", false && "b", "c")).toBe("a c");
		expect(cn("a", true && "b", "c")).toBe("a b c");
	});

	it("handles undefined and null", () => {
		expect(cn("a", undefined, null, "b")).toBe("a b");
	});
});
