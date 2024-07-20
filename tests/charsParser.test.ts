import { test, expect } from "vitest";
import doubleChar from "../src/doubleChar.ts";

test("Given a string, you have to return a string in which each character (case-sensitive) is repeated once.", () => {
	expect(doubleChar("String")).toBe("SSttrriinngg");
	expect(doubleChar("Hello World")).toBe("HHeelllloo  WWoorrlldd");
	expect(doubleChar("1234!_ ")).toBe("11223344!!__  ");
});
