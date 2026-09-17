export const gerundInfinitives = {
  title: "Gerunds & Infinitives",
  georgianTitle: "გერუნდივი და ინფინიტივი",

  introduction:
    "Some verbs are followed by a gerund (verb + -ing), while others are followed by an infinitive (to + verb). Some verbs can take both forms, sometimes with a change in meaning.",

  georgianIntroduction:
    "ზოგიერთ ზმნას მოსდევს გერუნდივი (ზმნა + -ing), ზოგიერთს კი ინფინიტივი (to + ზმნის საწყისი ფორმა). ზოგ ზმნასთან ორივე ფორმა გამოიყენება, ზოგჯერ მნიშვნელობის ცვლილებით.",

  learningNote: {
    title: "Learning tip",
    explanation:
      "Learn the pattern together with the verb: “enjoy doing”, “decide to do”.",
    georgianExplanation:
      "ზმნასთან ერთად დაიმახსოვრე მისი ფორმაც: “enjoy doing”, “decide to do”.",
  },

  types: [
    {
      id: "gerund-after-verbs",
      title: "Gerund after certain verbs",
      georgianTitle: "გერუნდივი გარკვეული ზმნების შემდეგ",

      coreMeaning:
        "Some verbs are followed by verb-ing. Common examples are enjoy, avoid, finish, suggest, and mind.",
      georgianCoreMeaning:
        "ზოგიერთ ზმნას მოსდევს -ing ფორმა. მაგალითად: enjoy, avoid, finish, suggest და mind.",

      structure: [
        {
          label: "Form",
          formula: "verb + verb-ing",
          note: "Example: enjoy reading",
          georgianNote: "მაგალითი: enjoy reading — კითხვა მსიამოვნებს",
        },
      ],

      examples: [
        {
          english: "I enjoy reading before bed.",
          georgian: "ძილის წინ კითხვა მსიამოვნებს.",
        },
        {
          english: "She avoided answering the question.",
          georgian: "მან კითხვაზე პასუხის გაცემას თავი აარიდა.",
        },
        {
          english: "We finished preparing the report.",
          georgian: "რეპორტის მომზადება დავასრულეთ.",
        },
      ],

      commonMistakes: [
        {
          wrong: "I enjoy to read.",
          correct: "I enjoy reading.",
          explanation: "Use a gerund after enjoy.",
          georgianExplanation: "Enjoy-ის შემდეგ გამოიყენე გერუნდივი.",
        },
      ],
    },

    {
      id: "infinitive-after-verbs",
      title: "Infinitive after certain verbs",
      georgianTitle: "ინფინიტივი გარკვეული ზმნების შემდეგ",

      coreMeaning:
        "Some verbs are followed by to + the base form of a verb. Common examples are want, decide, hope, plan, and promise.",
      georgianCoreMeaning:
        "ზოგიერთ ზმნას მოსდევს to + ზმნის საწყისი ფორმა. მაგალითად: want, decide, hope, plan და promise.",

      structure: [
        {
          label: "Form",
          formula: "verb + to + base verb",
          note: "Example: decide to leave",
          georgianNote: "მაგალითი: decide to leave — წასვლა გადაწყვიტო",
        },
      ],

      examples: [
        {
          english: "I want to improve my English.",
          georgian: "ინგლისურის გაუმჯობესება მინდა.",
        },
        {
          english: "They decided to postpone the meeting.",
          georgian: "მათ შეხვედრის გადადება გადაწყვიტეს.",
        },
        {
          english: "We hope to finish the project soon.",
          georgian: "იმედი გვაქვს, პროექტს მალე დავასრულებთ.",
        },
      ],

      commonMistakes: [
        {
          wrong: "I decided going home.",
          correct: "I decided to go home.",
          explanation: "Use an infinitive after decide.",
          georgianExplanation: "Decide-ის შემდეგ გამოიყენე ინფინიტივი.",
        },
      ],
    },

    {
      id: "stop-doing-stop-to-do",
      title: "Stop doing vs. stop to do",
      georgianTitle: "Stop doing და stop to do",

      coreMeaning:
        "Stop doing means to end an activity. Stop to do means to pause one activity in order to do something else.",
      georgianCoreMeaning:
        "Stop doing ნიშნავს მოქმედების შეწყვეტას. Stop to do ნიშნავს ერთი მოქმედების შეჩერებას სხვა მოქმედების შესასრულებლად.",

      structure: [
        {
          label: "Stop doing",
          formula: "stop + verb-ing",
          note: "End an activity.",
          georgianNote: "მოქმედების შეწყვეტა.",
        },
        {
          label: "Stop to do",
          formula: "stop + to + base verb",
          note: "Pause another activity in order to do something.",
          georgianNote: "სხვა მოქმედების შეჩერება რაღაცის გასაკეთებლად.",
        },
      ],

      examples: [
        {
          english: "He stopped smoking.",
          georgian: "მან მოწევას თავი დაანება.",
        },
        {
          english: "He stopped to smoke.",
          georgian: "ის გაჩერდა, რომ მოეწია.",
        },
        {
          english: "I stopped to answer the phone.",
          georgian: "გავჩერდი, რომ ტელეფონს ვუპასუხო.",
        },
      ],

      commonMistakes: [
        {
          wrong: "I stopped to smoke. (when you mean you quit smoking)",
          correct: "I stopped smoking.",
          explanation:
            "Use stop + verb-ing when you mean that you quit an activity.",
          georgianExplanation:
            "თუ გულისხმობ, რომ მოქმედებას თავი დაანებე, გამოიყენე stop + -ing.",
        },
      ],
    },

    {
      id: "remember-doing-remember-to-do",
      title: "Remember doing vs. remember to do",
      georgianTitle: "Remember doing და remember to do",

      coreMeaning:
        "Remember doing means to recall a past action. Remember to do means not to forget a task.",
      georgianCoreMeaning:
        "Remember doing ნიშნავს წარსული მოქმედების გახსენებას. Remember to do ნიშნავს, რომ არ დაგავიწყდეს გასაკეთებელი საქმე.",

      structure: [
        {
          label: "Remember doing",
          formula: "remember + verb-ing",
          note: "Recall something that happened.",
          georgianNote: "მომხდარი მოქმედების გახსენება.",
        },
        {
          label: "Remember to do",
          formula: "remember + to + base verb",
          note: "Remember that you need to do something.",
          georgianNote: "გახსოვდეს, რომ რაღაც უნდა გააკეთო.",
        },
      ],

      examples: [
        {
          english: "I remember meeting her.",
          georgian: "მახსოვს, რომ მას შევხვდი.",
        },
        {
          english: "Remember to send the email.",
          georgian: "არ დაგავიწყდეს ელფოსტის გაგზავნა.",
        },
        {
          english: "He remembers locking the door.",
          georgian: "მას ახსოვს, რომ კარი ჩაკეტა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "Remember sending the report. (when you mean “don't forget”)",
          correct: "Remember to send the report.",
          explanation:
            "Use remember + to-infinitive for a task you must not forget.",
          georgianExplanation:
            "თუ გულისხმობ, რომ რაღაცის გაკეთება არ უნდა დაგავიწყდეს, გამოიყენე remember + to-infinitive.",
        },
      ],
    },

    {
      id: "gerund-after-prepositions",
      title: "Gerund after prepositions",
      georgianTitle: "გერუნდივი წინდებულების შემდეგ",

      coreMeaning:
        "When a verb follows a preposition, use the gerund (verb-ing).",
      georgianCoreMeaning:
        "როცა ზმნას წინდებული მოსდევს, გამოიყენე გერუნდივი (-ing ფორმა).",

      structure: [
        {
          label: "Form",
          formula: "preposition + verb-ing",
          note: "Examples: interested in learning, good at solving",
          georgianNote:
            "მაგალითები: interested in learning, good at solving",
        },
      ],

      examples: [
        {
          english: "She is interested in learning Spanish.",
          georgian: "მას ესპანურის სწავლა აინტერესებს.",
        },
        {
          english: "He is good at solving problems.",
          georgian: "ის პრობლემების გადაჭრაში კარგია.",
        },
        {
          english: "She left without saying goodbye.",
          georgian: "ის დამშვიდობების გარეშე წავიდა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "She is interested in to learn Spanish.",
          correct: "She is interested in learning Spanish.",
          explanation: "Use verb-ing after the preposition in.",
          georgianExplanation: "In წინდებულის შემდეგ გამოიყენე -ing ფორმა.",
        },
      ],
    },
  ],
} as const;