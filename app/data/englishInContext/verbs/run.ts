export const run = {
  id: "run",
  title: "RUN",
  georgianTitle: "სირბილი; მართვა; მიმდინარეობა",
  introduction:
    "RUN is not only about moving fast on foot. It is also used for operating things, managing activities, and describing how situations develop.",
  georgianIntroduction:
    "RUN მხოლოდ ფეხით სირბილს არ ნიშნავს. მას ასევე ვიყენებთ მოწყობილობების მუშაობის, საქმიანობის მართვისა და პროცესების მიმდინარეობის აღსაწერად.",

  patterns: [
    {
      id: "run-somewhere",
      title: "Run somewhere",
      pattern: "run + to / into / out of + place",
      explanation:
        "To move quickly on foot toward, into, or out of a place.",
      georgianExplanation:
        "ფეხით სწრაფად გადაადგილება რომელიმე ადგილისკენ, შიგნით ან გარეთ.",
      examples: [
        {
          english: "I ran to the bus stop.",
          georgian: "ავტობუსის გაჩერებამდე გავიქეცი.",
        },
        {
          english: "She ran into the room.",
          georgian: "ის ოთახში შევარდა.",
        },
      ],
    },
    {
      id: "run-a-business",
      title: "Run a business / team",
      pattern: "run + a business / team / department",
      explanation:
        "To manage or be responsible for a business, team, or department.",
      georgianExplanation:
        "ბიზნესის, გუნდის ან განყოფილების მართვა და მასზე პასუხისმგებლობის აღება.",
      examples: [
        {
          english: "She runs her own business.",
          georgian: "ის საკუთარ ბიზნესს მართავს.",
        },
        {
          english: "He runs the sales team.",
          georgian: "ის გაყიდვების გუნდს ხელმძღვანელობს.",
        },
      ],
    },
    {
      id: "run-a-program",
      title: "Run a program / test",
      pattern: "run + a program / test / report",
      explanation:
        "To start or perform a computer program, test, or process.",
      georgianExplanation:
        "კომპიუტერული პროგრამის, ტესტის ან პროცესის გაშვება/შესრულება.",
      examples: [
        {
          english: "I need to run the report again.",
          georgian: "რეპორტი ხელახლა უნდა გავუშვა.",
        },
        {
          english: "Can you run this test?",
          georgian: "შეგიძლია ეს ტესტი გაუშვა?",
        },
      ],
    },
    {
      id: "run-out-of",
      title: "Run out of something",
      pattern: "run out of + noun",
      explanation:
        "To have no more of something because it has all been used.",
      georgianExplanation:
        "რაიმეს სრულად ამოწურვა — როცა აღარაფერი გრჩება.",
      examples: [
        {
          english: "We've run out of milk.",
          georgian: "რძე გაგვითავდა.",
        },
        {
          english: "I'm running out of time.",
          georgian: "დრო მეწურება.",
        },
      ],
    },
    {
      id: "run-into",
      title: "Run into someone / a problem",
      pattern: "run into + person / problem",
      explanation:
        "To meet someone unexpectedly or to encounter a problem.",
      georgianExplanation:
        "ვინმეს შემთხვევით შეხვედრა ან პრობლემის წაწყდომა.",
      examples: [
        {
          english: "I ran into an old friend yesterday.",
          georgian: "გუშინ ძველ მეგობარს შემთხვევით შევხვდი.",
        },
        {
          english: "We ran into a few problems.",
          georgian: "რამდენიმე პრობლემას წავაწყდით.",
        },
      ],
    },
    {
      id: "run-something-by-someone",
      title: "Run something by someone",
      pattern: "run + something + by + someone",
      explanation:
        "To tell someone an idea or plan and get their opinion.",
      georgianExplanation:
        "იდეის ან გეგმის ვინმესთვის გაზიარება მისი აზრის გასაგებად.",
      examples: [
        {
          english: "Can I run an idea by you?",
          georgian: "შეიძლება ერთი იდეა გაგიზიარო და შენი აზრი გავიგო?",
        },
        {
          english: "I'll run the plan by my manager.",
          georgian: "გეგმას ჩემს მენეჯერს გავუზიარებ და მის აზრს ვკითხავ.",
        },
      ],
    },
  ],

  collocations: [
    {
      phrase: "run a business",
      georgian: "ბიზნესის მართვა",
      example: "They run a successful family business.",
    },
    {
      phrase: "run a meeting",
      georgian: "შეხვედრის წაყვანა",
      example: "Alex will run the meeting today.",
    },
    {
      phrase: "run a test",
      georgian: "ტესტის გაშვება",
      example: "Let's run a test before we publish the changes.",
    },
    {
      phrase: "run out of time",
      georgian: "დროის ამოწურვა",
      example: "We ran out of time before finishing the task.",
    },
    {
      phrase: "run into trouble",
      georgian: "პრობლემებში გახვევა",
      example: "The project ran into trouble last week.",
    },
  ],

  commonMistakes: [
    {
      wrong: "We ran out from milk.",
      correct: "We ran out of milk.",
      explanation:
        "Use “run out of” when something has been used up.",
      georgianExplanation:
        "როცა რაიმე გითავდება, გამოიყენე “run out of”.",
    },
    {
      wrong: "She runs a meeting yesterday.",
      correct: "She ran a meeting yesterday.",
      explanation:
        "Use “ran,” the past form of “run,” for a finished action in the past.",
      georgianExplanation:
        "წარსულში დასრულებული მოქმედებისთვის გამოიყენე “ran” — ზმნა “run”-ის წარსული ფორმა.",
    },
    {
      wrong: "I ran to my friend in the street by accident.",
      correct: "I ran into my friend in the street by accident.",
      explanation:
        "Use “run into someone” when you meet someone unexpectedly.",
      georgianExplanation:
        "როცა ვინმეს შემთხვევით ხვდები, გამოიყენე “run into someone”.",
    },
  ],
};