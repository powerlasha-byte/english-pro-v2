
export type SpokenPhrase = {
  english: string;
  georgian: string;
  situation: string;
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
    },
    {
      english: "That’s a good question.",
      georgian: "კარგი კითხვაა.",
      situation: "When you want a moment to consider your answer.",
    },
    {
      english: "How should I put this?",
      georgian: "როგორ ვთქვა ეს?",
      situation: "When you are choosing the right words to express an idea.",
    },
    {
      english: "Let me see…",
      georgian: "მოდი, ვნახოთ…",
      situation: "When you need a little time to remember or work something out.",
    },
    {
      english: "Well, it’s hard to say.",
      georgian: "ჰმ, რთულია თქმა.",
      situation: "When you are unsure or the answer is not straightforward.",
    },
    {
      english: "I haven’t really thought about it.",
      georgian: "ამაზე ჯერ კარგად არ მიფიქრია.",
      situation: "When someone asks for your opinion on something you have not considered.",
    },
    {
      english: "Give me a second.",
      georgian: "ერთი წამი მომეცი.",
      situation: "A casual way to ask for a brief moment.",
    },
    {
      english: "Let me get back to you on that.",
      georgian: "ამაზე პასუხს მოგვიანებით დაგიბრუნებ.",
      situation: "When you need more time or information before giving an answer.",
    },
    {
      english: "I’m trying to remember.",
      georgian: "ვცდილობ, გავიხსენო.",
      situation: "When you are searching your memory for something.",
    },
    {
      english: "Off the top of my head…",
      georgian: "რაც ახლა უცებ მახსენდება…",
      situation: "When you give an answer without checking or thinking about it deeply.",
    },
    {
      english: "I need to think that through.",
      georgian: "ამაზე კარგად უნდა დავფიქრდე.",
      situation: "When you need time to consider something carefully.",
    },
    {
      english: "I’m not sure how to answer that.",
      georgian: "არ ვიცი, ამაზე როგორ გიპასუხო.",
      situation: "When you are unsure what to say in response to a question.",
    },
  ],
};