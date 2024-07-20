import { test, expect } from "vitest";
import isPangram from "../src/isPangram.ts";

test('A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant)', () => {
	expect(isPangram("The quick brown fox jumps over the lazy dog")).toBe(true);
	expect(isPangram("The quick brown fox jumps over the lazy doo")).toBe(false);
	expect(isPangram("this is not a pangram")).toBe(false);
});
