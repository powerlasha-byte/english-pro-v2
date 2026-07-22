export const grammar = [
  {
    id: 1,
    title: "Reported Speech",
    georgianTitle: "ირიბი ნათქვამი",

    rule:
      "Reported speech is used to tell somebody what another person said without repeating the exact words.",
    georgianRule:
      "ირიბი ნათქვამი გამოიყენება იმის გადმოსაცემად, თუ რა თქვა სხვა ადამიანმა, ზუსტი სიტყვების გამეორების გარეშე.",

    examples: [
      {
        english: "She said, 'I live in London.'",
        georgian: "მან თქვა: 'მე ლონდონში ვცხოვრობ.'",
      },
      {
        english: "She said that she lived in London.",
        georgian: "მან თქვა, რომ ლონდონში ცხოვრობდა.",
      },
      {
        english: "He said that he was busy.",
        georgian: "მან თქვა, რომ დაკავებული იყო.",
      },
    ],
  },

  {
    id: 2,
    title: "Direct Speech",
    georgianTitle: "პირდაპირი ნათქვამი",

    rule:
      "Direct speech repeats the speaker's exact words and uses quotation marks.",
    georgianRule:
      "პირდაპირი ნათქვამი ზუსტად იმეორებს ნათქვამს და გამოიყენება ბრჭყალებში.",

    examples: [
      {
        english: "John said, 'I'm working now.'",
        georgian: "ჯონმა თქვა: 'ახლა ვმუშაობ.'",
      },
      {
        english: "'I love English,' she said.",
        georgian: "'მე ინგლისური მიყვარს,' თქვა მან.",
      },
      {
        english: "'We are ready,' they said.",
        georgian: "'ჩვენ მზად ვართ,' თქვეს მათ.",
      },
    ],
  },

  {
    id: 3,
    title: "Backshift of Tenses",
    georgianTitle: "დროების ცვლილება",

    rule:
      "When we change direct speech into reported speech, the verb usually moves one tense back.",
    georgianRule:
      "პირდაპირი ნათქვამიდან ირიბ ნათქვამზე გადასვლისას ზმნის დრო, როგორც წესი, ერთი საფეხურით წარსულში გადადის.",

    examples: [
      {
        english: "I live here. → He said that he lived there.",
        georgian: "მე აქ ვცხოვრობ. → მან თქვა, რომ იქ ცხოვრობდა.",
      },
      {
        english: "I am working. → She said that she was working.",
        georgian: "მე ვმუშაობ. → მან თქვა, რომ მუშაობდა.",
      },
      {
        english: "I have two cats. → She said that she had two cats.",
        georgian: "მე ორი კატა მყავს. → მან თქვა, რომ ორი კატა ჰყავდა.",
      },
    ],
  },

  {
    id: 4,
    title: "Time and Place Changes",
    georgianTitle: "დროისა და ადგილის ცვლილება",

    rule:
      "Words showing time and place usually change in reported speech.",
    georgianRule:
      "ირიბ ნათქვამში დროისა და ადგილის აღმნიშვნელი სიტყვებიც ხშირად იცვლება.",

    examples: [
      {
        english: "now → then",
        georgian: "ახლა → მაშინ",
      },
      {
        english: "today → that day",
        georgian: "დღეს → იმ დღეს",
      },
      {
        english: "here → there",
        georgian: "აქ → იქ",
      },
    ],
  },

  {
    id: 5,
    title: "Pronoun Changes",
    georgianTitle: "ნაცვალსახელების ცვლილება",

    rule:
      "Pronouns change according to the meaning of the sentence.",
    georgianRule:
      "ნაცვალსახელები იცვლება იმის მიხედვით, თუ ვინ ლაპარაკობს და ვისზეა საუბარი.",

    examples: [
      {
        english: "I → he / she",
        georgian: "მე → ის",
      },
      {
        english: "my → his / her",
        georgian: "ჩემი → მისი",
      },
      {
        english: "you → I / we / they (depends on the context)",
        georgian: "შენ/თქვენ → მე / ჩვენ / ისინი (კონტექსტის მიხედვით)",
      },
    ],
  },
];