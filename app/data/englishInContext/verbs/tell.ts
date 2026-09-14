export const tell = {
  id: "tell",
  title: "TELL",
  georgianTitle: "უთხრა; მოუყვე; აცნობო",
  introduction:
    "TELL is commonly used when we give someone information, instructions, or a story. Unlike SAY, it usually takes the listener directly.",
  georgianIntroduction:
    "TELL-ს ხშირად ვიყენებთ, როცა ვინმეს ინფორმაციას ვაწვდით, ინსტრუქციას ვაძლევთ ან ამბავს ვუყვებით. SAY-სგან განსხვავებით, TELL-თან ხშირად პირდაპირ ვუთითებთ მსმენელს.",

  patterns: [
    {
      id: "tell-someone-something",
      title: "Tell someone something",
      pattern: "tell + someone + something",
      explanation:
        "To give someone information or communicate something to them.",
      georgianExplanation:
        "ვინმესთვის ინფორმაციის მიწოდება ან რაიმეს თქმა.",
      examples: [
        {
          english: "Please tell me the truth.",
          georgian: "გთხოვ, სიმართლე მითხარი.",
        },
        {
          english: "She told us the good news.",
          georgian: "მან კარგი ამბავი შეგვატყობინა.",
        },
      ],
    },
    {
      id: "tell-someone-to-do",
      title: "Tell someone to do something",
      pattern: "tell + someone + to + verb",
      explanation:
        "To give someone an instruction or tell them what they should do.",
      georgianExplanation:
        "ვინმესთვის მითითების მიცემა ან იმის თქმა, რა უნდა გააკეთოს.",
      examples: [
        {
          english: "The manager told me to wait.",
          georgian: "მენეჯერმა მითხრა, რომ დამეცადა.",
        },
        {
          english: "I told him to call you.",
          georgian: "მას ვუთხარი, რომ შენთვის დაერეკა.",
        },
      ],
    },
    {
      id: "tell-someone-that",
      title: "Tell someone that…",
      pattern: "tell + someone + (that) + sentence",
      explanation:
        "To inform someone about a fact, situation, or message. “That” is often optional.",
      georgianExplanation:
        "ვინმესთვის ფაქტის, სიტუაციის ან გზავნილის შეტყობინება. “That” ხშირად შეიძლება გამოტოვო.",
      examples: [
        {
          english: "He told me that he was busy.",
          georgian: "მან მითხრა, რომ დაკავებული იყო.",
        },
        {
          english: "Tell her I’ll be late.",
          georgian: "უთხარი, რომ დამაგვიანდება.",
        },
      ],
    },
    {
      id: "tell-someone-about",
      title: "Tell someone about something",
      pattern: "tell + someone + about + topic",
      explanation:
        "To give someone information or details about a topic or experience.",
      georgianExplanation:
        "ვინმესთვის რაიმე თემის ან გამოცდილების შესახებ ინფორმაციის მიწოდება.",
      examples: [
        {
          english: "Tell me about your new job.",
          georgian: "მომიყევი შენი ახალი სამსახურის შესახებ.",
        },
        {
          english: "She told us about her trip.",
          georgian: "მან თავისი მოგზაურობის შესახებ მოგვიყვა.",
        },
      ],
    },
    {
      id: "tell-a-story-joke",
      title: "Tell a story / joke",
      pattern: "tell + a story / joke",
      explanation:
        "To narrate a story or say something intended to make people laugh.",
      georgianExplanation:
        "ამბის მოყოლა ან ისეთი რამის თქმა, რაც ხალხს გააცინებს.",
      examples: [
        {
          english: "My grandfather told us a story.",
          georgian: "ბაბუამ ამბავი მოგვიყვა.",
        },
        {
          english: "He told a funny joke.",
          georgian: "მან სასაცილო ხუმრობა თქვა.",
        },
      ],
    },
    {
      id: "tell-the-difference",
      title: "Tell the difference",
      pattern: "tell the difference between A and B",
      explanation:
        "To recognize or understand how two things are different.",
      georgianExplanation:
        "ორი რამის განსხვავების შემჩნევა ან გარჩევა.",
      examples: [
        {
          english: "I can’t tell the difference between these two words.",
          georgian: "ამ ორ სიტყვას შორის განსხვავებას ვერ ვარჩევ.",
        },
        {
          english: "Can you tell the difference?",
          georgian: "შეგიძლია განსხვავება შეამჩნიო?",
        },
      ],
    },
  ],

  collocations: [
    {
      phrase: "tell the truth",
      georgian: "სიმართლის თქმა",
      example: "You should always tell the truth.",
    },
    {
      phrase: "tell a lie",
      georgian: "ტყუილის თქმა",
      example: "He told a lie to avoid trouble.",
    },
    {
      phrase: "tell a story",
      georgian: "ამბის მოყოლა",
      example: "She told a story about her childhood.",
    },
    {
      phrase: "tell a joke",
      georgian: "ხუმრობის თქმა",
      example: "My uncle always tells the same joke.",
    },
    {
      phrase: "tell the difference",
      georgian: "განსხვავების გარჩევა",
      example: "It’s hard to tell the difference between them.",
    },
    {
      phrase: "tell the time",
      georgian: "საათის ცნობა",
      example: "Can your child tell the time?",
    },
  ],

  commonMistakes: [
    {
      wrong: "She told that she was tired.",
      correct: "She said that she was tired.",
      explanation:
        "When you do not mention the listener, use “say”: “She said that…”. With “tell,” normally include the person: “She told me that…”.",
      georgianExplanation:
        "თუ მსმენელს არ ვუთითებთ, გამოიყენე “say”: “She said that…”. “Tell”-თან ჩვეულებრივ უნდა დავასახელოთ, ვის უთხრა: “She told me that…”.",
    },
    {
      wrong: "He told to me the answer.",
      correct: "He told me the answer.",
      explanation:
        "Do not use “to” between “tell” and the person. Say “tell me,” “tell him,” or “tell us.”",
      georgianExplanation:
        "“Tell”-სა და ადამიანს შორის “to” არ გამოიყენო. სწორია “tell me,” “tell him” ან “tell us.”",
    },
    {
      wrong: "I told him that call me.",
      correct: "I told him to call me.",
      explanation:
        "For an instruction, use “tell + someone + to + verb.”",
      georgianExplanation:
        "მითითების მისაცემად გამოიყენე ფორმა “tell + someone + to + verb”.",
    },
  ],
};