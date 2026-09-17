export const conditionals = {
  id: "conditionals",
  title: "Conditionals",
  georgianTitle: "პირობითი წინადადებები",
  introduction:
    "Conditionals help us talk about facts, possibilities, imaginary situations, and their results.",
  georgianIntroduction:
    "პირობითი წინადადებები გვეხმარება ვისაუბროთ ფაქტებზე, შესაძლებლობებზე, წარმოსახვით სიტუაციებსა და მათ შედეგებზე.",

  learningNote: {
    title: "The basic idea",
    explanation:
      "A conditional sentence usually has two parts: the condition (if-clause) and the result. The order can change.",
    georgianExplanation:
      "პირობით წინადადებას ჩვეულებრივ ორი ნაწილი აქვს: პირობა (if-ნაწილი) და შედეგი. მათი თანმიმდევრობა შეიძლება შეიცვალოს.",
  },

  types: [
    {
      id: "zero-conditional",
      title: "Zero Conditional",
      georgianTitle: "ნულოვანი პირობითი",
      coreMeaning:
        "Use it for facts, rules, and things that are generally or always true.",
      georgianCoreMeaning:
        "გამოიყენე ფაქტების, წესებისა და ისეთი მოვლენებისთვის, რომლებიც ზოგადად ან ყოველთვის ჭეშმარიტია.",

      structure: [
        {
          label: "FORM",
          formula: "If + Present Simple, Present Simple",
          note: "The result is generally true whenever the condition happens.",
          georgianNote:
            "შედეგი ზოგადად ჭეშმარიტია, როცა პირობა სრულდება.",
        },
      ],

      examples: [
        {
          english: "If you heat ice, it melts.",
          georgian: "თუ ყინულს გააცხელებ, ის დნება.",
        },
        {
          english: "If I drink coffee late, I can't sleep.",
          georgian: "თუ გვიან ყავას ვსვამ, ვერ ვიძინებ.",
        },
      ],

      commonMistakes: [
        {
          wrong: "If you will heat ice, it melts.",
          correct: "If you heat ice, it melts.",
          explanation:
            "Use the Present Simple in both parts for a general fact.",
          georgianExplanation:
            "ზოგადი ფაქტის გამოსახატავად ორივე ნაწილში Present Simple გამოიყენე.",
        },
      ],
    },

    {
      id: "first-conditional",
      title: "First Conditional",
      georgianTitle: "პირველი პირობითი",
      coreMeaning:
        "Use it for a real or possible future situation and its likely result.",
      georgianCoreMeaning:
        "გამოიყენე რეალური ან შესაძლო მომავალი სიტუაციისა და მისი სავარაუდო შედეგის გამოსახატავად.",

      structure: [
        {
          label: "FORM",
          formula: "If + Present Simple, will + base verb",
          note: "The if-clause refers to a possible future condition.",
          georgianNote:
            "If-ნაწილი შესაძლო მომავალ პირობას გამოხატავს.",
        },
      ],

      examples: [
        {
          english: "If it rains, we'll stay at home.",
          georgian: "თუ იწვიმებს, სახლში დავრჩებით.",
        },
        {
          english: "If I finish work early, I'll call you.",
          georgian: "თუ სამსახურს ადრე დავასრულებ, დაგირეკავ.",
        },
      ],

      commonMistakes: [
        {
          wrong: "If it will rain, we'll stay at home.",
          correct: "If it rains, we'll stay at home.",
          explanation:
            "In a usual first conditional, use Present Simple after if, not will.",
          georgianExplanation:
            "ჩვეულებრივ First Conditional-ში if-ის შემდეგ გამოიყენე Present Simple და არა will.",
        },
      ],
    },

    {
      id: "second-conditional",
      title: "Second Conditional",
      georgianTitle: "მეორე პირობითი",
      coreMeaning:
        "Use it for imaginary, unlikely, or hypothetical present or future situations.",
      georgianCoreMeaning:
        "გამოიყენე წარმოსახვითი, ნაკლებად სავარაუდო ან ჰიპოთეტური აწმყო/მომავალი სიტუაციებისთვის.",

      structure: [
        {
          label: "FORM",
          formula: "If + Past Simple, would + base verb",
          note:
            "The Past Simple here shows distance from reality, not necessarily past time.",
          georgianNote:
            "აქ Past Simple რეალობისგან დაშორებას გამოხატავს და არა აუცილებლად წარსულ დროს.",
        },
      ],

      examples: [
        {
          english: "If I had more free time, I would learn Spanish.",
          georgian: "მეტი თავისუფალი დრო რომ მქონდეს, ესპანურს ვისწავლიდი.",
        },
        {
          english: "If I were you, I'd talk to the manager.",
          georgian: "შენს ადგილას მენეჯერს დაველაპარაკებოდი.",
        },
      ],

      commonMistakes: [
        {
          wrong: "If I would have more time, I would travel.",
          correct: "If I had more time, I would travel.",
          explanation:
            "Use Past Simple in the if-clause and would in the result clause.",
          georgianExplanation:
            "If-ნაწილში გამოიყენე Past Simple, ხოლო შედეგის ნაწილში — would.",
        },
      ],
    },

    {
      id: "third-conditional",
      title: "Third Conditional",
      georgianTitle: "მესამე პირობითი",
      coreMeaning:
        "Use it to imagine a different past and talk about a result that did not happen.",
      georgianCoreMeaning:
        "გამოიყენე წარსულის განსხვავებული ვერსიის წარმოსადგენად და ისეთი შედეგის აღსაწერად, რომელიც რეალურად არ დამდგარა.",

      structure: [
        {
          label: "FORM",
          formula: "If + Past Perfect, would have + past participle",
          note:
            "Both the condition and the result refer to an unreal past.",
          georgianNote:
            "პირობაც და შედეგიც არარეალურ წარსულს ეხება.",
        },
      ],

      examples: [
        {
          english: "If I had left earlier, I would have caught the train.",
          georgian: "უფრო ადრე რომ წავსულიყავი, მატარებელს მივუსწრებდი.",
        },
        {
          english: "If she had studied, she would have passed the exam.",
          georgian: "რომ ესწავლა, გამოცდას ჩააბარებდა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "If I would have known, I would have called you.",
          correct: "If I had known, I would have called you.",
          explanation:
            "Use Past Perfect in the if-clause, not would have.",
          georgianExplanation:
            "If-ნაწილში გამოიყენე Past Perfect და არა would have.",
        },
      ],
    },
  ],
} as const;