
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

export const naturalExpressions: SpokenTopic = {
  id: "natural-expressions",
  title: "Natural Everyday Expressions",
  georgianTitle: "ყოველდღიური ბუნებრივი გამოთქმები",
  explanation:
    "These common expressions help you sound more natural in everyday conversations.",
  georgianExplanation:
    "ეს გავრცელებული გამოთქმები ყოველდღიურ საუბარში უფრო ბუნებრივად საუბარში დაგეხმარება.",
  phrases: [
    {
      english: "Sounds good.",
      georgian: "კარგად ჟღერს. / კარგი აზრია.",
      situation: "When you agree with a suggestion or plan.",
    },
    {
      english: "No worries.",
      georgian: "არაუშავს. / პრობლემა არ არის.",
      situation: "To reassure someone that something is not a problem.",
    },
    {
      english: "It’s up to you.",
      georgian: "შენზეა დამოკიდებული. / შენ გადაწყვიტე.",
      situation: "When you let someone else make the decision.",
    },
    {
      english: "I’m on my way.",
      georgian: "გზაში ვარ. / უკვე მოვდივარ.",
      situation: "When you have started going somewhere.",
    },
    {
      english: "That makes sense.",
      georgian: "გასაგებია. / ლოგიკურია.",
      situation: "When something is clear or seems logical to you.",
    },
    {
      english: "It happens.",
      georgian: "ხდება ხოლმე. / ყველას მოსდის.",
      situation: "To comfort someone after a small mistake or problem.",
    },
    {
      english: "I’m just kidding.",
      georgian: "უბრალოდ ვხუმრობ.",
      situation: "When you want someone to know you were not being serious.",
    },
    {
      english: "Fair enough.",
      georgian: "გასაგებია. / მისაღებია.",
      situation: "When you accept that someone's point or decision is reasonable.",
    },
    {
      english: "That’s the point.",
      georgian: "სწორედ ეგ არის მთავარი.",
      situation: "When you emphasize the main idea of what you are saying.",
    },
    {
      english: "I get it.",
      georgian: "მივხვდი. / მესმის.",
      situation: "When you understand what someone means.",
    },
    {
      english: "Take your time.",
      georgian: "არ იჩქარო. / დრო აიღე.",
      situation: "When you tell someone they do not need to hurry.",
    },
    {
      english: "Let’s call it a day.",
      georgian: "დღე დავასრულოთ. / დღეს აქ შევჩერდეთ.",
      situation: "When you suggest stopping work or an activity for the day.",
    },
  ],
};