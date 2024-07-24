import { expect, test } from "vitest";
import { decodeMorse } from "../src/decodeMorse.ts";

test("Decode the morse code", () => {
	expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE");
});
