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

export const opinions: SpokenTopic = {
  id: "opinions",
  title: "Expressing Opinions",
  georgianTitle: "აზრის გამოხატვა",
  explanation:
    "Use these phrases to share what you think, explain your point of view, and make your opinion sound natural.",
  georgianExplanation:
    "გამოიყენე ეს ფრაზები საკუთარი აზრის გამოსახატავად, შენი შეხედულების ასახსნელად და საუბრის ბუნებრივად წარმართვისთვის.",
  phrases: [
    {
      english: "I think…",
      georgian: "მე ვფიქრობ, რომ…",
      situation: "A simple, common way to introduce your opinion.",
      situationGeorgian:
        "მარტივი და გავრცელებული ფორმაა საკუთარი აზრის დასაწყებად.",
    },
    {
      english: "As far as I’m concerned…",
      georgian: "ჩემთვის… / ჩემი აზრით…",
      situation:
        "When you want to make it clear that you are sharing your personal view.",
      situationGeorgian:
        "როდესაც გინდა ხაზი გაუსვა, რომ საკუთარ პირად შეხედულებას გამოხატავ.",
    },
    {
      english: "The way I see it…",
      georgian: "როგორც მე ვხედავ… / ჩემი ხედვით…",
      situation:
        "When you are about to explain how you understand a situation.",
      situationGeorgian:
        "როდესაც აპირებ ახსნა, როგორ ხედავ ან აღიქვამ კონკრეტულ სიტუაციას.",
    },
    {
      english: "If you ask me…",
      georgian: "თუ მე მკითხავ…",
      situation: "A conversational way to give your personal opinion.",
      situationGeorgian:
        "სასაუბრო ფორმაა საკუთარი პირადი აზრის გამოსახატავად.",
    },
    {
      english: "I’d say…",
      georgian: "მე ვიტყოდი, რომ…",
      situation:
        "When you want to give an opinion without sounding too definite.",
      situationGeorgian:
        "როდესაც გინდა აზრი გამოთქვა ისე, რომ ზედმეტად კატეგორიულად არ ჟღერდეს.",
    },
    {
      english: "To be honest…",
      georgian: "სიმართლე რომ ვთქვა…",
      situation:
        "When you want to introduce an honest or direct opinion.",
      situationGeorgian:
        "როდესაც გინდა გულწრფელი ან პირდაპირი აზრი გამოხატო.",
    },
    {
      english: "I have a feeling that…",
      georgian: "ისეთი შეგრძნება მაქვს, რომ…",
      situation:
        "When you have an impression but are not completely sure.",
      situationGeorgian:
        "როდესაც გარკვეული წარმოდგენა ან შეგრძნება გაქვს, მაგრამ ბოლომდე დარწმუნებული არ ხარ.",
    },
    {
      english: "I’m pretty sure that…",
      georgian: "თითქმის დარწმუნებული ვარ, რომ…",
      situation: "When you feel confident about something.",
      situationGeorgian:
        "როდესაც რაღაცაში საკმაოდ დარწმუნებული ხარ.",
    },
    {
      english: "I’m not entirely convinced that…",
      georgian: "სრულად დარწმუნებული არ ვარ, რომ…",
      situation:
        "When you have doubts about an idea or explanation.",
      situationGeorgian:
        "როდესაც რაიმე იდეის ან ახსნის მიმართ ეჭვი გეპარება.",
    },
    {
      english: "I see your point, but…",
      georgian: "მესმის შენი აზრი, მაგრამ…",
      situation:
        "When you understand someone’s argument but want to add a different view.",
      situationGeorgian:
        "როდესაც გესმის სხვისი არგუმენტი, მაგრამ გინდა განსხვავებული შეხედულება დაამატო.",
    },
    {
      english: "Personally, I prefer…",
      georgian: "პირადად მე მირჩევნია…",
      situation: "When you want to talk about your own preference.",
      situationGeorgian:
        "როდესაც გინდა საკუთარ პირად არჩევანს ან უპირატესობას შეეხო.",
    },
    {
      english: "From my point of view…",
      georgian: "ჩემი თვალსაზრისით…",
      situation: "A clear way to introduce your perspective.",
      situationGeorgian:
        "მკაფიო ფორმაა საკუთარი ხედვის ან პოზიციის გამოსახატავად.",
    },
  ],
};