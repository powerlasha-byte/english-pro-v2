export const emphasis = {
  id: "emphasis",
  title: "Emphasis",
  georgianTitle: "ხაზგასმა",
  introduction:
    "Emphasis is used to make a particular idea, action, or detail sound stronger or more important.",
  georgianIntroduction:
    "ხაზგასმას ვიყენებთ იმისთვის, რომ კონკრეტული აზრი, მოქმედება ან დეტალი უფრო მკაფიოდ და მნიშვნელოვნად გამოვყოთ.",

  learningNote: {
    title: "Remember",
    explanation:
      "English uses several structures for emphasis. The structure you choose depends on what you want to highlight.",
    georgianExplanation:
      "ინგლისურში ხაზგასმისთვის რამდენიმე სტრუქტურა გამოიყენება. აირჩიე ის ფორმა, რომელიც ყველაზე კარგად გამოყოფს შენთვის მნიშვნელოვან ნაწილს.",
  },

  types: [
    {
      id: "do-emphasis",
      title: "Emphatic do / does / did",
      georgianTitle: "Do / does / did ხაზგასმისთვის",
      coreMeaning:
        "Use do, does, or did before the base form of a verb to emphasize that something is true or really happened.",
      georgianCoreMeaning:
        "Do, does ან did გამოიყენება ზმნის საწყისი ფორმის წინ, როცა გვინდა ხაზი გავუსვათ, რომ რაღაც ნამდვილად ასეა ან ნამდვილად მოხდა.",

      structure: [
        {
          label: "Present simple",
          formula: "Subject + do/does + base verb",
          note:
            "Use do with I, you, we, and they. Use does with he, she, and it.",
          georgianNote:
            "I, you, we და they-სთან გამოიყენე do; he, she და it-სთან — does.",
        },
        {
          label: "Past simple",
          formula: "Subject + did + base verb",
          note: "After did, use the base form of the verb.",
          georgianNote: "Did-ის შემდეგ გამოიყენე ზმნის საწყისი ფორმა.",
        },
      ],

      examples: [
        {
          english: "I do understand what you mean.",
          georgian: "მე ნამდვილად მესმის, რას გულისხმობ.",
        },
        {
          english: "She does work hard.",
          georgian: "ის ნამდვილად ბევრს მუშაობს.",
        },
        {
          english: "He did call you yesterday.",
          georgian: "მან გუშინ ნამდვილად დაგირეკა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "She does works hard.",
          correct: "She does work hard.",
          explanation:
            "After does, use the base form work, not works.",
          georgianExplanation:
            "Does-ის შემდეგ გამოიყენება ზმნის საწყისი ფორმა — work და არა works.",
        },
        {
          wrong: "I did went there.",
          correct: "I did go there.",
          explanation:
            "After did, use go, not the past form went.",
          georgianExplanation:
            "Did-ის შემდეგ გამოიყენება go და არა წარსული ფორმა went.",
        },
      ],
    },

    {
      id: "cleft-emphasis",
      title: "What-cleft sentences",
      georgianTitle: "What-კონსტრუქცია ხაზგასმისთვის",
      coreMeaning:
        "Use a What-clause to emphasize an action, thing, or idea. The focus usually comes after be.",
      georgianCoreMeaning:
        "What-კონსტრუქცია გამოიყენება მოქმედების, საგნის ან აზრის გამოსაყოფად. ხაზგასმული ნაწილი, როგორც წესი, be ზმნის შემდეგ მოდის.",

      structure: [
        {
          label: "FORM",
          formula: "What + clause + be + emphasized information",
          note:
            "The verb be agrees with the emphasized information in many common sentences.",
          georgianNote:
            "ხშირად be ზმნის ფორმა ხაზგასმულ ნაწილს ეთანხმება.",
        },
      ],

      examples: [
        {
          english: "What I need is a little more time.",
          georgian: "რაც მე მჭირდება, ცოტა მეტი დროა.",
        },
        {
          english: "What she likes most is travelling.",
          georgian: "რაც მას ყველაზე მეტად მოსწონს, მოგზაურობაა.",
        },
        {
          english: "What surprised me was his answer.",
          georgian: "რამაც გამაოცა, მისი პასუხი იყო.",
        },
      ],

      commonMistakes: [
        {
          wrong: "What I need are a little more time.",
          correct: "What I need is a little more time.",
          explanation:
            "In this sentence, the emphasized information is a little more time, so use is.",
          georgianExplanation:
            "აქ ხაზგასმული ნაწილია a little more time, ამიტომ გამოიყენება is.",
        },
      ],
    },

    {
      id: "fronting",
      title: "Fronting",
      georgianTitle: "წინ გამოტანა",
      coreMeaning:
        "Move a word or phrase to the beginning of a sentence to give it special focus.",
      georgianCoreMeaning:
        "სიტყვა ან ფრაზა წინ გადმოგვაქვს, წინადადების დასაწყისში, რათა მას განსაკუთრებული ყურადღება მივაქციოთ.",

      structure: [
        {
          label: "FORM",
          formula: "Emphasized word/phrase + rest of the sentence",
          note:
            "Fronting is often used in speaking and writing to create contrast or a particular effect.",
          georgianNote:
            "წინ გამოტანა ხშირად გამოიყენება საუბარსა და წერაში კონტრასტის ან განსაკუთრებული ეფექტის შესაქმნელად.",
        },
      ],

      examples: [
        {
          english: "That book, I really enjoyed.",
          georgian: "ის წიგნი ნამდვილად ძალიან მომეწონა.",
        },
        {
          english: "This kind of problem, we can solve.",
          georgian: "ამ ტიპის პრობლემას ჩვენ მოვაგვარებთ.",
        },
        {
          english: "Into the room walked the manager.",
          georgian: "ოთახში მენეჯერი შემოვიდა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "That book, I enjoyed really.",
          correct: "That book, I really enjoyed.",
          explanation:
            "In this example, really naturally comes before the main verb enjoyed.",
          georgianExplanation:
            "ამ მაგალითში really ბუნებრივად მთავარ ზმნამდე — enjoyed-მდე — დგას.",
        },
      ],
    },

    {
      id: "negative-inversion",
      title: "Negative adverbial inversion",
      georgianTitle: "უარყოფითი გამოთქმით ინვერსია",
      coreMeaning:
        "Starting a sentence with a negative or restrictive expression can create strong emphasis. It usually requires inversion.",
      georgianCoreMeaning:
        "წინადადების უარყოფითი ან შემზღუდველი გამოთქმით დაწყება ძლიერ ხაზგასმას ქმნის. ასეთ დროს, როგორც წესი, საჭიროა ინვერსია.",

      structure: [
        {
          label: "FORM",
          formula: "Negative expression + auxiliary/modal + subject + verb",
          note:
            "Common expressions include never, rarely, seldom, hardly, and not only.",
          georgianNote:
            "ხშირი გამოთქმებია never, rarely, seldom, hardly და not only.",
        },
      ],

      examples: [
        {
          english: "Never have I seen such a beautiful view.",
          georgian: "ასეთი ლამაზი ხედი არასდროს მინახავს.",
        },
        {
          english: "Rarely does he arrive late.",
          georgian: "ის იშვიათად აგვიანებს.",
        },
        {
          english: "Not only did she apologize, but she also offered to help.",
          georgian:
            "მან არა მხოლოდ ბოდიში მოიხადა, არამედ დახმარებაც შემოგვთავაზა.",
        },
      ],

      commonMistakes: [
        {
          wrong: "Never I have seen such a beautiful view.",
          correct: "Never have I seen such a beautiful view.",
          explanation:
            "When Never begins the sentence, the auxiliary have comes before the subject.",
          georgianExplanation:
            "როცა წინადადება Never-ით იწყება, დამხმარე ზმნა have ქვემდებარეს წინ უსწრებს.",
        },
        {
          wrong: "Rarely he arrives late.",
          correct: "Rarely does he arrive late.",
          explanation:
            "With present simple inversion, use does before he, and keep the main verb in its base form.",
          georgianExplanation:
            "Present Simple-ის ინვერსიისას he-ს წინ გამოიყენე does, ხოლო მთავარი ზმნა საწყის ფორმაში დატოვე.",
        },
      ],
    },

    {
      id: "so-such-emphasis",
      title: "So and such",
      georgianTitle: "So და such ხაზგასმისთვის",
      coreMeaning:
        "Use so and such to emphasize the degree or intensity of an adjective, adverb, or noun phrase.",
      georgianCoreMeaning:
        "So და such გამოიყენება ზედსართავი სახელის, ზმნიზედის ან არსებითი სახელის ფრაზის ხარისხისა და ინტენსივობის გამოსაკვეთად.",

      structure: [
        {
          label: "SO",
          formula: "so + adjective/adverb",
          note: "Use so directly before an adjective or adverb.",
          georgianNote:
            "So პირდაპირ ზედსართავი სახელის ან ზმნიზედის წინ გამოიყენება.",
        },
        {
          label: "SUCH",
          formula: "such + (a/an) + adjective + noun",
          note:
            "Use such before a noun phrase. Use a/an with a singular countable noun.",
          georgianNote:
            "Such გამოიყენება არსებითი სახელის ფრაზის წინ. მხოლობით თვლად არსებით სახელთან საჭიროა a/an.",
        },
      ],

      examples: [
        {
          english: "The film was so interesting.",
          georgian: "ფილმი იმდენად საინტერესო იყო.",
        },
        {
          english: "It was such an interesting film.",
          georgian: "ეს ისეთი საინტერესო ფილმი იყო.",
        },
        {
          english: "You spoke so clearly.",
          georgian: "შენ ისე მკაფიოდ ისაუბრე.",
        },
      ],

      commonMistakes: [
        {
          wrong: "It was so an interesting film.",
          correct: "It was such an interesting film.",
          explanation:
            "Use such before an adjective + noun phrase: such an interesting film.",
          georgianExplanation:
            "Such გამოიყენება ზედსართავი სახელისა და არსებითი სახელის ფრაზის წინ: such an interesting film.",
        },
        {
          wrong: "The film was such interesting.",
          correct: "The film was so interesting.",
          explanation:
            "Use so directly before an adjective when there is no noun after it.",
          georgianExplanation:
            "როცა ზედსართავ სახელს არსებითი სახელი არ მოსდევს, მის წინ გამოიყენე so.",
        },
      ],
    },
  ],
} as const;