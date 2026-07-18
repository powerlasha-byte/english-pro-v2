import { meetings } from "./meetingSentences";
import { OfficeSentences } from "./OfficeSentences";
import { powerbiSentences } from "./powerBiSentences";
import { bankingSentences } from "./bankingSentences";
import { everydaySentences } from "./everydaySentences";

export const allSentences = [
  ...meetings,
  ...OfficeSentences,
  ...powerbiSentences,
  ...bankingSentences,
  ...everydaySentences,
];