export const tenses = {
  id: "tenses",
  title: "English Tenses",
  georgianTitle: "ინგლისური დროები",

  introduction:
    "Tenses help us show when something happens and how we see the action: as a fact, an action in progress, a completed action, or an action continuing over time. Learn them through meaning and real-life examples, not only by memorising formulas.",

  georgianIntroduction:
    "დროები გვეხმარება ვაჩვენოთ, როდის ხდება მოქმედება და როგორ აღვიქვამთ მას: როგორც ფაქტს, მიმდინარე მოქმედებას, დასრულებულ მოქმედებას ან მოქმედებას, რომელიც გარკვეული დროის განმავლობაში გრძელდება. ისწავლე დროები მნიშვნელობითა და რეალური მაგალითებით და არა მხოლოდ ფორმულების დამახსოვრებით.",

  learningNote: {
    title: "A useful way to think about tenses",
    explanation:
      "For practical learning, we will study 12 common tense forms in three time groups: present, past, and future. The important question is not only “When?”, but also “How do I want to present the action?”",
    georgianExplanation:
      "პრაქტიკული სწავლისთვის შევისწავლით 12 გავრცელებულ დროით ფორმას სამ ჯგუფად: აწმყო, წარსული და მომავალი. მთავარი კითხვა მხოლოდ „როდის?“ არ არის — ასევე მნიშვნელოვანია, „როგორ მინდა წარმოვაჩინო მოქმედება?“",
  },

  groups: [
    {
      id: "present",
      title: "Present",
      georgianTitle: "აწმყო დროები",
      description:
        "Talk about routines, facts, actions happening now, and situations connected to the present.",
      georgianDescription:
        "ვისაუბროთ ჩვევებზე, ფაქტებზე, ახლა მიმდინარე მოქმედებებსა და აწმყოსთან დაკავშირებულ სიტუაციებზე.",

      tenses: [
        {
          id: "present-simple",
          title: "Present Simple",
          georgianTitle: "აწმყო მარტივი დრო",

          coreMeaning:
            "Use it for habits, routines, general facts, and situations that are generally true.",
          georgianCoreMeaning:
            "გამოიყენე ჩვევების, ყოველდღიური რუტინის, ზოგადი ფაქტებისა და ისეთი სიტუაციების აღსაწერად, რომლებიც ჩვეულებრივ ან ზოგადად მართალია.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + base verb",
              note: "Add -s or -es with he, she, and it.",
              georgianNote:
                "He, she და it-ის შემთხვევაში ზმნას ჩვეულებრივ ემატება -s ან -es.",
            },
            {
              label: "Negative",
              formula: "Subject + do/does not + base verb",
              note: "After does not, use the base verb.",
              georgianNote:
                "Does not-ის შემდეგ გამოიყენე ზმნის საწყისი ფორმა.",
            },
            {
              label: "Question",
              formula: "Do/Does + subject + base verb?",
              note: "Use does with he, she, and it.",
              georgianNote:
                "He, she და it-თან კითხვაში გამოიყენე does.",
            },
          ],

          whenToUse: [
            {
              title: "Habits and routines",
              georgianTitle: "ჩვევები და რუტინა",
              explanation:
                "Something you do regularly, not necessarily at this exact moment.",
              georgianExplanation:
                "მოქმედება, რომელსაც რეგულარულად აკეთებ, მაგრამ არა აუცილებლად სწორედ ამ მომენტში.",
              example: {
                english: "I check my emails every morning.",
                georgian: "ყოველ დილით ჩემს ელფოსტას ვამოწმებ.",
              },
            },
            {
              title: "Facts and general truths",
              georgianTitle: "ფაქტები და ზოგადი ჭეშმარიტებები",
              explanation:
                "Things that are generally or scientifically true.",
              georgianExplanation:
                "ის, რაც ზოგადად ან მეცნიერულად მართალია.",
              example: {
                english: "Water boils at 100°C at sea level.",
                georgian: "ზღვის დონეზე წყალი 100°C-ზე დუღს.",
              },
            },
            {
              title: "Stable situations",
              georgianTitle: "მდგრადი სიტუაციები",
              explanation:
                "States, preferences, or situations that are true for a period of time.",
              georgianExplanation:
                "მდგომარეობები, სურვილები ან სიტუაციები, რომლებიც გარკვეული პერიოდის განმავლობაში მოქმედებს.",
              example: {
                english: "She works in the finance department.",
                georgian: "ის ფინანსების დეპარტამენტში მუშაობს.",
              },
            },
          ],

          examples: [
            {
              english: "He usually takes the bus to work.",
              georgian: "ის სამსახურში ჩვეულებრივ ავტობუსით მიდის.",
            },
            {
              english: "We don't work on Sundays.",
              georgian: "კვირაობით არ ვმუშაობთ.",
            },
            {
              english: "Does your team use Power BI?",
              georgian: "შენი გუნდი Power BI-ს იყენებს?",
            },
          ],

          signalWords: [
            "usually",
            "often",
            "sometimes",
            "never",
            "every day",
            "on Mondays",
          ],

          commonMistakes: [
            {
              wrong: "She work in a bank.",
              correct: "She works in a bank.",
              explanation:
                "In a positive Present Simple sentence, add -s or -es to the verb with he, she, or it.",
              georgianExplanation:
                "Present Simple-ის დადებით წინადადებაში he, she ან it-ის შემთხვევაში ზმნას ემატება -s ან -es.",
            },
            {
              wrong: "He doesn't works here.",
              correct: "He doesn't work here.",
              explanation:
                "After doesn't, use the base verb: work, not works.",
              georgianExplanation:
                "Doesn't-ის შემდეგ გამოიყენე ზმნის საწყისი ფორმა: work და არა works.",
            },
          ],
        },

        {
          id: "present-continuous",
          title: "Present Continuous",
          georgianTitle: "აწმყო განგრძობითი დრო",

          coreMeaning:
            "Use it for actions happening now or around now, and for temporary situations.",
          georgianCoreMeaning:
            "გამოიყენე ახლა ან ამ პერიოდის განმავლობაში მიმდინარე მოქმედებებისა და დროებითი სიტუაციების აღსაწერად.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + am/is/are + verb-ing",
              note: "Choose am, is, or are according to the subject.",
              georgianNote:
                "ქვემდებარის მიხედვით აირჩიე am, is ან are.",
            },
            {
              label: "Negative",
              formula: "Subject + am/is/are not + verb-ing",
              note: "Put not after am, is, or are.",
              georgianNote: "Not მოათავსე am, is ან are-ის შემდეგ.",
            },
            {
              label: "Question",
              formula: "Am/Is/Are + subject + verb-ing?",
              note: "Move am, is, or are before the subject.",
              georgianNote:
                "კითხვაში am, is ან are ქვემდებარის წინ გადაიტანე.",
            },
          ],

          whenToUse: [
            {
              title: "Happening right now",
              georgianTitle: "ახლა მიმდინარე მოქმედება",
              explanation:
                "An action in progress at the moment of speaking.",
              georgianExplanation:
                "მოქმედება, რომელიც საუბრის მომენტში მიმდინარეობს.",
              example: {
                english: "I'm talking to my manager right now.",
                georgian: "ახლა ჩემს მენეჯერს ვესაუბრები.",
              },
            },
            {
              title: "Temporary situations",
              georgianTitle: "დროებითი სიტუაციები",
              explanation:
                "Something happening during this period, even if not at this exact moment.",
              georgianExplanation:
                "მოქმედება, რომელიც ამ პერიოდში მიმდინარეობს, თუნდაც ზუსტად ამ წამს არ ხდებოდეს.",
              example: {
                english: "I'm working from home this week.",
                georgian: "ამ კვირაში სახლიდან ვმუშაობ.",
              },
            },
            {
              title: "Changing situations",
              georgianTitle: "ცვლილების პროცესში მყოფი სიტუაციები",
              explanation:
                "A situation that is developing or changing.",
              georgianExplanation:
                "სიტუაცია, რომელიც ვითარდება ან იცვლება.",
              example: {
                english: "Our English is getting better.",
                georgian: "ჩვენი ინგლისური უმჯობესდება.",
              },
            },
          ],

          examples: [
            {
              english: "She's preparing a report at the moment.",
              georgian: "ამ მომენტში ის რეპორტს ამზადებს.",
            },
            {
              english: "We're not using that system today.",
              georgian: "დღეს იმ სისტემას არ ვიყენებთ.",
            },
            {
              english: "Are you waiting for someone?",
              georgian: "ვიღაცას ელოდები?",
            },
          ],

          signalWords: [
            "now",
            "right now",
            "at the moment",
            "today",
            "this week",
            "currently",
          ],

          commonMistakes: [
            {
              wrong: "I working now.",
              correct: "I'm working now.",
              explanation:
                "Present Continuous needs a form of be: am, is, or are.",
              georgianExplanation:
                "Present Continuous-ში საჭიროა be ზმნის ფორმა: am, is ან are.",
            },
            {
              wrong: "She is work now.",
              correct: "She is working now.",
              explanation:
                "After am, is, or are, use the -ing form of the main verb.",
              georgianExplanation:
                "Am, is ან are-ის შემდეგ მთავარ ზმნას დაუმატე -ing.",
            },
          ],
        },

        {
          id: "present-perfect",
          title: "Present Perfect",
          georgianTitle: "აწმყო სრული დრო",

          coreMeaning:
            "Use it for past actions or experiences that are connected to the present. The exact past time is often not the focus.",
          georgianCoreMeaning:
            "გამოიყენე წარსულში მომხდარი მოქმედებებისა და გამოცდილებისთვის, რომლებსაც აწმყოსთან კავშირი აქვთ. ხშირად ზუსტი წარსული დრო მთავარი არ არის.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + have/has + past participle",
              note: "Use has with he, she, and it.",
              georgianNote:
                "He, she და it-ის შემთხვევაში გამოიყენე has.",
            },
            {
              label: "Negative",
              formula: "Subject + have/has not + past participle",
              note: "Use haven't or hasn't in common speech.",
              georgianNote:
                "საუბარში ხშირად გამოიყენება haven't ან hasn't.",
            },
            {
              label: "Question",
              formula: "Have/Has + subject + past participle?",
              note: "The past participle may be regular (-ed) or irregular.",
              georgianNote:
                "Past participle შეიძლება იყოს რეგულარული (-ed) ან არარეგულარული ფორმა.",
            },
          ],

          whenToUse: [
            {
              title: "Life experiences",
              georgianTitle: "ცხოვრებისეული გამოცდილება",
              explanation:
                "Talk about whether something has happened in your life, without saying exactly when.",
              georgianExplanation:
                "ისაუბრე იმაზე, მომხდარა თუ არა რამე შენს ცხოვრებაში, ზუსტი დროის დასახელების გარეშე.",
              example: {
                english: "I've visited London twice.",
                georgian: "ლონდონში ორჯერ ვარ ნამყოფი.",
              },
            },
            {
              title: "A present result",
              georgianTitle: "აწმყოში არსებული შედეგი",
              explanation:
                "A past action has a result that matters now.",
              georgianExplanation:
                "წარსულში მომხდარ მოქმედებას აქვს შედეგი, რომელიც ახლა მნიშვნელოვანია.",
              example: {
                english: "I've lost my keys, so I can't get in.",
                georgian: "გასაღებები დავკარგე, ამიტომ შიგნით ვერ შევდივარ.",
              },
            },
            {
              title: "A period continuing until now",
              georgianTitle: "პერიოდი, რომელიც აქამდე გრძელდება",
              explanation:
                "Use it with a time period that is still open, such as today or this week.",
              georgianExplanation:
                "გამოიყენე ისეთ პერიოდთან, რომელიც ჯერ არ დასრულებულა, მაგალითად today ან this week.",
              example: {
                english: "We've had three meetings today.",
                georgian: "დღეს სამი შეხვედრა გვქონდა.",
              },
            },
          ],

          examples: [
            {
              english: "I've already sent the report.",
              georgian: "რეპორტი უკვე გავაგზავნე.",
            },
            {
              english: "She hasn't replied yet.",
              georgian: "მას ჯერ არ უპასუხია.",
            },
            {
              english: "Have you ever tried Georgian food?",
              georgian: "ოდესმე გაგისინჯავს ქართული საჭმელი?",
            },
          ],

          signalWords: [
            "already",
            "yet",
            "just",
            "ever",
            "never",
            "so far",
            "recently",
          ],

          commonMistakes: [
            {
              wrong: "I have seen him yesterday.",
              correct: "I saw him yesterday.",
              explanation:
                "Use Past Simple with a finished, specific past time such as yesterday.",
              georgianExplanation:
                "დასრულებულ და კონკრეტულ წარსულ დროსთან, მაგალითად yesterday-თან, გამოიყენე Past Simple.",
            },
            {
              wrong: "She has went home.",
              correct: "She has gone home.",
              explanation:
                "After have or has, use the past participle: gone, not went.",
              georgianExplanation:
                "Have ან has-ის შემდეგ გამოიყენე past participle: gone და არა went.",
            },
          ],
        },

        {
          id: "present-perfect-continuous",
          title: "Present Perfect Continuous",
          georgianTitle: "აწმყო სრული განგრძობითი დრო",

          coreMeaning:
            "Use it to emphasise the duration or ongoing nature of an action that started in the past and continues now, or has just stopped.",
          georgianCoreMeaning:
            "გამოიყენე მოქმედების ხანგრძლივობის ან პროცესის ხაზგასასმელად, როცა ის წარსულში დაიწყო და ახლაც გრძელდება, ან ახლახან შეწყდა.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + have/has been + verb-ing",
              note: "Use has been with he, she, and it.",
              georgianNote:
                "He, she და it-ის შემთხვევაში გამოიყენე has been.",
            },
            {
              label: "Negative",
              formula: "Subject + have/has not been + verb-ing",
              note: "Use haven't been or hasn't been in common speech.",
              georgianNote:
                "საუბარში ხშირად გამოიყენება haven't been ან hasn't been.",
            },
            {
              label: "Question",
              formula: "Have/Has + subject + been + verb-ing?",
              note: "The focus is often on how long the action has continued.",
              georgianNote:
                "ხშირად ყურადღება გამახვილებულია იმაზე, რამდენი ხანია მოქმედება გრძელდება.",
            },
          ],

          whenToUse: [
            {
              title: "An action continuing until now",
              georgianTitle: "მოქმედება, რომელიც აქამდე გრძელდება",
              explanation:
                "Emphasise how long an activity has been in progress.",
              georgianExplanation:
                "ხაზი გაუსვი, რამდენი ხანია მოქმედება მიმდინარეობს.",
              example: {
                english: "I've been learning English for two years.",
                georgian: "ინგლისურს უკვე ორი წელია ვსწავლობ.",
              },
            },
            {
              title: "A recent activity with a visible result",
              georgianTitle: "ახლახან დასრულებული მოქმედება, რომლის შედეგიც ჩანს",
              explanation:
                "The activity may have just stopped, but its effect is visible now.",
              georgianExplanation:
                "მოქმედება შეიძლება ახლახან შეწყდა, მაგრამ მისი შედეგი ახლა ჩანს.",
              example: {
                english: "You're out of breath. Have you been running?",
                georgian: "სუნთქვა გეკვრის. დარბოდი?",
              },
            },
          ],

          examples: [
            {
              english: "She's been working on this project since May.",
              georgian: "ის ამ პროექტზე მაისიდან მუშაობს.",
            },
            {
              english: "We haven't been sleeping well lately.",
              georgian: "ბოლო დროს კარგად არ გვძინავს.",
            },
            {
              english: "How long have you been waiting?",
              georgian: "რამდენი ხანია ელოდები?",
            },
          ],

          signalWords: [
            "for",
            "since",
            "all day",
            "lately",
            "recently",
            "how long",
          ],

          commonMistakes: [
            {
              wrong: "I am learning English since 2024.",
              correct: "I've been learning English since 2024.",
              explanation:
                "For an activity that started in the past and continues now, Present Perfect Continuous is often appropriate.",
              georgianExplanation:
                "მოქმედებისთვის, რომელიც წარსულში დაიწყო და ახლაც გრძელდება, ხშირად გამოიყენება Present Perfect Continuous.",
            },
          ],
        },
      ],
    },

    {
      id: "past",
      title: "Past",
      georgianTitle: "წარსული დროები",
      description:
        "Describe completed past events, actions in progress, and how past events relate to one another.",
      georgianDescription:
        "აღწერე წარსულში დასრულებული მოვლენები, მიმდინარე მოქმედებები და წარსულ მოვლენებს შორის კავშირი.",

      tenses: [
        {
          id: "past-simple",
          title: "Past Simple",
          georgianTitle: "წარსული მარტივი დრო",

          coreMeaning:
            "Use it for actions or situations that happened and finished in the past.",
          georgianCoreMeaning:
            "გამოიყენე წარსულში მომხდარი და დასრულებული მოქმედებებისა და სიტუაციების აღსაწერად.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + past verb",
              note: "Regular verbs usually end in -ed; irregular verbs have their own forms.",
              georgianNote:
                "რეგულარულ ზმნებს ჩვეულებრივ ემატება -ed; არარეგულარულ ზმნებს საკუთარი ფორმები აქვთ.",
            },
            {
              label: "Negative",
              formula: "Subject + did not + base verb",
              note: "After did not, use the base verb.",
              georgianNote:
                "Did not-ის შემდეგ გამოიყენე ზმნის საწყისი ფორმა.",
            },
            {
              label: "Question",
              formula: "Did + subject + base verb?",
              note: "Use did for all subjects.",
              georgianNote:
                "Did გამოიყენება ყველა ქვემდებარესთან.",
            },
          ],

          whenToUse: [
            {
              title: "Finished past actions",
              georgianTitle: "წარსულში დასრულებული მოქმედებები",
              explanation:
                "An action happened at a finished time in the past.",
              georgianExplanation:
                "მოქმედება მოხდა წარსულში, დასრულებულ დროის მონაკვეთში.",
              example: {
                english: "I finished the report yesterday.",
                georgian: "რეპორტი გუშინ დავასრულე.",
              },
            },
            {
              title: "A sequence of past events",
              georgianTitle: "წარსული მოვლენების თანმიმდევრობა",
              explanation:
                "Use it to tell a story or describe events in order.",
              georgianExplanation:
                "გამოიყენე ამბის მოსაყოლად ან მოვლენების თანმიმდევრობით აღსაწერად.",
              example: {
                english: "I got home, made dinner, and watched a film.",
                georgian: "სახლში მივედი, ვახშამი მოვამზადე და ფილმს ვუყურე.",
              },
            },
          ],

          examples: [
            {
              english: "We met the client last Friday.",
              georgian: "კლიენტს გასულ პარასკევს შევხვდით.",
            },
            {
              english: "He didn't answer my message.",
              georgian: "მან ჩემს შეტყობინებას არ უპასუხა.",
            },
            {
              english: "Did you see the email?",
              georgian: "ელფოსტა ნახე?",
            },
          ],

          signalWords: [
            "yesterday",
            "last week",
            "two days ago",
            "in 2020",
            "when I was a child",
          ],

          commonMistakes: [
            {
              wrong: "Did you went there?",
              correct: "Did you go there?",
              explanation:
                "After did, use the base verb: go, not went.",
              georgianExplanation:
                "Did-ის შემდეგ გამოიყენე ზმნის საწყისი ფორმა: go და არა went.",
            },
            {
              wrong: "I didn't saw it.",
              correct: "I didn't see it.",
              explanation:
                "After didn't, use the base verb.",
              georgianExplanation:
                "Didn't-ის შემდეგ გამოიყენე ზმნის საწყისი ფორმა.",
            },
          ],
        },

        {
          id: "past-continuous",
          title: "Past Continuous",
          georgianTitle: "წარსული განგრძობითი დრო",

          coreMeaning:
            "Use it for an action that was in progress at a particular time in the past, often as background to another event.",
          georgianCoreMeaning:
            "გამოიყენე მოქმედებისთვის, რომელიც წარსულის კონკრეტულ მომენტში მიმდინარეობდა და ხშირად სხვა მოვლენისთვის ფონურ მოქმედებას წარმოადგენს.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + was/were + verb-ing",
              note: "Use was with I, he, she, it; use were with you, we, they.",
              georgianNote:
                "I, he, she, it-თან გამოიყენე was; you, we, they-თან — were.",
            },
            {
              label: "Negative",
              formula: "Subject + was/were not + verb-ing",
              note: "Common short forms are wasn't and weren't.",
              georgianNote:
                "შემოკლებული ფორმებია wasn't და weren't.",
            },
            {
              label: "Question",
              formula: "Was/Were + subject + verb-ing?",
              note: "Move was or were before the subject.",
              georgianNote:
                "კითხვაში was ან were ქვემდებარის წინ გადაიტანე.",
            },
          ],

          whenToUse: [
            {
              title: "In progress at a past time",
              georgianTitle: "მოქმედება წარსულის კონკრეტულ მომენტში",
              explanation:
                "Describe what was happening at a particular past time.",
              georgianExplanation:
                "აღწერე, რა ხდებოდა წარსულის კონკრეტულ მომენტში.",
              example: {
                english: "At 8 p.m., I was still working.",
                georgian: "საღამოს 8 საათზე ჯერ კიდევ ვმუშაობდი.",
              },
            },
            {
              title: "Background action interrupted by another event",
              georgianTitle: "ფონური მოქმედება, რომელსაც სხვა მოვლენა წყვეტს",
              explanation:
                "The longer action is often Past Continuous; the interrupting event is often Past Simple.",
              georgianExplanation:
                "ხანგრძლივი ფონური მოქმედება ხშირად Past Continuous-შია, ხოლო შემაწყვეტინებელი მოვლენა — Past Simple-ში.",
              example: {
                english: "I was driving when you called.",
                georgian: "როცა დამირეკე, მანქანას ვმართავდი.",
              },
            },
          ],

          examples: [
            {
              english: "They were having lunch when I arrived.",
              georgian: "როცა მივედი, ისინი სადილობდნენ.",
            },
            {
              english: "She wasn't listening during the meeting.",
              georgian: "შეხვედრის დროს ის არ უსმენდა.",
            },
            {
              english: "What were you doing at midnight?",
              georgian: "შუაღამისას რას აკეთებდი?",
            },
          ],

          signalWords: [
            "while",
            "when",
            "at that moment",
            "at 7 p.m. yesterday",
          ],

          commonMistakes: [
            {
              wrong: "I was work when he called.",
              correct: "I was working when he called.",
              explanation:
                "After was or were, use the -ing form.",
              georgianExplanation:
                "Was ან were-ის შემდეგ გამოიყენე ზმნის -ing ფორმა.",
            },
          ],
        },

        {
          id: "past-perfect",
          title: "Past Perfect",
          georgianTitle: "წარსული სრული დრო",

          coreMeaning:
            "Use it to show that one past action happened before another past time or event.",
          georgianCoreMeaning:
            "გამოიყენე იმის საჩვენებლად, რომ ერთი წარსული მოქმედება მეორე წარსულ დროს ან მოვლენამდე მოხდა.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + had + past participle",
              note: "Use had with every subject.",
              georgianNote:
                "Had გამოიყენება ყველა ქვემდებარესთან.",
            },
            {
              label: "Negative",
              formula: "Subject + had not + past participle",
              note: "The common short form is hadn't.",
              georgianNote: "გავრცელებული შემოკლებული ფორმაა hadn't.",
            },
            {
              label: "Question",
              formula: "Had + subject + past participle?",
              note: "Use the past participle after had.",
              georgianNote: "Had-ის შემდეგ გამოიყენე past participle.",
            },
          ],

          whenToUse: [
            {
              title: "Earlier past action",
              georgianTitle: "უფრო ადრე მომხდარი წარსული მოქმედება",
              explanation:
                "Make the order of two past events clear.",
              georgianExplanation:
                "ნათლად აჩვენე ორი წარსული მოვლენის თანმიმდევრობა.",
              example: {
                english: "The meeting had started before I arrived.",
                georgian: "შეხვედრა დაწყებული იყო, სანამ მივიდოდი.",
              },
            },
            {
              title: "A past result explained by an earlier event",
              georgianTitle: "წარსული შედეგი, რომელსაც უფრო ადრინდელი მოვლენა ხსნის",
              explanation:
                "Explain why something was already true at a past moment.",
              georgianExplanation:
                "ახსენი, რატომ იყო რაღაც უკვე ასე წარსულის კონკრეტულ მომენტში.",
              example: {
                english: "She was tired because she hadn't slept well.",
                georgian: "ის დაღლილი იყო, რადგან კარგად არ ეძინა.",
              },
            },
          ],

          examples: [
            {
              english: "I'd already eaten when they invited me to dinner.",
              georgian: "როცა ვახშამზე დამპატიჟეს, უკვე ნაჭამი მქონდა.",
            },
            {
              english: "He hadn't seen the report before the meeting.",
              georgian: "შეხვედრამდე მას რეპორტი ნანახი არ ჰქონდა.",
            },
            {
              english: "Had you met her before that day?",
              georgian: "იმ დღემდე მას შეხვედრილი იყავი?",
            },
          ],

          signalWords: [
            "before",
            "after",
            "by the time",
            "already",
            "never",
          ],

          commonMistakes: [
            {
              wrong: "When I arrived, the meeting already started.",
              correct: "When I arrived, the meeting had already started.",
              explanation:
                "Use Past Perfect when you need to show that the meeting started before your arrival.",
              georgianExplanation:
                "გამოიყენე Past Perfect, როცა გინდა აჩვენო, რომ შეხვედრა შენს მისვლამდე დაიწყო.",
            },
          ],
        },

        {
          id: "past-perfect-continuous",
          title: "Past Perfect Continuous",
          georgianTitle: "წარსული სრული განგრძობითი დრო",

          coreMeaning:
            "Use it to emphasise how long an activity had been continuing before a past time or event.",
          georgianCoreMeaning:
            "გამოიყენე იმის ხაზგასასმელად, რამდენი ხანი გრძელდებოდა მოქმედება წარსულის კონკრეტულ მომენტამდე ან მოვლენამდე.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + had been + verb-ing",
              note: "Use had been with every subject.",
              georgianNote:
                "Had been გამოიყენება ყველა ქვემდებარესთან.",
            },
            {
              label: "Negative",
              formula: "Subject + had not been + verb-ing",
              note: "The common short form is hadn't been.",
              georgianNote:
                "გავრცელებული შემოკლებული ფორმაა hadn't been.",
            },
            {
              label: "Question",
              formula: "Had + subject + been + verb-ing?",
              note: "Often used with how long, for, or since.",
              georgianNote:
                "ხშირად გამოიყენება how long, for ან since-თან.",
            },
          ],

          whenToUse: [
            {
              title: "Duration before a past event",
              georgianTitle: "ხანგრძლივობა წარსულ მოვლენამდე",
              explanation:
                "Focus on how long an activity had been happening before something else occurred.",
              georgianExplanation:
                "ყურადღება გაამახვილე იმაზე, რამდენი ხანი მიმდინარეობდა მოქმედება სხვა მოვლენის მოხდენამდე.",
              example: {
                english: "I'd been waiting for an hour when the bus arrived.",
                georgian: "ავტობუსი რომ მოვიდა, უკვე ერთი საათი იყო, რაც ველოდებოდი.",
              },
            },
            {
              title: "A past result with an ongoing cause",
              georgianTitle: "წარსული შედეგი, რომელსაც ხანგრძლივი მოქმედება იწვევს",
              explanation:
                "Explain a past condition by describing the activity that continued before it.",
              georgianExplanation:
                "ახსენი წარსული მდგომარეობა იმ მოქმედებით, რომელიც მანამდე გარკვეული დროის განმავლობაში მიმდინარეობდა.",
              example: {
                english: "He was exhausted because he'd been working all night.",
                georgian: "ის გამოფიტული იყო, რადგან მთელი ღამე მუშაობდა.",
              },
            },
          ],

          examples: [
            {
              english: "They'd been discussing the issue for hours.",
              georgian: "ისინი ამ საკითხს საათების განმავლობაში განიხილავდნენ.",
            },
            {
              english: "She hadn't been feeling well before the trip.",
              georgian: "მოგზაურობამდე ის თავს კარგად ვერ გრძნობდა.",
            },
            {
              english: "How long had you been living there?",
              georgian: "რამდენი ხანი ცხოვრობდი იქ?",
            },
          ],

          signalWords: [
            "for",
            "since",
            "how long",
            "before",
            "all day",
          ],

          commonMistakes: [
            {
              wrong: "I had been work for hours.",
              correct: "I had been working for hours.",
              explanation:
                "After had been, use the -ing form.",
              georgianExplanation:
                "Had been-ის შემდეგ გამოიყენე ზმნის -ing ფორმა.",
            },
          ],
        },
      ],
    },

    {
      id: "future",
      title: "Future",
      georgianTitle: "მომავალი დროები",
      description:
        "Talk about predictions, plans, actions in progress, and actions completed by a future time.",
      georgianDescription:
        "ისაუბრე პროგნოზებზე, გეგმებზე, მომავალში მიმდინარე მოქმედებებსა და მომავალ კონკრეტულ მომენტამდე დასრულებულ მოქმედებებზე.",

      tenses: [
        {
          id: "future-simple",
          title: "Future Simple",
          georgianTitle: "მომავალი მარტივი დრო",

          coreMeaning:
            "Use will for predictions, spontaneous decisions, offers, and promises. English also uses other forms to talk about the future.",
          georgianCoreMeaning:
            "Will გამოიყენე პროგნოზებისთვის, საუბრის მომენტში მიღებული გადაწყვეტილებებისთვის, შეთავაზებებისა და დაპირებებისთვის. მომავალზე სასაუბროდ ინგლისურში სხვა ფორმებიც გამოიყენება.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + will + base verb",
              note: "Will is followed by the base verb.",
              georgianNote:
                "Will-ის შემდეგ გამოიყენე ზმნის საწყისი ფორმა.",
            },
            {
              label: "Negative",
              formula: "Subject + will not + base verb",
              note: "The common short form is won't.",
              georgianNote:
                "გავრცელებული შემოკლებული ფორმაა won't.",
            },
            {
              label: "Question",
              formula: "Will + subject + base verb?",
              note: "Use will before the subject.",
              georgianNote:
                "კითხვაში will ქვემდებარის წინ მოათავსე.",
            },
          ],

          whenToUse: [
            {
              title: "Predictions and opinions",
              georgianTitle: "პროგნოზები და მოსაზრებები",
              explanation:
                "Say what you think will happen.",
              georgianExplanation:
                "თქვი, შენი აზრით, რა მოხდება.",
              example: {
                english: "I think the meeting will finish early.",
                georgian: "ვფიქრობ, შეხვედრა ადრე დასრულდება.",
              },
            },
            {
              title: "Spontaneous decisions",
              georgianTitle: "საუბრის მომენტში მიღებული გადაწყვეტილებები",
              explanation:
                "Decide to do something as you are speaking.",
              georgianExplanation:
                "გადაწყვიტე რაღაცის გაკეთება საუბრის მომენტში.",
              example: {
                english: "I'll answer the email now.",
                georgian: "ახლავე ვუპასუხებ ელფოსტას.",
              },
            },
            {
              title: "Offers and promises",
              georgianTitle: "შეთავაზებები და დაპირებები",
              explanation:
                "Offer help or promise to do something.",
              georgianExplanation:
                "შესთავაზე დახმარება ან დაპირდი, რომ რაღაცას გააკეთებ.",
              example: {
                english: "Don't worry. I'll help you.",
                georgian: "არ ინერვიულო. დაგეხმარები.",
              },
            },
          ],

          examples: [
            {
              english: "I'll send you the file after the meeting.",
              georgian: "შეხვედრის შემდეგ ფაილს გამოგიგზავნი.",
            },
            {
              english: "They won't be late.",
              georgian: "ისინი არ დააგვიანებენ.",
            },
            {
              english: "Will you join us for lunch?",
              georgian: "შემოგვიერთდები სადილზე?",
            },
          ],

          signalWords: [
            "I think",
            "probably",
            "perhaps",
            "I promise",
            "I’ll",
          ],

          commonMistakes: [
            {
              wrong: "I will to call you.",
              correct: "I will call you.",
              explanation:
                "Do not use to between will and the base verb.",
              georgianExplanation:
                "Will-სა და ზმნის საწყის ფორმას შორის to არ გამოიყენო.",
            },
          ],
        },

        {
          id: "future-continuous",
          title: "Future Continuous",
          georgianTitle: "მომავალი განგრძობითი დრო",

          coreMeaning:
            "Use it for an action that will be in progress at a particular time in the future.",
          georgianCoreMeaning:
            "გამოიყენე მოქმედებისთვის, რომელიც მომავალში კონკრეტულ მომენტში მიმდინარეობაში იქნება.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + will be + verb-ing",
              note: "Use be + verb-ing after will.",
              georgianNote:
                "Will-ის შემდეგ გამოიყენე be + ზმნის -ing ფორმა.",
            },
            {
              label: "Negative",
              formula: "Subject + will not be + verb-ing",
              note: "The common short form is won't be.",
              georgianNote:
                "გავრცელებული შემოკლებული ფორმაა won't be.",
            },
            {
              label: "Question",
              formula: "Will + subject + be + verb-ing?",
              note: "Use be before the -ing form.",
              georgianNote:
                "Be მოათავსე -ing ფორმის წინ.",
            },
          ],

          whenToUse: [
            {
              title: "In progress at a future time",
              georgianTitle: "მომავალში კონკრეტულ მომენტში მიმდინარე მოქმედება",
              explanation:
                "Describe what will be happening at a particular future time.",
              georgianExplanation:
                "აღწერე, რა იქნება მიმდინარე მომავალში კონკრეტულ მომენტში.",
              example: {
                english: "This time tomorrow, I'll be flying to Tbilisi.",
                georgian: "ხვალ ამ დროს თბილისში მივფრინავ.",
              },
            },
            {
              title: "Expected activities",
              georgianTitle: "მოსალოდნელი მოქმედებები",
              explanation:
                "Talk about something expected to be happening as part of a normal course of events.",
              georgianExplanation:
                "ისაუბრე მოქმედებაზე, რომელიც ჩვეულებრივი მოვლენების ფარგლებში მოსალოდნელია.",
              example: {
                english: "I'll be working during the afternoon.",
                georgian: "შუადღის შემდეგ ვიმუშავებ.",
              },
            },
          ],

          examples: [
            {
              english: "At 10 a.m., we'll be meeting the new client.",
              georgian: "დილის 10 საათზე ახალ კლიენტს შევხვდებით.",
            },
            {
              english: "She won't be using her laptop tonight.",
              georgian: "დღეს საღამოს ის ლეპტოპს არ გამოიყენებს.",
            },
            {
              english: "Will you be staying at the hotel?",
              georgian: "სასტუმროში დარჩები?",
            },
          ],

          signalWords: [
            "this time tomorrow",
            "at 8 p.m. tonight",
            "when",
            "during",
          ],

          commonMistakes: [
            {
              wrong: "I will be work at 9.",
              correct: "I will be working at 9.",
              explanation:
                "After will be, use the -ing form.",
              georgianExplanation:
                "Will be-ის შემდეგ გამოიყენე ზმნის -ing ფორმა.",
            },
          ],
        },

        {
          id: "future-perfect",
          title: "Future Perfect",
          georgianTitle: "მომავალი სრული დრო",

          coreMeaning:
            "Use it for an action that will be completed before a particular future time or deadline.",
          georgianCoreMeaning:
            "გამოიყენე მოქმედებისთვის, რომელიც მომავალში კონკრეტულ დრომდე ან ვადამდე დასრულებული იქნება.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + will have + past participle",
              note: "Use the past participle after will have.",
              georgianNote:
                "Will have-ის შემდეგ გამოიყენე past participle.",
            },
            {
              label: "Negative",
              formula: "Subject + will not have + past participle",
              note: "The common short form is won't have.",
              georgianNote:
                "გავრცელებული შემოკლებული ფორმაა won't have.",
            },
            {
              label: "Question",
              formula: "Will + subject + have + past participle?",
              note: "Often used with by or by the time.",
              georgianNote:
                "ხშირად გამოიყენება by ან by the time-თან.",
            },
          ],

          whenToUse: [
            {
              title: "Completed before a deadline",
              georgianTitle: "ვადამდე დასრულებული მოქმედება",
              explanation:
                "Emphasise that something will be finished by a future point.",
              georgianExplanation:
                "ხაზი გაუსვი, რომ რაღაც მომავალ კონკრეტულ მომენტამდე დასრულდება.",
              example: {
                english: "I'll have finished the report by Friday.",
                georgian: "რეპორტს პარასკევამდე დავასრულებ.",
              },
            },
            {
              title: "Looking back from a future point",
              georgianTitle: "მომავალი მომენტიდან წარსულზე შეხედვა",
              explanation:
                "Imagine a future time and say what will already be complete by then.",
              georgianExplanation:
                "წარმოიდგინე მომავალი დრო და თქვი, რა იქნება იმ დროისთვის უკვე დასრულებული.",
              example: {
                english: "By next June, she'll have worked here for ten years.",
                georgian: "მომავალი წლის ივნისისთვის აქ უკვე ათი წელი ექნება ნამუშევარი.",
              },
            },
          ],

          examples: [
            {
              english: "They'll have arrived by the time we get there.",
              georgian: "სანამ იქ მივალთ, ისინი უკვე ჩამოსულები იქნებიან.",
            },
            {
              english: "I won't have completed the course by Monday.",
              georgian: "ორშაბათისთვის კურსს დასრულებული არ მექნება.",
            },
            {
              english: "Will you have finished by 5 p.m.?",
              georgian: "საღამოს 5 საათისთვის დასრულებული გექნება?",
            },
          ],

          signalWords: [
            "by",
            "by then",
            "by the time",
            "before",
            "by next year",
          ],

          commonMistakes: [
            {
              wrong: "I will have finish by Friday.",
              correct: "I will have finished by Friday.",
              explanation:
                "After will have, use the past participle: finished.",
              georgianExplanation:
                "Will have-ის შემდეგ გამოიყენე past participle: finished.",
            },
          ],
        },

        {
          id: "future-perfect-continuous",
          title: "Future Perfect Continuous",
          georgianTitle: "მომავალი სრული განგრძობითი დრო",

          coreMeaning:
            "Use it to emphasise how long an activity will have continued by a particular future time.",
          georgianCoreMeaning:
            "გამოიყენე იმის ხაზგასასმელად, რამდენი ხანი ექნება მოქმედებას ნაგრძელები მომავალში კონკრეტული მომენტისთვის.",

          structure: [
            {
              label: "Positive",
              formula: "Subject + will have been + verb-ing",
              note: "Use been + verb-ing after will have.",
              georgianNote:
                "Will have-ის შემდეგ გამოიყენე been + ზმნის -ing ფორმა.",
            },
            {
              label: "Negative",
              formula: "Subject + will not have been + verb-ing",
              note: "The common short form is won't have been.",
              georgianNote:
                "გავრცელებული შემოკლებული ფორმაა won't have been.",
            },
            {
              label: "Question",
              formula: "Will + subject + have been + verb-ing?",
              note: "Often used with for and a future time reference.",
              georgianNote:
                "ხშირად გამოიყენება for-სა და მომავალ დროით მითითებასთან.",
            },
          ],

          whenToUse: [
            {
              title: "Duration up to a future point",
              georgianTitle: "ხანგრძლივობა მომავალ მომენტამდე",
              explanation:
                "Focus on the length of time an activity will have continued.",
              georgianExplanation:
                "ყურადღება გაამახვილე იმაზე, რამდენი ხანი ექნება მოქმედებას ნაგრძელები.",
              example: {
                english: "By June, I'll have been working here for five years.",
                georgian: "ივნისისთვის აქ მუშაობის ხუთი წელი შემისრულდება.",
              },
            },
          ],

          examples: [
            {
              english: "By midnight, they'll have been driving for six hours.",
              georgian: "შუაღამისთვის უკვე ექვსი საათი ექნებათ ნამგზავრი მანქანით.",
            },
            {
              english: "Next month, she'll have been studying English for a year.",
              georgian: "მომავალ თვეში ინგლისურის სწავლის ერთი წელი შეუსრულდება.",
            },
            {
              english: "How long will you have been living here by December?",
              georgian: "დეკემბრისთვის რამდენი ხანი გექნება აქ ცხოვრების?",
            },
          ],

          signalWords: [
            "for",
            "by",
            "by the time",
            "by next month",
            "how long",
          ],

          commonMistakes: [
            {
              wrong: "By June, I will have been work here for a year.",
              correct: "By June, I will have been working here for a year.",
              explanation:
                "The full form is will have been + verb-ing.",
              georgianExplanation:
                "სრული ფორმაა will have been + ზმნის -ing ფორმა.",
            },
          ],
        },
      ],
    },
  ],
} as const;