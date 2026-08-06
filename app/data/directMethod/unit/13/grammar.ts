export const grammar = [
  {
    id: 1,
    title: "Reported Speech Questions",
    georgianTitle: "არაპირდაპირი კითხვები",

    rule:
      "We use Reported Speech Questions to report what someone asked. In Yes/No questions we use 'if' or 'whether'.\n\nStructure:\nSubject + asked + if/whether + Subject + Verb",

    georgianRule:
      "Reported Speech Questions გამოიყენება სხვისი კითხვის გადმოსაცემად. Yes/No კითხვებში გამოიყენება 'if' ან 'whether'.\n\nფორმულა:\nSubject + asked + if/whether + Subject + Verb",

    examples: [
      {
        english: 'Peter asked, "Do you like me?" → Peter asked if I liked him.',
        georgian: 'პიტერმა მკითხა: "მომწონხარ?" → პიტერმა მკითხა, მომწონდა თუ არა.',
      },
      {
        english: 'He asked, "Have you ever been to Greece?" → He asked if I had ever been to Greece.',
        georgian: 'მან მკითხა: "ყოფილხარ საბერძნეთში?" → მან მკითხა, ვყოფილვარ თუ არა საბერძნეთში.',
      },
      {
        english: 'She asked, "Is he at home?" → She asked whether he was at home.',
        georgian: 'მან მკითხა: "სახლშია?" → მან მკითხა, სახლში იყო თუ არა.',
      },
    ],
  },

  {
    id: 2,
    title: "Reported Wh- Questions",
    georgianTitle: "Wh- კითხვების გადმოცემა",

    rule:
      "When the original question begins with what, where, when, why, who or how, we keep the question word.\n\nStructure:\nSubject + asked + Question Word + Subject + Verb",

    georgianRule:
      "თუ კითხვა იწყება სიტყვებით what, where, when, why, who ან how, იგივე კითხვითი სიტყვა რჩება.\n\nფორმულა:\nSubject + asked + Question Word + Subject + Verb",

    examples: [
      {
        english: 'Susan asked, "Where are you from?" → Susan asked where I was from.',
        georgian: 'სუზანმა მკითხა: "საიდან ხარ?" → სუზანმა მკითხა, საიდან ვიყავი.',
      },
      {
        english: 'She asked, "What are you doing?" → She asked what I was doing.',
        georgian: 'მან მკითხა: "რას აკეთებ?" → მან მკითხა, რას ვაკეთებდი.',
      },
      {
        english: 'They asked, "Why are you late?" → They asked why I was late.',
        georgian: 'მათ მკითხეს: "რატომ იგვიანებ?" → მათ მკითხეს, რატომ ვაგვიანებდი.',
      },
    ],
  },

  {
    id: 3,
    title: "Word Order",
    georgianTitle: "სიტყვების წყობა",

    rule:
      "In Reported Speech Questions we do not use question word order. The subject comes before the verb.",

    georgianRule:
      "Reported Speech-ში კითხვის გადმოცემისას კითხვითი წყობა აღარ გამოიყენება. ქვემდებარე ზმნის წინ დგას.",

    examples: [
      {
        english: "❌ She asked where was I.",
        georgian: "❌ არასწორია.",
      },
      {
        english: "✅ She asked where I was.",
        georgian: "✅ სწორი ფორმაა.",
      },
      {
        english: "Subject always comes before the verb.",
        georgian: "ქვემდებარე ყოველთვის ზმნის წინ დგას.",
      },
    ],
  },

  {
    id: 4,
    title: "Time Expressions",
    georgianTitle: "დროის ცვლილება",

    rule:
      "Time expressions often change in Reported Speech.",

    georgianRule:
      "Reported Speech-ში ხშირად იცვლება დროის გამომხატველი სიტყვები.",

    examples: [
      {
        english: "today → that day",
        georgian: "today → იმ დღეს",
      },
      {
        english: "tomorrow → the next day",
        georgian: "tomorrow → მეორე დღეს",
      },
      {
        english: "tonight → that night",
        georgian: "tonight → იმ ღამით",
      },
    ],
  },

  {
    id: 5,
    title: "Useful Expressions",
    georgianTitle: "სასარგებლო გამოთქმები",

    rule:
      "Useful expressions used in Reported Speech Questions.",

    georgianRule:
      "სასარგებლო გამოთქმები Reported Speech Questions-ის გამოყენებისას.",

    examples: [
      {
        english: "asked if...",
        georgian: "ჰკითხა, თუ...",
      },
      {
        english: "asked whether...",
        georgian: "ჰკითხა, თუ არა...",
      },
      {
        english: "wondered why...",
        georgian: "ფიქრობდა, რატომ...",
      },
      {
        english: "wanted to know...",
        georgian: "აინტერესებდა...",
      },
      {
        english: "asked where...",
        georgian: "ჰკითხა, სად...",
      },
    ],
  },
];