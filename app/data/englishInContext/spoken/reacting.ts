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

export const reacting: SpokenTopic = {
  id: "reacting",
  title: "Reacting Naturally",
  georgianTitle: "ბუნებრივი რეაქციები",
  explanation:
    "Use these short expressions to react naturally to news, surprises, good or bad experiences, and other people's stories.",
  georgianExplanation:
    "გამოიყენე ეს მოკლე გამოთქმები სიახლეებზე, მოულოდნელ ამბებზე, კარგ ან ცუდ გამოცდილებებსა და სხვის მონაყოლზე ბუნებრივი რეაქციის გამოსახატავად.",
  phrases: [
    {
      english: "Really?",
      georgian: "მართლა?",
      situation: "When something surprises you or you want to know more.",
      situationGeorgian:
        "როდესაც რაღაც გაკვირვებს ან გინდა მეტი გაიგო.",
    },
    {
      english: "No way!",
      georgian: "არ არსებობს!",
      situation:
        "When you are very surprised or find something hard to believe.",
      situationGeorgian:
        "როდესაც ძალიან გაკვირვებული ხარ ან რაღაცის დაჯერება გიჭირს.",
    },
    {
      english: "That’s amazing!",
      georgian: "ეს საოცარია!",
      situation: "When you hear something very good or impressive.",
      situationGeorgian:
        "როდესაც ძალიან კარგ ან შთამბეჭდავ ამბავს იგებ.",
    },
    {
      english: "That’s too bad.",
      georgian: "რა სამწუხაროა.",
      situation:
        "When you hear about something disappointing or unfortunate.",
      situationGeorgian:
        "როდესაც რაიმე იმედგამაცრუებელ ან სამწუხარო ამბავს იგებ.",
    },
    {
      english: "I can’t believe it!",
      georgian: "ვერ ვიჯერებ!",
      situation:
        "When something is so surprising that it is hard to believe.",
      situationGeorgian:
        "როდესაც რაღაც იმდენად მოულოდნელია, რომ მისი დაჯერება გიჭირს.",
    },
    {
      english: "Good for you!",
      georgian: "ძალიან მიხარია შენი ამბავი! / ყოჩაღ!",
      situation:
        "When you want to show support or happiness about someone's success.",
      situationGeorgian:
        "როდესაც გინდა, ვიღაცის წარმატების გამო მხარდაჭერა ან სიხარული გამოხატო.",
    },
    {
      english: "That must have been difficult.",
      georgian: "ეს ალბათ რთული იქნებოდა.",
      situation:
        "When you want to show understanding about someone's difficult experience.",
      situationGeorgian:
        "როდესაც გინდა, ვიღაცის რთული გამოცდილების მიმართ თანაგრძნობა და გაგება გამოხატო.",
    },
    {
      english: "I’m so happy for you!",
      georgian: "ძალიან მიხარია შენ გამო!",
      situation:
        "When someone shares good news and you want to show genuine happiness.",
      situationGeorgian:
        "როდესაც ვიღაც კარგ ამბავს გიზიარებს და გინდა გულწრფელი სიხარული გამოხატო.",
    },
    {
      english: "What a relief!",
      georgian: "რა შვებაა!",
      situation: "When a worrying situation turns out well.",
      situationGeorgian:
        "როდესაც შემაშფოთებელი სიტუაცია საბოლოოდ კარგად მთავრდება.",
    },
    {
      english: "You’re kidding!",
      georgian: "ხუმრობ!",
      situation:
        "When you are surprised and think someone may be joking.",
      situationGeorgian:
        "როდესაც გაკვირვებული ხარ და ფიქრობ, რომ ადამიანი შეიძლება ხუმრობდეს.",
    },
    {
      english: "That sounds exciting!",
      georgian: "ძალიან საინტერესო და ამაღელვებლად ჟღერს!",
      situation:
        "When someone tells you about an exciting plan or experience.",
      situationGeorgian:
        "როდესაც ვიღაც საინტერესო გეგმაზე ან ამაღელვებელ გამოცდილებაზე გიყვება.",
    },
    {
      english: "I know what you mean.",
      georgian: "მესმის, რასაც გულისხმობ.",
      situation:
        "When you understand or relate to someone's experience or feeling.",
      situationGeorgian:
        "როდესაც გესმის სხვისი გამოცდილება ან გრძნობა და შეგიძლია მასთან საკუთარი გამოცდილებით დაკავშირება.",
    },
  ],
};