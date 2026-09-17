export const reportedSpeech = {
  title: "Reported Speech",
  georgianTitle: "არაპირდაპირი ნათქვამი",
  introduction:
    "Reported speech is used to tell someone what another person said, without repeating their exact words.",
  georgianIntroduction:
    "Reported Speech-ს ვიყენებთ იმის გადმოსაცემად, თუ რა თქვა სხვამ, მისი სიტყვების ზუსტად გამეორების გარეშე.",

  learningNote: {
    title: "Remember",
    explanation:
      "When the reporting verb is in the past, the tense often moves one step back. Pronouns and time expressions may also change.",
    georgianExplanation:
      "როდესაც reporting verb წარსულ დროშია, ზმნის დრო ხშირად ერთი საფეხურით უკან ინაცვლებს. შეიძლება შეიცვალოს ნაცვალსახელებიც და დროის გამომხატველი სიტყვებიც.",
  },

  types: [
    {
      id: "reported-statements",
      title: "Reported Statements",
      georgianTitle: "თხრობითი წინადადებების გადმოცემა",
      coreMeaning:
        "Use reported statements to tell someone what a person said.",
      georgianCoreMeaning:
        "გამოიყენე reported statements იმის გადმოსაცემად, თუ რა თქვა ადამიანმა.",

      structure: [
        {
          label: "Basic structure",
          formula: "Subject + said (that) + reported clause",
          note: "That is optional in many reported statements.",
          georgianNote:
            "That ბევრ reported statement-ში აუცილებელი არ არის.",
        },
        {
          label: "With tell",
          formula: "Subject + told + object + (that) + reported clause",
          note: "Tell usually needs an object, such as me, him, or us.",
          georgianNote:
            "Tell-ს ჩვეულებრივ სჭირდება ობიექტი, მაგალითად me, him ან us.",
        },
      ],

      examples: [
        {
          english: 'Direct: "I am tired." → Reported: She said (that) she was tired.',
          georgian:
            'პირდაპირი: „დაღლილი ვარ.“ → არაპირდაპირი: მან თქვა, რომ დაღლილი იყო.',
        },
        {
          english: 'Direct: "I have finished." → Reported: He said (that) he had finished.',
          georgian:
            'პირდაპირი: „დავასრულე.“ → არაპირდაპირი: მან თქვა, რომ დასრულებული ჰქონდა.',
        },
        {
          english: 'Direct: "I will call you." → Reported: She told me (that) she would call me.',
          georgian:
            'პირდაპირი: „დაგირეკავ.“ → არაპირდაპირი: მან მითხრა, რომ დამირეკავდა.',
        },
      ],

      commonMistakes: [
        {
          wrong: "She said me that she was busy.",
          correct: "She told me that she was busy.",
          explanation:
            "Use tell + object, or say without a direct object.",
          georgianExplanation:
            "გამოიყენე tell + ობიექტი, ან say პირდაპირი ობიექტის გარეშე.",
        },
        {
          wrong: "He said that he is tired. (when reporting a past statement)",
          correct: "He said that he was tired.",
          explanation:
            "When the reporting verb is in the past, the tense usually shifts back.",
          georgianExplanation:
            "როდესაც reporting verb წარსულ დროშია, ზმნის დრო ჩვეულებრივ უკან ინაცვლებს.",
        },
      ],
    },

    {
      id: "reported-questions",
      title: "Reported Questions",
      georgianTitle: "კითხვების გადმოცემა",
      coreMeaning:
        "Use reported questions to tell someone what another person asked.",
      georgianCoreMeaning:
        "გამოიყენე reported questions იმის გადმოსაცემად, თუ რა იკითხა სხვამ.",

      structure: [
        {
          label: "Wh- questions",
          formula: "asked + wh-word + subject + verb",
          note: "Keep normal statement word order; do not use question word order.",
          georgianNote:
            "შეინარჩუნე ჩვეულებრივი თხრობითი წინადადების წყობა; კითხვითი წყობა არ გამოიყენო.",
        },
        {
          label: "Yes/No questions",
          formula: "asked + if/whether + subject + verb",
          note: "Use if or whether when the direct question has no wh-word.",
          georgianNote:
            "თუ პირდაპირ კითხვაში wh-სიტყვა არ არის, გამოიყენე if ან whether.",
        },
      ],

      examples: [
        {
          english: 'Direct: "Where do you live?" → Reported: He asked me where I lived.',
          georgian:
            'პირდაპირი: „სად ცხოვრობ?“ → არაპირდაპირი: მან მკითხა, სად ვცხოვრობდი.',
        },
        {
          english: 'Direct: "Are you ready?" → Reported: She asked if I was ready.',
          georgian:
            'პირდაპირი: „მზად ხარ?“ → არაპირდაპირი: მან მკითხა, მზად ვიყავი თუ არა.',
        },
        {
          english: 'Direct: "What are you doing?" → Reported: He asked what I was doing.',
          georgian:
            'პირდაპირი: „რას აკეთებ?“ → არაპირდაპირი: მან მკითხა, რას ვაკეთებდი.',
        },
      ],

      commonMistakes: [
        {
          wrong: "She asked me where did I live.",
          correct: "She asked me where I lived.",
          explanation:
            "Reported questions use statement word order, not question word order.",
          georgianExplanation:
            "არაპირდაპირ კითხვებში გამოიყენება თხრობითი წინადადების წყობა და არა კითხვითი წყობა.",
        },
        {
          wrong: "He asked me that I was ready.",
          correct: "He asked me if I was ready.",
          explanation:
            "Use if or whether for reported Yes/No questions.",
          georgianExplanation:
            "არაპირდაპირ Yes/No კითხვებში გამოიყენე if ან whether.",
        },
      ],
    },

    {
      id: "reported-commands",
      title: "Reported Commands and Requests",
      georgianTitle: "ბრძანებებისა და თხოვნების გადმოცემა",
      coreMeaning:
        "Use tell, ask, or order with an infinitive to report commands and requests.",
      georgianCoreMeaning:
        "ბრძანებებისა და თხოვნების გადმოსაცემად გამოიყენე tell, ask ან order და ზმნის ინფინიტივი.",

      structure: [
        {
          label: "Positive command or request",
          formula: "told/asked + object + to + base verb",
          note: "Use to + verb for a positive command or request.",
          georgianNote:
            "დადებითი ბრძანების ან თხოვნისთვის გამოიყენე to + ზმნა.",
        },
        {
          label: "Negative command or request",
          formula: "told/asked + object + not to + base verb",
          note: "Use not to + verb to report a negative command.",
          georgianNote:
            "უარყოფითი ბრძანების გადმოსაცემად გამოიყენე not to + ზმნა.",
        },
      ],

      examples: [
        {
          english: 'Direct: "Please sit down." → Reported: The teacher asked us to sit down.',
          georgian:
            'პირდაპირი: „გთხოვთ, დასხედით.“ → არაპირდაპირი: მასწავლებელმა გვთხოვა, დავსხედით.',
        },
        {
          english: 'Direct: "Don’t touch it." → Reported: He told me not to touch it.',
          georgian:
            'პირდაპირი: „არ შეეხო.“ → არაპირდაპირი: მან მითხრა, რომ არ შევხებოდი.',
        },
        {
          english: 'Direct: "Call me later." → Reported: She told him to call her later.',
          georgian:
            'პირდაპირი: „მოგვიანებით დამირეკე.“ → არაპირდაპირი: მან უთხრა, მოგვიანებით დაერეკა მისთვის.',
        },
      ],

      commonMistakes: [
        {
          wrong: "He told me that to wait.",
          correct: "He told me to wait.",
          explanation:
            "For reported commands, use object + to + base verb.",
          georgianExplanation:
            "არაპირდაპირი ბრძანებისთვის გამოიყენე object + to + ზმნის საწყისი ფორმა.",
        },
        {
          wrong: "She asked me don’t be late.",
          correct: "She asked me not to be late.",
          explanation:
            "The negative form is not to + base verb.",
          georgianExplanation:
            "უარყოფითი ფორმაა not to + ზმნის საწყისი ფორმა.",
        },
      ],
    },

    {
      id: "backshift",
      title: "Tense Changes",
      georgianTitle: "დროების ცვლილება",
      coreMeaning:
        "When reporting a past statement, the verb tense often shifts back.",
      georgianCoreMeaning:
        "წარსულში ნათქვამის გადმოცემისას ზმნის დრო ხშირად ერთი საფეხურით უკან ინაცვლებს.",

      structure: [
        {
          label: "Present Simple → Past Simple",
          formula: "“I work.” → He said he worked.",
        },
        {
          label: "Present Continuous → Past Continuous",
          formula: "“I am working.” → He said he was working.",
        },
        {
          label: "Present Perfect → Past Perfect",
          formula: "“I have worked.” → He said he had worked.",
        },
        {
          label: "Past Simple → Past Perfect",
          formula: "“I worked.” → He said he had worked.",
        },
        {
          label: "Will → Would",
          formula: "“I will work.” → He said he would work.",
        },
        {
          label: "Can → Could",
          formula: "“I can help.” → She said she could help.",
        },
      ],

      examples: [
        {
          english: 'Direct: "We are waiting." → Reported: They said they were waiting.',
          georgian:
            'პირდაპირი: „ველოდებით.“ → არაპირდაპირი: მათ თქვეს, რომ ელოდებოდნენ.',
        },
        {
          english: 'Direct: "I saw him." → Reported: She said she had seen him.',
          georgian:
            'პირდაპირი: „ის დავინახე.“ → არაპირდაპირი: მან თქვა, რომ ის ნანახი ჰყავდა.',
        },
        {
          english: 'Direct: "I can swim." → Reported: He said he could swim.',
          georgian:
            'პირდაპირი: „ცურვა შემიძლია.“ → არაპირდაპირი: მან თქვა, რომ ცურვა შეეძლო.',
        },
      ],

      commonMistakes: [
        {
          wrong: "She said that she will come.",
          correct: "She said that she would come.",
          explanation:
            "Will usually changes to would when the reporting verb is in the past.",
          georgianExplanation:
            "როდესაც reporting verb წარსულ დროშია, will ჩვეულებრივ would-ად იცვლება.",
        },
        {
          wrong: "He said that he can help.",
          correct: "He said that he could help.",
          explanation:
            "Can usually changes to could in reported speech after a past reporting verb.",
          georgianExplanation:
            "წარსულ reporting verb-ის შემდეგ can ჩვეულებრივ could-ად იცვლება.",
        },
      ],
    },

    {
      id: "time-place-changes",
      title: "Time and Place Changes",
      georgianTitle: "დროისა და ადგილის გამომხატველი სიტყვების ცვლილება",
      coreMeaning:
        "Words referring to time and place may change when the situation or viewpoint changes.",
      georgianCoreMeaning:
        "დროისა და ადგილის გამომხატველი სიტყვები შეიძლება შეიცვალოს, როდესაც სიტუაცია ან ხედვის წერტილი იცვლება.",

      structure: [
        {
          label: "Common changes",
          formula:
            "now → then | today → that day | tomorrow → the next day",
          note: "These changes depend on when and where the report is made.",
          georgianNote:
            "ეს ცვლილებები დამოკიდებულია იმაზე, როდის და სად გადმოიცემა ნათქვამი.",
        },
        {
          label: "More examples",
          formula:
            "here → there | yesterday → the day before | this → that",
        },
      ],

      examples: [
        {
          english: 'Direct: "I’ll do it tomorrow." → Reported: He said he would do it the next day.',
          georgian:
            'პირდაპირი: „ხვალ გავაკეთებ.“ → არაპირდაპირი: მან თქვა, რომ ამას მომდევნო დღეს გააკეთებდა.',
        },
        {
          english: 'Direct: "I live here." → Reported: She said she lived there.',
          georgian:
            'პირდაპირი: „აქ ვცხოვრობ.“ → არაპირდაპირი: მან თქვა, რომ იქ ცხოვრობდა.',
        },
        {
          english: 'Direct: "I saw him yesterday." → Reported: She said she had seen him the day before.',
          georgian:
            'პირდაპირი: „გუშინ ვნახე.“ → არაპირდაპირი: მან თქვა, რომ ის წინა დღეს ენახა.',
        },
      ],

      commonMistakes: [
        {
          wrong: "He said he would come tomorrow. (when reporting later)",
          correct: "He said he would come the next day.",
          explanation:
            "Change time expressions when the original time reference no longer applies.",
          georgianExplanation:
            "შეცვალე დროის გამომხატველი სიტყვები, როცა თავდაპირველი დროის მითითება აღარ შეესაბამება სიტუაციას.",
        },
      ],
    },
  ],
};