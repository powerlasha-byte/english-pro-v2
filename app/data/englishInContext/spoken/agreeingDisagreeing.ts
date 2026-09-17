
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

export const agreeingDisagreeing: SpokenTopic = {
  id: "agreeing-disagreeing",
  title: "Agreeing and Disagreeing",
  georgianTitle: "დათანხმება და უთანხმოება",
  explanation:
    "Use these expressions to agree, partly agree, or disagree politely in everyday conversations.",
  georgianExplanation:
    "გამოიყენე ეს გამოთქმები ყოველდღიურ საუბარში დასათანხმებლად, ნაწილობრივ დასათანხმებლად ან თავაზიანად საწინააღმდეგო აზრის გამოსახატავად.",
  phrases: [
    {
      english: "Exactly!",
      georgian: "ზუსტად!",
      situation: "When someone says something you completely agree with.",
    },
    {
      english: "That’s what I was thinking.",
      georgian: "მეც ზუსტად ამას ვფიქრობდი.",
      situation: "When someone expresses the same thought you had.",
    },
    {
      english: "You’ve got a point.",
      georgian: "შენს ნათქვამში არის სიმართლე.",
      situation: "When you recognize that someone has made a valid point.",
    },
    {
      english: "I couldn’t agree more.",
      georgian: "სრულად გეთანხმები.",
      situation: "A strong way to say that you completely agree.",
    },
    {
      english: "That makes sense.",
      georgian: "გასაგებია. / ლოგიკურია.",
      situation: "When someone’s explanation sounds reasonable.",
    },
    {
      english: "I see what you mean.",
      georgian: "მესმის, რასაც გულისხმობ.",
      situation: "When you understand someone’s point, even if you may not fully agree.",
    },
    {
      english: "I agree up to a point.",
      georgian: "გარკვეულწილად გეთანხმები.",
      situation: "When you agree with part of an idea, but not all of it.",
    },
    {
      english: "I’m not so sure about that.",
      georgian: "ამაში დარწმუნებული არ ვარ.",
      situation: "A gentle way to express doubt or disagreement.",
    },
    {
      english: "I get where you’re coming from, but…",
      georgian: "მესმის, რატომ ფიქრობ ასე, მაგრამ…",
      situation: "When you understand someone’s perspective before giving a different opinion.",
    },
    {
      english: "I beg to differ.",
      georgian: "ნება მომეცი, არ დაგეთანხმო.",
      situation: "A more formal way to politely disagree.",
    },
    {
      english: "That’s not how I see it.",
      georgian: "მე ამას სხვანაირად ვხედავ.",
      situation: "When your interpretation of a situation is different.",
    },
    {
      english: "We’ll have to agree to disagree.",
      georgian: "მოდი, შევთანხმდეთ, რომ ამ საკითხზე ვერ ვთანხმდებით.",
      situation: "When neither person is changing their mind and it is time to end the disagreement.",
    },
  ],
};