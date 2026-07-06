import { meetings } from "./meetings";
import { sqlSentences } from "./sql";
import { powerbiSentences } from "./powerbi"; 
import { bankingSentences } from "./banking";
import { everydaySentences } from "./everyday";

export const allSentences = [
  ...meetings,
  ...sqlSentences,
  ...powerbiSentences, 
  ...bankingSentences,
  ...everydaySentences,
];