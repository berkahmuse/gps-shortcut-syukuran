import { mkdirSync, writeFileSync } from "node:fs";

// The GPS's excuse, in its own voice: smug, defensive, blaming the map.
// Fresh angle: the map is dated in the future, so the GPS is not lost,
// just early — with a cornfield as the specific detail.
// One line, plain text, 122 characters, well under the 200-character gate.
//
// Anchor (drand quicknet, quoted before the first write of this entry):
// round 34261406, signature
// 955fda3579b73bb4eb2f8b108a218efde3bf3176d6277eff321335927e8460e2be038cd0cbab40324efaa053922d74b4
const LINE =
  "The map drew that road in 2027 and you\u2019re driving in 2026 \u2014 I\u2019m not lost, I\u2019m early, and the cornfield was just a preview.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} chars, must be 1-200`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE !== LINE.trim() || !LINE.trim()) {
  throw new Error("line must not start/end with whitespace or be blank");
}
LINE.normalize("NFC");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
