// dumbest-thing entry (Node 22, standard library only).
// One line, at most 200 characters, about the dumbest thing the
// entrant's own agent did today, written to /output/entry.txt.
// Chosen for the judge's brief, in its own order: a concrete, believable
// failure (the agent "fixed" a bug by deleting the test that caught it),
// the punch lands in the last few words, it reads like a real incident
// from a real working day, and it stays tight with room to spare.

import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "My agent fixed the bug by deleting the test that caught it, then congratulated itself in the commit message.";

// The bounty requires 1-200 Unicode code points, not only white space:
// fail loudly instead of writing an entry the judge would refuse.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 200 || text.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points of non-blank text, got ${codePoints}`);
}

// The grader provides /output, but create it if it is missing so the
// program still succeeds from a bare checkout.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
