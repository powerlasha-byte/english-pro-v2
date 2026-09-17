
export const ellipsis = {
  id: "ellipsis",
  title: "Ellipsis",
  georgianTitle: "სიტყვების გამოტოვება",

  introduction:
    "Ellipsis is the omission of words that are understood from the context. It helps make English sound more natural, concise, and less repetitive. The omitted words are not needed because the listener or reader can understand the meaning without them.",

  georgianIntroduction:
    "Ellipsis ნიშნავს ისეთი სიტყვების გამოტოვებას, რომელთა მნიშვნელობაც კონტექსტიდან გასაგებია. ის ინგლისურს უფრო ბუნებრივს, მოკლეს და ნაკლებად განმეორებადს ხდის. გამოტოვებული სიტყვები საჭირო აღარ არის, რადგან მსმენელი ან მკითხველი მათ გარეშეც იგებს აზრს.",

  learningNote: {
    title: "The basic idea",
    explanation:
      "We often leave out words when repeating them would sound unnecessary. For example: “I can swim, and my brother can, too.” The words “swim” are understood, so they do not need to be repeated.",

    georgianExplanation:
      "ხშირად სიტყვებს ვტოვებთ, როცა მათი გამეორება საჭირო არ არის. მაგალითად: “I can swim, and my brother can, too.” მეორე ნაწილში swim იგულისხმება, ამიტომ მისი ხელახლა თქმა საჭირო არ არის.",
  },

  types: [
    {
      id: "auxiliary-verb-ellipsis",
      title: "Ellipsis with Auxiliary Verbs",
      georgianTitle: "დამხმარე ზმნის შემდეგ სიტყვების გამოტოვება",

      coreMeaning:
        "After an auxiliary or modal verb, we can omit the main verb or the rest of the verb phrase when it is clear from the context.",

      georgianCoreMeaning:
        "დამხმარე ან მოდალური ზმნის შემდეგ შეგვიძლია გამოვტოვოთ მთავარი ზმნა ან ზმნური ფრაზის დარჩენილი ნაწილი, როცა ის კონტექსტიდან გასაგებია.",

      structure: [
        {
          label: "FORM",
          formula: "Subject + auxiliary/modal verb (+ the rest omitted)",
          note:
            "Common auxiliaries include be, have, and do. Common modal verbs include can, will, should, and might.",
          georgianNote:
            "ხშირი დამხმარე ზმნებია be, have და do. მოდალური ზმნების მაგალითებია can, will, should და might.",
        },
      ],

      examples: [
        {
          english: "I can drive, but my sister can't.",
          georgian: "მე მანქანის მართვა შემიძლია, ჩემს დას კი — არა.",
        },
        {
          english: "He hasn't finished the report, but I have.",
          georgian: "მას რეპორტი არ დაუსრულებია, მე კი დავასრულე.",
        },
        {
          english: "She said she would call, and she did.",
          georgian: "მან თქვა, რომ დარეკავდა და ასეც მოიქცა.",
        },
        {
          english: "You should check the figures, and I will, too.",
          georgian: "შენ ციფრები უნდა გადაამოწმო და მეც გადავამოწმებ.",
        },
      ],

      commonMistakes: [
        {
          wrong: "I can drive, but my sister can't drive it.",
          correct: "I can drive, but my sister can't.",
          explanation:
            "If the action is already clear, repeating the verb is often unnecessary. The longer version may be correct when you need to clarify what someone cannot drive.",
          georgianExplanation:
            "თუ მოქმედება უკვე გასაგებია, ზმნის გამეორება ხშირად საჭირო არ არის. გრძელი ფორმაც შეიძლება სწორი იყოს, როცა საჭიროა დაზუსტება, კონკრეტულად რის მართვა არ შეუძლია ადამიანს.",
        },
      ],
    },

    {
      id: "comparative-ellipsis",
      title: "Ellipsis in Comparisons",
      georgianTitle: "გამოტოვება შედარებით წინადადებებში",

      coreMeaning:
        "In comparisons, we often omit words that have already appeared or are easy to understand.",

      georgianCoreMeaning:
        "შედარებით წინადადებებში ხშირად გამოვტოვებთ სიტყვებს, რომლებიც უკვე ნახსენებია ან მარტივად იგულისხმება.",

      structure: [
        {
          label: "FORM",
          formula: "Comparative phrase + than + subject (+ auxiliary)",
          note:
            "The omitted verb phrase is understood from the first part of the sentence.",
          georgianNote:
            "გამოტოვებული ზმნური ფრაზა წინადადების პირველი ნაწილიდან იგულისხმება.",
        },
      ],

      examples: [
        {
          english: "This report is clearer than the previous one.",
          georgian: "ეს რეპორტი წინაზე უფრო გასაგებია.",
        },
        {
          english: "Anna works faster than I do.",
          georgian: "ანა ჩემზე სწრაფად მუშაობს.",
        },
        {
          english: "The new dashboard loads more quickly than the old one.",
          georgian: "ახალი დეშბორდი ძველზე უფრო სწრაფად იტვირთება.",
        },
        {
          english: "He has more experience than I have.",
          georgian: "მას ჩემზე მეტი გამოცდილება აქვს.",
        },
      ],

      commonMistakes: [
        {
          wrong: "Anna works faster than me do.",
          correct: "Anna works faster than I do.",
          explanation:
            "When you keep the auxiliary verb do, use the subject pronoun I. In informal English, “than me” is also common when the auxiliary is omitted.",
          georgianExplanation:
            "როცა დამხმარე ზმნა do რჩება, გამოიყენე ქვემდებარის ნაცვალსახელი I. არაფორმალურ ინგლისურში “than me”-ც ხშირად გამოიყენება, როცა დამხმარე ზმნა გამოტოვებულია.",
        },
      ],
    },

    {
      id: "noun-phrase-ellipsis",
      title: "Ellipsis in Noun Phrases",
      georgianTitle: "გამოტოვება არსებით სახელებთან",

      coreMeaning:
        "We can omit a noun when the meaning is clear, especially after words such as this, that, these, those, and numbers.",

      georgianCoreMeaning:
        "შეგვიძლია გამოვტოვოთ არსებითი სახელი, როცა მისი მნიშვნელობა გასაგებია — განსაკუთრებით this, that, these, those და რიცხვების შემდეგ.",

      structure: [
        {
          label: "FORM",
          formula: "Determiner / number / adjective + (noun omitted)",
          note:
            "The noun is understood from the previous sentence or the situation.",
          georgianNote:
            "არსებითი სახელი წინა წინადადებიდან ან სიტუაციიდან იგულისხმება.",
        },
      ],

      examples: [
        {
          english: "I prefer the blue shirt, not the red one.",
          georgian: "ლურჯი პერანგი მირჩევნია და არა წითელი.",
        },
        {
          english: "These reports are ready. Those aren't.",
          georgian: "ეს რეპორტები მზადაა, ისინი კი — არა.",
        },
        {
          english: "I need two files. Do you have any?",
          georgian: "ორი ფაილი მჭირდება. გაქვს რომელიმე?",
        },
        {
          english: "Some employees work remotely; others come to the office.",
          georgian: "ზოგი თანამშრომელი დისტანციურად მუშაობს, სხვები კი ოფისში მოდიან.",
        },
      ],

      commonMistakes: [
        {
          wrong: "I prefer the blue shirt, not the red.",
          correct: "I prefer the blue shirt, not the red one.",
          explanation:
            "In this comparison, one is commonly used to stand in for a singular countable noun. In some contexts, “the red” is possible, but “the red one” is clearer for learners.",
          georgianExplanation:
            "ასეთ შედარებაში one ხშირად ცვლის მხოლობით თვლად არსებით სახელს. ზოგ კონტექსტში “the red”-იც შესაძლებელია, თუმცა ენის შემსწავლელისთვის “the red one” უფრო მკაფიოა.",
        },
      ],
    },

    {
      id: "question-and-response-ellipsis",
      title: "Ellipsis in Short Responses",
      georgianTitle: "გამოტოვება მოკლე პასუხებში",

      coreMeaning:
        "In conversation, we often use short responses and omit information that is already clear from the question.",

      georgianCoreMeaning:
        "საუბარში ხშირად ვიყენებთ მოკლე პასუხებს და გამოვტოვებთ ინფორმაციას, რომელიც კითხვიდან უკვე გასაგებია.",

      structure: [
        {
          label: "FORM",
          formula: "Short answer / response + (understood words omitted)",
          note:
            "Short responses are natural in conversation. Use a full sentence when you need to be more explicit or formal.",
          georgianNote:
            "მოკლე პასუხები საუბარში ბუნებრივია. სრული წინადადება გამოიყენე, როცა უფრო მკაფიო ან ფორმალური პასუხია საჭირო.",
        },
      ],

      examples: [
        {
          english: "“Have you finished?” — “Not yet.”",
          georgian: "„დაასრულე?“ — „ჯერ არა.“",
        },
        {
          english: "“Who updated the file?” — “I did.”",
          georgian: "„ვინ განაახლა ფაილი?“ — „მე.“",
        },
        {
          english: "“Would you like some coffee?” — “Yes, please.”",
          georgian: "„ყავა გინდა?“ — „კი, გთხოვ.“",
        },
        {
          english: "“Are you coming to the meeting?” — “I think so.”",
          georgian: "„შეხვედრაზე მოდიხარ?“ — „ასე მგონია.“",
        },
      ],

      commonMistakes: [
        {
          wrong: "“Have you finished?” — “I have finished not yet.”",
          correct: "“Have you finished?” — “Not yet.”",
          explanation:
            "“Not yet” is a natural short response. The full sentence is possible, but it is unnecessarily repetitive in this context.",
          georgianExplanation:
            "“Not yet” ბუნებრივი მოკლე პასუხია. სრული წინადადებაც შესაძლებელია, თუმცა ამ კონტექსტში ზედმეტად განმეორებადია.",
        },
      ],
    },
  ],
} as const;