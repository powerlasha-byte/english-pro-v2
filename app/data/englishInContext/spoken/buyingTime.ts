export type SpokenPhrase = {
  english: string;
  georgian: string;
  situation: string;
  situationGeorgian: string;
};

export type SpokenTopic = {
  id: string;
  title: string;
  georgianTitle: string;
  explanation: string;
  georgianExplanation: string;
  phrases: SpokenPhrase[];
};

export const buyingTime: SpokenTopic = {
  id: "buying-time",
  title: "Buying Time to Think",
  georgianTitle: "ფიქრისთვის დროის მოგება",
  explanation:
    "Use these natural expressions when you need a moment to think, organize your thoughts, or decide what to say next.",
  georgianExplanation:
    "გამოიყენე ეს ბუნებრივი გამოთქმები, როცა ცოტა დრო გჭირდება მოსაფიქრებლად, აზრების დასალაგებლად ან იმის გადასაწყვეტად, თუ შემდეგ რა თქვა.",

  phrases: [
    {
      english: "Let me think.",
      georgian: "მოდი, დავფიქრდე.",
      situation: "A simple way to ask for a moment before answering.",
      situationGeorgian:
        "მარტივი ფორმაა პასუხის გაცემამდე ცოტა დროის მოსათხოვად.",
    },

    {
      english: "That’s a good question.",
      georgian: "კარგი კითხვაა.",
      situation: "When you want a moment to consider your answer.",
      situationGeorgian:
        "როდესაც პასუხის მოსაფიქრებლად ცოტა დრო გჭირდება.",
    },

    {
      english: "How should I put this?",
      georgian: "როგორ ვთქვა ეს?",
      situation:
        "When you are choosing the right words to express an idea.",
      situationGeorgian:
        "როდესაც იდეის გამოსახატავად სწორ სიტყვებს არჩევ.",
    },

    {
      english: "Let me see…",
      georgian: "მოდი, ვნახოთ…",
      situation:
        "When you need a little time to remember or work something out.",
      situationGeorgian:
        "როდესაც რაღაცის გასახსენებლად ან გასააზრებლად ცოტა დრო გჭირდება.",
    },

    {
      english: "Well, it’s hard to say.",
      georgian: "ჰმ, რთულია თქმა.",
      situation:
        "When you are unsure or the answer is not straightforward.",
      situationGeorgian:
        "როდესაც დარწმუნებული არ ხარ ან პასუხი მარტივი და ცალსახა არ არის.",
    },

    {
      english: "I haven’t really thought about it.",
      georgian: "ამაზე ჯერ კარგად არ მიფიქრია.",
      situation:
        "When someone asks for your opinion on something you have not considered.",
      situationGeorgian:
        "როდესაც ვიღაც გეკითხება აზრს საკითხზე, რომელზეც აქამდე არ გიფიქრია.",
    },

    {
      english: "Give me a second.",
      georgian: "ერთი წამი მომეცი.",
      situation:
        "A casual way to ask for a brief moment.",
      situationGeorgian:
        "არაფორმალური და ყოველდღიური ფორმაა მცირე დროის მოსათხოვად.",
    },

    {
      english: "Let me get back to you on that.",
      georgian: "ამაზე პასუხს მოგვიანებით დაგიბრუნებ.",
      situation:
        "When you need more time or information before giving an answer.",
      situationGeorgian:
        "როდესაც პასუხის გასაცემად მეტი დრო ან დამატებითი ინფორმაცია გჭირდება.",
    },

    {
      english: "I’m trying to remember.",
      georgian: "ვცდილობ, გავიხსენო.",
      situation:
        "When you are searching your memory for something.",
      situationGeorgian:
        "როდესაც ცდილობ, მეხსიერებიდან რაღაც გაიხსენო.",
    },

    {
      english: "Off the top of my head…",
      georgian: "რაც ახლა უცებ მახსენდება…",
      situation:
        "When you give an answer without checking or thinking about it deeply.",
      situationGeorgian:
        "როდესაც პასუხს ამბობ დამატებითი გადამოწმების ან ღრმად დაფიქრების გარეშე.",
    },

    {
      english: "I need to think that through.",
      georgian: "ამაზე კარგად უნდა დავფიქრდე.",
      situation:
        "When you need time to consider something carefully.",
      situationGeorgian:
        "როდესაც რაღაცის ყურადღებით გასაანალიზებლად და დასაფიქრებლად დრო გჭირდება.",
    },

    {
      english: "I’m not sure how to answer that.",
      georgian: "არ ვიცი, ამაზე როგორ გიპასუხო.",
      situation:
        "When you are unsure what to say in response to a question.",
      situationGeorgian:
        "როდესაც არ ხარ დარწმუნებული, კითხვაზე პასუხად რა უნდა თქვა.",
    },
  ],
};