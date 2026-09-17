import { tenses } from "./grammar/tenses";
import { conditionals } from "./grammar/conditionals";
import { cleftSentences } from "./grammar/cleftSentences";
import { ellipsis } from "./grammar/ellipsis";
import { emphasis } from "./grammar/emphasis";
import { gerundInfinitives } from "./grammar/gerundsInfinitives";
import { hedging } from "./grammar/hedging";
import { inversion } from "./grammar/inversion";
import { modals } from "./grammar/modals"; 
import { participleClauses } from "./grammar/participleClauses";
import { passive } from "./grammar/passive";
import { relativeClauses } from "./grammar/relativeClauses";
import { reportedSpeech } from "./grammar/reportedSpeech";

export const grammarInContext = [
  {
    id: "tenses",
    title: "Tenses",
    georgianTitle: "ინგლისური დროები",
    description:
      "Understand how English tenses express time, duration, and completion.",
    georgianDescription:
      "ისწავლე, როგორ გამოხატავს ინგლისური დროები მოქმედების დროს, ხანგრძლივობასა და დასრულებულობას.",
    lesson: tenses,
  },
  {
    id: "conditionals",
    title: "Conditionals",
    georgianTitle: "პირობითი წინადადებები",
    description:
      "Learn how to talk about facts, possible situations, imaginary scenarios, and their results.",
    georgianDescription:
      "ისწავლე, როგორ ისაუბრო ფაქტებზე, შესაძლო სიტუაციებზე, წარმოსახვით შემთხვევებსა და მათ შედეგებზე.",
    lesson: conditionals,
  },
  {
    id: "cleft-sentences",
    title: "Cleft Sentences",
    georgianTitle: "გამოკვეთითი წინადადებები",
    description:
      "Learn how to emphasize a specific person, thing, action, time, or reason.",
    georgianDescription:
      "ისწავლე, როგორ გაუსვა ხაზი კონკრეტულ ადამიანს, საგანს, მოქმედებას, დროს ან მიზეზს.",
    lesson: cleftSentences,
  },
  {
    id: "ellipsis",
    title: "Ellipsis",
    georgianTitle: "სიტყვების გამოტოვება",
    description:
      "Learn how English speakers omit words that are clear from the context.",
    georgianDescription:
      "ისწავლე, როგორ ტოვებენ ინგლისურად ისეთ სიტყვებს, რომელთა მნიშვნელობაც კონტექსტიდან გასაგებია.",
    lesson: ellipsis,
  },

  {
    id: "emphasis",
    title: "Emphasis",
    georgianTitle: "ხაზგასმა",
    description:
      "Learn how to make an idea, action, or detail stand out in a sentence.",
    georgianDescription:
      "ისწავლე, როგორ გამოკვეთო წინადადებაში კონკრეტული აზრი, მოქმედება ან დეტალი.",
    lesson: emphasis,
  },

{
  id: "gerund-infinitives",
  title: "Gerunds & Infinitives",
  georgianTitle: "გერუნდივი და ინფინიტივი",
  description:
    "Learn when to use gerunds and infinitives, including cases where the meaning changes.",
  georgianDescription:
    "ისწავლე, როდის გამოიყენება გერუნდივი და ინფინიტივი, მათ შორის შემთხვევები, როცა მნიშვნელობა იცვლება.",
  lesson: gerundInfinitives,
},

{
  id: "hedging",
  title: "Hedging",
  georgianTitle: "აზრის შერბილება",
  description:
    "Learn to express ideas more cautiously, politely, and with appropriate levels of certainty.",
  georgianDescription:
    "ისწავლე აზრის უფრო ფრთხილად, თავაზიანად და შესაბამისი დარწმუნებულობის დონით გამოხატვა.",
  lesson: hedging,
},

{
  id: "inversion",
  title: "Inversion",
  georgianTitle: "ინვერსია",
  description:
    "Learn how inversion changes word order for emphasis and formal expression.",
  georgianDescription:
    "ისწავლე, როგორ ცვლის ინვერსია სიტყვების წყობას აზრის გასაძლიერებლად და ფორმალური გამოთქმისთვის.",
  lesson: inversion,
},

{
  id: "modals",
  title: "Modals",
  georgianTitle: "მოდალური ზმნები",
  description:
    "Learn how modal verbs express ability, possibility, permission, advice, and obligation.",
  georgianDescription:
    "ისწავლე, როგორ გამოხატავს მოდალური ზმნები უნარს, შესაძლებლობას, ნებართვას, რჩევასა და ვალდებულებას.",
  lesson: modals,
},

 {
  id: "participle-clauses",
  title: "Participle Clauses",
  georgianTitle: "მიმღეობითი კონსტრუქციები",
  description:
    "Learn to use participle clauses to make sentences shorter and more natural.",
  georgianDescription:
    "ისწავლე participle clauses-ის გამოყენება წინადადებების უფრო მოკლედ და ბუნებრივად ასაგებად.",
  lesson: participleClauses,
},

{
  id: "passive",
  title: "Passive Voice",
  georgianTitle: "ვნებითი გვარი",
  description:
    "Learn how to form and use the passive voice in different tenses.",
  georgianDescription:
    "ისწავლე, როგორ იქმნება და გამოიყენება ვნებითი გვარი სხვადასხვა დროში.",
  lesson: passive,
},

{
  id: "relative-clauses",
  title: "Relative Clauses",
  georgianTitle: "მიმართებითი წინადადებები",
  description:
    "Learn how relative clauses add information about people, things, and places.",
  georgianDescription:
    "ისწავლე, როგორ ამატებს relative clauses ინფორმაციას ადამიანებზე, საგნებსა და ადგილებზე.",
  lesson: relativeClauses,
},

{
  id: "reported-speech",
  title: "Reported Speech",
  georgianTitle: "არაპირდაპირი ნათქვამი",
  description:
    "Learn how to report statements, questions, commands, and requests.",
  georgianDescription:
    "ისწავლე, როგორ გადმოსცე ნათქვამი, კითხვები, ბრძანებები და თხოვნები.",
  lesson: reportedSpeech,
},



] as const;