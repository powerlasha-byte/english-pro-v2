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
      situationGeorgian:
        "როდესაც ვიღაცის ნათქვამი კარგად ვერ გაიგონე ან ვერ გაიგონე.",
    },

    {
      english: "Could you say that again?",
      georgian: "შეგიძლია კიდევ ერთხელ გაიმეორო?",
      situation:
        "A polite way to ask someone to repeat something.",
      situationGeorgian:
        "თავაზიანი ფორმაა ვიღაცისთვის რაიმეს გამეორების სათხოვნელად.",
    },

    {
      english: "Could you speak a little more slowly?",
      georgian: "შეგიძლია ცოტა ნელა ილაპარაკო?",
      situation:
        "When someone is speaking too quickly for you to follow.",
      situationGeorgian:
        "როდესაც ვიღაც ისე სწრაფად საუბრობს, რომ მისი მიყოლა გიჭირს.",
    },

    {
      english: "What do you mean by that?",
      georgian: "ამით რას გულისხმობ?",
      situation:
        "When you want someone to explain the meaning of what they said.",
      situationGeorgian:
        "როდესაც გინდა, რომ ვიღაცამ თავისი ნათქვამის მნიშვნელობა აგიხსნას.",
    },

    {
      english: "Could you be more specific?",
      georgian: "შეგიძლია უფრო კონკრეტულად თქვა?",
      situation:
        "When you need clearer or more detailed information.",
      situationGeorgian:
        "როდესაც უფრო მკაფიო ან დეტალური ინფორმაცია გჭირდება.",
    },

    {
      english: "So, you mean…?",
      georgian: "ანუ, შენ გულისხმობ, რომ…?",
      situation:
        "When you want to check your understanding by repeating the main idea.",
      situationGeorgian:
        "როდესაც გინდა, მთავარი აზრის გამეორებით გადაამოწმო, სწორად გაიგე თუ არა.",
    },

    {
      english: "Let me make sure I understood.",
      georgian: "მოდი, დავრწმუნდე, რომ სწორად გავიგე.",
      situation:
        "When you are about to repeat information to confirm it.",
      situationGeorgian:
        "როდესაც ინფორმაციის გამეორებას აპირებ მის დასადასტურებლად.",
    },

    {
      english: "Are you saying that…?",
      georgian: "იმას ამბობ, რომ…?",
      situation:
        "When you want to confirm exactly what someone means.",
      situationGeorgian:
        "როდესაც გინდა ზუსტად დაადასტურო, რას გულისხმობს ვიღაც.",
    },

    {
      english: "Could you give me an example?",
      georgian: "შეგიძლია მაგალითი მომიყვანო?",
      situation:
        "When an example would help you understand an explanation.",
      situationGeorgian:
        "როდესაც მაგალითი დაგეხმარება ახსნის უკეთ გაგებაში.",
    },

    {
      english: "I’m not sure I follow.",
      georgian: "დარწმუნებული არ ვარ, რომ ბოლომდე გავიგე.",
      situation:
        "When you are having trouble following someone's explanation.",
      situationGeorgian:
        "როდესაც ვიღაცის ახსნის მიყოლა და გაგება გიჭირს.",
    },

    {
      english: "What exactly do you mean?",
      georgian: "კონკრეტულად რას გულისხმობ?",
      situation:
        "When you need someone to explain a particular point more clearly.",
      situationGeorgian:
        "როდესაც გინდა, რომ ვიღაცამ კონკრეტული საკითხი უფრო მკაფიოდ აგიხსნას.",
    },

    {
      english: "Did I get that right?",
      georgian: "სწორად გავიგე?",
      situation:
        "When you want to check whether your understanding is correct.",
      situationGeorgian:
        "როდესაც გინდა გადაამოწმო, სწორად გაიგე თუ არა.",
    },
  ],
};