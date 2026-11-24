import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review = "Gravity: one star. Works quietly all day, then, just as I'm drifting off, drops me off a step that doesn't exist.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
