import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review = "Gravity: one star. Pulls everything I drop straight down, as advertised, then lets it roll under the fridge.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
