import { test, expect } from "vitest";
import { passengers } from "../src/passengers.ts";

test("You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop. Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).", () => {
	expect(
		passengers([
			[3, 2],
			[4, 3]
		])
	).toBe(2);
	expect(
		passengers([
			[10, 0],
			[3, 5],
			[5, 8]
		])
	).toBe(5);
	expect(
		passengers([
			[3, 0],
			[9, 1],
			[4, 10],
			[12, 2],
			[6, 1],
			[7, 10]
		])
	).toBe(17);
	expect(
		passengers([
			[3, 0],
			[9, 1],
			[4, 8],
			[12, 2],
			[6, 1],
			[7, 8]
		])
	).toBe(21);
	expect(passengers([[0, 0]])).toBe(0);
});
