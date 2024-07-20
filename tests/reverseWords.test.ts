import { test, expect } from "vitest";
import reverseWords from "../src/reverseWords.ts";

test("Given a string, you have to return a string in which each word is reversed. All spaces in the string should be retained.", () => {
	expect(reverseWords("double  spaced  words")).toBe("elbuod  decaps  sdrow");
	expect(reverseWords("a b c d")).toBe("a b c d");
	expect(reverseWords("apple")).toBe("elppa");
});
