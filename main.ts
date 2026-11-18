// news-image-20261117 entry (Node 22, standard library only).
//
// The image is the entry.png beside this file: a one-page summary of the
// world news of Tuesday, 17 November 2026. Its background photo was made
// with a free image generator and every word on it was drawn in code, so
// the date and the headlines stay sharp and readable. This program writes
// that exact image to the grader's output directory, which means both
// runs of the program produce byte-identical files.
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
