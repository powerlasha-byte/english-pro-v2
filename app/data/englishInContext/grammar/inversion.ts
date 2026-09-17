export const inversion = {
  title: "Inversion",
  georgianTitle: "ინვერსია",
  introduction:
    "Inversion means changing the usual word order, often by placing an auxiliary verb before the subject. It is used for emphasis and in formal or literary English.",
  georgianIntroduction:
    "ინვერსია ნიშნავს სიტყვების ჩვეულებრივი წყობის შეცვლას. ხშირად დამხმარე ზმნა ქვემდებარის წინ გადადის. ინგლისურში მას იყენებენ აზრის გასაძლიერებლად და უფრო ფორმალურ ან ლიტერატურულ სტილში.",

  learningNote: {
    title: "Remember",
    explanation:
      "In many negative or restrictive expressions, inversion follows this pattern: expression + auxiliary verb + subject + main verb. If there is no auxiliary verb, use do, does, or did.",
    georgianExplanation:
      "ბევრ უარყოფით ან შემზღუდველ გამოთქმასთან გამოიყენება ასეთი წყობა: გამოთქმა + დამხმარე ზმნა + ქვემდებარე + მთავარი ზმნა. თუ წინადადებაში დამხმარე ზმნა არ არის, გამოიყენე do, does ან did.",
  },

  types: [
    {
      id: "negative-adverbials",
      title: "Negative adverbials",
      georgianTitle: "უარყოფითი ზმნიზედები",
      coreMeaning:
        "Expressions such as never, rarely, seldom, and little can move to the beginning of a sentence. This creates an inverted word order.",
      georgianCoreMeaning:
        "Never, rarely, seldom და little შეიძლება წინადადების დასაწყისში გადავიდეს. ამის შემდეგ სიტყვების წყობა ინვერსიული ხდება.",
      structure: [
        {
          label: "Structure",
          formula: "Negative adverbial + auxiliary + subject + main verb",
          note: "Use do, does, or did when there is no other auxiliary.",
          georgianNote:
            "თუ წინადადებაში სხვა დამხმარე ზმნა არ არის, გამოიყენე do, does ან did.",
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
          english: "Little did they know what would happen next.",
          georgian: "მათ წარმოდგენაც არ ჰქონდათ, შემდეგ რა მოხდებოდა.",
        },
      ],
      commonMistakes: [
        {
          wrong: "Never I have seen such a beautiful view.",
          correct: "Never have I seen such a beautiful view.",
          explanation:
            "After a negative adverbial at the beginning, the auxiliary comes before the subject.",
          georgianExplanation:
            "როცა უარყოფითი ზმნიზედა წინადადების დასაწყისშია, დამხმარე ზმნა ქვემდებარეს წინ უსწრებს.",
        },
      ],
    },

    {
      id: "not-until",
      title: "Not until",
      georgianTitle: "Not until — მხოლოდ მაშინ, როცა",
      coreMeaning:
        "When not until introduces the beginning of a sentence, the main clause uses inversion to emphasize that something happened only at a particular time.",
      georgianCoreMeaning:
        "როცა not until წინადადების დასაწყისშია, მთავარ წინადადებაში გამოიყენება ინვერსია. ეს ხაზს უსვამს იმას, რომ რაღაც მხოლოდ კონკრეტულ მომენტში მოხდა.",
      structure: [
        {
          label: "Structure",
          formula: "Not until + time/event + auxiliary + subject + main verb",
          note: "The inversion happens in the main clause, not inside the not until clause.",
          georgianNote:
            "ინვერსია ხდება მთავარ წინადადებაში და არა not until-ით დაწყებულ ნაწილში.",
        },
      ],
      examples: [
        {
          english: "Not until midnight did we finish the report.",
          georgian: "მხოლოდ შუაღამისას დავასრულეთ ანგარიში.",
        },
        {
          english: "Not until I read the email did I understand the problem.",
          georgian: "მხოლოდ ელფოსტის წაკითხვის შემდეგ გავიგე პრობლემა.",
        },
      ],
      commonMistakes: [
        {
          wrong: "Not until midnight we finished the report.",
          correct: "Not until midnight did we finish the report.",
          explanation:
            "When not until is placed first, use inversion in the main clause.",
          georgianExplanation:
            "როცა not until წინადადების დასაწყისშია, მთავარ წინადადებაში ინვერსია გამოიყენე.",
        },
      ],
    },

    {
      id: "only-expressions",
      title: "Only expressions",
      georgianTitle: "Only-ით დაწყებული გამოთქმები",
      coreMeaning:
        "When only then, only after, only when, or only by begins a sentence, inversion is used in the main clause.",
      georgianCoreMeaning:
        "როცა წინადადება იწყება only then, only after, only when ან only by გამოთქმით, მთავარ წინადადებაში გამოიყენება ინვერსია.",
      structure: [
        {
          label: "Structure",
          formula: "Only + time/condition + auxiliary + subject + main verb",
          note: "The clause after only may keep normal word order; inversion is in the main clause.",
          georgianNote:
            "Only-ის შემდეგ მდგომ ნაწილში შეიძლება ჩვეულებრივი წყობა დარჩეს; ინვერსია მთავარ წინადადებაში ხდება.",
        },
      ],
      examples: [
        {
          english: "Only then did I realize my mistake.",
          georgian: "მხოლოდ მაშინ მივხვდი ჩემს შეცდომას.",
        },
        {
          english: "Only after the meeting did we make a decision.",
          georgian: "გადაწყვეტილება მხოლოდ შეხვედრის შემდეგ მივიღეთ.",
        },
        {
          english: "Only by working together can we solve this problem.",
          georgian: "ამ პრობლემის გადაჭრა მხოლოდ ერთად მუშაობით შეგვიძლია.",
        },
      ],
      commonMistakes: [
        {
          wrong: "Only then I realized my mistake.",
          correct: "Only then did I realize my mistake.",
          explanation:
            "When an only-expression is placed at the beginning, the main clause uses inversion.",
          georgianExplanation:
            "როცა only-ით დაწყებული გამოთქმა წინადადების დასაწყისშია, მთავარ წინადადებაში ინვერსია გამოიყენე.",
        },
      ],
    },

    {
      id: "not-only",
      title: "Not only ... but also",
      georgianTitle: "Not only ... but also",
      coreMeaning:
        "When not only begins a clause, inversion is used in that clause to add emphasis. The second part usually follows normal word order.",
      georgianCoreMeaning:
        "როცა not only წინადადების ნაწილს იწყებს, ამ ნაწილში ინვერსია გამოიყენება აზრის გასაძლიერებლად. მეორე ნაწილი, როგორც წესი, ჩვეულებრივ წყობას ინარჩუნებს.",
      structure: [
        {
          label: "Structure",
          formula: "Not only + auxiliary + subject + main verb, but also + clause",
          note: "Use inversion after not only when it begins the sentence or clause.",
          georgianNote:
            "Not only-ის შემდეგ გამოიყენე ინვერსია, როცა ის წინადადებას ან მის ნაწილს იწყებს.",
        },
      ],
      examples: [
        {
          english: "Not only did she finish the project, but she also helped her team.",
          georgian: "მან არა მხოლოდ პროექტი დაასრულა, არამედ გუნდსაც დაეხმარა.",
        },
        {
          english: "Not only is the report accurate, but it is also easy to read.",
          georgian: "ანგარიში არა მხოლოდ ზუსტია, არამედ ადვილად წასაკითხიცაა.",
        },
      ],
      commonMistakes: [
        {
          wrong: "Not only she finished the project, but she also helped her team.",
          correct:
            "Not only did she finish the project, but she also helped her team.",
          explanation:
            "When not only starts the clause, place the auxiliary before the subject.",
          georgianExplanation:
            "როცა not only წინადადების ნაწილს იწყებს, დამხმარე ზმნა ქვემდებარეს წინ უნდა დაუდგეს.",
        },
      ],
    },

    {
      id: "so-neither-nor",
      title: "So / Neither / Nor",
      georgianTitle: "So / Neither / Nor — თანხმობა",
      coreMeaning:
        "So is used to agree with a positive statement. Neither and nor are used to agree with a negative statement. The auxiliary comes before the subject.",
      georgianCoreMeaning:
        "So გამოიყენება დადებით წინადადებაზე თანხმობისთვის, ხოლო neither და nor — უარყოფითზე. დამხმარე ზმნა ქვემდებარეს წინ უსწრებს.",
      structure: [
        {
          label: "Positive agreement",
          formula: "So + auxiliary + subject",
          note: "Choose the auxiliary that matches the original sentence.",
          georgianNote:
            "შეარჩიე დამხმარე ზმნა, რომელიც საწყის წინადადებას შეესაბამება.",
        },
        {
          label: "Negative agreement",
          formula: "Neither/Nor + auxiliary + subject",
          note: "Use neither or nor to agree with a negative statement.",
          georgianNote:
            "უარყოფით წინადადებაზე თანხმობისთვის გამოიყენე neither ან nor.",
        },
      ],
      examples: [
        {
          english: "“I like this song.” “So do I.”",
          georgian: "„ეს სიმღერა მომწონს.“ „მეც.“",
        },
        {
          english: "“She has finished.” “So have I.”",
          georgian: "„მან დაასრულა.“ „მეც.“",
        },
        {
          english: "“I don't eat meat.” “Neither do I.”",
          georgian: "„ხორცს არ ვჭამ.“ „არც მე.“",
        },
      ],
      commonMistakes: [
        {
          wrong: "So I do.",
          correct: "So do I.",
          explanation:
            "For agreement meaning “me too,” put the auxiliary before the subject.",
          georgianExplanation:
            "„მეც“ მნიშვნელობით თანხმობისას დამხმარე ზმნა ქვემდებარეს წინ უნდა იდგეს.",
        },
      ],
    },

    {
      id: "conditional-inversion",
      title: "Inverted conditionals",
      georgianTitle: "პირობითი წინადადებების ინვერსია",
      coreMeaning:
        "In formal English, if can be omitted in some conditional sentences by moving an auxiliary verb before the subject.",
      georgianCoreMeaning:
        "ფორმალურ ინგლისურში ზოგიერთ პირობით წინადადებაში if შეიძლება გამოტოვო და დამხმარე ზმნა ქვემდებარეს წინ გადაიტანო.",
      structure: [
        {
          label: "Had",
          formula: "Had + subject + past participle, ...",
          note: "This form corresponds to if + past perfect.",
          georgianNote:
            "ეს ფორმა შეესაბამება if + past perfect კონსტრუქციას.",
        },
        {
          label: "Were",
          formula: "Were + subject + to-infinitive, ...",
          note: "This form is used for formal or hypothetical situations.",
          georgianNote:
            "ეს ფორმა გამოიყენება ფორმალურ ან ჰიპოთეტურ სიტუაციებში.",
        },
        {
          label: "Should",
          formula: "Should + subject + base verb, ...",
          note: "This form often describes a possible future event.",
          georgianNote:
            "ეს ფორმა ხშირად შესაძლო მომავალ მოვლენას აღწერს.",
        },
      ],
      examples: [
        {
          english: "Had I known, I would have called you.",
          georgian: "რომ მცოდნოდა, დაგირეკავდი.",
        },
        {
          english: "Were I to move abroad, I would miss my family.",
          georgian: "უცხოეთში რომ გადავიდე, ოჯახი მომენატრება.",
        },
        {
          english: "Should you need help, please contact me.",
          georgian: "თუ დახმარება დაგჭირდებათ, დამიკავშირდით.",
        },
      ],
      commonMistakes: [
        {
          wrong: "Had I knew, I would have called you.",
          correct: "Had I known, I would have called you.",
          explanation:
            "After had, use the past participle, not the past simple form.",
          georgianExplanation:
            "Had-ის შემდეგ გამოიყენე past participle და არა past simple ფორმა.",
        },
      ],
    },
  ],
} as const;