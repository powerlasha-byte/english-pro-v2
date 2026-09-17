export type SpokenEnglishExample = {
  english: string;
  georgian: string;
  situation?: string;
};

export type SpokenEnglishSection = {
  id: string;
  title: string;
  georgianTitle: string;
  explanation: string;
  georgianExplanation: string;
  phrases: SpokenEnglishExample[];
};

export const spokenEnglish: SpokenEnglishSection[] = [
  {
    id: "giving-opinions",
    title: "Giving Opinions",
    georgianTitle: "აზრის გამოხატვა",
    explanation:
      "Use these expressions to share what you think in a natural way.",
    georgianExplanation:
      "ეს გამოთქმები გამოიყენე საკუთარი აზრის ბუნებრივად გამოსახატავად.",
    phrases: [
      {
        english: "I think we should give it a try.",
        georgian: "ვფიქრობ, უნდა ვცადოთ.",
      },
      {
        english: "As far as I’m concerned, it’s a good idea.",
        georgian: "ჩემი აზრით, ეს კარგი იდეაა.",
      },
      {
        english: "The way I see it, we have two options.",
        georgian: "როგორც მე ვხედავ, ორი ვარიანტი გვაქვს.",
      },
      {
        english: "If you ask me, we should wait.",
        georgian: "ჩემი აზრი თუ გაინტერესებს, უნდა დაველოდოთ.",
      },
      {
        english: "I have a feeling this will work.",
        georgian: "მგონია, რომ ეს იმუშავებს.",
      },
    ],
  },
  {
    id: "agreeing-disagreeing",
    title: "Agreeing & Disagreeing",
    georgianTitle: "დათანხმება და არდათანხმება",
    explanation:
      "These phrases help you agree or disagree without sounding too direct.",
    georgianExplanation:
      "ეს ფრაზები დაგეხმარება დაეთანხმო ან არ დაეთანხმო ისე, რომ ზედმეტად პირდაპირი არ გამოხვიდე.",
    phrases: [
      {
        english: "That’s exactly what I was thinking.",
        georgian: "ზუსტად ამას ვფიქრობდი მეც.",
      },
      {
        english: "You’ve got a point there.",
        georgian: "აქ რაღაცაში მართალი ხარ.",
      },
      {
        english: "I see what you mean, but I’m not sure.",
        georgian: "მესმის, რასაც გულისხმობ, მაგრამ დარწმუნებული არ ვარ.",
      },
      {
        english: "I’m not sure I agree with that.",
        georgian: "არ ვარ დარწმუნებული, რომ ამას ვეთანხმები.",
      },
      {
        english: "That’s one way of looking at it.",
        georgian: "ეს საკითხის დანახვის ერთ-ერთი გზაა.",
      },
    ],
  },
  {
    id: "reacting-naturally",
    title: "Reacting Naturally",
    georgianTitle: "ბუნებრივი რეაქციები",
    explanation:
      "Short reactions make conversations sound more natural and engaged.",
    georgianExplanation:
      "მოკლე რეაქციები საუბარს უფრო ბუნებრივსა და ჩართულს ხდის.",
    phrases: [
      {
        english: "No way!",
        georgian: "არ არსებობს!",
      },
      {
        english: "You’re kidding!",
        georgian: "ხუმრობ!",
      },
      {
        english: "That makes sense.",
        georgian: "გასაგებია / ლოგიკურია.",
      },
      {
        english: "I know what you mean.",
        georgian: "მესმის, რასაც გულისხმობ.",
      },
      {
        english: "Good for you!",
        georgian: "ძალიან კარგი შენთვის! / მიხარია შენი ამბავი!",
      },
    ],
  },
  {
    id: "clarifying",
    title: "Clarifying & Checking",
    georgianTitle: "დაზუსტება და გადამოწმება",
    explanation:
      "Use these phrases when you need more information or want to make sure you understood correctly.",
    georgianExplanation:
      "ეს ფრაზები გამოიყენე, როცა მეტი ინფორმაცია გჭირდება ან გინდა გადაამოწმო, სწორად გაიგე თუ არა.",
    phrases: [
      {
        english: "What do you mean by that?",
        georgian: "ამაში რას გულისხმობ?",
      },
      {
        english: "Could you explain that a little more?",
        georgian: "შეგიძლია ეს ცოტა უფრო დაწვრილებით ახსნა?",
      },
      {
        english: "So, you’re saying we should wait?",
        georgian: "ანუ ამბობ, რომ უნდა დაველოდოთ?",
      },
      {
        english: "Let me make sure I understand.",
        georgian: "მოდი, დავრწმუნდე, რომ სწორად გავიგე.",
      },
      {
        english: "Did I get that right?",
        georgian: "სწორად გავიგე?",
      },
    ],
  },
  {
    id: "thinking-time",
    title: "Buying Time",
    georgianTitle: "დროის მოგება საუბარში",
    explanation:
      "These expressions give you a moment to think without stopping the conversation.",
    georgianExplanation:
      "ეს გამოთქმები საშუალებას გაძლევს დაფიქრდე ისე, რომ საუბარი არ გაჩერდეს.",
    phrases: [
      {
        english: "Let me think for a second.",
        georgian: "ერთი წამით დამაფიქრე.",
      },
      {
        english: "That’s a good question.",
        georgian: "კარგი კითხვაა.",
      },
      {
        english: "How can I put it?",
        georgian: "როგორ ვთქვა...",
      },
      {
        english: "I haven’t really thought about it.",
        georgian: "ამაზე დიდად არ მიფიქრია.",
      },
      {
        english: "Give me a moment to think.",
        georgian: "ცოტა დრო მომეცი, რომ დავფიქრდე.",
      },
    ],
  },
  {
    id: "polite-interruptions",
    title: "Interrupting Politely",
    georgianTitle: "თავაზიანად საუბარში ჩართვა",
    explanation:
      "Use these expressions to interrupt someone politely or add something to the conversation.",
    georgianExplanation:
      "ეს გამოთქმები გამოიყენე, როცა გინდა ვინმეს თავაზიანად შეაწყვეტინო ან საუბარს რამე დაამატო.",
    phrases: [
      {
        english: "Sorry to interrupt, but can I ask something?",
        georgian: "ბოდიში, რომ გაწყვეტინებ, მაგრამ შეიძლება რაღაც გკითხო?",
      },
      {
        english: "Can I just add something?",
        georgian: "შეიძლება რაღაც დავამატო?",
      },
      {
        english: "If I may, I’d like to say something.",
        georgian: "თუ შეიძლება, რაღაცის თქმა მინდა.",
      },
      {
        english: "Before you continue, can I clarify one thing?",
        georgian: "სანამ გააგრძელებ, შეიძლება ერთი რამ დავაზუსტო?",
      },
      {
        english: "Sorry, can I jump in here?",
        georgian: "ბოდიში, შეიძლება აქ ჩავერთო?",
      },
    ],
  },
  {
    id: "making-suggestions",
    title: "Making Suggestions",
    georgianTitle: "შეთავაზებების გაკეთება",
    explanation:
      "Use these phrases to suggest ideas and possible next steps.",
    georgianExplanation:
      "ეს ფრაზები გამოიყენე იდეების ან შემდეგი ნაბიჯების შესათავაზებლად.",
    phrases: [
      {
        english: "Why don’t we try another way?",
        georgian: "სხვა გზა რატომ არ ვცადოთ?",
      },
      {
        english: "How about taking a short break?",
        georgian: "ცოტა შესვენება რომ ავიღოთ?",
      },
      {
        english: "We could give it a try.",
        georgian: "შეგვიძლია ვცადოთ.",
      },
      {
        english: "What if we start with the easiest part?",
        georgian: "რა მოხდება, ყველაზე მარტივი ნაწილით რომ დავიწყოთ?",
      },
      {
        english: "Maybe we should talk about it first.",
        georgian: "შეიძლება ჯერ ამაზე უნდა ვისაუბროთ.",
      },
    ],
  },
  {
    id: "everyday-expressions",
    title: "Everyday Expressions",
    georgianTitle: "ყოველდღიური გამოთქმები",
    explanation:
      "These common expressions are useful in everyday conversations.",
    georgianExplanation:
      "ეს გავრცელებული გამოთქმები ყოველდღიურ საუბრებში გამოგადგება.",
    phrases: [
      {
        english: "It’s up to you.",
        georgian: "შენზეა დამოკიდებული.",
      },
      {
        english: "I’ll keep that in mind.",
        georgian: "ამას გავითვალისწინებ.",
      },
      {
        english: "It slipped my mind.",
        georgian: "სრულიად დამავიწყდა.",
      },
      {
        english: "That sounds familiar.",
        georgian: "ეს რაღაც ნაცნობად ჟღერს.",
      },
      {
        english: "I’m just about to leave.",
        georgian: "ახლა-ახლა უნდა წავიდე.",
      },
    ],
  },
];