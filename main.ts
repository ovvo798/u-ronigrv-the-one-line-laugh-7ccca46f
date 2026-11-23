// The One-Line Laugh — writes one original funny line to /output/entry.txt.
// Standard library only, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, well under the 200-character limit: an everyday truth
// (screen time keeps climbing) with a surprise twist at the end.
const line =
  "My phone says I spent six hours staring at it yesterday, which is impressive, because I don't remember enjoying a single minute of it.";

// The gate rejects blank text, multi-line text, and anything over 200 chars,
// so check all three before writing.
if (line.trim().length === 0 || line.includes("\n")) {
  throw new Error("Line must be a single non-empty line.");
}
if (line.length > 200) {
  throw new Error(`Line is ${line.length} characters, over the 200 limit.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
