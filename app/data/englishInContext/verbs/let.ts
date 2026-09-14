export const letVerb = {
  id: "let",
  title: "LET",
  georgianTitle: "ნება დართვა, დაშვება, არ შეშლა",
  introduction:
    "LET is commonly used to give permission, allow something to happen, or suggest doing something together.",
  georgianIntroduction:
    "LET ხშირად გამოიყენება ნებართვის მიცემის, რაიმეს დაშვების ან ერთად რაღაცის გაკეთების შეთავაზებისას.",

  patterns: [
    {
      id: "let-someone-do",
      title: "Let someone do something",
      pattern: "let + someone + base verb",
      explanation:
        "Use this pattern when you allow someone to do something. Do not use 'to' before the verb.",
      georgianExplanation:
        "გამოიყენე, როცა ვინმეს რაღაცის გაკეთების ნებას რთავ. ზმნის წინ to არ გამოიყენება.",
      examples: [
        {
          english: "Let me explain.",
          georgian: "ნება მომეცი, აგიხსნა.",
        },
        {
          english: "My parents let me stay out late.",
          georgian: "მშობლებმა გვიანობამდე გარეთ დარჩენის ნება დამრთეს.",
        },
        {
          english: "Please let her speak.",
          georgian: "გთხოვ, მას საუბრის საშუალება მიეცი.",
        },
      ],
    },
    {
      id: "let-me",
      title: "Let me + verb",
      pattern: "let me + base verb",
      explanation:
        "Use it to offer help, ask for an opportunity, or say what you are going to do.",
      georgianExplanation:
        "გამოიყენება დახმარების შეთავაზებისას, შესაძლებლობის თხოვნისას ან იმის სათქმელად, რის გაკეთებასაც აპირებ.",
      examples: [
        {
          english: "Let me help you with that.",
          georgian: "ნება მომეცი, ამაში დაგეხმარო.",
        },
        {
          english: "Let me check the schedule.",
          georgian: "მოდი, განრიგს შევამოწმებ.",
        },
        {
          english: "Let me know when you're ready.",
          georgian: "შემატყობინე, როცა მზად იქნები.",
        },
      ],
    },
    {
      id: "lets",
      title: "Let's + verb",
      pattern: "let's + base verb",
      explanation:
        "Use 'let's' to suggest doing something together. It is short for 'let us'.",
      georgianExplanation:
        "Let's გამოიყენე, როცა ერთად რაღაცის გაკეთებას სთავაზობ. ეს არის let us-ის შემოკლებული ფორმა.",
      examples: [
        {
          english: "Let's get started.",
          georgian: "მოდი, დავიწყოთ.",
        },
        {
          english: "Let's talk about it tomorrow.",
          georgian: "მოდი, ამაზე ხვალ ვისაუბროთ.",
        },
        {
          english: "Let's not waste any more time.",
          georgian: "მოდი, მეტი დრო აღარ დავკარგოთ.",
        },
      ],
    },
    {
      id: "let-someone-know",
      title: "Let someone know",
      pattern: "let + someone + know + information",
      explanation:
        "Use this expression to tell someone something or inform them about a situation.",
      georgianExplanation:
        "გამოიყენება, როცა ვინმეს რაღაცას ატყობინებ ან ინფორმაციას აწვდი.",
      examples: [
        {
          english: "Let me know if you need anything.",
          georgian: "შემატყობინე, თუ რამე დაგჭირდება.",
        },
        {
          english: "Please let us know your decision.",
          georgian: "გთხოვ, შენი გადაწყვეტილება შეგვატყობინე.",
        },
        {
          english: "I'll let you know as soon as I hear back.",
          georgian: "როგორც კი პასუხს მივიღებ, შეგატყობინებ.",
        },
      ],
    },
    {
      id: "let-something-happen",
      title: "Let something happen",
      pattern: "let + something + base verb",
      explanation:
        "Use it when you allow a situation or event to happen without trying to stop it.",
      georgianExplanation:
        "გამოიყენება, როცა რაიმე სიტუაციას ან მოვლენას მოხდენის საშუალებას აძლევ და არ აჩერებ.",
      examples: [
        {
          english: "Sometimes you have to let things happen naturally.",
          georgian: "ზოგჯერ მოვლენებს ბუნებრივად განვითარების საშუალება უნდა მისცე.",
        },
        {
          english: "Don't let fear control your decisions.",
          georgian: "შიშს ნუ მისცემ შენი გადაწყვეტილებების მართვის უფლებას.",
        },
        {
          english: "We can't let this opportunity pass.",
          georgian: "ამ შესაძლებლობას ხელიდან ვერ გავუშვებთ.",
        },
      ],
    },
    {
      id: "let-go-of",
      title: "Let go of",
      pattern: "let go of + person / thing",
      explanation:
        "Use it literally to release your hold, or figuratively to stop holding onto an idea, feeling, or past situation.",
      georgianExplanation:
        "პირდაპირი მნიშვნელობით ნიშნავს ხელის გაშვებას, გადატანითი მნიშვნელობით კი — რაიმეზე ან წარსულზე მიჯაჭვულობის შეწყვეტას.",
      examples: [
        {
          english: "Let go of my hand.",
          georgian: "ხელი გამიშვი.",
        },
        {
          english: "It's time to let go of the past.",
          georgian: "დროა, წარსულს თავი დაანებო.",
        },
        {
          english: "Try to let go of that worry.",
          georgian: "ეცადე, ამაზე ნერვიულობას თავი დაანებო.",
        },
      ],
    },
    {
      id: "let-down",
      title: "Let someone down",
      pattern: "let + someone + down",
      explanation:
        "Use it when you disappoint someone or fail to do what they expected.",
      georgianExplanation:
        "გამოიყენება, როცა ვინმეს იმედს უცრუებ ან მის მოლოდინს ვერ ამართლებ.",
      examples: [
        {
          english: "I don't want to let you down.",
          georgian: "არ მინდა, იმედი გაგიცრუო.",
        },
        {
          english: "She felt she had let her team down.",
          georgian: "მას ეგონა, რომ გუნდს იმედი გაუცრუა.",
        },
        {
          english: "You can trust me. I won't let you down.",
          georgian: "შეგიძლია მენდო. იმედს არ გაგიცრუებ.",
        },
      ],
    },
    {
      id: "let-in-out",
      title: "Let someone in / out",
      pattern: "let + someone + in / out",
      explanation:
        "Use these expressions when you allow someone to enter or leave a place.",
      georgianExplanation:
        "გამოიყენება, როცა ვინმეს სადმე შესვლის ან იქიდან გასვლის ნებას რთავ.",
      examples: [
        {
          english: "Could you let me in?",
          georgian: "შეგიძლია, შემომიშვა?",
        },
        {
          english: "The guard wouldn't let us in.",
          georgian: "დაცვამ შიგნით არ შეგვიშვა.",
        },
        {
          english: "Please let the dog out.",
          georgian: "გთხოვ, ძაღლი გარეთ გაუშვი.",
        },
      ],
    },
  ],

  collocations: [
    {
      phrase: "let someone down",
      georgian: "ვინმეს იმედის გაცრუება",
      example: "I promised I wouldn't let my friends down.",
    },
    {
      phrase: "let someone know",
      georgian: "ვინმესთვის შეტყობინება",
      example: "Let me know what you decide.",
    },
    {
      phrase: "let it go",
      georgian: "თავის დანებება, გაშვება",
      example: "It's not worth arguing about. Just let it go.",
    },
    {
      phrase: "let someone in on a secret",
      georgian: "ვინმესთვის საიდუმლოს გამხელა",
      example: "Can I let you in on a little secret?",
    },
    {
      phrase: "let nature take its course",
      georgian: "მოვლენებისთვის ბუნებრივად განვითარების საშუალების მიცემა",
      example: "We decided to let nature take its course.",
    },
  ],

  commonMistakes: [
    {
      wrong: "Let me to explain.",
      correct: "Let me explain.",
      explanation:
        "After 'let + object', use the base form of the verb without 'to'.",
      georgianExplanation:
        "Let + ობიექტის შემდეგ ზმნის საწყისი ფორმა გამოიყენება to-ის გარეშე.",
    },
    {
      wrong: "She lets me to use her laptop.",
      correct: "She lets me use her laptop.",
      explanation:
        "Even with 'lets', the following verb does not take 'to'.",
      georgianExplanation:
        "Lets-ის შემდეგაც ზმნას to არ ემატება.",
    },
    {
      wrong: "Let's to go home.",
      correct: "Let's go home.",
      explanation:
        "Use 'let's + base verb', without 'to'.",
      georgianExplanation:
        "სწორი ფორმაა let's + ზმნის საწყისი ფორმა, to-ის გარეშე.",
    },
    {
      wrong: "Don't let me downed.",
      correct: "Don't let me down.",
      explanation:
        "In 'let someone down', the particle 'down' does not change.",
      georgianExplanation:
        "Let someone down გამოთქმაში down უცვლელი რჩება.",
    },
  ],
};