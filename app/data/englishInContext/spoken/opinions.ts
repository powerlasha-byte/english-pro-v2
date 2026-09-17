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
    },
    {
      english: "As far as I’m concerned…",
      georgian: "ჩემთვის… / ჩემი აზრით…",
      situation: "When you want to make it clear that you are sharing your personal view.",
    },
    {
      english: "The way I see it…",
      georgian: "როგორც მე ვხედავ… / ჩემი ხედვით…",
      situation: "When you are about to explain how you understand a situation.",
    },
    {
      english: "If you ask me…",
      georgian: "თუ მე მკითხავ…",
      situation: "A conversational way to give your personal opinion.",
    },
    {
      english: "I’d say…",
      georgian: "მე ვიტყოდი, რომ…",
      situation: "When you want to give an opinion without sounding too definite.",
    },
    {
      english: "To be honest…",
      georgian: "სიმართლე რომ ვთქვა…",
      situation: "When you want to introduce an honest or direct opinion.",
    },
    {
      english: "I have a feeling that…",
      georgian: "ისეთი შეგრძნება მაქვს, რომ…",
      situation: "When you have an impression but are not completely sure.",
    },
    {
      english: "I’m pretty sure that…",
      georgian: "თითქმის დარწმუნებული ვარ, რომ…",
      situation: "When you feel confident about something.",
    },
    {
      english: "I’m not entirely convinced that…",
      georgian: "სრულად დარწმუნებული არ ვარ, რომ…",
      situation: "When you have doubts about an idea or explanation.",
    },
    {
      english: "I see your point, but…",
      georgian: "მესმის შენი აზრი, მაგრამ…",
      situation: "When you understand someone’s argument but want to add a different view.",
    },
    {
      english: "Personally, I prefer…",
      georgian: "პირადად მე მირჩევნია…",
      situation: "When you want to talk about your own preference.",
    },
    {
      english: "From my point of view…",
      georgian: "ჩემი თვალსაზრისით…",
      situation: "A clear way to introduce your perspective.",
    },
  ],
};