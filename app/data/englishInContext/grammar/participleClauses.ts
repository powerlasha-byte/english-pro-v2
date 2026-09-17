export const participleClauses = {
  title: "Participle Clauses",
  georgianTitle: "Participle Clauses — მიმღეობითი კონსტრუქციები",

  introduction:
    "Participle clauses make sentences shorter and more natural by using -ing or past participle forms instead of a full clause. They often express time, reason, result, or additional information.",
  georgianIntroduction:
    "Participle clauses წინადადებებს უფრო მოკლესა და ბუნებრივს ხდის. სრული წინადადების ნაწილის ნაცვლად გამოიყენება -ing ან past participle ფორმა. ისინი ხშირად გამოხატავს დროს, მიზეზს, შედეგს ან დამატებით ინფორმაციას.",

  learningNote: {
    title: "Remember",
    explanation:
      "The subject of the participle clause is usually the same as the subject of the main clause. If the subjects are different, the sentence may need an explicit subject in the participle clause.",
    georgianExplanation:
      "Participle clause-ის ქვემდებარე, როგორც წესი, მთავარი წინადადების ქვემდებარეს ემთხვევა. თუ ისინი განსხვავდება, participle clause-ში შეიძლება ქვემდებარის პირდაპირ მითითება დაგჭირდეს.",
  },

  types: [
    {
      id: "present-participle",
      title: "Present participle (-ing)",
      georgianTitle: "Present participle (-ing)",

      coreMeaning:
        "Use an -ing clause when the action happens at the same time as the main action, or when you want to show a reason or sequence.",
      georgianCoreMeaning:
        "გამოიყენე -ing კონსტრუქცია, როცა მოქმედება მთავარ მოქმედებასთან ერთად ხდება, ან როცა მიზეზის ან მოქმედებების თანმიმდევრობის ჩვენება გინდა.",

      structure: [
        {
          label: "Structure",
          formula: "Verb-ing + ..., subject + main verb",
          note:
            "The participle clause usually refers to the subject of the main clause.",
          georgianNote:
            "Participle clause, როგორც წესი, მთავარი წინადადების ქვემდებარეს უკავშირდება.",
        },
      ],

      examples: [
        {
          english: "Walking to work, I listened to a podcast.",
          georgian: "სამსახურში ფეხით რომ მივდიოდი, პოდკასტს ვუსმენდი.",
        },
        {
          english: "Knowing the answer, she raised her hand.",
          georgian: "რადგან პასუხი იცოდა, ხელი ასწია.",
        },
        {
          english: "He sat by the window, reading a book.",
          georgian: "ის ფანჯარასთან იჯდა და წიგნს კითხულობდა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "Walking to work, the rain started.",
          correct: "Walking to work, I got caught in the rain.",
          explanation:
            "The person doing the walking should also be the subject of the main clause.",
          georgianExplanation:
            "ვინც ფეხით მიდის, მთავარი წინადადების ქვემდებარეც ის უნდა იყოს.",
        },
      ],
    },

    {
      id: "past-participle",
      title: "Past participle (V3)",
      georgianTitle: "Past participle (V3)",

      coreMeaning:
        "Use a past participle clause when the subject receives the action, or when you want to describe a state or condition.",
      georgianCoreMeaning:
        "გამოიყენე past participle კონსტრუქცია, როცა ქვემდებარე მოქმედებას განიცდის, ან როცა მისი მდგომარეობის აღწერა გინდა.",

      structure: [
        {
          label: "Structure",
          formula: "Past participle + ..., subject + main verb",
          note:
            "This form often has a passive meaning.",
          georgianNote:
            "ამ ფორმას ხშირად პასიური მნიშვნელობა აქვს.",
        },
      ],

      examples: [
        {
          english: "Built in the 19th century, the bridge is still in use.",
          georgian: "მე-19 საუკუნეში აშენებული ხიდი დღემდე გამოიყენება.",
        },
        {
          english: "Tired after the journey, we went straight to bed.",
          georgian: "მგზავრობის შემდეგ დაღლილები პირდაპირ დასაძინებლად წავედით.",
        },
        {
          english: "Asked about the delay, he explained the problem.",
          georgian: "დაგვიანების შესახებ რომ ჰკითხეს, მან პრობლემა განმარტა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "Building in 1890, the bridge is still in use.",
          correct: "Built in 1890, the bridge is still in use.",
          explanation:
            "Use the past participle when the bridge received the action of building.",
          georgianExplanation:
            "რადგან ხიდი ააშენეს და თვითონ არ აშენებდა, გამოიყენე past participle.",
        },
      ],
    },

    {
      id: "having-done",
      title: "Having + past participle",
      georgianTitle: "Having + past participle",

      coreMeaning:
        "Use having + past participle to show that one action was completed before the main action.",
      georgianCoreMeaning:
        "Having + past participle გამოიყენე იმის საჩვენებლად, რომ ერთი მოქმედება მთავარ მოქმედებამდე დასრულდა.",

      structure: [
        {
          label: "Structure",
          formula: "Having + past participle, subject + main verb",
          note:
            "This form emphasizes that the first action happened earlier.",
          georgianNote:
            "ეს ფორმა ხაზს უსვამს იმას, რომ პირველი მოქმედება უფრო ადრე მოხდა.",
        },
      ],

      examples: [
        {
          english: "Having finished the report, I sent it to my manager.",
          georgian: "ანგარიში რომ დავასრულე, მენეჯერს გავუგზავნე.",
        },
        {
          english: "Having missed the bus, she took a taxi.",
          georgian: "ავტობუსს რომ ვერ მიუსწრო, ტაქსი აიღო.",
        },
        {
          english: "Having studied the data, we presented our findings.",
          georgian: "მონაცემების შესწავლის შემდეგ ჩვენი შედეგები წარვადგინეთ.",
        },
      ],

      commonMistakes: [
        {
          wrong: "Having finish the report, I sent it.",
          correct: "Having finished the report, I sent it.",
          explanation:
            "After having, use the past participle form (V3).",
          georgianExplanation:
            "Having-ის შემდეგ გამოიყენე ზმნის past participle ფორმა (V3).",
        },
      ],
    },

    {
      id: "being-done",
      title: "Being + past participle",
      georgianTitle: "Being + past participle",

      coreMeaning:
        "Use being + past participle to express a passive action happening at the same time as the main action, or to give a reason.",
      georgianCoreMeaning:
        "Being + past participle გამოიყენე პასიური მოქმედების გამოსახატავად, რომელიც მთავარ მოქმედებასთან ერთად ხდება, ან მიზეზის მისანიშნებლად.",

      structure: [
        {
          label: "Structure",
          formula: "Being + past participle, subject + main verb",
          note:
            "This construction is less common in everyday speech and is often used in formal writing.",
          georgianNote:
            "ეს კონსტრუქცია ყოველდღიურ საუბარში შედარებით იშვიათია და ხშირად ფორმალურ წერაში გამოიყენება.",
        },
      ],

      examples: [
        {
          english: "Being new to the team, I asked many questions.",
          georgian: "რადგან გუნდში ახალი ვიყავი, ბევრი კითხვა დავსვი.",
        },
        {
          english: "Being carefully checked, the documents were ready for approval.",
          georgian: "დოკუმენტები გულდასმით შემოწმებული იყო და დასამტკიცებლად მზად აღმოჩნდა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "Being invite to the meeting, she prepared a report.",
          correct: "Being invited to the meeting, she prepared a report.",
          explanation:
            "Use the past participle after being.",
          georgianExplanation:
            "Being-ის შემდეგ გამოიყენე past participle ფორმა.",
        },
      ],
    },

    {
      id: "with-subject",
      title: "Participle clauses with their own subject",
      georgianTitle: "Participle clause საკუთარი ქვემდებარით",

      coreMeaning:
        "Sometimes the participle clause has a different subject from the main clause. In that case, include the subject to make the meaning clear.",
      georgianCoreMeaning:
        "ზოგჯერ participle clause-ს მთავარი წინადადებისგან განსხვავებული ქვემდებარე აქვს. ასეთ შემთხვევაში ქვემდებარე პირდაპირ მიუთითე, რომ აზრი ნათელი იყოს.",

      structure: [
        {
          label: "Structure",
          formula: "Noun/pronoun + participle, subject + main verb",
          note:
            "This is often called an absolute participle construction.",
          georgianNote:
            "ამას ხშირად absolute participle construction-ს უწოდებენ.",
        },
      ],

      examples: [
        {
          english: "The meeting having ended, everyone left the room.",
          georgian: "შეხვედრა რომ დასრულდა, ყველამ ოთახი დატოვა.",
        },
        {
          english: "Weather permitting, we will have lunch outside.",
          georgian: "თუ ამინდი ხელს შეგვიწყობს, გარეთ ვისადილებთ.",
        },
        {
          english: "All the work completed, the team went home.",
          georgian: "ყველა სამუშაოს დასრულების შემდეგ გუნდი სახლში წავიდა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "The meeting having ended, left the room.",
          correct: "The meeting having ended, everyone left the room.",
          explanation:
            "The main clause still needs its own subject.",
          georgianExplanation:
            "მთავარ წინადადებას თავისი ქვემდებარე მაინც სჭირდება.",
        },
      ],
    },
  ],
} as const;