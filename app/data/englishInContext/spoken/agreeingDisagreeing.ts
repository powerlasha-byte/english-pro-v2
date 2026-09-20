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
      situation:
        "When someone says something you completely agree with.",
      situationGeorgian:
        "როდესაც ვიღაც ამბობს რაღაცას, რასაც სრულად ეთანხმები.",
    },

    {
      english: "That’s what I was thinking.",
      georgian: "მეც ზუსტად ამას ვფიქრობდი.",
      situation:
        "When someone expresses the same thought you had.",
      situationGeorgian:
        "როდესაც ვიღაც გამოხატავს ზუსტად იმავე აზრს, რაც შენ გქონდა.",
    },

    {
      english: "You’ve got a point.",
      georgian: "შენს ნათქვამში არის სიმართლე.",
      situation:
        "When you recognize that someone has made a valid point.",
      situationGeorgian:
        "როდესაც აღიარებ, რომ ვიღაცამ მნიშვნელოვანი ან საფუძვლიანი აზრი გამოთქვა.",
    },

    {
      english: "I couldn’t agree more.",
      georgian: "სრულად გეთანხმები.",
      situation:
        "A strong way to say that you completely agree.",
      situationGeorgian:
        "ძლიერი ფორმაა იმის სათქმელად, რომ ადამიანს სრულად ეთანხმები.",
    },

    {
      english: "That makes sense.",
      georgian: "გასაგებია. / ლოგიკურია.",
      situation:
        "When someone’s explanation sounds reasonable.",
      situationGeorgian:
        "როდესაც ვიღაცის ახსნა გონივრულად და ლოგიკურად ჟღერს.",
    },

    {
      english: "I see what you mean.",
      georgian: "მესმის, რასაც გულისხმობ.",
      situation:
        "When you understand someone’s point, even if you may not fully agree.",
      situationGeorgian:
        "როდესაც გესმის სხვისი აზრი, მაშინაც კი, თუ მას ბოლომდე არ ეთანხმები.",
    },

    {
      english: "I agree up to a point.",
      georgian: "გარკვეულწილად გეთანხმები.",
      situation:
        "When you agree with part of an idea, but not all of it.",
      situationGeorgian:
        "როდესაც იდეის მხოლოდ ერთ ნაწილს ეთანხმები და მთლიანად არა.",
    },

    {
      english: "I’m not so sure about that.",
      georgian: "ამაში დარწმუნებული არ ვარ.",
      situation:
        "A gentle way to express doubt or disagreement.",
      situationGeorgian:
        "ზომიერი და თავაზიანი ფორმაა ეჭვის ან უთანხმოების გამოსახატავად.",
    },

    {
      english: "I get where you’re coming from, but…",
      georgian: "მესმის, რატომ ფიქრობ ასე, მაგრამ…",
      situation:
        "When you understand someone’s perspective before giving a different opinion.",
      situationGeorgian:
        "როდესაც ჯერ გესმის სხვისი პოზიცია და შემდეგ განსხვავებულ აზრს გამოთქვამ.",
    },

    {
      english: "I beg to differ.",
      georgian: "ნება მომეცი, არ დაგეთანხმო.",
      situation:
        "A more formal way to politely disagree.",
      situationGeorgian:
        "უფრო ფორმალური და თავაზიანი ფორმაა უთანხმოების გამოსახატავად.",
    },

    {
      english: "That’s not how I see it.",
      georgian: "მე ამას სხვანაირად ვხედავ.",
      situation:
        "When your interpretation of a situation is different.",
      situationGeorgian:
        "როდესაც სიტუაციის შენეული აღქმა ან ინტერპრეტაცია განსხვავებულია.",
    },

    {
      english: "We’ll have to agree to disagree.",
      georgian: "მოდი, შევთანხმდეთ, რომ ამ საკითხზე ვერ ვთანხმდებით.",
      situation:
        "When neither person is changing their mind and it is time to end the disagreement.",
      situationGeorgian:
        "როდესაც არც ერთი ადამიანი არ იცვლის აზრს და უთანხმოების დასრულების დროა.",
    },
  ],
};