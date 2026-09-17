export const hedging = {
  title: "Hedging",
  georgianTitle: "აზრის შერბილება",

  introduction:
    "Hedging is used to make statements less direct or more cautious. It is especially useful when you are not completely certain, want to sound polite, or need to present an idea carefully.",

  georgianIntroduction:
    "Hedging გამოიყენება აზრის ნაკლებად კატეგორიულად ან უფრო ფრთხილად გამოსახატავად. ის განსაკუთრებით გამოსადეგია, როცა ბოლომდე დარწმუნებული არ ხარ, თავაზიანად საუბარი გინდა ან აზრის ფრთხილად წარმოდგენა გჭირდება.",

  learningNote: {
    title: "Learning tip",
    explanation:
      "Use hedging to show how certain you are. Compare “This is wrong” with “This might be incorrect.”",
    georgianExplanation:
      "Hedging გამოიყენე იმის საჩვენებლად, რამდენად დარწმუნებული ხარ. შეადარე: “This is wrong” და “This might be incorrect.”",
  },

  types: [
    {
      id: "modal-verbs",
      title: "Modal verbs for cautious statements",
      georgianTitle: "მოდალური ზმნები ფრთხილი აზრის გამოსახატავად",

      coreMeaning:
        "May, might, could, and would can make a statement sound less certain or less direct.",

      georgianCoreMeaning:
        "May, might, could და would წინადადებას ნაკლებად კატეგორიულ ან ნაკლებად პირდაპირ ტონს აძლევს.",

      structure: [
        {
          label: "Possibility",
          formula: "may / might / could + base verb",
          note: "Use these forms when something is possible but not certain.",
          georgianNote:
            "გამოიყენე, როცა რაღაც შესაძლებელია, მაგრამ დარწმუნებული არ ხარ.",
        },
      ],

      examples: [
        {
          english: "This might be the reason for the delay.",
          georgian: "ეს შეიძლება დაგვიანების მიზეზი იყოს.",
        },
        {
          english: "The results could indicate a problem.",
          georgian: "შედეგები შეიძლება პრობლემაზე მიუთითებდეს.",
        },
        {
          english: "We may need more information.",
          georgian: "შეიძლება მეტი ინფორმაცია დაგვჭირდეს.",
        },
      ],

      commonMistakes: [
        {
          wrong: "This might is the reason.",
          correct: "This might be the reason.",
          explanation:
            "After a modal verb, use the base form of the verb.",
          georgianExplanation:
            "მოდალური ზმნის შემდეგ გამოიყენე ზმნის საწყისი ფორმა.",
        },
      ],
    },

    {
      id: "seem-appear",
      title: "Seem and appear",
      georgianTitle: "Seem და appear",

      coreMeaning:
        "Seem and appear help you describe how something looks or feels without presenting it as an absolute fact.",

      georgianCoreMeaning:
        "Seem და appear გეხმარება აღწერო, როგორ ჩანს ან გამოიყურება რაღაც, ისე რომ ეს აბსოლუტურ ფაქტად არ წარმოადგინო.",

      structure: [
        {
          label: "Pattern",
          formula: "subject + seem / appear + adjective",
          note: "Example: The report seems accurate.",
          georgianNote: "მაგალითი: The report seems accurate — რეპორტი ზუსტს ჰგავს.",
        },
        {
          label: "Pattern",
          formula: "subject + seem / appear + to + verb",
          note: "Example: Sales appear to be increasing.",
          georgianNote:
            "მაგალითი: Sales appear to be increasing — როგორც ჩანს, გაყიდვები იზრდება.",
        },
      ],

      examples: [
        {
          english: "The report seems accurate.",
          georgian: "რეპორტი ზუსტს ჰგავს.",
        },
        {
          english: "The issue appears to be resolved.",
          georgian: "როგორც ჩანს, პრობლემა მოგვარებულია.",
        },
        {
          english: "He seems to understand the situation.",
          georgian: "როგორც ჩანს, მას სიტუაცია ესმის.",
        },
      ],

      commonMistakes: [
        {
          wrong: "The report seems to accurate.",
          correct: "The report seems accurate.",
          explanation:
            "Use an adjective directly after seem in this pattern.",
          georgianExplanation:
            "ამ კონსტრუქციაში seem-ის შემდეგ პირდაპირ გამოიყენე ზედსართავი სახელი.",
        },
      ],
    },

    {
      id: "adverbs-of-uncertainty",
      title: "Adverbs of uncertainty",
      georgianTitle: "გაურკვევლობის გამომხატველი ზმნიზედები",

      coreMeaning:
        "Words such as perhaps, possibly, probably, and apparently help express different levels of certainty.",

      georgianCoreMeaning:
        "ისეთი სიტყვები, როგორიცაა perhaps, possibly, probably და apparently, გაურკვევლობის ან დარწმუნებულობის სხვადასხვა დონეს გამოხატავს.",

      structure: [
        {
          label: "Sentence adverb",
          formula: "Perhaps / Possibly / Probably + clause",
          note: "These words often appear at the beginning of a sentence.",
          georgianNote:
            "ეს სიტყვები ხშირად წინადადების დასაწყისში გვხვდება.",
        },
      ],

      examples: [
        {
          english: "Perhaps we should review the numbers.",
          georgian: "შეიძლება, ციფრები გადავამოწმოთ.",
        },
        {
          english: "The change will probably take a few days.",
          georgian: "ცვლილებას, სავარაუდოდ, რამდენიმე დღე დასჭირდება.",
        },
        {
          english: "Apparently, the meeting has been postponed.",
          georgian: "როგორც ჩანს, შეხვედრა გადაიდო.",
        },
      ],

      commonMistakes: [
        {
          wrong: "Perhaps we will can finish today.",
          correct: "Perhaps we can finish today.",
          explanation:
            "Do not use two modal verbs together in this way.",
          georgianExplanation:
            "ამ კონსტრუქციაში ორი მოდალური ზმნა ერთად არ გამოიყენო.",
        },
      ],
    },

    {
      id: "softening-opinions",
      title: "Softening opinions and suggestions",
      georgianTitle: "აზრისა და შეთავაზების შერბილება",

      coreMeaning:
        "Phrases such as “I think,” “I feel,” and “It seems to me” make opinions sound more personal and less forceful.",

      georgianCoreMeaning:
        "გამოთქმები “I think”, “I feel” და “It seems to me” აზრს უფრო პირადულსა და ნაკლებად კატეგორიულს ხდის.",

      structure: [
        {
          label: "Giving an opinion",
          formula: "I think / I feel / It seems to me + clause",
          note: "Use these phrases to present an opinion gently.",
          georgianNote:
            "გამოიყენე ეს გამოთქმები აზრის რბილად გამოსახატავად.",
        },
        {
          label: "Making a suggestion",
          formula: "You could / We might want to + base verb",
          note: "These forms make suggestions less direct.",
          georgianNote:
            "ეს ფორმები შეთავაზებას ნაკლებად პირდაპირად გამოხატავს.",
        },
      ],

      examples: [
        {
          english: "I think we should check the data again.",
          georgian: "ვფიქრობ, მონაცემები კიდევ ერთხელ უნდა შევამოწმოთ.",
        },
        {
          english: "It seems to me that the total is incorrect.",
          georgian: "ჩემი აზრით, ჯამი არასწორია.",
        },
        {
          english: "We might want to discuss this with the team.",
          georgian: "შეიძლება, ეს გუნდთან განვიხილოთ.",
        },
        {
          english: "You could try refreshing the report.",
          georgian: "შეგიძლია, რეპორტის განახლება სცადო.",
        },
      ],

      commonMistakes: [
        {
          wrong: "I am think this is correct.",
          correct: "I think this is correct.",
          explanation:
            "Use “I think,” not “I am think.”",
          georgianExplanation:
            "გამოიყენე “I think” და არა “I am think”.",
        },
      ],
    },

    {
      id: "quantity-approximations",
      title: "Approximating quantities",
      georgianTitle: "რაოდენობის მიახლოებითი გამოხატვა",

      coreMeaning:
        "Words such as about, around, approximately, roughly, and almost help avoid presenting an estimate as an exact number.",

      georgianCoreMeaning:
        "სიტყვები about, around, approximately, roughly და almost გვეხმარება მიახლოებითი რაოდენობა გამოვხატოთ და შეფასება ზუსტ რიცხვად არ წარმოვადგინოთ.",

      structure: [
        {
          label: "Approximate number",
          formula: "about / around / approximately + number",
          note: "Use these words when the number is not exact.",
          georgianNote:
            "გამოიყენე, როცა რიცხვი ზუსტი არ არის.",
        },
      ],

      examples: [
        {
          english: "About 200 customers used the service.",
          georgian: "სერვისი დაახლოებით 200-მა მომხმარებელმა გამოიყენა.",
        },
        {
          english: "The process takes around ten minutes.",
          georgian: "პროცესს დაახლოებით ათი წუთი სჭირდება.",
        },
        {
          english: "We received roughly 1,000 applications.",
          georgian: "დაახლოებით 1,000 განაცხადი მივიღეთ.",
        },
      ],

      commonMistakes: [
        {
          wrong: "Exactly about 200 customers.",
          correct: "About 200 customers.",
          explanation:
            "“Exactly” and “about” express conflicting levels of precision.",
          georgianExplanation:
            "“Exactly” და “about” სიზუსტის ურთიერთსაწინააღმდეგო დონეებს გამოხატავს.",
        },
      ],
    },
  ],
} as const;