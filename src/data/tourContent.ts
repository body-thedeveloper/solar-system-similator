// Custom tour content for each planet - unique and engaging stories
export interface TourContent {
  prologue: {
    en: string;
    ar: string;
  };
  story: {
    en: string;
    ar: string;
  };
  massExplanation: {
    en: string;
    ar: string;
  };
}

export const tourContent: Record<string, TourContent> = {
  mercury: {
    prologue: {
      en: "Meet Mercury 🔴, the speedy messenger of the skies! Racing around the Sun in just 88 days, this little world experiences extreme temperature swings—from scorching 430°C by day to freezing -180°C at night. It's the closest planet to our star, and boy, does it feel the heat!",
      ar: "تعرف على عطارد 🔴، الرسول السريع في السماء! يدور حول الشمس في 88 يوماً فقط، ويعيش هذا العالم الصغير تقلبات حرارية متطرفة—من 430°C حارقة نهاراً إلى -180°C متجمدة ليلاً. إنه أقرب كوكب إلى نجمنا، ويالها من حرارة شديدة!"
    },
    story: {
      en: "Despite being the smallest planet, Mercury has a giant iron heart—its core makes up 60% of its mass! Imagine squeezing a metal ball the size of a car into a walnut shell. That's essentially what Mercury is—a heavy metal world wearing a thin rocky jacket.",
      ar: "بالرغم من أنه أصغر كوكب، إلا أن عطارد يحمل قلباً حديدياً ضخماً—يشكل لبّه 60% من كتلته! تخيل أن تضغط كرة معدنية بحجم سيارة داخل قشرة جوز. هذا عطارد بالضبط—عالم معدني ثقيل يرتدي معطفاً صخرياً رقيقاً."
    },
    massExplanation: {
      en: "At 3.3 × 10²³ kg, Mercury may be lightweight compared to Earth, but it's surprisingly dense—second only to Earth in the whole Solar System!",
      ar: "بكتلة 3.3 × 10²³ كغ، قد يكون عطارد خفيفاً مقارنة بالأرض، لكنه مدهش في كثافته—ثاني أكثر الكواكب كثافة في النظام الشمسي بعد الأرض!"
    }
  },
  venus: {
    prologue: {
      en: "Behold Venus 🟡, the dazzling morning and evening star! Shrouded in thick clouds of sulfuric acid, this beauty is actually a hellish world with surface temperatures hot enough to melt lead. She's Earth's 'evil twin'—similar size, totally different personality!",
      ar: "ألقِ نظرة على الزهرة 🟡، النجم اللامع في الصباح والمساء! مغطاة بغيوم سميكة من حامض الكبريتيك، هذه الجمال عالم جهنمي حقيقي مع درجات حرارة سطح تذيب الرصاص. إنها 'التوأم الشرير' للأرض—نفس الحجم، شخصية مختلفة تماماً!"
    },
    story: {
      en: "Venus is the ultimate rebel—she rotates backwards! While most planets spin like tops, Venus does a slow backspin, making her day longer than her year. Sunrise in the west? On Venus, that's perfectly normal!",
      ar: "الزهرة هي المتمردة بامتياز—تدور في الاتجاه المعاكس! بينما تدور معظم الكواكب كالأعاصير، تدور الزهرة ببطء للخلف، مما يجعل يومها أطول من سنةها. الشمس تشرق من الغرب؟ على الزهرة، هذا طبيعي تماماً!"
    },
    massExplanation: {
      en: "Weighing 4.87 × 10²⁴ kg, Venus is about 80% of Earth's mass. If Earth is a basketball, Venus is a slightly deflated one—close enough in size that they could swap clothes!",
      ar: "بكتلة 4.87 × 10²⁴ كغ، تبلغ كتلة الزهرة حوالي 80% من كتلة الأرض. إذا كانت الأرض كرة سلة، فالزهرة كرة مفرغة قليلاً—قريبة جداً في الحجم لدرجة أنهما يمكن أن تتبادلا الملابس!"
    }
  },
  earth: {
    prologue: {
      en: "Welcome home to Earth 🌍, the blue marble suspended in space! The only known oasis of life in the cosmos, our planet is 71% water and 100% awesome. From towering mountains to deep ocean trenches, Earth is a masterpiece of cosmic artistry!",
      ar: "أهلاً بك في المنزل على الأرض 🌍، الكرة الزرقاء المعلقة في الفضاء! الواحة الوحيدة المعروفة للحياة في الكون، كوكبنا 71% ماء و100% رائع. من الجبال الشاهقة إلى خنادق المحيطات العميقة، الأرض تحفة فنية كونية!"
    },
    story: {
      en: "Earth isn't just special—it's a precious jewel. With the perfect distance from the Sun, a protective magnetic shield, and just the right amount of water, it's like the universe won the lottery creating this place. Cherish it, because there's no Planet B!",
      ar: "الأرض ليست مميزة فقط—إنها جوهرة ثمينة. مع المسافة المثالية من الشمس، ودرع مغناطيسي وقائي، وكمية ماء مناسبة تماماً، ما أعظم الخالق الذي خلق هذا المكان. اعتنِ بها، لأنه لا يوجد كوكب بديل!"
    },
    massExplanation: {
      en: "At 5.97 × 10²⁴ kg, Earth is the densest planet in the Solar System. All that rock and metal packed together makes us the heavyweight champion of the rocky worlds!",
      ar: "بكتلة 5.97 × 10²⁴ كغ، الأرض هي أكثر الكواكب كثافة في النظام الشمسي. كل هذه الصخور والمعادن المضغوطة معاً تجعلنا بطل الأوزان الثقيل في عالم الكواكب الصخرية!"
    }
  },
  mars: {
    prologue: {
      en: "Greetings from Mars 🔴, the Red Planet that has captured human imagination for millennia! With its rusty iron oxide surface and towering Olympus Mons volcano, Mars is the ultimate frontier waiting to be explored. The future home of humanity?",
      ar: "تحيات من المريخ 🔴، الكوكب الأحمر الذي أسّر خيال البشرية لآلاف السنين! مع سطحه المغطى بأكسيد الحديد الصدئ وبركان أولمبس مونس الشاهق، المريخ هو الحدود المطلقة في انتظار الاستكشاف. الموطن المستقبلي للبشرية؟"
    },
    story: {
      en: "Mars is a world of superlatives! It hosts the Solar System's biggest volcano (Olympus Mons) and deepest canyon (Valles Marineris). Its two tiny moons, Phobos and Deimos, are like captured asteroids racing around their rust-colored master.",
      ar: "المريخ عالم من القمم! يضم أكبر بركان في النظام الشمسي (أولمبس مونس) وأعمق وادٍ (فاليس مارينيريس). قمراه الصغيران، فوبوس وديموس، ككويكبات مقبوض عليها تتسابقان حول سيدها ذي اللون الصدئ."
    },
    massExplanation: {
      en: "At 6.42 × 10²³ kg, Mars is only about 10% as massive as Earth. It's the lightweight of the rocky planets—but what it lacks in heft, it makes up for in sheer magnificence!",
      ar: "بكتلة 6.42 × 10²³ كغ، المريخ يمثل فقط 10% من كتلة الأرض. إنه الخفيف بين الكواكب الصخرية—لكن ما ينقصه في الوزن، يعوضه في الروعة المطلقة!"
    }
  },
  jupiter: {
    prologue: {
      en: "Marvel at Jupiter 🟠, the undisputed king of planets! This gas giant is so massive that all other planets could fit inside it with room to spare. With its mesmerizing bands of clouds and the Great Red Spot storm raging for centuries, Jupiter is a planet of superlatives!",
      ar: "تأمل في المشتري 🟠، ملك الكواكب بلا منازع! هذا العملاق الغازي ضخم لدرجة أن جميع الكواكب الأخرى يمكن أن تتسع بداخله مع مساحة فارغة. مع نطاقاته السحابية الرائعة والبقعة الحمراء العظيمة التي تشتعل منذ قرون، المشتري كوكب من القمم!"
    },
    story: {
      en: "Jupiter isn't just big—it's a planetary bodyguard! Its immense gravity shields Earth by flinging away dangerous comets and asteroids. Some scientists think Jupiter might have saved life on Earth countless times. Thanks, big guy!",
      ar: "المشتري ليس كبيراً فقط—إنه حارس كوكبي! جاذبيته الهائلة تحمي الأرض بإبعاد المذنبات والكويكبات الخطيرة. يعتقد بعض العلماء أن المشتري ربما أنقذ الحياة على الأرض مرات لا تحصى. شكراً يا عملاق!"
    },
    massExplanation: {
      en: "Tipping the scales at 1.90 × 10²⁷ kg, Jupiter is a beast! That's 318 Earth masses packed into one giant ball of gas. You could fit 1,300 Earths inside Jupiter's volume—now that's planetary overachievement!",
      
      ar: "بكتلة 1.90 × 10²⁷ كغ، المشتري وحش! هذا يعادل 318 كتلة أرض مضغوطة في كرة غازية واحدة. يمكن أن تتسع 1300 أرض داخل حجم المشتري—هذا إنجاز كوكبي فاق التوقعات!"
    }
  },
  saturn: {
    prologue: {
      en: "Be enchanted by Saturn 🪐, the jewel of the Solar System! Adorned with magnificent icy rings that stretch nearly 300,000 kilometers, this gas giant floats like a delicate ornament in space. Despite its enormous size, Saturn is light enough to float in a bathtub—if you could find one big enough!",
      ar: "انبهر بزحل 🪐، جوهرة النظام الشمسي! مزينة بحلقات جليدية رائعة تمتد لما يقرب من 300,000 كيلومتر، يطفو هذا العملاق الغازي كزخرفة رقيقة في الفضاء. بالرغم من حجمه الهائل، زحل خفيف بما يكفي ليطفو في حوض استحمام—إذا وجدت واحداً كبيراً بما يكفي!"
    },
    story: {
      en: "Saturn's rings aren't solid—they're made of billions of ice chunks, some as small as grains of sand, others as big as mountains! Each ring particle is on its own orbit, dancing around Saturn in a cosmic ballet that has lasted billions of years.",
      ar: "حلقات زحل ليست صلبة—إنها مصنوعة من مليارات قطع الجليد، بعضها صغير كحبات الرمل، وبعضها كبير كالجبال! كل جزء في الحلقات في مداره الخاص، يرقص حول زحل في باليه كوني استمر مليارات السنين."
    },
    massExplanation: {
      en: "With 5.68 × 10²⁶ kg, Saturn is about 95 times Earth's mass. But here's the kicker—it's so low-density that if you had a bathtub 75,000 kilometers across, Saturn would bob around like a rubber duck!",
      ar: "بكتلة 5.68 × 10²⁶ كغ، زحل يمثل حوالي 95 كتلة أرضية. لكن المفاجأة—كثافته منخفضة جداً لدرجة أنه لو كان لديك حوض استحمام بعرض 75,000 كيلومتر، سيطفو زحل مثل بطة مطاطية!"
    }
  },
  uranus: {
    prologue: {
      en: "Discover Uranus 🔵, the ice giant that rolls through space on its side! With an axial tilt of 98 degrees, Uranus experiences 42-year summers and winters. This cyan-colored wonder is the coldest planet in the Solar System, with temperatures dropping to -224°C!",
      ar: "اكتشف أورانوس 🔵، العملاق الجليدي الذي يتدحرج في الفضاء على جانبه! مع ميل محوري 98 درجة، يعيش أورانوس صيفاً وشتاءً يستمر 42 سنة لكل منهما. هذا العجيب ذا اللون الأزرق الفيروزي هو أبرد كوكب في النظام الشمسي، مع درجات حرارة تنخفض إلى -224 درجة مئوية!"
    },
    story: {
      en: "Uranus is the ultimate oddball—it spins on its side! Scientists think a massive collision early in its history knocked it over. Imagine lying on the ground and rolling in a circle around a lamp—that's basically how Uranus orbits the Sun!",
      ar: "أورانوس هو الغريب بامتياز—يدور على جانبه! يعتقد العلماء أن تصادماً هائلاً في بداية تاريخه أطاح به. تخيل نفسك مستلقياً على الأرض وتتدحرج في دائرة حول مصباح—هذا بشكل أساسي كيف يدور أورانوس حول الشمس!"
    },
    massExplanation: {
      en: "At 8.68 × 10²⁵ kg, Uranus is about 14.5 Earth masses. It's the lightest of the gas and ice giants, but don't let that fool you—it can still hold onto 27 moons with that gravity!",
      ar: "بكتلة 8.68 × 10²⁵ كغ، أورانوس يعادل حوالي 14.5 كتلة أرضية. إنه الأخف بين العمالقة الغازية والجليدية، لكن لا تدع ذلك يخدعك—يمكنه الاحتفاظ بـ 27 قمراً بهذه الجاذبية!"
    }
  },
  neptune: {
    prologue: {
      en: "Journey to Neptune 🔵, the windiest world in the Solar System! This deep blue ice giant sits at the frigid edge of our planetary neighborhood, where winds scream at 2,100 km/h—faster than the speed of sound on Earth! It's so far that sunlight takes over 4 hours to reach it.",
      
      ar: "رحلة إلى نبتون 🔵، أعاصر عالم في النظام الشمسي! هذا العملاق الجليدي الأزرق العميق يجلس على الحافة المتجمدة لحيّنا الكوكبي، حيث الرياح تصرخ بسرعة 2100 كم/س—أسرع من سرعة الصوت على الأرض! إنه بعيد جداً لدرجة أن ضوء الشمس يستغرق أكثر من 4 ساعات ليصل إليه."
    },
    story: {
      en: "Neptune was the first planet found by math before it was seen! Astronomers noticed Uranus wobbling, calculated where an unseen planet must be, and pointed their telescopes—there it was! Sometimes the pen (and calculator) really is mightier than the sword.",
      
      ar: "نبتون أول كوكب تم العثور عليه بالرياضيات قبل رؤيته! لاحظ الفلكيون اهتزاز أورانوس، وحسبوا أين يجب أن يكون كوكب غير مرئي، ووجهوا تلسكوباتهم—وهناك كان! أحياناً القلم (والآلة الحاسبة) أقوى حقاً من السيف."
    },
    massExplanation: {
      en: "At 1.02 × 10²⁶ kg, Neptune is just a bit heavier than Uranus despite being smaller in size. Talk about packing a punch—this ice giant has some serious density hiding beneath those blue clouds!",
      
      ar: "بكتلة 1.02 × 10²⁶ كغ، نبتون أثقل قليلاً من أورانوس بالرغم من كونه أصغر حجماً. تحدث عن قوة مدمرة—هذا العملاق الجليدي يخفي بعض الكثافة الجادة تحت تلك الغيوم الزرقاء!"
    }
  }
};
