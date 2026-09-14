export const say = {
  id: "say",
  title: "SAY",
  georgianTitle: "თქმა; სიტყვის წარმოთქმა",
  introduction:
    "SAY focuses on the words someone speaks. It is often used with the words or message being expressed.",
  georgianIntroduction:
    "SAY ყურადღებას ამახვილებს ნათქვამ სიტყვებზე. მას ხშირად ვიყენებთ იმ სიტყვებთან ან გზავნილთან ერთად, რომლის გადმოცემაც გვინდა.",

  patterns: [
    {
      id: "say-something",
      title: "Say something",
      pattern: "say + something",
      explanation: "To speak or express particular words.",
      georgianExplanation: "კონკრეტული სიტყვების თქმა ან აზრის გამოხატვა.",
      examples: [
        {
          english: "She said something interesting.",
          georgian: "მან რაღაც საინტერესო თქვა.",
        },
        {
          english: "I didn't say a word.",
          georgian: "ერთი სიტყვაც არ მითქვამს.",
        },
      ],
    },
    {
      id: "say-that",
      title: "Say that…",
      pattern: "say + (that) + sentence",
      explanation:
        "To report what someone says or to express a statement. “That” is often optional.",
      georgianExplanation:
        "იმის გადმოცემა, რაც ვინმემ თქვა, ან რაიმე აზრის გამოხატვა. “That” ხშირად შეიძლება გამოტოვო.",
      examples: [
        {
          english: "He said that he was tired.",
          georgian: "მან თქვა, რომ დაღლილი იყო.",
        },
        {
          english: "I said I would call you.",
          georgian: "ვთქვი, რომ დაგირეკავდი.",
        },
      ],
    },
    {
      id: "say-something-to-someone",
      title: "Say something to someone",
      pattern: "say + something + to + someone",
      explanation:
        "To tell someone particular words. The words come after “say”; the listener is introduced with “to.”",
      georgianExplanation:
        "ვინმესთვის კონკრეტული სიტყვების თქმა. ნათქვამი მოდის “say”-ის შემდეგ, ხოლო მსმენელს “to”-თი ვუთითებთ.",
      examples: [
        {
          english: "What did you say to him?",
          georgian: "რა უთხარი მას?",
        },
        {
          english: "I need to say something to you.",
          georgian: "შენთვის რაღაც მაქვს სათქმელი.",
        },
      ],
    },
    {
      id: "say-sorry",
      title: "Say sorry / say thank you",
      pattern: "say + sorry / thank you",
      explanation:
        "To apologize or express gratitude using these common phrases.",
      georgianExplanation:
        "ბოდიშის მოხდა ან მადლობის გამოხატვა ამ გავრცელებული ფრაზებით.",
      examples: [
        {
          english: "You should say sorry.",
          georgian: "ბოდიში უნდა მოიხადო.",
        },
        {
          english: "I forgot to say thank you.",
          georgian: "მადლობის თქმა დამავიწყდა.",
        },
      ],
    },
    {
      id: "say-no-yes",
      title: "Say yes / no",
      pattern: "say + yes / no",
      explanation:
        "To give a positive or negative answer using the words “yes” or “no.”",
      georgianExplanation: "დადებითი ან უარყოფითი პასუხის გაცემა “yes” ან “no”-ს გამოყენებით.",
      examples: [
        {
          english: "She said yes to the offer.",
          georgian: "მან შეთავაზებას თანხმობა უთხრა.",
        },
        {
          english: "I said no because I was busy.",
          georgian: "უარი ვთქვი, რადგან დაკავებული ვიყავი.",
        },
      ],
    },
    {
      id: "say-something-about",
      title: "Say something about something",
      pattern: "say + something + about + topic",
      explanation: "To make a comment or give information about a topic.",
      georgianExplanation: "რაიმე თემაზე კომენტარის გაკეთება ან ინფორმაციის თქმა.",
      examples: [
        {
          english: "He said something about the new project.",
          georgian: "მან ახალ პროექტზე რაღაც თქვა.",
        },
        {
          english: "What did she say about the meeting?",
          georgian: "რა თქვა მან შეხვედრის შესახებ?",
        },
      ],
    },
  ],

  collocations: [
    {
      phrase: "say a few words",
      georgian: "რამდენიმე სიტყვის თქმა",
      example: "I'd like to say a few words about our team.",
    },
    {
      phrase: "say the truth",
      georgian: "სიმართლის თქმა",
      example: "Please say the truth.",
    },
    {
      phrase: "say goodbye",
      georgian: "დამშვიდობება",
      example: "We said goodbye and left.",
    },
    {
      phrase: "say it again",
      georgian: "ამის ხელახლა თქმა",
      example: "Could you say it again, please?",
    },
    {
      phrase: "say out loud",
      georgian: "ხმამაღლა თქმა",
      example: "Try to say the sentence out loud.",
    },
  ],

  commonMistakes: [
    {
      wrong: "She said me the answer.",
      correct: "She told me the answer.",
      explanation:
        "Use “tell someone something” when you mention the listener directly. With “say,” use “to”: “She said the answer to me.”",
      georgianExplanation:
        "როცა პირდაპირ ვუთითებთ, ვის ვეუბნებით, გამოიყენე “tell someone something”. “Say”-თან მსმენელს “to”-თი ვუთითებთ: “She said the answer to me.”",
    },
    {
      wrong: "He said me to wait.",
      correct: "He told me to wait.",
      explanation:
        "Use “tell someone to do something,” not “say someone to do something.”",
      georgianExplanation:
        "გამოიყენე “tell someone to do something” და არა “say someone to do something”.",
    },
    {
      wrong: "She said that me she was busy.",
      correct: "She said to me that she was busy.",
      explanation:
        "With “say,” put “to me” before or after the reported message: “She said to me that…” or “She said that… to me.”",
      georgianExplanation:
        "“Say”-თან “to me” მოათავსე ნათქვამამდე ან ნათქვამის შემდეგ: “She said to me that…” ან “She said that… to me.”",
    },
  ],
};