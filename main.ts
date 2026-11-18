// news-image-20261117 entry (Node 22, standard library only).
//
// The image is fixed, so the program is a plain copy: no clock, no
// randomness, no network — the same input bytes always give the same
// output bytes, whichever sandbox runs it.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "entry.png"),
  readFileSync(join(here, "entry.png")),
);
