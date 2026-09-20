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
      situation:
        "A polite way to interrupt because you need to say something.",
      situationGeorgian:
        "თავაზიანი ფორმაა საუბრის შესაწყვეტად, როდესაც რაღაცის თქმა გჭირდება.",
    },
    {
      english: "Can I just add something?",
      georgian: "შეიძლება, ერთი რამ დავამატო?",
      situation: "When you want to contribute a thought to the conversation.",
      situationGeorgian:
        "როდესაც გინდა, საუბარში შენი აზრი ან კომენტარი დაამატო.",
    },
    {
      english: "Can I jump in here?",
      georgian: "შეიძლება, აქ ერთი რამ ჩავამატო?",
      situation:
        "A natural, conversational way to join in with a comment.",
      situationGeorgian:
        "ბუნებრივი, სასაუბრო ფორმაა საუბარში კომენტარის ან აზრის დასამატებლად.",
    },
    {
      english: "Before you go on…",
      georgian: "სანამ გააგრძელებ…",
      situation:
        "When you need to ask or clarify something before the person continues.",
      situationGeorgian:
        "როდესაც გინდა, ადამიანმა საუბრის გაგრძელებამდე რაღაც გკითხოს ან დაგიზუსტოს.",
    },
    {
      english: "Just one quick question.",
      georgian: "მხოლოდ ერთი მოკლე კითხვა მაქვს.",
      situation:
        "When you want to ask a brief question without taking over the conversation.",
      situationGeorgian:
        "როდესაც მოკლე კითხვის დასმა გინდა ისე, რომ საუბარი მთლიანად შენზე არ გადაიტანო.",
    },
    {
      english: "Sorry, can I stop you there for a second?",
      georgian: "ბოდიში, შეიძლება ერთი წამით შეგაჩერო?",
      situation:
        "When you need to pause someone to clarify or respond to a point.",
      situationGeorgian:
        "როდესაც საჭიროა ადამიანის დროებით შეჩერება რაღაცის დასაზუსტებლად ან მის ნათქვამზე საპასუხოდ.",
    },
    {
      english: "If I could just say something…",
      georgian: "თუ შეიძლება, ერთი რამ ვთქვა…",
      situation:
        "A slightly more formal way to ask for a moment to speak.",
      situationGeorgian:
        "ოდნავ უფრო ფორმალური გზაა საუბარში ჩართვისა და სიტყვის თქმის თხოვნისთვის.",
    },
    {
      english: "Go ahead, sorry.",
      georgian: "გააგრძელე, ბოდიში.",
      situation:
        "When you accidentally start speaking at the same time as someone else.",
      situationGeorgian:
        "როდესაც შემთხვევით სხვას ერთდროულად ელაპარაკები და გინდა, მას საუბრის გაგრძელების საშუალება მისცე.",
    },
    {
      english: "Sorry, I didn’t mean to cut you off.",
      georgian: "ბოდიში, არ მინდოდა სიტყვა გამეწყვეტინებინა.",
      situation:
        "When you realize you interrupted someone unintentionally.",
      situationGeorgian:
        "როდესაც ხვდები, რომ ადამიანს უნებლიედ შეაწყვეტინე საუბარი.",
    },
    {
      english: "Please, go on.",
      georgian: "გთხოვ, გააგრძელე.",
      situation: "When you want to give the other person the floor again.",
      situationGeorgian:
        "როდესაც გინდა, რომ საუბრის გაგრძელების შესაძლებლობა ისევ მეორე ადამიანს მისცე.",
    },
    {
      english: "Can I come back to that in a moment?",
      georgian: "შეიძლება, ამ საკითხს ცოტა ხანში დავუბრუნდე?",
      situation:
        "When you want to pause the current point and return to it later.",
      situationGeorgian:
        "როდესაც გინდა, მიმდინარე საკითხი დროებით გადადო და მას ცოტა მოგვიანებით დაუბრუნდე.",
    },
    {
      english: "I’m sorry, but I need to jump in.",
      georgian: "ბოდიში, მაგრამ საუბარში უნდა ჩავერთო.",
      situation:
        "When you need to speak up, for example, to correct something important.",
      situationGeorgian:
        "როდესაც აუცილებელია საუბარში ჩართვა, მაგალითად, მნიშვნელოვანი საკითხის გამოსასწორებლად.",
    },
  ],
};