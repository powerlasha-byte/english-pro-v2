export const cleftSentences = {
  id: "cleft-sentences",
  title: "Cleft Sentences",
  georgianTitle: "გამოკვეთითი წინადადებები",

  introduction:
    "Cleft sentences help us put special focus on one part of a sentence, such as a person, a thing, a time, or a reason. They are useful when we want to clarify, emphasize, or contrast information.",

  georgianIntroduction:
    "Cleft Sentences გვეხმარება წინადადების ერთ კონკრეტულ ნაწილზე ყურადღების გამახვილებაში — მაგალითად, ადამიანზე, საგანზე, დროზე ან მიზეზზე. მათ ვიყენებთ ინფორმაციის დასაზუსტებლად, ხაზგასასმელად ან შესაპირისპირებლად.",

  learningNote: {
    title: "The basic idea",
    explanation:
      "A cleft sentence divides one message into two parts so that one part receives special emphasis. Compare: “Mariam called me yesterday” and “It was Mariam who called me yesterday.” The second sentence puts the focus on Mariam.",

    georgianExplanation:
      "Cleft Sentence ერთ სათქმელს ორ ნაწილად ყოფს, რათა ერთ ნაწილს განსაკუთრებული ყურადღება მიექცეს. შეადარე: “Mariam called me yesterday” და “It was Mariam who called me yesterday.” მეორე წინადადებაში ხაზგასმულია მარიამი.",
  },

  types: [
    {
      id: "it-cleft",
      title: "It-Cleft Sentences",
      georgianTitle: "It-Cleft — კონკრეტული ნაწილის გამოკვეთა",

      coreMeaning:
        "Use an it-cleft to emphasize a person, thing, time, place, or reason. The focused information comes after “It is/was”.",

      georgianCoreMeaning:
        "გამოიყენე It-Cleft, როცა გინდა ხაზი გაუსვა ადამიანს, საგანს, დროს, ადგილს ან მიზეზს. გამოკვეთილი ინფორმაცია მოდის “It is/was”-ის შემდეგ.",

      structure: [
        {
          label: "PERSON",
          formula: "It + is/was + person + who/that + clause",
          note:
            "Use who for a person. That is also possible in many contexts.",
          georgianNote:
            "ადამიანთან გამოიყენე who. ბევრ შემთხვევაში that-იც შესაძლებელია.",
        },
        {
          label: "THING / TIME / PLACE / REASON",
          formula: "It + is/was + focused information + that + clause",
          note:
            "Use that to connect the focused information to the rest of the sentence.",
          georgianNote:
            "გამოკვეთილი ინფორმაციის დანარჩენ წინადადებასთან დასაკავშირებლად გამოიყენე that.",
        },
      ],

      examples: [
        {
          english: "It was Mariam who called me yesterday.",
          georgian: "გუშინ სწორედ მარიამმა დამირეკა.",
        },
        {
          english: "It was the blue folder that I was looking for.",
          georgian: "სწორედ ლურჯ საქაღალდეს ვეძებდი.",
        },
        {
          english: "It was yesterday that we received the report.",
          georgian: "სწორედ გუშინ მივიღეთ რეპორტი.",
        },
        {
          english: "It is because the data is incomplete that the result looks different.",
          georgian: "შედეგი განსხვავებულად სწორედ იმიტომ გამოიყურება, რომ მონაცემები არასრულია.",
        },
      ],

      commonMistakes: [
        {
          wrong: "It was Mariam which called me.",
          correct: "It was Mariam who called me.",
          explanation:
            "Use who when the focused information is a person. Which is normally used for things.",
          georgianExplanation:
            "როცა გამოკვეთილი ინფორმაცია ადამიანია, გამოიყენე who. Which ჩვეულებრივ საგნებისთვის გამოიყენება.",
        },
        {
          wrong: "It was yesterday when we received the report.",
          correct: "It was yesterday that we received the report.",
          explanation:
            "In a standard it-cleft, use that to introduce the clause after the focused time.",
          georgianExplanation:
            "სტანდარტულ It-Cleft-ში გამოკვეთილი დროის შემდეგ გამოიყენე that.",
        },
      ],
    },

    {
      id: "what-cleft",
      title: "What-Cleft Sentences",
      georgianTitle: "What-Cleft — მოქმედების ან იდეის გამოკვეთა",

      coreMeaning:
        "Use a what-cleft to emphasize an action, need, idea, or thing. The sentence often begins with “What … is/was …”.",

      georgianCoreMeaning:
        "გამოიყენე What-Cleft მოქმედების, საჭიროების, იდეის ან საგნის გამოსაკვეთად. წინადადება ხშირად იწყება ფორმით “What … is/was …”.",

      structure: [
        {
          label: "PRESENT",
          formula: "What + subject + verb + is + focused information",
          note:
            "The what-clause names the action or thing; the main clause gives the focus.",
          georgianNote:
            "What-ნაწილი ასახელებს მოქმედებას ან საგანს, ხოლო მთავარი ნაწილი გამოკვეთილ ინფორმაციას გვაძლევს.",
        },
        {
          label: "PAST",
          formula: "What + subject + verb + was + focused information",
          note:
            "Use was when you are talking about a past situation.",
          georgianNote:
            "გამოიყენე was, როცა წარსულ სიტუაციაზე საუბრობ.",
        },
      ],

      examples: [
        {
          english: "What I need is a little more time.",
          georgian: "რაც მე მჭირდება, ცოტა მეტი დროა.",
        },
        {
          english: "What surprised me was his answer.",
          georgian: "რაც გამაკვირვა, მისი პასუხი იყო.",
        },
        {
          english: "What we should do is check the numbers again.",
          georgian: "რაც უნდა გავაკეთოთ, ციფრების ხელახლა შემოწმებაა.",
        },
        {
          english: "What I like about this report is its simple design.",
          georgian: "რაც ამ რეპორტში მომწონს, მისი მარტივი დიზაინია.",
        },
      ],

      commonMistakes: [
        {
          wrong: "What I need are more time.",
          correct: "What I need is more time.",
          explanation:
            "When the focused information is an uncountable noun such as time, use is.",
          georgianExplanation:
            "როცა გამოკვეთილი ინფორმაცია უთვლადი არსებითი სახელია, მაგალითად time, გამოიყენე is.",
        },
        {
          wrong: "What we should do is to checking the numbers.",
          correct: "What we should do is check the numbers.",
          explanation:
            "After “What … should do is”, use the base form of the verb. “Is to check” is also possible, but do not use “to checking”.",
          georgianExplanation:
            "ფორმის “What … should do is” შემდეგ გამოიყენე ზმნის საწყისი ფორმა. “Is to check”-იც შესაძლებელია, მაგრამ “to checking” არასწორია.",
        },
      ],
    },

    {
      id: "all-cleft",
      title: "All-Cleft Sentences",
      georgianTitle: "All-Cleft — ერთადერთის ან მთავარის გამოკვეთა",

      coreMeaning:
        "Use an all-cleft to emphasize that the only thing someone wants, needs, or did is a particular action or thing.",

      georgianCoreMeaning:
        "გამოიყენე All-Cleft იმის გამოსაკვეთად, რომ ადამიანის ერთადერთი სურვილი, საჭიროება ან მოქმედება კონკრეტული რამ არის.",

      structure: [
        {
          label: "FORM",
          formula: "All + subject + need/want/do + is/was + focused information",
          note:
            "This structure often means “the only thing”.",
          georgianNote:
            "ეს სტრუქტურა ხშირად ნიშნავს „ერთადერთ რამეს“.",
        },
      ],

      examples: [
        {
          english: "All I need is your approval.",
          georgian: "ყველაფერი, რაც მჭირდება, შენი თანხმობაა.",
        },
        {
          english: "All she wanted was a quiet evening.",
          georgian: "ყველაფერი, რაც მას უნდოდა, მშვიდი საღამო იყო.",
        },
        {
          english: "All we did was wait.",
          georgian: "ერთადერთი, რაც გავაკეთეთ, ლოდინი იყო.",
        },
        {
          english: "All you have to do is press this button.",
          georgian: "ერთადერთი, რაც უნდა გააკეთო, ამ ღილაკზე დაჭერაა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "All I need are your help.",
          correct: "All I need is your help.",
          explanation:
            "When the focused information is “help”, use is. Help is usually uncountable in this meaning.",
          georgianExplanation:
            "როცა გამოკვეთილი ინფორმაციაა “help”, გამოიყენე is. ამ მნიშვნელობით help ჩვეულებრივ უთვლადია.",
        },
      ],
    },

    {
      id: "the-reason-cleft",
      title: "The Reason-Cleft Sentences",
      georgianTitle: "The Reason-Cleft — მიზეზის გამოკვეთა",

      coreMeaning:
        "Use this structure to emphasize why something happened or why someone did something.",

      georgianCoreMeaning:
        "გამოიყენე ეს სტრუქტურა იმის გამოსაკვეთად, თუ რატომ მოხდა რამე ან რატომ გააკეთა ვინმემ რაღაც.",

      structure: [
        {
          label: "FORM",
          formula: "The reason + subject + verb + is/was + that + clause",
          note:
            "That introduces the explanation. In everyday English, “The reason is because …” is also common, but “The reason is that …” is a clear standard pattern.",
          georgianNote:
            "That განმარტებას იწყებს. ყოველდღიურ ინგლისურში “The reason is because …” ფორმაც ხშირად გვხვდება, თუმცა “The reason is that …” მკაფიო სტანდარტული ფორმაა.",
        },
      ],

      examples: [
        {
          english: "The reason I called is that I have a question.",
          georgian: "დარეკვის მიზეზი ის არის, რომ კითხვა მაქვს.",
        },
        {
          english: "The reason we changed the plan was that the deadline moved.",
          georgian: "გეგმა იმიტომ შევცვალეთ, რომ საბოლოო ვადა შეიცვალა.",
        },
        {
          english: "The reason she left early is that she wasn't feeling well.",
          georgian: "ის ადრე იმიტომ წავიდა, რომ თავს კარგად არ გრძნობდა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "The reason why I called is because I have a question.",
          correct: "The reason I called is that I have a question.",
          explanation:
            "The original sentence is understandable, but it combines “the reason why” with “because”. A simpler standard version is “The reason … is that …”.",
          georgianExplanation:
            "საწყისი წინადადება გასაგებია, თუმცა “the reason why” და “because” ერთად ზედმეტად მეორდება. უფრო მარტივი სტანდარტული ფორმაა “The reason … is that …”.",
        },
      ],
    },
  ],
} as const;