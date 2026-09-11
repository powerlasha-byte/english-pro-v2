import { meetings } from "./meetingSentences";
import { OfficeSentences } from "./OfficeSentences";
import { powerbiSentences } from "./powerBiSentences";
import { bankingSentences } from "./bankingSentences";
import { everydaySentences } from "./everydaySentences";
import { idiomSentences } from "./idiomSentences";
import { idiomsInContextSentences } from "./idiomsInContextSentences";

export const allSentences = [
  ...meetings,
  ...OfficeSentences,
  ...powerbiSentences,
  ...bankingSentences,
  ...everydaySentences,
  ...idiomSentences,
  ...idiomsInContextSentences,
];

 