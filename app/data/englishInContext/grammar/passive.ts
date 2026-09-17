export const passive = {
  title: "Passive Voice",
  georgianTitle: "ვნებითი გვარი",

  introduction:
    "We use the passive when the action or its result is more important than the person who does it. The object of an active sentence becomes the subject of the passive sentence.",
  georgianIntroduction:
    "ვნებით გვარს ვიყენებთ, როცა მოქმედება ან მისი შედეგი უფრო მნიშვნელოვანია, ვიდრე ის, ვინც მოქმედებას ასრულებს. მოქმედებითი წინადადების დამატება ვნებითში ქვემდებარე ხდება.",

  learningNote: {
    title: "Remember",
    explanation:
      "The passive is formed with be + past participle (V3). Choose the correct form of be for the tense. Add by + doer only when the person or thing doing the action is important.",
    georgianExplanation:
      "ვნებითი გვარი იქმნება be + past participle (V3) ფორმით. Be-ის ფორმა დროის მიხედვით შეარჩიე. By + მოქმედების შემსრულებელი დაამატე მხოლოდ მაშინ, როცა მისი მითითება მნიშვნელოვანია.",
  },

  types: [
    {
      id: "present-simple",
      title: "Present Simple Passive",
      georgianTitle: "Present Simple — ვნებითი გვარი",
      coreMeaning:
        "Use the Present Simple passive for facts, routines, and processes when the focus is on what is done.",
      georgianCoreMeaning:
        "Present Simple-ის ვნებითი გვარი გამოიყენე ფაქტების, ჩვევებისა და პროცესების აღსაწერად, როცა ყურადღება იმაზეა გამახვილებული, რა კეთდება.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + am/is/are + past participle (V3)",
          note: "Use am, is, or are according to the subject.",
          georgianNote:
            "ქვემდებარის მიხედვით გამოიყენე am, is ან are.",
        },
      ],
      examples: [
        {
          english: "The reports are checked every morning.",
          georgian: "ანგარიშები ყოველ დილით მოწმდება.",
        },
        {
          english: "English is spoken in many countries.",
          georgian: "ინგლისურად ბევრ ქვეყანაში საუბრობენ.",
        },
        {
          english: "This product is sold online.",
          georgian: "ეს პროდუქტი ონლაინ იყიდება.",
        },
      ],
      commonMistakes: [
        {
          wrong: "The reports checked every morning.",
          correct: "The reports are checked every morning.",
          explanation:
            "The passive needs a form of be before the past participle.",
          georgianExplanation:
            "ვნებით გვარში past participle-ის წინ be-ის შესაბამისი ფორმა უნდა იყოს.",
        },
      ],
    },

    {
      id: "past-simple",
      title: "Past Simple Passive",
      georgianTitle: "Past Simple — ვნებითი გვარი",
      coreMeaning:
        "Use the Past Simple passive for completed past actions when the focus is on the action or result.",
      georgianCoreMeaning:
        "Past Simple-ის ვნებითი გვარი გამოიყენე დასრულებული წარსული მოქმედებებისთვის, როცა ყურადღება მოქმედებაზე ან შედეგზეა.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + was/were + past participle (V3)",
          note: "Use was with singular subjects and were with plural subjects.",
          georgianNote:
            "მხოლობით ქვემდებარესთან გამოიყენე was, ხოლო მრავლობითთან — were.",
        },
      ],
      examples: [
        {
          english: "The meeting was postponed.",
          georgian: "შეხვედრა გადაიდო.",
        },
        {
          english: "The documents were signed yesterday.",
          georgian: "დოკუმენტებს გუშინ მოეწერა ხელი.",
        },
        {
          english: "The new branch was opened last year.",
          georgian: "ახალი ფილიალი გასულ წელს გაიხსნა.",
        },
      ],
      commonMistakes: [
        {
          wrong: "The documents was signed yesterday.",
          correct: "The documents were signed yesterday.",
          explanation:
            "Use were with plural subjects such as documents.",
          georgianExplanation:
            "Documents-ის მსგავსი მრავლობითი ქვემდებარისთვის გამოიყენე were.",
        },
      ],
    },

    {
      id: "present-perfect",
      title: "Present Perfect Passive",
      georgianTitle: "Present Perfect — ვნებითი გვარი",
      coreMeaning:
        "Use the Present Perfect passive for past actions with a present result, especially when the exact time is not important.",
      georgianCoreMeaning:
        "Present Perfect-ის ვნებითი გვარი გამოიყენე წარსული მოქმედებისთვის, რომელსაც აწმყოში შედეგი აქვს, განსაკუთრებით მაშინ, როცა ზუსტი დრო მნიშვნელოვანი არ არის.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + has/have been + past participle (V3)",
          note: "Use has been with he, she, it, and singular nouns; use have been with I, you, we, they, and plural nouns.",
          georgianNote:
            "He, she, it და მხოლობით სახელებთან გამოიყენე has been; I, you, we, they და მრავლობით სახელებთან — have been.",
        },
      ],
      examples: [
        {
          english: "The report has been completed.",
          georgian: "ანგარიში დასრულებულია.",
        },
        {
          english: "All the emails have been sent.",
          georgian: "ყველა ელფოსტა გაგზავნილია.",
        },
        {
          english: "Your application has been approved.",
          georgian: "თქვენი განაცხადი დამტკიცებულია.",
        },
      ],
      commonMistakes: [
        {
          wrong: "The report has completed.",
          correct: "The report has been completed.",
          explanation:
            "The Present Perfect passive needs has/have been + V3.",
          georgianExplanation:
            "Present Perfect-ის ვნებით გვარში საჭიროა has/have been + V3.",
        },
      ],
    },

    {
      id: "future-simple",
      title: "Future Simple Passive",
      georgianTitle: "Future Simple — ვნებითი გვარი",
      coreMeaning:
        "Use the Future Simple passive for actions that will happen in the future when the focus is on what will be done.",
      georgianCoreMeaning:
        "Future Simple-ის ვნებითი გვარი გამოიყენე მომავალი მოქმედებებისთვის, როცა ყურადღება იმაზეა, რა გაკეთდება.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + will be + past participle (V3)",
        },
      ],
      examples: [
        {
          english: "The results will be announced tomorrow.",
          georgian: "შედეგები ხვალ გამოცხადდება.",
        },
        {
          english: "The payment will be processed soon.",
          georgian: "გადახდა მალე დამუშავდება.",
        },
        {
          english: "The new system will be introduced next month.",
          georgian: "ახალი სისტემა მომავალ თვეში დაინერგება.",
        },
      ],
      commonMistakes: [
        {
          wrong: "The results will announced tomorrow.",
          correct: "The results will be announced tomorrow.",
          explanation:
            "Use be between will and the past participle.",
          georgianExplanation:
            "Will-სა და past participle-ს შორის გამოიყენე be.",
        },
      ],
    },

    {
      id: "modal-passive",
      title: "Modal Passive",
      georgianTitle: "მოდალური ზმნები ვნებით გვარში",
      coreMeaning:
        "Use a modal verb followed by be + past participle to express ability, possibility, obligation, or advice in the passive.",
      georgianCoreMeaning:
        "მოდალური ზმნის შემდეგ გამოიყენე be + past participle, რათა ვნებით გვარში გამოხატო უნარი, შესაძლებლობა, ვალდებულება ან რჩევა.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + modal verb + be + past participle (V3)",
          note:
            "Common modal verbs include can, could, must, should, and may.",
          georgianNote:
            "ხშირად გამოიყენება can, could, must, should და may.",
        },
      ],
      examples: [
        {
          english: "The task can be completed today.",
          georgian: "დავალება დღეს შეიძლება დასრულდეს.",
        },
        {
          english: "The rules must be followed.",
          georgian: "წესები უნდა დაიცვან.",
        },
        {
          english: "The issue should be discussed.",
          georgian: "საკითხი უნდა განიხილონ.",
        },
      ],
      commonMistakes: [
        {
          wrong: "The task can completed today.",
          correct: "The task can be completed today.",
          explanation:
            "Use be after the modal verb in the passive.",
          georgianExplanation:
            "ვნებით გვარში მოდალური ზმნის შემდეგ გამოიყენე be.",
        },
      ],
    },

    {
      id: "by-agent",
      title: "Using by + agent",
      georgianTitle: "By + მოქმედების შემსრულებელი",
      coreMeaning:
        "Use by + agent when it is useful to say who or what performs the action. Omit it when the doer is unknown, obvious, or unimportant.",
      georgianCoreMeaning:
        "By + მოქმედების შემსრულებელი გამოიყენე, როცა საჭიროა იმის თქმა, ვინ ან რა ასრულებს მოქმედებას. გამოტოვე, როცა შემსრულებელი უცნობი, აშკარა ან უმნიშვნელოა.",
      structure: [
        {
          label: "Structure",
          formula: "Subject + be + past participle + by + agent",
        },
      ],
      examples: [
        {
          english: "The novel was written by George Orwell.",
          georgian: "რომანი ჯორჯ ორუელმა დაწერა.",
        },
        {
          english: "The software was developed by our team.",
          georgian: "პროგრამული უზრუნველყოფა ჩვენმა გუნდმა შეიმუშავა.",
        },
        {
          english: "The office is cleaned every evening.",
          georgian: "ოფისი ყოველ საღამოს იწმინდება.",
        },
      ],
      commonMistakes: [
        {
          wrong: "The novel was written from George Orwell.",
          correct: "The novel was written by George Orwell.",
          explanation:
            "Use by to identify the person or thing that performs the action.",
          georgianExplanation:
            "By გამოიყენე იმ პირის ან საგნის მისათითებლად, ვინც მოქმედებას ასრულებს.",
        },
      ],
    },
  ],
} as const;