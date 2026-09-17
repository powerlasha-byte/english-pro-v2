
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

export const interrupting: SpokenTopic = {
  id: "interrupting",
  title: "Interrupting Politely",
  georgianTitle: "საუბარში თავაზიანად ჩართვა",
  explanation:
    "Use these expressions to enter a conversation, interrupt briefly, or get someone's attention without sounding rude.",
  georgianExplanation:
    "გამოიყენე ეს გამოთქმები საუბარში ჩასართავად, მოკლედ სიტყვის შესაწყვეტად ან სხვისი ყურადღების მისაქცევად ისე, რომ უხეშად არ გამოჩნდე.",
  phrases: [
    {
      english: "Sorry to interrupt, but…",
      georgian: "ბოდიში, რომ გაწყვეტინებ, მაგრამ…",
      situation: "A polite way to interrupt because you need to say something.",
    },
    {
      english: "Can I just add something?",
      georgian: "შეიძლება, ერთი რამ დავამატო?",
      situation: "When you want to contribute a thought to the conversation.",
    },
    {
      english: "Can I jump in here?",
      georgian: "შეიძლება, აქ ერთი რამ ჩავამატო?",
      situation: "A natural, conversational way to join in with a comment.",
    },
    {
      english: "Before you go on…",
      georgian: "სანამ გააგრძელებ…",
      situation: "When you need to ask or clarify something before the person continues.",
    },
    {
      english: "Just one quick question.",
      georgian: "მხოლოდ ერთი მოკლე კითხვა მაქვს.",
      situation: "When you want to ask a brief question without taking over the conversation.",
    },
    {
      english: "Sorry, can I stop you there for a second?",
      georgian: "ბოდიში, შეიძლება ერთი წამით შეგაჩერო?",
      situation: "When you need to pause someone to clarify or respond to a point.",
    },
    {
      english: "If I could just say something…",
      georgian: "თუ შეიძლება, ერთი რამ ვთქვა…",
      situation: "A slightly more formal way to ask for a moment to speak.",
    },
    {
      english: "Go ahead, sorry.",
      georgian: "გააგრძელე, ბოდიში.",
      situation: "When you accidentally start speaking at the same time as someone else.",
    },
    {
      english: "Sorry, I didn’t mean to cut you off.",
      georgian: "ბოდიში, არ მინდოდა სიტყვა გამეწყვეტინებინა.",
      situation: "When you realize you interrupted someone unintentionally.",
    },
    {
      english: "Please, go on.",
      georgian: "გთხოვ, გააგრძელე.",
      situation: "When you want to give the other person the floor again.",
    },
    {
      english: "Can I come back to that in a moment?",
      georgian: "შეიძლება, ამ საკითხს ცოტა ხანში დავუბრუნდე?",
      situation: "When you want to pause the current point and return to it later.",
    },
    {
      english: "I’m sorry, but I need to jump in.",
      georgian: "ბოდიში, მაგრამ საუბარში უნდა ჩავერთო.",
      situation: "When you need to speak up, for example, to correct something important.",
    },
  ],
};