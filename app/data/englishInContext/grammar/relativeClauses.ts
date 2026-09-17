export const relativeClauses = {
  title: "Relative Clauses",
  georgianTitle: "მიმართებითი წინადადებები",

  introduction:
    "Relative clauses give us more information about a person, thing, or place. They often begin with who, which, that, whose, or where.",
  georgianIntroduction:
    "Relative clauses დამატებით ინფორმაციას გვაწვდის ადამიანზე, საგანზე ან ადგილზე. ისინი ხშირად იწყება who, which, that, whose ან where სიტყვებით.",

  learningNote: {
    title: "Remember",
    explanation:
      "Use who for people, which for things, whose for possession, and where for places. That can often replace who or which in defining relative clauses.",
    georgianExplanation:
      "Who გამოიყენე ადამიანებისთვის, which — საგნებისთვის, whose — კუთვნილებისთვის, ხოლო where — ადგილებისთვის. Defining relative clause-ში that ხშირად შეიძლება who-ს ან which-ის ნაცვლად გამოიყენო.",
  },

  types: [
    {
      id: "defining",
      title: "Defining relative clauses",
      georgianTitle: "განმსაზღვრელი relative clauses",
      coreMeaning:
        "A defining relative clause gives essential information that identifies exactly which person or thing we mean. We do not use commas.",
      georgianCoreMeaning:
        "Defining relative clause გვაწვდის აუცილებელ ინფორმაციას, რომელიც ზუსტად განსაზღვრავს, რომელ ადამიანს ან საგანს ვგულისხმობთ. მძიმეები არ გამოიყენება.",
      structure: [
        {
          label: "Structure",
          formula: "Noun + who/which/that + clause",
          note:
            "That can be used for people or things in defining relative clauses.",
          georgianNote:
            "Defining relative clause-ში that შეიძლება გამოიყენო როგორც ადამიანებისთვის, ისე საგნებისთვის.",
        },
      ],
      examples: [
        {
          english: "The woman who works here is my manager.",
          georgian: "ქალი, რომელიც აქ მუშაობს, ჩემი მენეჯერია.",
        },
        {
          english: "This is the report that I prepared yesterday.",
          georgian: "ეს არის ანგარიში, რომელიც გუშინ მოვამზადე.",
        },
        {
          english: "The phone which I bought is already broken.",
          georgian: "ტელეფონი, რომელიც ვიყიდე, უკვე გაფუჭებულია.",
        },
      ],
      commonMistakes: [
        {
          wrong: "The woman, who works here, is my manager.",
          correct: "The woman who works here is my manager.",
          explanation:
            "Do not use commas when the relative clause is essential to identify the person or thing.",
          georgianExplanation:
            "მძიმეები არ გამოიყენო, როცა relative clause აუცილებელია ადამიანის ან საგნის დასადგენად.",
        },
      ],
    },

    {
      id: "non-defining",
      title: "Non-defining relative clauses",
      georgianTitle: "არაგანმსაზღვრელი relative clauses",
      coreMeaning:
        "A non-defining relative clause adds extra information. The sentence still identifies the person or thing without it, so we use commas.",
      georgianCoreMeaning:
        "Non-defining relative clause დამატებით ინფორმაციას ამატებს. მის გარეშეც გასაგებია, რომელ ადამიანს ან საგანს ვგულისხმობთ, ამიტომ მძიმეები გამოიყენება.",
      structure: [
        {
          label: "Structure",
          formula: "Noun, who/which/whose/where + extra information, ...",
          note:
            "Do not use that in non-defining relative clauses.",
          georgianNote:
            "Non-defining relative clause-ში that არ გამოიყენო.",
        },
      ],
      examples: [
        {
          english: "My brother, who lives in Tbilisi, is visiting us.",
          georgian: "ჩემი ძმა, რომელიც თბილისში ცხოვრობს, ჩვენთან სტუმრად მოდის.",
        },
        {
          english: "The new office, which opened last month, is very modern.",
          georgian: "ახალი ოფისი, რომელიც გასულ თვეში გაიხსნა, ძალიან თანამედროვეა.",
        },
        {
          english: "Anna, whose team won the competition, is celebrating today.",
          georgian: "ანა, რომლის გუნდმაც შეჯიბრი მოიგო, დღეს აღნიშნავს გამარჯვებას.",
        },
      ],
      commonMistakes: [
        {
          wrong: "My brother, that lives in Tbilisi, is visiting us.",
          correct: "My brother, who lives in Tbilisi, is visiting us.",
          explanation:
            "Use who or which, not that, in non-defining relative clauses.",
          georgianExplanation:
            "Non-defining relative clause-ში გამოიყენე who ან which და არა that.",
        },
      ],
    },

    {
      id: "relative-pronouns",
      title: "Who, which, that, whose",
      georgianTitle: "Who, which, that, whose",
      coreMeaning:
        "Relative pronouns connect a noun to information about it. The choice depends on whether we mean a person, thing, or possession.",
      georgianCoreMeaning:
        "Relative pronouns არსებით სახელს მასზე დამატებით ინფორმაციასთან აკავშირებს. არჩევანი დამოკიდებულია იმაზე, ადამიანს, საგანს თუ კუთვნილებას ვგულისხმობთ.",
      structure: [
        {
          label: "People",
          formula: "Person + who/that + verb",
          note: "Who is the usual choice for people.",
          georgianNote: "ადამიანებისთვის ჩვეულებრივ who გამოიყენება.",
        },
        {
          label: "Things",
          formula: "Thing + which/that + clause",
          note: "Which and that are common for things in defining clauses.",
          georgianNote:
            "Defining clause-ში საგნებისთვის ხშირად გამოიყენება which და that.",
        },
        {
          label: "Possession",
          formula: "Person/thing + whose + noun",
          note: "Whose shows that something belongs to someone or something.",
          georgianNote:
            "Whose აჩვენებს, რომ რაღაც ვინმეს ან რამეს ეკუთვნის.",
        },
      ],
      examples: [
        {
          english: "I know a person who can help us.",
          georgian: "ერთ ადამიანს ვიცნობ, რომელსაც ჩვენი დახმარება შეუძლია.",
        },
        {
          english: "The laptop that I use is quite old.",
          georgian: "ლეპტოპი, რომელსაც ვიყენებ, საკმაოდ ძველია.",
        },
        {
          english: "She is the analyst whose report we reviewed.",
          georgian: "ის არის ანალიტიკოსი, რომლის ანგარიშიც განვიხილეთ.",
        },
      ],
      commonMistakes: [
        {
          wrong: "She is the analyst who's report we reviewed.",
          correct: "She is the analyst whose report we reviewed.",
          explanation:
            "Whose shows possession. Who's means who is or who has.",
          georgianExplanation:
            "Whose კუთვნილებას გამოხატავს. Who's კი ნიშნავს who is-ს ან who has-ს.",
        },
      ],
    },

    {
      id: "where-when",
      title: "Where and when",
      georgianTitle: "Where და when",
      coreMeaning:
        "Use where to refer to a place and when to refer to a time.",
      georgianCoreMeaning:
        "Where გამოიყენე ადგილის, ხოლო when — დროის აღსანიშნავად.",
      structure: [
        {
          label: "Place",
          formula: "Place + where + subject + verb",
        },
        {
          label: "Time",
          formula: "Time + when + subject + verb",
        },
      ],
      examples: [
        {
          english: "This is the café where we first met.",
          georgian: "ეს ის კაფეა, სადაც პირველად შევხვდით.",
        },
        {
          english: "I remember the day when we launched the project.",
          georgian: "მახსოვს დღე, როცა პროექტი გავუშვით.",
        },
        {
          english: "Do you know a place where we can study?",
          georgian: "იცი ადგილი, სადაც შეგვიძლია ვისწავლოთ?",
        },
      ],
      commonMistakes: [
        {
          wrong: "This is the café which we first met.",
          correct: "This is the café where we first met.",
          explanation:
            "Use where to refer to the place in which an event happens.",
          georgianExplanation:
            "გამოიყენე where იმ ადგილის აღსანიშნავად, სადაც მოვლენა ხდება.",
        },
      ],
    },

    {
      id: "omitting-pronouns",
      title: "Omitting the relative pronoun",
      georgianTitle: "Relative pronoun-ის გამოტოვება",
      coreMeaning:
        "In defining relative clauses, we can often omit who, which, or that when it is the object of the clause. We cannot omit it when it is the subject.",
      georgianCoreMeaning:
        "Defining relative clause-ში who, which ან that ხშირად შეიძლება გამოტოვო, როცა ის წინადადების დამატებაა. მისი გამოტოვება არ შეიძლება, როცა ის ქვემდებარეა.",
      structure: [
        {
          label: "Object pronoun",
          formula: "Noun + (who/which/that) + subject + verb",
          note:
            "The relative pronoun can be omitted because it is the object.",
          georgianNote:
            "Relative pronoun შეიძლება გამოტოვო, რადგან ის დამატებაა.",
        },
        {
          label: "Subject pronoun",
          formula: "Noun + who/which/that + verb",
          note:
            "Do not omit the relative pronoun when it is the subject.",
          georgianNote:
            "თუ relative pronoun ქვემდებარეა, მისი გამოტოვება არ შეიძლება.",
        },
      ],
      examples: [
        {
          english: "The book (that) I borrowed was interesting.",
          georgian: "წიგნი, რომელიც ვისესხე, საინტერესო იყო.",
        },
        {
          english: "The person (who) you called is my colleague.",
          georgian: "ადამიანი, რომელსაც დაურეკე, ჩემი კოლეგაა.",
        },
        {
          english: "The person who called you is my colleague.",
          georgian: "ადამიანი, რომელმაც დაგირეკა, ჩემი კოლეგაა.",
        },
      ],
      commonMistakes: [
        {
          wrong: "The person called you is my colleague. (meaning: the person who called)",
          correct: "The person who called you is my colleague.",
          explanation:
            "Do not omit who when it is the subject of the relative clause.",
          georgianExplanation:
            "Who არ გამოტოვო, როცა ის relative clause-ის ქვემდებარეა.",
        },
      ],
    },
  ],
} as const;