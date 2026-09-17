
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

export const clarifying: SpokenTopic = {
  id: "clarifying",
  title: "Clarifying and Checking Understanding",
  georgianTitle: "დაზუსტება და გაგების გადამოწმება",
  explanation:
    "Use these phrases when you did not hear something clearly, need more information, or want to make sure you understood correctly.",
  georgianExplanation:
    "გამოიყენე ეს ფრაზები, როცა რაღაც კარგად ვერ გაიგე ან ვერ გაიგონე, დამატებითი ინფორმაცია გჭირდება, ან გინდა გადაამოწმო, სწორად გაიგე თუ არა.",
  phrases: [
    {
      english: "Sorry, what was that?",
      georgian: "ბოდიში, რა თქვი?",
      situation: "When you did not hear or catch what someone said.",
    },
    {
      english: "Could you say that again?",
      georgian: "შეგიძლია კიდევ ერთხელ გაიმეორო?",
      situation: "A polite way to ask someone to repeat something.",
    },
    {
      english: "Could you speak a little more slowly?",
      georgian: "შეგიძლია ცოტა ნელა ილაპარაკო?",
      situation: "When someone is speaking too quickly for you to follow.",
    },
    {
      english: "What do you mean by that?",
      georgian: "ამით რას გულისხმობ?",
      situation: "When you want someone to explain the meaning of what they said.",
    },
    {
      english: "Could you be more specific?",
      georgian: "შეგიძლია უფრო კონკრეტულად თქვა?",
      situation: "When you need clearer or more detailed information.",
    },
    {
      english: "So, you mean…?",
      georgian: "ანუ, შენ გულისხმობ, რომ…?",
      situation: "When you want to check your understanding by repeating the main idea.",
    },
    {
      english: "Let me make sure I understood.",
      georgian: "მოდი, დავრწმუნდე, რომ სწორად გავიგე.",
      situation: "When you are about to repeat information to confirm it.",
    },
    {
      english: "Are you saying that…?",
      georgian: "იმას ამბობ, რომ…?",
      situation: "When you want to confirm exactly what someone means.",
    },
    {
      english: "Could you give me an example?",
      georgian: "შეგიძლია მაგალითი მომიყვანო?",
      situation: "When an example would help you understand an explanation.",
    },
    {
      english: "I’m not sure I follow.",
      georgian: "დარწმუნებული არ ვარ, რომ ბოლომდე გავიგე.",
      situation: "When you are having trouble following someone's explanation.",
    },
    {
      english: "What exactly do you mean?",
      georgian: "კონკრეტულად რას გულისხმობ?",
      situation: "When you need someone to explain a particular point more clearly.",
    },
    {
      english: "Did I get that right?",
      georgian: "სწორად გავიგე?",
      situation: "When you want to check whether your understanding is correct.",
    },
  ],
};