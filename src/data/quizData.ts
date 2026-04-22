export interface QuizQuestion {
  id: string;
  question: string;
  questionAr: string;
  options: string[];
  optionsAr: string[];
  correctAnswer: number;
  explanation?: string;
  explanationAr?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizStage {
  id: string;
  name: string;
  nameAr: string;
  ageRange: string;
  ageRangeAr: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: QuizQuestion[];
}

export const quizStages: QuizStage[] = [
  {
    id: 'easy',
    name: 'Beginner',
    nameAr: ' beginners',
    ageRange: 'Grade 3-6',
    ageRangeAr: '3-6',
    difficulty: 'easy',
    questions: [
      {
        id: 'q1-easy',
        question: 'What is the largest planet in our solar system?',
        questionAr: 'ما هو أكبر كوكب في نظامنا الشمسي؟',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        optionsAr: ['الأرض', 'المريخ', 'المشتري', 'زحل'],
        correctAnswer: 2,
        explanation: 'Jupiter is the largest planet in our solar system!',
        explanationAr: 'المشتري هو أكبر كوكب في نظامنا الشمسي!',
        difficulty: 'easy'
      },
      {
        id: 'q2-easy',
        question: 'Which planet is known as the "Red Planet"?',
        questionAr: 'أي كوكب يُعرف باسم "الكوكب الأحمر"؟',
        options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
        optionsAr: ['الزهرة', 'المريخ', 'المشتري', 'عطارد'],
        correctAnswer: 1,
        explanation: 'Mars is called the "Red Planet" because of its red color.',
        explanationAr: 'يُسمى المريخ "الكوكب الأحمر" بسبب لونه الأحمر.',
        difficulty: 'easy'
      },
      {
        id: 'q3-easy',
        question: 'What is at the center of our solar system?',
        questionAr: 'ماذا يوجد في مركز نظامنا الشمسي؟',
        options: ['Earth', 'Moon', 'Sun', 'Mars'],
        optionsAr: ['الأرض', 'القمر', 'الشمس', 'المريخ'],
        correctAnswer: 2,
        explanation: 'The Sun is at the center of our solar system.',
        explanationAr: 'الشمس في مركز نظامنا الشمسي.',
        difficulty: 'easy'
      },
      {
        id: 'q4-easy',
        question: 'Which planet is closest to the Sun?',
        questionAr: 'أي كوكب هو الأقرب إلى الشمس؟',
        options: ['Mercury', 'Venus', 'Earth', 'Mars'],
        optionsAr: ['عطارد', 'الزهرة', 'الأرض', 'المريخ'],
        correctAnswer: 0,
        explanation: 'Mercury is the closest planet to the Sun.',
        explanationAr: 'عطارد هو الكوكب الأقرب إلى الشمس.',
        difficulty: 'easy'
      },
      {
        id: 'q5-easy',
        question: 'What planet do we live on?',
        questionAr: 'على أي كوكب نعيش؟',
        options: ['Mars', 'Earth', 'Venus', 'Jupiter'],
        optionsAr: ['المريخ', 'الأرض', 'الزهرة', 'المشتري'],
        correctAnswer: 1,
        explanation: 'We live on planet Earth!',
        explanationAr: 'نحن نعيش على كوكب الأرض!',
        difficulty: 'easy'
      },
      {
        id: 'q6-easy',
        question: 'Which planet has beautiful rings?',
        questionAr: 'أي كوكب يمتلك حلقات جميلة؟',
        options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
        optionsAr: ['المشتري', 'زحل', 'المريخ', 'الأرض'],
        correctAnswer: 1,
        explanation: 'Saturn is famous for its beautiful ring system.',
        explanationAr: 'زحل مشهور بنظام حلقاته الجميل.',
        difficulty: 'easy'
      },
      {
        id: 'q7-easy',
        question: 'How many moons does Earth have?',
        questionAr: 'كم قمراً تمتلكه الأرض؟',
        options: ['0', '1', '2', '3'],
        optionsAr: ['0', '1', '2', '3'],
        correctAnswer: 1,
        explanation: 'Earth has one moon called the Moon.',
        explanationAr: 'الأرض تمتلك قمراً واحداً يسمى القمر.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'medium',
    name: 'Intermediate',
    nameAr: 'intermediate',
    ageRange: 'Grade 6-12',
    ageRangeAr: '6-12',
    difficulty: 'medium',
    questions: [
      {
        id: 'q1-medium',
        question: 'Which planet has the longest day?',
        questionAr: 'أي كوكب يمتلك أطول يوم؟',
        options: ['Mercury', 'Venus', 'Earth', 'Mars'],
        optionsAr: ['عطارد', 'الزهرة', 'الأرض', 'المريخ'],
        correctAnswer: 1,
        explanation: 'Venus has the longest day, taking 243 Earth days to rotate once.',
        explanationAr: 'الزهرة تمتلك أطول يوم، حيث تستغرق 243 يوماً أرضياً للدوران مرة واحدة.',
        difficulty: 'medium'
      },
      {
        id: 'q2-medium',
        question: 'What gas makes up most of Jupiter\'s atmosphere?',
        questionAr: 'ما الغاز الذي يشكل معظم غلاف المشتري الجوي؟',
        options: ['Oxygen', 'Nitrogen', 'Hydrogen', 'Carbon Dioxide'],
        optionsAr: ['الأكسجين', 'النيتروجين', 'الهيدروجين', 'ثاني أكسيد الكربون'],
        correctAnswer: 2,
        explanation: 'Jupiter is mostly made of hydrogen gas.',
        explanationAr: 'المشتري يتكون في الغالب من غاز الهيدروجين.',
        difficulty: 'medium'
      },
      {
        id: 'q3-medium',
        question: 'Which planet rotates on its side?',
        questionAr: 'أي كوكب يدور على جانبه؟',
        options: ['Neptune', 'Saturn', 'Uranus', 'Mars'],
        optionsAr: ['نبتون', 'زحل', 'أورانوس', 'المريخ'],
        correctAnswer: 2,
        explanation: 'Uranus rotates on its side with a 98-degree tilt.',
        explanationAr: 'أورانوس يدور على جانبه مع ميل 98 درجة.',
        difficulty: 'medium'
      },
      {
        id: 'q4-medium',
        question: 'What is the hottest planet in our solar system?',
        questionAr: 'ما هو أكثر الكواكب سخونة في نظامنا الشمسي؟',
        options: ['Mercury', 'Venus', 'Earth', 'Mars'],
        optionsAr: ['عطارد', 'الزهرة', 'الأرض', 'المريخ'],
        correctAnswer: 1,
        explanation: 'Venus is the hottest planet due to its thick atmosphere.',
        explanationAr: 'الزهرة هو أكثر الكواكب سخونة بسبب غلافه الجوي السميك.',
        difficulty: 'medium'
      },
      {
        id: 'q5-medium',
        question: 'Which planet has the most moons?',
        questionAr: 'أي كوكب يمتلك أكبر عدد من الأقمار؟',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        optionsAr: ['الأرض', 'المريخ', 'المشتري', 'زحل'],
        correctAnswer: 3,
        explanation: 'Saturn has over 80 known moons, more than any other planet.',
        explanationAr: 'زحل يمتلك أكثر من 80 قمراً معروفاً، أكثر من أي كوكب آخر.',
        difficulty: 'medium'
      },
      {
        id: 'q6-medium',
        question: 'What causes seasons on Earth?',
        questionAr: 'ماذا يسبب الفصول على الأرض؟',
        options: ['Distance from Sun', 'Earth\'s tilt', 'Moon phases', 'Solar flares'],
        optionsAr: ['المسافة من الشمس', 'ميل الأرض', 'أطوار القمر', 'الانفجارات الشمسية'],
        correctAnswer: 1,
        explanation: 'Earth\'s 23.5-degree tilt causes the seasons.',
        explanationAr: 'ميل الأرض بمقدار 23.5 درجة يسبب الفصول.',
        difficulty: 'medium'
      },
      {
        id: 'q7-medium',
        question: 'Which planet is known as the "Blue Planet"?',
        questionAr: 'أي كوكب يُعرف باسم "الكوكب الأزرق"؟',
        options: ['Earth', 'Neptune', 'Uranus', 'Venus'],
        optionsAr: ['الأرض', 'نبتون', 'أورانوس', 'الزهرة'],
        correctAnswer: 0,
        explanation: 'Earth is called the "Blue Planet" because of its oceans.',
        explanationAr: 'تُسمى الأرض "الكوكب الأزرق" بسبب محيطاتها.',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'hard',
    name: 'Advanced',
    nameAr: 'advanced',
    ageRange: 'Grade 12+',
    ageRangeAr: '12+',
    difficulty: 'hard',
    questions: [
      {
        id: 'q1-hard',
        question: 'What is the escape velocity from Earth\'s surface?',
        questionAr: 'ما هي سرعة الهروب من سطح الأرض؟',
        options: ['7.9 km/s', '11.2 km/s', '15.3 km/s', '20.1 km/s'],
        optionsAr: ['7.9 كم/ث', '11.2 كم/ث', '15.3 كم/ث', '20.1 كم/ث'],
        correctAnswer: 1,
        explanation: 'Earth\'s escape velocity is 11.2 km/s from the surface.',
        explanationAr: 'سرعة الهروب من الأرض هي 11.2 كم/ث من السطح.',
        difficulty: 'hard'
      },
      {
        id: 'q2-hard',
        question: 'Which planet has the strongest magnetic field?',
        questionAr: 'أي كوكب يمتلك أقوى مجال مغناطيسي؟',
        options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
        optionsAr: ['الأرض', 'المشتري', 'زحل', 'نبتون'],
        correctAnswer: 1,
        explanation: 'Jupiter has the strongest magnetic field in our solar system.',
        explanationAr: 'المشتري يمتلك أقوى مجال مغناطيسي في نظامنا الشمسي.',
        difficulty: 'hard'
      },
      {
        id: 'q3-hard',
        question: 'What is the Great Red Spot on Jupiter?',
        questionAr: 'ما هي البقعة الحمراء العظيمة على المشتري؟',
        options: ['A volcano', 'A storm', 'A mountain', 'A crater'],
        optionsAr: ['بركان', 'عاصفة', 'جبل', 'فوهة'],
        correctAnswer: 1,
        explanation: 'The Great Red Spot is a giant storm that has raged for centuries.',
        explanationAr: 'البقعة الحمراء العظيمة هي عاصفة عملاقة استمرت لقرون.',
        difficulty: 'hard'
      },
      {
        id: 'q4-hard',
        question: 'Which planet has the shortest year?',
        questionAr: 'أي كوكب يمتلك أقصر سنة؟',
        options: ['Mercury', 'Venus', 'Earth', 'Mars'],
        optionsAr: ['عطارد', 'الزهرة', 'الأرض', 'المريخ'],
        correctAnswer: 0,
        explanation: 'Mercury has the shortest year, only 88 Earth days.',
        explanationAr: 'عطارد يمتلك أقصر سنة، فقط 88 يوماً أرضياً.',
        difficulty: 'hard'
      },
      {
        id: 'q5-hard',
        question: 'What causes auroras on Earth?',
        questionAr: 'ماذا يسبب الشفق القطبي على الأرض؟',
        options: ['Moonlight', 'Solar wind', 'Lightning', 'Reflection'],
        optionsAr: ['ضوء القمر', 'الرياح الشمسية', 'البرق', 'الانعكاس'],
        correctAnswer: 1,
        explanation: 'Solar wind particles interacting with Earth\'s atmosphere cause auroras.',
        explanationAr: 'جسيمات الرياح الشمسية التي تتفاعل مع غلاف الأرض الجوي تسبب الشفق القطبي.',
        difficulty: 'hard'
      },
      {
        id: 'q6-hard',
        question: 'Which planet rotates backwards compared to most planets?',
        questionAr: 'أي كوكب يدور للخلف مقارنة بمعظم الكواكب؟',
        options: ['Mercury', 'Venus', 'Earth', 'Mars'],
        optionsAr: ['عطارد', 'الزهرة', 'الأرض', 'المريخ'],
        correctAnswer: 1,
        explanation: 'Venus rotates backwards (retrograde rotation).',
        explanationAr: 'الزهرة يدور للخلف (الدوران التراجعي).',
        difficulty: 'hard'
      },
      {
        id: 'q7-hard',
        question: 'What is the approximate temperature of the Sun\'s surface?',
        questionAr: 'ما هي درجة حرارة سطح الشمس تقريباً؟',
        options: ['2,000°C', '3,500°C', '5,500°C', '7,000°C'],
        optionsAr: ['2,000 درجة مئوية', '3,500 درجة مئوية', '5,500 درجة مئوية', '7,000 درجة مئوية'],
        correctAnswer: 2,
        explanation: 'The Sun\'s surface temperature is about 5,500°C.',
        explanationAr: 'درجة حرارة سطح الشمس حوالي 5,500 درجة مئوية.',
        difficulty: 'hard'
      }
    ]
  }
];
