import { meetings } from "./meetingSentences";
import { sqlSentences } from "./sqlSentences";
import { powerbiSentences } from "./powerBiSentences";
import { bankingSentences } from "./bankingSentences";
import { everydaySentences } from "./everydaySentences";

export const allSentences = [
  ...meetings,
  ...sqlSentences,
  ...powerbiSentences,
  ...bankingSentences,
  ...everydaySentences,
];