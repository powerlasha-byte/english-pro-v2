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

export const changingTopics: SpokenTopic = {
  id: "changing-topics",
  title: "Changing Topics",
  georgianTitle: "თემის შეცვლა",
  explanation:
    "Use these expressions to move naturally from one topic to another in a conversation.",
  georgianExplanation:
    "გამოიყენე ეს გამოთქმები, როცა საუბრისას ერთი თემიდან მეორეზე ბუნებრივად გადასვლა გინდა.",

  phrases: [
    {
      english: "By the way…",
      georgian: "სხვათა შორის…",
      situation:
        "To introduce a related or new piece of information.",
      situationGeorgian:
        "გამოიყენება დაკავშირებული ან ახალი ინფორმაციის დასამატებლად.",
    },

    {
      english: "Speaking of which…",
      georgian: "ამაზე რომ ვსაუბრობთ…",
      situation:
        "To connect the current topic to something else.",
      situationGeorgian:
        "გამოიყენება მიმდინარე თემის სხვა საკითხთან დასაკავშირებლად.",
    },

    {
      english: "That reminds me…",
      georgian: "ამან გამახსენა…",
      situation:
        "When something in the conversation brings another thought to mind.",
      situationGeorgian:
        "როდესაც საუბარში რაღაც სხვა აზრს ან მოვლენას გახსენებს.",
    },

    {
      english: "On a different note…",
      georgian: "სხვა თემაზე რომ გადავიდეთ…",
      situation:
        "To signal a clear change of subject.",
      situationGeorgian:
        "გამოიყენება იმის საჩვენებლად, რომ საუბრის თემას აშკარად ცვლი.",
    },

    {
      english: "Anyway, …",
      georgian: "მოკლედ, …",
      situation:
        "To return to the main point or move the conversation along.",
      situationGeorgian:
        "გამოიყენება მთავარ საკითხზე დასაბრუნებლად ან საუბრის გასაგრძელებლად.",
    },

    {
      english: "Before I forget…",
      georgian: "სანამ დამავიწყდება…",
      situation:
        "When you want to mention something you just remembered.",
      situationGeorgian:
        "როდესაც გინდა ახსენო რაღაც, რაც ახლახან გაგახსენდა.",
    },

    {
      english: "That’s another story.",
      georgian: "ეგ უკვე სხვა ამბავია.",
      situation:
        "When a detail leads to a separate topic or longer explanation.",
      situationGeorgian:
        "როდესაც რომელიმე დეტალი სხვა თემაზე ან უფრო გრძელ ახსნაზე გადადის.",
    },

    {
      english: "Let’s get back to…",
      georgian: "მოდი, დავუბრუნდეთ…",
      situation:
        "To return to a topic you were discussing earlier.",
      situationGeorgian:
        "გამოიყენება იმ თემაზე დასაბრუნებლად, რომელზეც ადრე საუბრობდით.",
    },

    {
      english: "Where was I?",
      georgian: "სად გავჩერდი?",
      situation:
        "When you lose your train of thought and want to continue.",
      situationGeorgian:
        "როდესაც აზრის გაგრძელება დაგავიწყდა და გინდა საუბარი გააგრძელო.",
    },

    {
      english: "That’s not really what I meant.",
      georgian: "ეს ზუსტად ის არ არის, რასაც ვგულისხმობდი.",
      situation:
        "To clarify your point before continuing the conversation.",
      situationGeorgian:
        "გამოიყენება საკუთარი აზრის დასაზუსტებლად, სანამ საუბარს გააგრძელებ.",
    },

    {
      english: "Anyway, as I was saying…",
      georgian: "მოკლედ, როგორც ვამბობდი…",
      situation:
        "To resume what you were saying after an interruption.",
      situationGeorgian:
        "გამოიყენება შეწყვეტის შემდეგ იმის გასაგრძელებლად, რასაც ამბობდი.",
    },

    {
      english: "Oh, one more thing…",
      georgian: "აჰ, კიდევ ერთი რამ…",
      situation:
        "To add one final point before moving on.",
      situationGeorgian:
        "გამოიყენება კიდევ ერთი, ბოლო საკითხის დასამატებლად, სანამ შემდეგ თემაზე გადახვალ.",
    },
  ],
};