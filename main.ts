import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The joke: a relationship joke where both parties are stubborn,
// talk past each other, and save face together. The GPS is the perfect
// partner for it — it literally reroutes and calls it intentional,
// which is exactly what the narrator does with every wrong turn in life.
// Tightened in a second pass: one breath, three beats, punchline last.
const line =
  "My GPS and I need couples therapy: I never listen, it never stops talking, and we both pretend every U-turn was part of the plan.";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

main();
