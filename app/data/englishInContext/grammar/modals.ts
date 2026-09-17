export const modals = {
  title: "Modals",
  georgianTitle: "მოდალური ზმნები",
  introduction:
    "Modal verbs help us express ability, possibility, permission, advice, obligation, and other meanings. They are followed by the base form of a verb.",
  georgianIntroduction:
    "მოდალური ზმნები გვეხმარება უნარის, შესაძლებლობის, ნებართვის, რჩევის, ვალდებულებისა და სხვა მნიშვნელობების გამოხატვაში. მათ შემდეგ ზმნის საწყისი ფორმა გამოიყენება.",

  learningNote: {
    title: "Remember",
    explanation:
      "Most modal verbs do not change with he, she, or it. Use the base verb after a modal: can go, should study, must leave. Do not add “to” after can, should, or must.",
    georgianExplanation:
      "მოდალური ზმნების უმეტესობა he, she ან it-თან არ იცვლება. მოდალური ზმნის შემდეგ გამოიყენე ზმნის საწყისი ფორმა: can go, should study, must leave. Can, should და must-ის შემდეგ to არ დაამატო.",
  },

  types: [
    {
      id: "ability",
      title: "Ability: can / could",
      georgianTitle: "უნარი: can / could",
      coreMeaning:
        "Use can to talk about present ability and could to talk about general ability in the past.",
      georgianCoreMeaning:
        "Can გამოიყენება აწმყოში უნარის გამოსახატავად, ხოლო could — წარსულში ზოგადი უნარის აღსაწერად.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + can/could + base verb",
        },
      ],
      examples: [
        {
          english: "I can speak English.",
          georgian: "ინგლისურად საუბარი შემიძლია.",
        },
        {
          english: "When I was younger, I could run very fast.",
          georgian: "როცა უფრო ახალგაზრდა ვიყავი, ძალიან სწრაფად სირბილი შემეძლო.",
        },
      ],
      commonMistakes: [
        {
          wrong: "She can speaks English.",
          correct: "She can speak English.",
          explanation:
            "After can, use the base form of the verb, without -s.",
          georgianExplanation:
            "Can-ის შემდეგ გამოიყენე ზმნის საწყისი ფორმა, -s-ის გარეშე.",
        },
      ],
    },

    {
      id: "possibility",
      title: "Possibility: may / might / could",
      georgianTitle: "შესაძლებლობა: may / might / could",
      coreMeaning:
        "Use may, might, or could when something is possible but not certain.",
      georgianCoreMeaning:
        "May, might ან could გამოიყენე მაშინ, როცა რაღაც შესაძლებელია, მაგრამ დარწმუნებული არ ხარ.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + may/might/could + base verb",
        },
      ],
      examples: [
        {
          english: "It may rain later.",
          georgian: "შეიძლება მოგვიანებით იწვიმოს.",
        },
        {
          english: "She might be at home.",
          georgian: "შეიძლება ის სახლში იყოს.",
        },
        {
          english: "We could take a taxi.",
          georgian: "შეგვიძლია ტაქსით წავიდეთ.",
        },
      ],
      commonMistakes: [
        {
          wrong: "It might to rain.",
          correct: "It might rain.",
          explanation: "Do not use “to” after might.",
          georgianExplanation: "Might-ის შემდეგ to არ გამოიყენო.",
        },
      ],
    },

    {
      id: "permission",
      title: "Permission: can / could / may",
      georgianTitle: "ნებართვა: can / could / may",
      coreMeaning:
        "Use can to ask for or give permission in everyday situations. Could and may are often used for more polite requests.",
      georgianCoreMeaning:
        "Can გამოიყენება ყოველდღიურ სიტუაციებში ნებართვის სათხოვნელად ან მისაცემად. Could და may ხშირად უფრო თავაზიან თხოვნებში გამოიყენება.",
      structure: [
        {
          label: "Asking permission",
          formula: "Can/Could/May + subject + base verb?",
        },
      ],
      examples: [
        {
          english: "Can I open the window?",
          georgian: "შეიძლება ფანჯარა გავაღო?",
        },
        {
          english: "Could I ask you a question?",
          georgian: "შეიძლება ერთი კითხვა დაგისვათ?",
        },
        {
          english: "May I come in?",
          georgian: "შეიძლება შემოვიდე?",
        },
      ],
      commonMistakes: [
        {
          wrong: "Could I to ask you a question?",
          correct: "Could I ask you a question?",
          explanation: "Use the base verb directly after could.",
          georgianExplanation: "Could-ის შემდეგ პირდაპირ ზმნის საწყისი ფორმა გამოიყენე.",
        },
      ],
    },

    {
      id: "advice",
      title: "Advice: should / ought to",
      georgianTitle: "რჩევა: should / ought to",
      coreMeaning:
        "Use should or ought to to give advice or say what is a good idea.",
      georgianCoreMeaning:
        "Should ან ought to გამოიყენე რჩევის მისაცემად ან იმის სათქმელად, თუ რა არის კარგი იდეა.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + should + base verb",
        },
        {
          label: "Alternative",
          formula: "Subject + ought to + base verb",
        },
      ],
      examples: [
        {
          english: "You should get some rest.",
          georgian: "ცოტა უნდა დაისვენო.",
        },
        {
          english: "We ought to leave early.",
          georgian: "ჯობია ადრე წავიდეთ.",
        },
      ],
      commonMistakes: [
        {
          wrong: "You should to call him.",
          correct: "You should call him.",
          explanation: "Do not use “to” after should.",
          georgianExplanation: "Should-ის შემდეგ to არ გამოიყენო.",
        },
      ],
    },

    {
      id: "obligation",
      title: "Obligation: must / have to",
      georgianTitle: "ვალდებულება: must / have to",
      coreMeaning:
        "Use must or have to to express obligation. Must often sounds more direct, while have to is common for rules or external requirements.",
      georgianCoreMeaning:
        "Must ან have to გამოიყენე ვალდებულების გამოსახატავად. Must ხშირად უფრო პირდაპირად ჟღერს, ხოლო have to ხშირად წესებსა და გარე მოთხოვნებზე გამოიყენება.",
      structure: [
        {
          label: "Must",
          formula: "Subject + must + base verb",
        },
        {
          label: "Have to",
          formula: "Subject + have/has to + base verb",
        },
      ],
      examples: [
        {
          english: "I must finish this today.",
          georgian: "ეს დღეს აუცილებლად უნდა დავასრულო.",
        },
        {
          english: "She has to wear a uniform at work.",
          georgian: "მას სამსახურში ფორმის ტარება უწევს.",
        },
      ],
      commonMistakes: [
        {
          wrong: "He have to work today.",
          correct: "He has to work today.",
          explanation: "Use has to with he, she, and it.",
          georgianExplanation: "He, she და it-თან გამოიყენე has to.",
        },
      ],
    },

    {
      id: "lack-of-obligation",
      title: "No obligation: don't have to / needn't",
      georgianTitle: "ვალდებულების არარსებობა",
      coreMeaning:
        "Don't have to and needn't mean that something is not necessary. They do not mean that something is forbidden.",
      georgianCoreMeaning:
        "Don't have to და needn't ნიშნავს, რომ რაღაც აუცილებელი არ არის. ეს არ ნიშნავს, რომ რაღაც აკრძალულია.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + don't/doesn't have to + base verb",
        },
        {
          label: "Alternative",
          formula: "Subject + needn't + base verb",
        },
      ],
      examples: [
        {
          english: "You don't have to come early.",
          georgian: "ადრე მოსვლა აუცილებელი არ არის.",
        },
        {
          english: "You needn't bring anything.",
          georgian: "არ არის საჭირო, რამე მოიტანო.",
        },
      ],
      commonMistakes: [
        {
          wrong: "You mustn't come early. (meaning: it isn't necessary)",
          correct: "You don't have to come early.",
          explanation:
            "Mustn't means something is forbidden. Don't have to means it is not necessary.",
          georgianExplanation:
            "Mustn't ნიშნავს, რომ რაღაც აკრძალულია. Don't have to ნიშნავს, რომ რაღაც აუცილებელი არ არის.",
        },
      ],
    },

    {
      id: "prohibition",
      title: "Prohibition: mustn't",
      georgianTitle: "აკრძალვა: mustn't",
      coreMeaning:
        "Use mustn't to say that something is not allowed or is forbidden.",
      georgianCoreMeaning:
        "Mustn't გამოიყენე იმის სათქმელად, რომ რაღაც დაუშვებელია ან აკრძალულია.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + mustn't + base verb",
        },
      ],
      examples: [
        {
          english: "You mustn't use your phone during the exam.",
          georgian: "გამოცდის დროს ტელეფონის გამოყენება აკრძალულია.",
        },
        {
          english: "We mustn't be late.",
          georgian: "არ უნდა დავაგვიანოთ.",
        },
      ],
      commonMistakes: [
        {
          wrong: "You don't have to park here. (meaning: parking is forbidden)",
          correct: "You mustn't park here.",
          explanation:
            "Use mustn't for prohibition, not don't have to.",
          georgianExplanation:
            "აკრძალვის გამოსახატავად გამოიყენე mustn't და არა don't have to.",
        },
      ],
    },

    {
      id: "deduction",
      title: "Deduction: must / can't",
      georgianTitle: "ლოგიკური დასკვნა: must / can't",
      coreMeaning:
        "Use must when you are almost certain something is true. Use can't when you are almost certain something is impossible or untrue.",
      georgianCoreMeaning:
        "Must გამოიყენე, როცა თითქმის დარწმუნებული ხარ, რომ რაღაც მართალია. Can't გამოიყენე, როცა თითქმის დარწმუნებული ხარ, რომ რაღაც შეუძლებელია ან სიმართლეს არ შეესაბამება.",
      structure: [
        {
          label: "Positive deduction",
          formula: "Subject + must + base verb / be",
        },
        {
          label: "Negative deduction",
          formula: "Subject + can't + base verb / be",
        },
      ],
      examples: [
        {
          english: "The lights are on. They must be at home.",
          georgian: "შუქი ანთია. ისინი სახლში უნდა იყვნენ.",
        },
        {
          english: "He can't be 15. He is much older.",
          georgian: "ის 15 წლის ვერ იქნება. გაცილებით უფროსია.",
        },
      ],
      commonMistakes: [
        {
          wrong: "They must to be at home.",
          correct: "They must be at home.",
          explanation: "Use the base form after must.",
          georgianExplanation: "Must-ის შემდეგ გამოიყენე ზმნის საწყისი ფორმა.",
        },
      ],
    },
  ],
} as const;