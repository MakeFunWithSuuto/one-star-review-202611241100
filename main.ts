import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review = "Water: one star. Left a glass by the bed overnight and by morning it tasted like a different, older water.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
