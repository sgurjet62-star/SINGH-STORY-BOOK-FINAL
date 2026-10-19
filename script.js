const STORIES = [
    {
        id: 1,
        title: "Spirit Circle",
        author: "Satoshi Mizukami",
        genre: "Fantasy, Mystery, Drama",
        synopsis: "Fuuta can see spirits and discovers a mysterious connection to the past lives of people around him. His journey reveals a complicated cycle of friendship and revenge.",
        cover: "images/spirit.jpg",
        chapterTitle: "Chapter 1",
        content: "Fuuta's ordinary life begins to change when he encounters people connected to mysterious memories and past lives."
    },
    {
        id: 2,
        title: "Lucifer and the Biscuit Hammer",
        author: "Satoshi Mizukami",
        genre: "Fantasy, Action, Comedy",
        synopsis: "A college student becomes involved in a mission to save the world alongside a princess who has her own plans for its future.",
        cover: "images/lucifer.jpg",
        chapterTitle: "Chapter 1",
        content: "A strange encounter introduces a young student to a world of magic, unusual allies, and an enormous threat."
    },
    {
        id: 3,
        title: "Planetes",
        author: "Makoto Yukimura",
        genre: "Sci-Fi, Drama",
        synopsis: "In the future, a team of workers collects dangerous debris orbiting Earth while pursuing their own dreams among the stars.",
        cover: "images/planetes.jpg",
        chapterTitle: "Chapter 1",
        content: "A space debris collector begins another workday in orbit, where even an ordinary task can become dangerous."
    },
    {
        id: 4,
        title: "Astra Lost in Space",
        author: "Kenta Shinohara",
        genre: "Sci-Fi, Adventure, Mystery",
        synopsis: "A group of teenagers becomes stranded far from home and must work together to survive and uncover the truth behind their journey.",
        cover: "images/astra.jpg",
        chapterTitle: "Chapter 1",
        content: "A school trip takes an unexpected turn when a group of teenagers finds themselves far away from their planned destination."
    },
    {
        id: 5,
        title: "Land of the Lustrous",
        author: "Haruko Ichikawa",
        genre: "Fantasy, Action, Drama",
        synopsis: "In a world inhabited by gemstone beings, Phos searches for a meaningful role while facing dangers that change their understanding of life.",
        cover: "images/land.jpeg",
        chapterTitle: "Chapter 1",
        content: "Phos wants to contribute to the gemstone community but must first discover a task suited to their abilities."
    },
    {
        id: 6,
        title: "Dorohedoro",
        author: "Q Hayashida",
        genre: "Dark Fantasy, Action, Mystery",
        synopsis: "A man with a lizard's head searches for the sorcerer responsible for his transformation, hoping to recover his lost identity.",
        cover: "images/doro.jpg",
        chapterTitle: "Chapter 1",
        content: "In a strange city, a man with a reptilian head begins another search for the magic user who changed his life."
    },
    {
        id: 7,
        title: "Ajin: Demi-Human",
        author: "Gamon Sakurai",
        genre: "Supernatural, Thriller, Action",
        synopsis: "After discovering he is immortal, a student becomes the target of authorities and must decide whom he can trust.",
        cover: "images/ajin.png",
        chapterTitle: "Chapter 1",
        content: "A sudden accident reveals a secret that changes a student's life and puts him in serious danger."
    },
    {
        id: 8,
        title: "Bokurano",
        author: "Mohiro Kitoh",
        genre: "Sci-Fi, Psychological, Drama",
        synopsis: "A group of children agrees to participate in a mysterious robot experiment, unaware of the serious consequences of their decision.",
        cover: "images/bokurano.jpg",
        chapterTitle: "Chapter 1",
        content: "A group of children encounters a mysterious man who invites them to take part in an unusual project."
    },
    {
        id: 9,
        title: "The Girl from the Other Side",
        author: "Nagabe",
        genre: "Dark Fantasy, Mystery, Drama",
        synopsis: "In a world divided between humans and cursed outsiders, a mysterious guardian cares for a young girl named Shiva.",
        cover: "images/the.jpg",
        chapterTitle: "Chapter 1",
        content: "A quiet child lives with a mysterious guardian in a world where crossing certain boundaries can be dangerous."
    },
    {
        id: 10,
        title: "Shadows House",
        author: "Somato",
        genre: "Mystery, Supernatural, Drama",
        synopsis: "Emilico serves a member of the mysterious Shadow family in a mansion filled with strange rules and hidden secrets.",
        cover: "images/shadow.jpg",
        chapterTitle: "Chapter 1",
        content: "Emilico begins her daily duties in a peculiar mansion where appearances and behavior follow unusual rules."
    },
    {
        id: 11,
        title: "Golden Kamuy",
        author: "Satoru Noda",
        genre: "Historical, Adventure, Action",
        synopsis: "A war veteran and a young Ainu girl search for hidden gold in Hokkaido while encountering people with competing motives.",
        cover: "images/golden.jpeg",
        chapterTitle: "Chapter 1",
        content: "A veteran hears about a hidden treasure and begins following clues that may lead him to a fortune."
    },
    {
        id: 12,
        title: "Heavenly Delusion",
        author: "Masakazu Ishiguro",
        genre: "Sci-Fi, Mystery, Adventure",
        synopsis: "Maru and Kiruko travel through a ruined world in search of a place called Heaven, while children inside a facility face their own mysteries.",
        cover: "images/heavenly.jpg",
        chapterTitle: "Chapter 1",
        content: "Two travelers cross a dangerous landscape while searching for answers about a mysterious place."
    },
    {
        id: 13,
        title: "Witch Hat Atelier",
        author: "Kamome Shirahama",
        genre: "Fantasy, Adventure",
        synopsis: "Coco dreams of becoming a witch and discovers a secret about magic that changes her future and begins her journey as an apprentice.",
        cover: "images/withc.jpg",
        chapterTitle: "Chapter 1",
        content: "Coco has always admired witches, but an unexpected discovery brings her closer to the magical world."
    },
    {
        id: 14,
        title: "The Ancient Magus' Bride",
        author: "Kore Yamazaki",
        genre: "Fantasy, Romance, Supernatural",
        synopsis: "Chise enters a magical world under the care of a mysterious being and begins learning about magic, belonging, and relationships.",
        cover: "images/magnus.jpg",
        chapterTitle: "Chapter 1",
        content: "Chise's life changes when she encounters a mysterious figure who introduces her to an unfamiliar world."
    },
    {
        id: 15,
        title: "Holyland",
        author: "Kouji Mori",
        genre: "Martial Arts, Drama, Coming-of-Age",
        synopsis: "A lonely student learns to defend himself and enters the world of street fighting while searching for a place where he belongs.",
        cover: "images/holy.jpeg",
        chapterTitle: "Chapter 1",
        content: "A struggling student begins training and discovers that standing up for himself brings new challenges."
    },
    {
        id: 16,
        title: "The Climber",
        author: "Shin-ichi Sakamoto",
        genre: "Sports, Psychological, Drama",
        synopsis: "Buntarō becomes fascinated with mountain climbing, finding freedom in the challenge while confronting his own limits.",
        cover: "images/climber.jpeg",
        chapterTitle: "Chapter 1",
        content: "A quiet student discovers mountain climbing and begins a journey that tests his determination."
    },
    {
        id: 17,
        title: "Green Blood",
        author: "Masasumi Kakizaki",
        genre: "Historical, Action, Drama",
        synopsis: "Two brothers follow different paths in nineteenth-century New York, where violence and ambition threaten their future.",
        cover: "images/green.png",
        chapterTitle: "Chapter 1",
        content: "Two brothers struggle to find their place in a harsh city filled with conflict and dangerous opportunities."
    },
    {
        id: 18,
        title: "The Kurosagi Corpse Delivery Service",
        author: "Eiji Otsuka and Housui Yamazaki",
        genre: "Horror, Mystery, Supernatural",
        synopsis: "A group of students with unusual abilities helps the dead find peace while investigating strange and disturbing cases.",
        cover: "images/corpse.jpeg",
        chapterTitle: "Chapter 1",
        content: "A group of unusual students receives a request connected to a mystery that ordinary people cannot solve."
    },
    {
        id: 19,
        title: "My Home Hero",
        author: "Naoki Yamakawa and Masashi Asaki",
        genre: "Crime, Thriller, Drama",
        synopsis: "A father becomes involved in a dangerous criminal situation while trying to protect his daughter and family.",
        cover: "images/home.jpeg",
        chapterTitle: "Chapter 1",
        content: "A family man notices troubling circumstances around his daughter and realizes that his family may be in danger."
    },
    {
        id: 20,
        title: "The Voynich Hotel",
        author: "Dowman Sayman",
        genre: "Mystery, Comedy, Supernatural",
        synopsis: "On a remote island, hotel workers and unusual guests become part of a strange collection of interconnected stories.",
        cover: "images/voynich.jpeg",
        chapterTitle: "Chapter 1",
        content: "A visitor arrives at a peculiar island hotel where the staff and guests are far from ordinary."
    },
    {
        id: 21,
        title: "Yokohama Kaidashi Kikou",
        author: "Hitoshi Ashinano",
        genre: "Sci-Fi, Slice of Life",
        synopsis: "In a quiet world slowly changing over time, an android runs a small cafe and appreciates the beauty of everyday life.",
        cover: "images/yoko.jpeg",
        chapterTitle: "Chapter 1",
        content: "Alpha opens her cafe and spends another peaceful day observing the world around her."
    },
    {
        id: 22,
        title: "Me and the Devil Blues",
        author: "Akira Hiramoto",
        genre: "Historical, Music, Supernatural",
        synopsis: "Inspired by the legend of blues musician Robert Johnson, the story blends music, history, ambition, and supernatural mystery.",
        cover: "images/music.jpeg",
        chapterTitle: "Chapter 1",
        content: "A musician pursues his dream while rumors and strange events begin to surround his journey."
    },
    {
        id: 23,
        title: "Ultra Heaven",
        author: "Keiichi Koike",
        genre: "Sci-Fi, Psychological, Surreal",
        synopsis: "In a future shaped by technology and altered perception, a man questions the boundaries between reality and the mind.",
        cover: "images/ultra.jpeg",
        chapterTitle: "Chapter 1",
        content: "A man explores an unfamiliar experience that challenges the way he understands reality."
    },
    {
        id: 24,
        title: "The Music of Marie",
        author: "Usamaru Furuya",
        genre: "Fantasy, Sci-Fi, Drama",
        synopsis: "In a seemingly peaceful world, a mysterious goddess fills the skies with music while questions about society and belief emerge.",
        cover: "images/blue.jpg",
        chapterTitle: "Chapter 1",
        content: "A young man lives in a world where a mysterious figure in the sky is connected to the lives of everyone below."
    },
    {
        id: 25,
        title: "Historie",
        author: "Hitoshi Iwaaki",
        genre: "Historical, Adventure, Drama",
        synopsis: "The story follows Eumenes, whose intelligence and ambition lead him through the politics and conflicts of the ancient world.",
        cover: "images/historie.png",
        chapterTitle: "Chapter 1",
        content: "A young Eumenes begins a journey that brings him into contact with powerful people and changing political circumstances."
    },
    {
        id: 26,
        title: "A Bride's Story",
        author: "Kaoru Mori",
        genre: "Historical, Romance, Slice of Life",
        synopsis: "In nineteenth-century Central Asia, Amir builds a new life with her husband's family amid changing traditions and relationships.",
        cover: "images/bride.jpg",
        chapterTitle: "Chapter 1",
        content: "Amir arrives in a new household and begins adjusting to the customs and relationships that will shape her life."
    },
    {
        id: 27,
        title: "From Far Away",
        author: "Kyoko Hikawa",
        genre: "Fantasy, Romance, Adventure",
        synopsis: "Noriko is transported to an unfamiliar world, where she travels with a warrior and becomes connected to an ancient prophecy.",
        cover: "images/from.jpg",
        chapterTitle: "Chapter 1",
        content: "Noriko suddenly finds herself in a strange world and must learn how to survive far from home."
    },
    {
        id: 28,
        title: "Witchcraft Works",
        author: "Ryu Mizunagi",
        genre: "Fantasy, Action, Comedy",
        synopsis: "An ordinary student discovers that he is important to a conflict among witches and receives protection from a powerful witch.",
        cover: "images/craft.jpg",
        chapterTitle: "Chapter 1",
        content: "An ordinary school day changes when a mysterious classmate reveals an unusual interest in protecting a student."
    },
    {
        id: 29,
        title: "Erased",
        author: "Kei Sanbe",
        genre: "Mystery, Thriller, Supernatural",
        synopsis: "Satoru can travel back in time before certain tragedies occur, and one event sends him into his childhood to uncover a mystery.",
        cover: "images/erased.jpeg",
        chapterTitle: "Chapter 1",
        content: "Satoru experiences an unexpected return to the past and realizes he may have a chance to prevent a terrible event."
    },
    {
        id: 30,
        title: "The Summer Hikaru Died",
        author: "Mokumokuren",
        genre: "Horror, Mystery, Supernatural",
        synopsis: "Yoshiki notices that his friend Hikaru has changed in an unsettling way, raising questions about identity, friendship, and fear.",
        cover: "images/hikaru.jpeg",
        chapterTitle: "Chapter 1",
        content: "Yoshiki senses something strange about his friend, even though everything seems familiar at first glance."
    }
];


const CHAPTER_CONTENTS = {
    1: `Fuuta's ordinary day takes an unexpected turn when he encounters a person whose presence awakens strange feelings and memories. He cannot fully explain what he experiences, but he begins to suspect that there is more to their connection than meets the eye. The encounter leaves him with questions about the past and the people who may be connected to it.

As Fuuta tries to understand what is happening, he discovers that memories and relationships may reach beyond a single lifetime. The mystery surrounding these connections draws him into a journey that will challenge his understanding of friendship, rivalry, and human nature.`,

    2: `A young college student finds himself caught in an unusual situation involving a mysterious princess and a threat that could affect the entire world. What initially seems like an unbelievable encounter quickly becomes a serious responsibility. He must learn more about the strange circumstances surrounding him before he can understand his role in the unfolding conflict.

The princess has her own goals, and her determination makes it clear that the journey ahead will not be simple. As their paths become connected, unexpected allies and dangerous challenges begin to appear. The student must decide whether he is ready to face a responsibility far greater than his ordinary life.`,

    3: `Working in space is not always as exciting as people imagine. For Hachimaki and his fellow workers, collecting dangerous debris is a demanding job that requires patience, concentration, and teamwork. Every piece of discarded material can become a threat to spacecraft, making their seemingly ordinary work important to the safety of people traveling beyond Earth.

Outside their duties, the workers have dreams and personal concerns of their own. Hachimaki thinks about his future and wonders what it would take to reach his ambitions. As he continues his work among the stars, he begins to understand that life in space involves not only technology and danger but also the hopes and struggles of ordinary people.`,

    4: `A group of students prepares for a school trip, expecting to enjoy an exciting experience away from their usual surroundings. However, their plans change when an unexpected event transports them somewhere unfamiliar. Confusion spreads through the group as they realize that they are no longer where they expected to be, and nobody knows how to explain what has happened.

With their safety uncertain, the students must cooperate and think carefully about their next steps. They begin examining their surroundings and discussing possible ways to return home. Although they have different personalities and opinions, their survival depends on their ability to work together and uncover the mystery behind their situation.`,

    5: `Phos wants to contribute to the gemstone community but struggles to find a suitable responsibility. Compared with the other members, Phos lacks the strength and experience needed for many of the tasks available. Despite these difficulties, Phos continues searching for a purpose and hopes to prove that being different does not mean being useless.

An unusual assignment gives Phos an opportunity to explore a different part of their world. The task may seem less important than the responsibilities of other gemstones, but it introduces questions that Phos has never considered before. As the journey begins, Phos starts discovering that understanding the world may require more than simply becoming stronger.`,

    6: `In the Hole, ordinary people live under the constant threat of sorcerers who enter their world to practice magic. The city is filled with strange sights and dangerous encounters, and its residents have learned to survive despite the chaos around them. Among them is Caiman, a man with a reptilian head who cannot remember his original identity.

Together with Nikaido, Caiman searches for the sorcerer responsible for his transformation. His unusual condition makes every encounter a potential clue, but finding answers is difficult in a world where magic can produce unpredictable results. As the investigation continues, Caiman becomes increasingly determined to uncover the truth about himself.`,

    7: `Kei Nagai is an ordinary student focused on his own future until an unexpected accident reveals something impossible about him. Instead of dying like an ordinary person, he discovers that he belongs to a rare group known as Ajin. The revelation immediately changes his life, turning him from an unknown student into someone whom powerful people want to capture.

Kei soon realizes that being different can make the world a dangerous place. He must consider his options carefully as he tries to escape those who want to use him for their own purposes. With his future uncertain, he begins questioning whom he can trust and what it really means to survive in a society that fears people like him.`,

    8: `A group of children meets a mysterious individual who offers them the opportunity to participate in a project involving an enormous robot. At first, the proposal sounds like an exciting adventure, and the children are curious about what they will experience. They agree without fully understanding the rules or the consequences connected to their decision.

As the situation develops, the children begin to discover that the project is far more serious than they expected. Their excitement gives way to uncertainty as they learn about the responsibilities placed on them. Each child must eventually confront personal fears and difficult questions about the choices they have made.`,

    9: `Shiva lives in a quiet place with a mysterious being she calls Teacher. Their daily routine may appear peaceful, but the world around them is divided by a dangerous boundary between ordinary humans and those affected by a strange curse. Teacher tries to care for Shiva while keeping her away from the dangers that exist beyond their home.

Despite their differences, the two develop a bond through their everyday interactions. Shiva's curiosity and Teacher's cautious behavior reveal how little they understand about the larger situation surrounding them. As their lives continue, the mystery of the curse raises questions about fear, kindness, and whether people who seem different can truly understand one another.`,

    10: `Emilico begins another day of service inside the mysterious mansion of the Shadow family. As a living doll assigned to Kate, she is expected to perform her duties properly and help maintain the household's routines. Emilico approaches her responsibilities with enthusiasm, even when the mansion's unusual traditions leave her confused.

While learning how the household operates, Emilico encounters rules that seem stranger than those of an ordinary home. She starts noticing details that raise questions about the relationship between the Shadows and their dolls. Her desire to become a better servant gradually leads her toward a world of hidden expectations and unexplained secrets.`,

    11: `Saichi Sugimoto is a veteran trying to find a way to secure his future after returning from war. When he hears about a hidden treasure connected to the Ainu people, he becomes interested in the possibility of finding it. The rumors describe a fortune whose location is connected to clues left behind by escaped prisoners, making the search difficult and dangerous.

During his search, Sugimoto encounters Asirpa, a young Ainu girl with valuable knowledge of the wilderness. Their meeting gives him a chance to learn more about the treasure and the land where it is hidden. As they consider working together, both must decide whether they can trust each other in a search that will attract many dangerous competitors.`,

    12: `Maru and Kiruko travel across a damaged world where abandoned buildings and unfamiliar dangers have become part of everyday life. They are searching for a place called Heaven, but reaching their destination is not easy. Food, shelter, and protection must be considered carefully, and every new location may bring either useful discoveries or unexpected problems.

Elsewhere, children live inside a protected facility where their daily activities appear carefully organized. Although their environment seems safe, unusual events raise questions about what the children are being taught and why they are kept there. As both storylines develop, clues begin to suggest that the outside world and the facility may be connected in ways nobody fully understands.`,

    13: `Coco has always admired witches and dreams of learning how to use magic. However, she believes that becoming a witch is impossible for someone born without the usual magical abilities. Her life changes when she discovers information that challenges everything she thought she knew about magic and the people who practice it.

The discovery brings Coco into contact with a real witch and introduces her to a world of spells, symbols, and carefully guarded knowledge. She begins learning that magic requires more than wishing for extraordinary powers. As her journey starts, she must become patient, study the rules, and understand the responsibility that comes with using something capable of changing the world around her.`,

    14: `Chise Hatori has spent much of her life feeling unwanted and uncertain about where she belongs. Her circumstances change when she enters the home of Elias Ainsworth, a mysterious being who introduces her to a world filled with magic and supernatural creatures. For the first time, she has an opportunity to experience a different kind of life, although many things remain unfamiliar.

As Chise begins exploring her new surroundings, she encounters creatures and situations that challenge her previous understanding of the world. Elias's unusual nature also raises questions about their relationship and what each of them expects from the other. Chise's new life becomes a journey of discovery as she learns about magic, trust, and her own sense of worth.`,

    15: `Yu Kamishiro is a quiet student who finds it difficult to connect with the people around him. His everyday life leaves him feeling isolated, and he begins looking for a way to protect himself and gain confidence. When he discovers the world of street fighting, he starts learning techniques that allow him to face situations that once frightened him.

As Yu becomes more involved in this unfamiliar environment, he discovers that fighting brings its own risks and responsibilities. Other people begin noticing his abilities, creating new expectations and challenges. His journey is not simply about becoming stronger but also about understanding himself, finding confidence, and deciding what kind of person he wants to become.`,

    16: `Buntarō Mori is a reserved student who unexpectedly discovers an interest in mountain climbing. What begins as a challenge gradually becomes an activity that captures his attention and gives him a different perspective on life. The mountain offers a place where he can concentrate on his own abilities and experience a sense of freedom away from ordinary social expectations.

As Buntarō becomes more serious about climbing, he begins to understand that each ascent requires preparation, patience, and determination. The challenges he faces test not only his physical abilities but also his judgment and emotional strength. His growing passion leads him to consider how far he is willing to go in pursuit of something that has become deeply meaningful to him.`,

    17: `In nineteenth-century New York, two brothers try to build their lives in a city filled with poverty, crime, and powerful gangs. Their circumstances expose them to a dangerous environment where people often struggle to survive by making difficult choices. Although the brothers share a family bond, their experiences and decisions begin taking them along different paths.

As they encounter the city's criminal underworld, loyalty becomes increasingly important. Each brother must consider what he is willing to risk for his family and what kind of future he hopes to create. Their story begins in a world where opportunities are limited and danger is never far away, setting the stage for a difficult journey shaped by ambition and brotherhood.`,

    18: `A group of university students runs a delivery service unlike any ordinary business. Each member possesses an unusual ability that helps them communicate with the dead or investigate mysteries connected to unexplained events. Their work often begins with a request from someone seeking answers about a disturbing or unfinished matter.

The group approaches every assignment with a mixture of curiosity and caution. As they investigate, they discover that the stories behind their requests can be complicated and emotionally difficult. Their unusual work reveals secrets that might otherwise remain hidden and introduces questions about regret, responsibility, and the importance of finding closure.`,

    19: `Tetsuo Tosu is a family man whose everyday life revolves around his work and the people he cares about. When he notices troubling circumstances involving his daughter, he begins to suspect that she may be caught in a dangerous situation. His concern grows as he tries to understand what is happening and determine how he can protect his family.

Tetsuo soon realizes that the problem may involve people whose intentions are far more dangerous than he expected. He must think carefully about every decision because a single mistake could put the people he loves at risk. What begins as a personal concern gradually draws him toward a tense situation that tests his intelligence, patience, and determination.`,

    20: `A traveler arrives at the Voynich Hotel, a strange establishment located on a remote island. The hotel appears to offer the usual services expected by visitors, but its unusual staff members and peculiar atmosphere make it unlike any ordinary place to stay. Each guest seems to have a different reason for arriving, and not everyone is willing to reveal their personal history.

As days pass, the lives of the people connected to the hotel begin to overlap in unexpected ways. Strange conversations, mysterious events, and moments of dark humor create an atmosphere where the ordinary and extraordinary exist side by side. The hotel becomes a place where visitors may find more than rest, as their personal stories become part of a larger collection of unusual experiences.`,

    21: `Alpha spends her days caring for a small cafe in a quiet coastal area. The world around her has changed, and modern civilization is no longer what it once was. Nevertheless, she finds happiness in ordinary routines, such as opening the cafe, observing the weather, and welcoming the occasional visitor who stops by.

As Alpha continues her daily life, she meets people whose visits bring new conversations and memories. Small changes in the environment remind her that time continues moving forward, even when life feels peaceful. Through these experiences, she discovers the value of companionship and the beauty of paying attention to simple moments that might otherwise go unnoticed.`,

    22: `A talented musician pursues his dream in a world where the blues carries a powerful reputation. His desire to master the guitar draws him toward opportunities that promise recognition and a different future. However, stories about extraordinary musicians and mysterious bargains create an atmosphere in which ambition and superstition become difficult to separate.

As the journey continues, music becomes closely connected to the characters' hopes and fears. Their experiences raise questions about the price of success and the sacrifices people may consider when pursuing greatness. The opening of this story introduces a world where historical inspiration, musical passion, and supernatural rumors come together in an unsettling exploration of ambition.`,

    23: `In a futuristic world shaped by advanced technology, a man searches for experiences that challenge his understanding of reality. Curious about the limits of human perception, he explores unfamiliar states of consciousness that make everyday life seem increasingly strange. His experiences lead him to question how much of what he sees and feels can truly be trusted.

As he continues exploring, the distinction between reality and perception becomes harder to define. Each experience introduces new questions about the mind and the way people interpret their surroundings. His journey invites readers to consider whether reality is always as straightforward as it appears and how easily personal experiences can change one's understanding of the world.`,

    24: `A mysterious goddess known as Marie appears in the sky above a seemingly peaceful world. Her presence is closely connected to music and has become an important part of the society beneath her. People live their lives within a world shaped by familiar customs and beliefs, rarely questioning the larger circumstances that allow their society to function as it does.

As the story introduces its characters and their surroundings, small details invite questions about the nature of their world. The music associated with Marie becomes more than a beautiful feature of everyday life, suggesting that deeper truths may exist beneath the surface. The opening sets up a reflective journey about belief, society, and the difference between what people accept and what they truly understand.`,

    25: `Eumenes grows up in the ancient world, where different cultures, traditions, and political interests shape people's lives. His intelligence and curiosity help him notice details that others may overlook. As he encounters new people and situations, he begins developing the skills that will help him navigate a world where knowledge and judgment can be as important as physical strength.

The circumstances around Eumenes gradually introduce him to larger questions about power, ambition, and social position. His experiences expose him to different ways of thinking and encourage him to look beyond the limits of his immediate surroundings. His story begins as a journey of learning and discovery, laying the groundwork for his involvement in the important events of the ancient world.`,

    26: `Amir arrives at the household of her new husband, Karluk, bringing with her the traditions and experiences of her own community. Life in a new household requires her to adjust to unfamiliar routines and relationships. Through everyday activities, she begins learning how the family works together and how her role fits into their shared life.

As Amir becomes more familiar with her new surroundings, the story reveals details about the customs, work, and relationships that shape the community. Small moments show how people communicate their affection, handle responsibilities, and maintain traditions. The beginning of her journey offers a glimpse into a world where family connections and daily life are closely linked to cultural identity.`,

    27: `Noriko suddenly finds herself transported from her familiar surroundings into a world she does not recognize. The people, customs, and dangers around her make it difficult to understand what has happened or how she can return home. With no clear explanation for her situation, she must learn to remain alert and find someone who can help her navigate this unfamiliar place.

Her journey introduces her to a mysterious warrior whose knowledge of the world may help her survive. As they travel together, Noriko gradually learns that her arrival may be connected to events larger than herself. She begins facing the challenges of an unfamiliar life while searching for answers about her destination and the role she may be expected to play.`,

    28: `Honoka Takamiya considers himself an ordinary student whose school life follows a familiar routine. His perspective changes when he discovers that Ayaka Kagari, a powerful witch and one of the school's most admired students, has been protecting him. Their unexpected connection places him in the middle of a supernatural conflict that he never knew existed.

As Honoka learns more about the witches around him, he discovers that his presence has attracted the attention of dangerous opponents. Ayaka's abilities help protect him, but the reasons behind their connection remain a source of questions. Their unusual partnership introduces him to a world of magic, strange encounters, and unexpected responsibilities that will change his understanding of everyday life.`,

    29: `Satoru Fujinuma experiences strange moments when he is sent back in time shortly before a terrible event occurs. Although these experiences are confusing, they sometimes give him an opportunity to prevent something bad from happening. He has learned to accept this unusual ability as part of his life, even though he cannot always predict when it will happen.

When a serious incident changes his circumstances, Satoru finds himself forced to reconsider his past and the events that shaped his childhood. Memories he once left behind begin to take on new importance as he searches for answers. His determination to understand what happened leads him toward a mystery that connects past events with the people whose lives may still be changed.`,

    30: `Yoshiki has spent years growing up alongside his friend Hikaru, making their friendship a familiar and important part of his life. When Hikaru returns after a mysterious incident, Yoshiki notices that something about him feels different. Although Hikaru's appearance and behavior seem familiar, small details leave Yoshiki with a feeling he cannot easily explain.

Yoshiki struggles to understand his suspicions while trying to maintain the friendship that has meant so much to him. His memories of their shared past conflict with the strange feeling that something has changed in a way he cannot ignore. As he searches for an explanation, ordinary moments become unsettling, and the mystery surrounding Hikaru begins to affect the way Yoshiki sees the world around him.`
};

STORIES.forEach(story => {
    if (CHAPTER_CONTENTS[story.id]) {
        story.content = CHAPTER_CONTENTS[story.id];
    }
});





const $ = selector => document.querySelector(selector);

const BOOKMARK_KEY = "panelReadsBookmarks";
const THEME_KEY = "panelReadsTheme";
const PROGRESS_KEY = "panelReadsProgress";

function getGenres(story) {
    return story.genre
        .split(",")
        .map(genre => genre.trim());
}

function getBookmarks() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(BOOKMARK_KEY) || "[]"
        );

        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

function saveBookmarks(ids) {
    localStorage.setItem(
        BOOKMARK_KEY,
        JSON.stringify(ids)
    );
}

function getProgress() {
    try {
        return JSON.parse(
            localStorage.getItem(PROGRESS_KEY) || "{}"
        );
    } catch {
        return {};
    }
}

function saveProgress(progress) {
    localStorage.setItem(
        PROGRESS_KEY,
        JSON.stringify(progress)
    );
}

function storyUrl(id) {
    return `story.html?id=${id}`;
}


function makeCard(story) {
    const saved = getBookmarks().includes(story.id);

    const genres = getGenres(story)
        .map(genre => `
            <span class="genre-chip">${genre}</span>
        `)
        .join(" ");

    return `
        <article class="book-card">

            <a class="cover-link" href="${storyUrl(story.id)}">
                <img
                    class="book-cover"
                    src="${story.cover}"
                    alt="Cover of ${story.title}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/300x450/302b4d/ffffff?text=No+Cover';"
                >
                <span class="chapter-pill">1 Chapter</span>
            </a>

            <div class="card-info">

                <div class="card-title-row">
                    <h3>
                        <a href="${storyUrl(story.id)}">
                            ${story.title}
                        </a>
                    </h3>

                    <button
                        class="bookmark-btn ${saved ? "is-saved" : ""}"
                        data-bookmark="${story.id}"
                        aria-label="${saved ? "Remove bookmark" : "Add bookmark"} for ${story.title}"
                        aria-pressed="${saved}"
                    >
                        ${saved ? "♥" : "♡"}
                    </button>
                </div>

                <p class="muted">by ${story.author}</p>

                <p class="muted">${story.genre}</p>

                <button
                    class="text-link synopsis-toggle"
                    data-synopsis-toggle="${story.id}"
                    aria-expanded="false"
                >
                    Show synopsis
                </button>

                <p
                    class="card-synopsis"
                    id="synopsis-${story.id}"
                    hidden
                >
                    ${story.synopsis}
                </p>

                <a class="read-link" href="${storyUrl(story.id)}">
                    Read Story 
                </a>

            </div>
        </article>
    `;
}

function renderCards(container, stories) {
    if (!container) return;

    if (stories.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No stories found</h3>
                <p>Try another search or select a different genre.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = stories
        .map(story => makeCard(story))
        .join("");
}


function initTheme() {
    if (localStorage.getItem(THEME_KEY) === "dark") {
        document.body.classList.add("dark-mode");
    }

    const button = $("#themeToggle");

    if (!button) return;

    function updateButton() {
        button.textContent =
            document.body.classList.contains("dark-mode")
                ? "☀ Light"
                : "☾ Dark";
    }

    updateButton();

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            THEME_KEY,
            isDark ? "dark" : "light"
        );

        updateButton();
    });
}


function initNavigation() {
    const button = $("#menuToggle");
    const nav = $("#siteNav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("nav-open");

        button.setAttribute("aria-expanded", String(isOpen));
    });
}


function initBookmarksButtons() {
    document.addEventListener("click", event => {
        const button = event.target.closest("[data-bookmark]");

        if (!button) return;

        const id = Number(button.dataset.bookmark);

        let bookmarks = getBookmarks();

        if (bookmarks.includes(id)) {
            bookmarks = bookmarks.filter(
                savedId => savedId !== id
            );
        } else {
            bookmarks.push(id);
        }

        saveBookmarks(bookmarks);

        const isSaved = bookmarks.includes(id);
        const story = STORIES.find(item => item.id === id);
        const page = document.body.dataset.page;

        
        if (page === "bookmarks") {
            renderCards(
                $("#bookmarksGrid"),
                STORIES.filter(item =>
                    bookmarks.includes(item.id)
                )
            );
        } else if (page === "story") {
            button.textContent = isSaved
                ? "♥ Bookmarked"
                : "♡ Add bookmark";

            button.classList.toggle("is-saved", isSaved);
            button.setAttribute("aria-pressed", String(isSaved));
        } else {
            button.textContent = isSaved ? "♥" : "♡";
            button.classList.toggle("is-saved", isSaved);
            button.setAttribute("aria-pressed", String(isSaved));
        }

        showToast(
            isSaved
                ? `${story.title} added to bookmarks`
                : `${story.title} removed from bookmarks`
        );
    });
}


function initSynopsisToggle() {
    document.addEventListener("click", event => {
        const button = event.target.closest(
            "[data-synopsis-toggle]"
        );

        if (!button) return;

        const id = button.dataset.synopsisToggle;
        const synopsis = $(`#synopsis-${id}`);

        if (!synopsis) return;

        const willShow = synopsis.hidden;

        synopsis.hidden = !willShow;

        button.textContent = willShow
            ? "Hide synopsis"
            : "Show synopsis";

        button.setAttribute(
            "aria-expanded",
            String(willShow)
        );
    });
}

function showToast(message) {
    const toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}



function initHome() {
    renderCards(
        $("#featuredGrid"),
        STORIES.slice(0, 6)
    );

    const genreChips = $("#genreChips");

    if (!genreChips) return;

    const genres = [
        ...new Set(STORIES.flatMap(getGenres))
    ].sort();

    genreChips.innerHTML = genres.map(genre => `
        <a
            class="genre-chip"
            href="genre.html?name=${encodeURIComponent(genre)}"
        >
            ${genre}
        </a>
    `).join("");
}


function initBrowse() {
    const grid = $("#browseGrid");

    if (!grid) return;

    const search = $("#searchInput");
    const genre = $("#genreFilter");
    const sort = $("#sortFilter");
    const count = $("#resultCount");

    const genres = [
        ...new Set(STORIES.flatMap(getGenres))
    ].sort();

    genres.forEach(item => {
        genre.insertAdjacentHTML(
            "beforeend",
            `<option value="${item}">${item}</option>`
        );
    });

    function updateResults() {
        const query = search.value.trim().toLowerCase();

        let results = STORIES.filter(story => {
            const searchable = [
                story.title,
                story.author,
                story.genre,
                story.synopsis
            ].join(" ").toLowerCase();

            const matchesSearch = searchable.includes(query);

            const matchesGenre =
                !genre.value ||
                getGenres(story).includes(genre.value);

            return matchesSearch && matchesGenre;
        });

        if (sort.value === "az") {
            results.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        } else if (sort.value === "za") {
            results.sort((a, b) =>
                b.title.localeCompare(a.title)
            );
        } else {
            results.sort((a, b) => a.id - b.id);
        }

        renderCards(grid, results);

        if (count) {
            count.textContent =
                `${results.length} stories found`;
        }
    }

    search.addEventListener("input", updateResults);
    genre.addEventListener("change", updateResults);
    sort.addEventListener("change", updateResults);

    updateResults();
}



function initGenre() {
    const grid = $("#genreGrid");
    const select = $("#genrePageFilter");
    const heading = $("#genreHeading");

    if (!grid || !select) return;

    const genres = [
        ...new Set(STORIES.flatMap(getGenres))
    ].sort();

    genres.forEach(genre => {
        select.insertAdjacentHTML(
            "beforeend",
            `<option value="${genre}">${genre}</option>`
        );
    });

    const params = new URLSearchParams(window.location.search);
    const requestedGenre = params.get("name");

    if (
        requestedGenre &&
        genres.includes(requestedGenre)
    ) {
        select.value = requestedGenre;
    }

    function updateGenre() {
        const selected = select.value;

        const results = selected === "All"
            ? STORIES
            : STORIES.filter(story =>
                getGenres(story).includes(selected)
            );

        heading.textContent = selected === "All"
            ? "Explore All Genres"
            : `${selected} Stories`;

        renderCards(grid, results);
    }

    select.addEventListener("change", updateGenre);

    updateGenre();
}


function initBookmarks() {
    const grid = $("#bookmarksGrid");

    if (!grid) return;

    const savedStories = STORIES.filter(story =>
        getBookmarks().includes(story.id)
    );

    renderCards(grid, savedStories);
}

function initStory() {
    const area = $("#storyDetails");

    if (!area) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id")) || 1;

    const story = STORIES.find(item => item.id === id);

    if (!story) {
        area.innerHTML = `
            <div class="empty-state">
                <h2>Story not found</h2>
                <p>The story you are looking for does not exist.</p>
                <a class="button primary" href="browse.html">
                    Browse Stories
                </a>
            </div>
        `;

        return;
    }

    document.title = `${story.title} | PanelReads`;

    const breadcrumb = $("#storyBreadcrumb");

    if (breadcrumb) {
        breadcrumb.textContent = story.title;
    }

    const isSaved = getBookmarks().includes(story.id);

    area.innerHTML = `
        <div class="story-heading">
            <div>
                <p class="eyebrow">
                    ${story.genre} · SINGLE CHAPTER
                </p>

                <h1>${story.title}</h1>

                <p class="muted">
                    Written by ${story.author}
                </p>
            </div>

            <button
                class="button secondary ${isSaved ? "is-saved" : ""}"
                data-bookmark="${story.id}"
                aria-pressed="${isSaved}"
            >
                ${isSaved ? "♥ Bookmarked" : "♡ Add bookmark"}
            </button>
        </div>

        <img
            class="story-banner"
            src="${story.cover}"
            alt="Cover of ${story.title}"
            onerror="this.onerror=null;this.src='https://placehold.co/1200x650/302b4d/ffffff?text=Story+Image';"
        >

        <section class="synopsis-box">
            <h2>Synopsis</h2>
            <p>${story.synopsis}</p>
        </section>

        <article class="reading-panel" id="readingPanel">
            <div class="chapter-top">
                <span>${story.chapterTitle}</span>
                <span>One Chapter</span>
            </div>

            <h2>${story.title}</h2>

            <p>${story.content}</p>

            <div class="chapter-end">
                — End of ${story.chapterTitle} —
            </div>
        </article>

        <div class="reading-tools">
            <button class="button secondary" id="fontDown">
                A−
            </button>

            <span>Reading comfort</span>

            <button class="button secondary" id="fontUp">
                A+
            </button>

            <button class="button primary" id="completeRead">
                ✓ Mark as Read
            </button>
        </div>

        <div class="progress-wrap">
            <div class="progress-label">
                <span>Reading progress</span>
                <span id="progressText">0%</span>
            </div>

            <div
                class="progress-track"
                role="progressbar"
                aria-label="Reading progress"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="0"
            >
                <div id="progressBar"></div>
            </div>
        </div>

        <div class="next-story">
            <div>
                <p class="eyebrow">KEEP EXPLORING</p>
                <h3>Find your next favorite story</h3>
            </div>

            <a class="button primary" href="browse.html">
                Browse Stories 
            </a>
        </div>
    `;

    
    const progress = getProgress();
    const alreadyRead = Boolean(progress[story.id]);

    function updateProgress(completed) {
        const percentage = completed ? 100 : 0;
        const bar = $("#progressBar");
        const text = $("#progressText");
        const track = $(".progress-track");
        const button = $("#completeRead");

        bar.style.width = `${percentage}%`;
        text.textContent = `${percentage}%`;

        track.setAttribute(
            "aria-valuenow",
            String(percentage)
        );

        button.textContent = completed
            ? "✓ Completed"
            : "✓ Mark as Read";

        button.classList.toggle("completed", completed);
    }

    updateProgress(alreadyRead);

    
    $("#completeRead").addEventListener("click", () => {
        const currentProgress = getProgress();

        currentProgress[story.id] = true;

        saveProgress(currentProgress);

        updateProgress(true);

        showToast("Reading progress saved!");
    });

    
    let fontSize = 1;

    $("#fontUp").addEventListener("click", () => {
        fontSize = Math.min(1.5, fontSize + 0.1);

        $("#readingPanel").style.fontSize =
            `${fontSize}rem`;
    });

    $("#fontDown").addEventListener("click", () => {
        fontSize = Math.max(0.8, fontSize - 0.1);

        $("#readingPanel").style.fontSize =
            `${fontSize}rem`;
    });
}



document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNavigation();
    initBookmarksButtons();
    initSynopsisToggle();

    const page = document.body.dataset.page;

    if (page === "home") {
        initHome();
    }

    if (page === "browse") {
        initBrowse();
    }

    if (page === "genre") {
        initGenre();
    }

    if (page === "bookmarks") {
        initBookmarks();
    }

    if (page === "story") {
        initStory();
    }
});
