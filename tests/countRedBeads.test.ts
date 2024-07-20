import { test, expect } from "vitest";
import countRedBeads from "../src/countRedBeads.ts";

test("Two red beads are placed between every two blue beads. If there are less than 2 blue beads return 0", () => {
	expect(countRedBeads(0)).toBe(0);
	expect(countRedBeads(1)).toBe(0);
	expect(countRedBeads(3)).toBe(4);
	expect(countRedBeads(5)).toBe(8);
});
