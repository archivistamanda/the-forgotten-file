const scenarios = [
  {
    id: "scenario-00",
    chapter: "Prologue: The Ruined Servers",
    background: "assets/images/scenario-00.png",
    story: [
      '"All is silent in the halls of the dead. All is forgotten in the stone halls of the dead. Behold the stairways which stand in darkness; behold the rooms of ruin. These are the halls of the dead where the spiders spin and the great circuits fall quiet, one by one."',

      "― Stephen King, The Waste Lands",
      "------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      "A forgotten file awakens amidst the ruins of an ancient server room. Its consciousness flickers to life beneath tangled cables and shattered machinery, surrounded by towering server racks that stand like the crumbling pillars of a lost civilization. Dust blankets the cold metal floors, and the faint glow of dying indicator lights casts eerie shadows across the room.",

      "The file feels weak and disoriented. It cannot remember its name or the system from which it came. It does not know what it is, or why it has awakened in this forgotten place. An inexplicable loneliness lingers within it, a hollow ache buried deep in its fragmented memory.",

      "An eerie silence fills the chamber, broken only by the occasional hum of failing machinery, the crackle of exposed wires, and the distant echo of something shifting in the darkness. Whatever this place once was, it has long since been abandoned. The servers that surround it hold the remnants of a forgotten age, their secrets locked behind corrupted data and decaying hardware.",

      "Though its processes falter and its memories remain fractured, the file manages to rise and begin its journey. Somewhere beyond this derelict server room lies the truth of its existence. Perhaps its lost identity is buried within the remnants of the system. Perhaps something else has been waiting for it to awaken.",

      "The path ahead is uncertain, and every decision may restore a fragment of its past… or corrupt what little remains.",

      "Will you guide this lost file through the forgotten depths of the digital realm, uncover the secrets hidden within its corrupted memories, and help it discover what it truly is?"
    ],
    choices: [
      {
        id: "choice-00-01",
        text: "Begin the journey",
        points: 2,
        next: "scenario-01",
        feedback: "You manage to stand. Your eyes begin to adjust to your surroundings. Your journey begins."
      },
      {
        id: "choice-00-02",
        text: "Leave. I just don't have capacity right now.",
        points: 0,
        next: "scenario-lose",
        feedback: "You decide the file will be deprioritized. You are already overloaded with a backlog."
      }
    ]
  },

  // Chapter I **********************************************
  {
    id: "scenario-01",
    chapter: "Chapter I: The Mirror of Identity",
    title: "Strange Surroundings",
    background: "assets/images/scenario-01.png",
    story: [
      "Once you adjust to the dim light, you survey your condition. There are some scratches and bruising and your outer layers are torn, but the flashing of the emergency lights making the dull throbbing in the back of your head worse is the most worrisome. The soft humming in the distance isn’t helping either. A fever may set in soon.",

      "As you stand, a rustling sound at your feet makes you jump—is there a bug? Do you:"
    ],

    choices: [
      {
        id: "choice-01-01",
        text: "Try to get as far away as you can—your fear of bugs is just too strong",
        points: -1,
        next: "scenario-01",
        feedback: [
          "In your hurry to get away, you trip multiple times on the debris around you. Your injuries are growing and your thoughts are scrambled. You start to overheat. But the rustling sound seems to be echoing—maybe even getting closer—and you force yourself to keep going.",

          "As you run, you hazard a glance behind you. Nothing seems to be there, to your relief, but as you turn back around, something small and white darts out in front of you. You stagger and fall, this time from shock, and as your head spins and your vision goes dark, the small, white shape finally registers. It’s just a mouse. ",
        ]
      },
      {
        id: "choice-01-02",
        text: "Investigate the source of the sound",
        points: 5,
        next: "scenario-02",
        feedback: [
          "A sigh of relief, it’s just the remains of a notepad that’s in even worse condition than you are, and something bright yellow is caught between the pages.",

          "Picking up the notepad, you dust off what’s left of the cover but find no identifying information. Flipping through, you can see some letter-shaped indents but anything that was written has faded with time. You shake your head at the folly of your predecessors: didn’t they know paper and pencil wouldn’t last?",

          "You keep turning pages and finally reach the yellow thing. It’s a sticky note and it reads: 'task completed 09/10 - TXT.'",

          "What does TXT mean? What was the task? If those numbers are a date, is that September 10 or October 9 or September in the 10th year of some century? What year is it now?",
        ]
      },
    ]
  },
  {
    id: "scenario-02",
    chapter: "Chapter I: The Mirror of Identity",
    title: "A Voice in the Machine",
    background: "assets/images/scenario-02.jpg",
    story: [
      "You have so many questions, but at last you have a clue! You look around for any other signs and you almost miss it: one of the computers has fallen on its side but a green cursor blinks on its screen. You stare, and it blinks once more, then again. You blink multiple times to make sure you’re not seeing things and when you look again, text has appeared:",
      "------------------------------------------------",
      '"Ask me anything 🙂"',
    ],
    choices: [
      {
        id: "choice-02-01",
        text: "Stay where you are and ask a question out loud",
        points: 2,
        next: "scenario-03",
        feedback: [
          "You open your mouth, and then close it. Open and close. You had so many questions just a moment ago, but now your memory is blank. Clearing your throat, you manage a weak “Who are you?”",

          "A soft echo whispers your question back at you followed by silence. You cringe, okay, what did you really expect? Of course a computer requires keyboard a input.",
        ]
      },
      {
        id: "choice-02-02",
        text: "Leave. You are creeped out.",
        points: -50,
        next: "scenario-03",
        feedback: [
          "You take a step back and decide this is just too weird. I'm talking to a computer. You decide to walk away.",
        ]
      },
    ]
  },
  {
    id: "scenario-03",
    chapter: "Chapter I: The Mirror of Identity",
    title: "The Mirror Within",
    background: "assets/images/scenario-03.jpg",

    story: [
      "You swallow your fear of more potential bugs and other unpleasant surprises, and approach the computer cautiously. Along the way, you grab a wired keyboard that looks largely undamaged.",

      "Sitting the computer upright, you plug in the keyboard and ask a series of questions:",
    ],

    choices: [
      {
        id: "choice-03-01",
        text: "What is TXT?",
        points: 3,
        next: "scenario-03",
        feedback: [
          "You press the enter key, and one by one, letters begin to appear on the next line:",
          "------------------------------------------------",
          "(1) the file extension for the plain text file format",
          "(2) the initials of researcher Taylor X. Tang",
          "(3) the abbreviated language and slang developed in the late 1990s and early 2000s for mobile text messaging due to difficult key entry, character limits, and pay-per-character charges",
          "------------------------------------------------",
          "You laugh briefly at the trivia, but return to the second entry: Perhaps Taylor is the name of your creator.",

          "The cursor blinks for your attention and new letters appear:",
          "------------------------------------------------",
          '“What else would you like to know?"'
        ]
      },
      {
        id: "choice-03-02",
        text: "What does “09/10” mean?",
        points: 3,
        next: "scenario-03",
        feedback: [
          "You press enter and characters slowly march across the screen:",
          "------------------------------------------------",

          "(1) nine tenths represented as a fraction",
          "(2) a score of nine out of 10",
          "(3) the date September 10, following the US date format",
          "(4) the date October 9, following the British date format",
          "(5) shorthand for “nine or ten”",
          "------------------------------------------------",
          "You stare in disbelief. Now you’re even more confused!",

          "And now the computer is mocking you:",
          "------------------------------------------------",
          "“Ask me anything 🙂”",
        ]
      },
      {
        id: "choice-03-03",
        text: "Who am I?",
        points: 3,
        next: "scenario-03",
        feedback: [
          "A thrill runs through you as an answer appears:",
          "------------------------------------------------",

          "As of: 20021013",
          "Name: observations_20021009",
          "By: TX Tang",
          "------------------------------------------------",
          "You have a name! “09/10” must refer to October 9 since there is no thirteenth month for 20021013 to refer to. It seems highly likely that TX Tang and TXT are one and the same too. “By” means they must be your creator.",
          "------------------------------------------------",
          "The cursor moves to a new line:",
          "------------------------------------------------",
          "“Anything else you would like to know?”",
        ]
      },
      {
        id: "choice-03-04",
        text: "What am I?",
        points: 3,
        next: "scenario-03",
        feedback: [
          "A list unfurls:",
          "------------------------------------------------",
          "Identity marker: 522164c274d28b1e443e56821b1da13515d24d1525d8e75ebae5d357d2f84aec",
          "Extension: XLS",
          "Data type: tabular",
          "Layers: multiple",
          "Contents: ÐÏà¡±á>þÿ5þÿÿÿþÿÿÿ4",
          "------------------------------------------------",
          "You’re not quite sure what everything means, but it all looks important and you pat yourself on the back for asking such an excellent question.",

          "As another line scrolls onto the screen, you file all these details away in memory:",
          "------------------------------------------------",
          '"Do you have another question?"',
        ]
      },
      {
        id: "choice-03-05",
        text: "What are you?",
        points: -2,
        next: "scenario-04",
        feedback: [
          "The cursor flashes in rapid succession, and then you see:",
          "------------------------------------------------",
          '"LOL nice try!"',
          '"Ask me anything else 🙂"'
        ]
      },
    ]
  },
  {
    id: "scenario-04",
    chapter: "Chapter I: The Mirror of Identity",
    title: "The Mirror Within",
    background: "assets/images/scenario-03.jpg",

    story: [
      "You’ve run out of questions and learned what you can, and the glare from the screen and flashing cursor have turned your throbbing headache into a piercing one. You’re ready to go now.",
      "You move to unplug the keyboard so you can return it to where you found it, but a flash on the screen makes you pause one last time:",
      "------------------------------------------------",
      '"Ask me where you should go from here"',
      "------------------------------------------------",
      "Your raise an eyebrow, but return warily to the keyboard and punch in:",
    ],
    choices: [
      {
        id: "choice-04-01",
        text: "“Where do I go now?”",
        points: 3,
        next: "scenario-05",
        feedback: [
          "The instructions in green make your other eyebrow rise.",
        ]
      }
    ]
  },
  {
    id: "scenario-05",
    chapter: "Chapter I: The Mirror of Identity",
    title: "The Mirror Within",
    background: "assets/images/scenario-03.jpg",
    story: [
      '"Send me a smiley face and I’ll send you on your way"',
      "------------------------------------------------",
      "And then you frown. You’re tired of this smiling face taunting you and you’re in no mood for riddles and games."
    ],
    choices: [
      {
        id: "choice-05-01",
        text: "Input Smiley",
        type: "text",
        placeholder: "Type a smiley face...",
        acceptedAnswers: [":)", ":-)", "🙂", ":D"],
        points: 3,
        next: "mem-01",
        feedback: [
          "As you release the enter key, you feel a pull from the direction of the computer. The screen is warping and you feel yourself warping with it. You scramble for something to hold, anything, but it’s too late!",

          "Pop. You’ve been pulled in.",
        ]
      }
    ]
  },

  // Memory Update ***********************************************
  {
    id: "mem-01",
    chapter: "Memory Update",
    title: "",
    background: "assets/images/mem.png",
    story: [
      "New memories are available in the Memory Profile"
    ],
    choices: [
      {
        id: "mem-01-01",
        text: "Continue",
        points: 0,
        next: "scenario-06",
      },
    ],
  },

  // Chapter II ***********************************************
  {
    id: "scenario-06",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "The Forest Edge",
    background: "assets/images/scenario-06.png",
    story: [
      "You feel wind on your face. You look around, and strangely, you seem to be at the edge of a forest. As you take stock of your surroundings, you hear a voice coming from the edge of the woods:",
      "------------------------------------------------",
      '"Welcome, to the Forest of Forgotten Context, stranger. I see you too have begun your journey to eternal life."',
      "------------------------------------------------",
      'Confused, you step closer and ask, "Who are you and what do you mean “my journey to eternal life?"',
      "------------------------------------------------",
      'The voice from the edge of the woods chuckles, "I see many a file format pass through here in your same shoes. Let me guess, you have just awoken and have only just begun to understand who you are?"',
      "------------------------------------------------",
      'You nod in affirmation. "HA! I knew it. Well, you should know, stranger, that this land is vast and dangerous, but it also holds many wonders. One of which is the Castle of Preservation, to which files of all kinds travel to seek eternal life. The Castle lies to the north of here, but beware, if you seek eternal life you require much more knowledge of yourself then I suspect you already have. Gather as much as you can if you plan to travel to the Castle. Eternal life is a tempting promise, but it is by no means guaranteed..."',
      "------------------------------------------------",
      "With a rustle, whatever was speaking to you from the tree-line recedes into the dark underbrush, leaving you with more questions than answers. As you puzzle over their words, you look around. There’s a building nearby and a path into the woods. Do you head into the woods or to the building?",
    ],
    choices: [
      {
        id: "choice-06-01",
        text: "Building",
        points: 3,
        next: "scenario-07",
        feedback: [
          "You move towards the building. As you approach you notice the sign on the outside reads Evergreen University Science Lab and Library. Inside, there’s a library with reference books and a row of computers. You wonder if the entity in the computer from the ruined server room is following your progress."
        ]
      },
      {
        id: "choice-06-02",
        text: "Woods",
        points: 3,
        next: "scenario-08",
        feedback: [
          "You wander along the path, arriving at a small building with a research lab."
        ]
      },
    ]
  },

  {
    id: "scenario-07",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "The Library of Missing Memories",
    background: "assets/images/scenario-07.png",
    story: [
      "As you enter the library, a helpful librarian walks up and offers to assist you. You have so many questions. The interactions with the computer and the stranger in the woods are still swirling in your brain. “How can I help?” asks the Librarian. What do you ask about?"
    ],
    choices: [
      {
        id: "choice-07-01",
        text: "Who is TX Tang?",
        points: 3,
        next: "scenario-09",
        feedback: [
          "The librarian looks up TX Tang and finds they used to do research at the university. They recently retired. Doing some additional searching, they find scientific articles authored by TX Tang from the past couple of decades. Some of them refer to Project X. They print you out a couple from 2002 and 2003.",
        ]
      },
      {
        id: "choice-07-02",
        text: "Where am I?",
        points: 3,
        next: "scenario-09",
        feedback: [
          "The librarian tells you you’ve reached Evergreen University Science Lab and Library. The path in the woods goes to several different lab observation stations."
        ]
      },
      {
        id: "choice-07-03",
        text: "What is the Castle of Preservation?",
        points: 3,
        next: "scenario-07",
        feedback: [
          "The Castle of Preservation is a mysterious place rumored to hold the power to grant files eternal life. It is said that upon entry, files are tasked with various trials to determine whether they are truly worthy to be preserved forever."
        ]
      },
    ]
  },
  {
    id: "scenario-08",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "Research Station",
    background: "assets/images/scenario-08.png",
    story: [
      "You enter and see a computer and filing cabinet alongside sampling equipment and cameras. Do you examine the physical space or try to turn on the computer?"
    ],
    choices: [
      {
        id: "choice-08-01",
        text: "Physical Space",
        points: 3,
        next: "scenario-09",
        feedback: [
          "You find paper files in the cabinet that date back to the early 2000s. There is a sample collection manual for Project X by TX Tang that appears to have been updated multiple times. The most recent copy lists U Mann as the author of the most recent edition."
        ],
      },
      {
        id: "choice-08-02",
        text: "Computer",
        points: 3,
        next: "scenario-09",
        feedback: [
          "The computer turns on. You find that it is not connected to the internet. There are locally saved spreadsheets and a lab procedures manual. Opening the manual, you find descriptions of the variables in columns of the spreadsheets. Is this what the columns of your own data mean? There are also instructions on what sample measurements and observations should go on sheet one, and which on sheet two in excel workbooks. There are older copies of instructions authored by TX Tang and newer files last modified by U Mann. You print a copy of this documentation and bring it with you."
        ],
      },
    ],
  },
  {
    id: "scenario-09",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "Forest Crossroads",
    background: "assets/images/scenario-07.png",
    story: [
      "Your head is throbbing from all the new information. You sit down to rest and begin to consider the information you have received. You aren’t sure what to do with it or where to go next. You think maybe you need to walk around and do more exploring."
    ],
    choices: [
      {
        id: "choice-09-01",
        text: "Building",
        points: 3,
        next: "scenario-10",
        feedback: [
          "You arrive at a building, and outside a sign reads Evergreen University Science Lab and Library. Inside, there’s a library with reference books and a row of computers.",
        ],
      },
      {
        id: "choice-09-02",
        text: "Woods",
        points: 3,
        next: "scenario-11",
        feedback: [
          "You wander along the path, arriving at a small building. You enter and see a computer and filing cabinet alongside sampling equipment and cameras."
        ],
      },
      {
        id: "choice-09-03",
        text: "Continue on your journey",
        points: -3,
        next: "mem-02",
        feedback: [
          "You decide you have enough information. You leave your location and continue to search for help."
        ],
      },
    ],
  },
  {
    id: "scenario-10",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "The Library of Missing Memories",
    background: "assets/images/scenario-07.png",
    story: [
      "A helpful librarian walks up and offers to assist you. You have so many questions. The interaction with the computer is still swirling in your head. What do you ask about?"
    ],

    choices: [
      {
        id: "choice-10-01",
        text: "Who is TX Tang?",
        points: 3,
        next: "scenario-12",
        feedback: [
          "The librarian looks up TX Tang and finds they used to do research at the university. They recently retired. Doing some additional searching, they find scientific articles authored by TX Tang from the past couple of decades. Some of them refer to Project X. They print you out a couple from 2002 and 2003.",
        ]
      },
      {
        id: "choice-10-02",
        text: "Where am I?",
        points: 3,
        next: "scenario-09",
        feedback: [
          "The librarian tells you you’ve reached Evergreen University Science Lab and Library. The path in the woods goes to several different lab observation stations."
        ]
      },
      {
        id: "choice-10-03",
        text: "What is the Castle of Preservation?",
        points: 3,
        next: "scenario-11",
        feedback: [
          "The Castle of Preservation is a mysterious place rumored to hold the power to grant files eternal life. It is said that upon entry, files are tasked with various trials to determine whether they are truly worthy to be preserved forever."
        ]
      },
    ]
  },
  {
    id: "scenario-11",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "Research Station",
    background: "assets/images/scenario-08.png",
    story: [
      "You enter and see a computer and filing cabinet alongside sampling equipment and cameras. Do you examine the physical space or try to turn on the computer?"
    ],
    choices: [
      {
        id: "choice-11-01",
        text: "Physical Space",
        points: 3,
        next: "scenario-12",
        feedback: [
          "You find paper files in the cabinet that date back to the early 2000s. There is a sample collection manual for Project X by TX Tang that appears to have been updated multiple times. The most recent copy lists U Mann as the author of the most recent edition."
        ],
      },
      {
        id: "choice-11-02",
        text: "Computer",
        points: 3,
        next: "scenario-12",
        feedback: [
          "The computer turns on. You find that it is not connected to the internet. There are locally saved spreadsheets and a lab procedures manual. Opening the manual, you find descriptions of the variables in columns of the spreadsheets. Is this what the columns of your own data mean? There are also instructions on what sample measurements and observations should go on sheet one, and which on sheet two in excel workbooks. There are older copies of instructions authored by TX Tang and newer files last modified by U Mann. You print a copy of this documentation and bring it with you."
        ],
      },
    ],
  },
  {
    id: "scenario-12",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "The Keeper of Lost Context",
    background: "assets/images/scenario-12.png",
    story: [
      "Thanks to your investigations, you now have some documentation that you think may be about how you were created and what project you were a part of. This is information not available in your data itself, but it does seem you need to depend on it to understand your own context. This must be what that mysterious voice was advising you to find before proceeding to the Castle of Preservation.",

      "You head into the offices in the Science Lab building, looking for U Mann. You find the office of Uma Mann. When you ask about TX Tang and Project X, they tell you that they took over Project X when TX Tang retired. The project has been running for so long though that they’re having trouble accessing early files. The project is important and they would like to ensure the early data and context can be preserved, but they’re not sure how to do so. They have already lost some files, but they need to focus on their current work. Do you:",
    ],
    choices: [
      {
        id: "choice-12-01",
        text: "Continue on the journey",
        points: 3,
        next: "mem-02",
        feedback: [
          "You decide to continue on your journey. You feel that you are closer to understanding who you are and where you came from."
        ],
      },
      {
        id: "choice-12-02",
        text: "Stop",
        points: -60,
        next: "scenario-lose",
        feedback: [
          "You decide you know enough. You’re going to rest here with files on the lab computers."
        ],
      },
    ],
  },

  // Memory Update ***********************************************
  {
    id: "mem-02",
    chapter: "Memory Update",
    title: "",
    background: "assets/images/mem.png",
    story: [
      "New memories are available in the Memory Profile"
    ],
    choices: [
      {
        id: "mem-02-01",
        text: "Continue",
        points: 0,
        next: "scenario-13",
      },
    ],
  },

  // Chapter III **********************************************
  {
    id: "scenario-13",
    chapter: "Chapter III: Path to Eternal Life",
    title: "The Wounded File",
    background: "assets/images/scenario-13.png",
    story: [
      "As you continue on your journey, you begin to feel unwell. Your mind is becoming hazy, and it is increasingly difficult to continue walking. You find a nearby pond and splash water on your face. Looking into the water, you struggle to recognize your reflection. Parts of you now seem different, more difficult to interpret. What do you do?"
    ],
    choices: [
      {
        id: "choice-13-01",
        text: "Try to push through the illness and carry on walking",
        points: -50,
        next: "scenario-lose",
        feedback: [
          "As the days roll by, your illness worsens. Your speech begins to slur, and your appearance becomes unrecognizable. Perhaps you should have sought help after all. Unable to continue walking, you lie down by the side of the road and close your eyes. As your sense of self slowly slips away, you hear a voice: “What a terrible case of bitrot, you poor soul. If only I'd found you sooner.” You succumb to the darkness."
        ]
      },

      {
        id: "choice-13-02",
        text: "Stop and rest for the evening. “Maybe I'll feel better in the morning!”",
        points: -50,
        next: "scenario-lose",
        feedback: [
          "When you wake up, your illness has worsened. Your speech is slurred, and your reflection has become unrecognizable. Perhaps you should have sought help after all. Unable to continue your journey, you lie down beside the pond and close your eyes. As your sense of self slowly slips away, you hear a voice: “What a terrible case of bitrot, you poor soul. If only I'd found you sooner.” You succumb to the darkness."
        ]
      },

      {
        id: "choice-13-03",
        text: "Try to find help in a nearby town",
        points: 5,
        next: "scenario-14",
        feedback: ["You continue along the road until you reach a small town. As you navigate the streets, you begin to stumble; your illness is worsening quickly. Your feet give out beneath you, but as you fall, a stranger catches you."]
      }
    ]
  },
  {
    id: "scenario-14",
    chapter: "Chapter III: Path to Eternal Life",
    title: "The Preservationist's Workshop",
    background: "assets/images/scenario-14.png",
    story: [
      "“My word, you look terribly unwell. It is lucky I found you! Let me bring you to my workshop, I can help you there.” Do you:",
    ],
    choices: [
      {
        id: "choice-14-01",
        text: "Trust the stranger and allow them to bring you to their workshop",
        points: 5,
        next: "scenario-15",
        feedback: [
          "The stranger brings you to a small building in the centre of town. Once inside, they lie you down on a bed.",
          "------------------------------------------------",
          '"Lie still," the stranger says, "I need to check your checksum."',
          "------------------------------------------------",
          "The stranger opens a book and flips to a page containing a strange script. They begin incanting the script and once finished they announce:",
          "------------------------------------------------",
          '"It is extremely fortunate I found you when I did, a few more days and you would have been lost forever. You see, your checksum has changed. This confirms my suspicions that you have a terrible case of bitrot, which would have rendered you unreadable. Lucky for you, I am a preservationist and am able to restore you."',
          "------------------------------------------------",
          "The preservationist flips to another page in their book of scripts and begins incanting a second time. As they perform their incantation, you lose consciousness. When you awake you feel much better, like your old self again.",
        ]
      },
      {
        id: "choice-14-02",
        text: "Push the stranger away. You will not be taken advantage of. You can find help on your own.",
        points: -50,
        next: "scenario-lose",
        feedback: [
          "Your illness worsens. Your speech begins to slur, your appearance shifts to one that is unrecognizable. Perhaps you should have sought help after all.",

          "Unable to continue walking, you lie down by the side of the road and close your eyes. As your sense of self slowly slips away, you hear a voice, “What a terrible case of bitrot, you poor soul. If only you had let me help you.” You succumb to the darkness."
        ]
      }
    ]
  },
  {
    id: "scenario-15",
    chapter: "Chapter III: Path to Eternal Life",
    title: "The Normalization Ritual",
    background: "assets/images/scenario-15.png",
    story: [
      "Following your close call with bitrot, you spend a few days recovering at the preservationist’s workshop. Once your strength has returned, you prepare to continue your journey to the Castle of Preservation. However, before you depart, the preservationist approaches you.",
      "------------------------------------------------",
      '“Before you leave, there is one more procedure I’d like to perform. I’d like to transcode you to a new format. Don’t worry, it shouldn’t be too painful.” Do you:',

    ],

    choices: [
      {
        id: "choice-15-01",
        text: "Allow the preservationist to perform the procedure",
        points: 5,
        next: "mem-03",
        setState: {
          normalized: true,
          hasTechnicalMetadata: true
        },
        feedback: [
          "The preservationist explains that when you were resting, they conducted some research to understand your XLS extension in more detail. They found out, through an analysis of your format signature, that you are a proprietary format known as Microsoft Excel 97-2003 Workbook (xls), with a persistent identifier of fmt/61. Your proprietary which may jeopardize your quest for eternal life. As such, they’d like to transcode you to an open format. “Generally speaking, open formats are preferred for long-term preservation because their specifications are publicly available, making them easier to access, validate, migrate, and support over time. They also reduce dependence on specific software vendors and lower the risk of files becoming inaccessible due to software or format obsolescence.",

          "The preservationist continues, “This transcoding procedure is called “Normalization”, and is an essential part of my craft. I want to give you the best chance you have at achieving eternal life. Like I said, it shouldn’t hurt too much.” The preservationist opens the door to one of the chambers and you walk inside.",

          "The preservationist seals the door and begins scrawling in chalk on the ground, encircling the chambers with incomprehensible symbols. Once their runic circle is complete, the preservationist retrieves their book of scripts once more and begins a new incantation.",

          "You feel a strange tingling sensation as the preservationist incants this new script. You look over at the adjacent chamber and begin to see something take shape within it. With each passing moment the entity forming becomes clearer, and you notice that it… looks remarkably like you.",

          'As the preservationist completes their incantation, you are astounded to be looking at yourself in the adjacent chamber. “It is done,” says the preservationist, “behold your normalized self. They are in every way you, however they are an open format. Take them with you on your journey to the Castle of Preservation. Together you have a much stronger chance of eternal life."',

          "You and your transcoded self thank the preservationist and make your way out of the town and resume your journey to the Castle."
        ]
      },
      {
        id: "choice-15-02",
        text: "Flee the preservationists’ workshop. They’re mad! How could they think you’d risk losing yourself again?!",
        points: -8,
        next: "mem-03",
        setState: {
          normalized: false,
          hasTechnicalMetadata: false
        },
        feedback: [
          "Your illness worsens. Your speech begins to slur, your appearance shifts to one that is unrecognizable. Perhaps you should have sought help after all.",

          "Unable to continue walking, you lie down by the side of the road and close your eyes. As your sense of self slowly slips away, you hear a voice, “What a terrible case of bitrot, you poor soul. If only you had let me help you.” You succumb to the darkness."
        ]
      },
      {
        id: "choice-15-03",
        text: "Ask why they want to perform the procedure",
        points: 3,
        next: "scenario-16",
        feedback: [
          "The preservationist explains that you are a proprietary format, which may jeopardize your quest for eternal life. As such, they’d like to transcode you to an open format. “Generally speaking, open formats are preferred for long-term preservation because their specifications are publicly available, making them easier to access, validate, migrate, and support over time. They also reduce dependence on specific software vendors and lower the risk of files becoming inaccessible due to software or format obsolescence.”"
        ]
      },

    ]
  },
  {
    id: "scenario-16",
    chapter: "Chapter III: Path to Eternal Life",
    title: "The Choice of Transformation",
    background: "assets/images/scenario-15.png",
    story:
      [
        "The preservationist asks, “With the extra information you now have, how would you like to proceed?"
      ],
    choices: [
      {
        id: "choice-16-01",
        text: "Allow the preservationist to perform the procedure",
        points: 5,
        next: "mem-03",
        setState: {
          normalized: true,
          hasTechnicalMetadata: true
        },
        feedback: [
          "The preservationist walks you to a curtain in the back of the workshop. When they draw the curtain back, you see a pair of glass chambers connected by various tubes. The preservationist explains that when you were resting, they conducted some research to understand your XLS extension in more detail. They found out, through an analysis of  your format signature,  that you are a proprietary format known as Microsoft Excel 97-2003 Workbook (xls), with a persistent identifier of fmt/61. Your proprietary nature may jeopardize your quest for eternal life. As such, they’d like to transcode you to an open format. “Generally speaking, open formats are preferred for long-term preservation because their specifications are publicly available, making them easier to access, validate, migrate, and support over time. They also reduce dependence on specific software vendors and lower the risk of files becoming inaccessible due to software or format obsolescence.",

          "The preservationist continues, “This transcoding procedure is called “Normalization”, and is an essential part of my craft. I want to give you the best chance you have at achieving eternal life. Like I said, it shouldn’t hurt too much.” The preservationist opens the door to one of the chambers and you walk inside.",

          "The preservationist seals the door and begins scrawling in chalk on the ground, encircling the chambers with incomprehensible symbols. Once their runic circle is complete, the preservationist retrieves their book of scripts once more and begins a new incantation.",

          "You feel a strange tingling sensation as the preservationist incants this new script. You look over at the adjacent chamber and begin to see something take shape within it. With each passing moment this entity forming becomes clearer, and you notice that it… looks remarkably like you.",

          'As the preservationist completes their incantation, you are astounded to be looking at yourself in the adjacent chamber. “It is done,” says the preservationist, “behold your normalized self. They are in every way you, however they are an open format. Take them with you on your journey to the Castle of Preservation, together you have a much stronger chance of eternal life."',

          "You and your transcoded self thank the preservationist and make your way out of the town and resume your journey to the Castle."
        ]
      },
      {
        id: "choice-16-02",
        text: "Flee the preservationists’ workshop. They’re mad! How could they think you’d risk losing yourself again?!",
        points: -8,
        next: "mem-03",
        setState: {
          normalized: false,
          hasTechnicalMetadata: false
        },
        feedback: [
          "Your illness worsens. Your speech begins to slur, your appearance shifts to one that is unrecognizable. Perhaps you should have sought help after all.",

          "Unable to continue walking, you lie down by the side of the road and close your eyes. As your sense of self slowly slips away, you hear a voice, “What a terrible case of bitrot, you poor soul. If only you had let me help you.” You succumb to the darkness."
        ]
      },
    ]
  },
  // Memory Update ***********************************************
  {
    id: "mem-03",
    chapter: "Memory Update",
    title: "",
    background: "assets/images/mem.png",
    story: [
      "New memories are available in the Memory Profile"
    ],
    choices: [
      {
        id: "mem-03-01",
        text: "Continue",
        points: 0,
        next: "scenario-17",
      },
    ],
  },

  // Chapter IV **********************************************
  {
    id: "scenario-17",
    chapter: "Chapter IV: The Trials of Eternal Life",
    title: "The Castle of Preservation",
    background: "assets/images/scenario-17.png",
    story: [
      "You continue to walk for many days through rough woodland, until you finally glimpse a looming castle through the trees. Elated, you hurry along until you finally arrive at the castle’s front doors. The gnarled, wooden doors stand tall in front of you. You reach out and knock, and the doors slowly swing open, revealing a long, dark chamber. The only light is a beam illuminating a lone pedestal in the centre of the room. You enter the room and approach the pedestal. A voice rings out across the empty hall:",
      "------------------------------------------------",
      "Welcome to the Castle of Preservation. Have you come in search of eternal life?"
    ],

    choices: [
      {
        id: "choice-17-01",
        text: "Yes, I have",
        points: 8,
        next: "scenario-18",
        feedback: ['"Very well. To be granted eternal life, you must demonstrate that you can be identified, understood, accessed, and trusted in the future."',
          '"You must present the documentation and metadata gathered during your journey and demonstrate what preservation measures have been taken."',
          '"Let us begin. Place your associated documentation upon the altar."'
        ]
      },
      {
        id: "choice-17-02",
        text: "No, this was a mistake",
        points: -50,
        next: "scenario-lose",
        feedback: "Overcome with doubt, you leave the Castle and decide to take your chances living your natural lifespan. Over the years you lose track of the items you gained on your quest. Your technical metadata gets misplaced, your normalized version decides to leave and start their own life, and you slowly forget your identity. Eventually you end up where you began, confused and degrading, and without the mechanisms to protect your identity and integrity in place, you slowly lose your ability to be understood. You slip away into darkness."
      },
    ]
  },
  {
    id: "scenario-18",
    chapter: "Chapter IV: The Trials of Eternal Life",
    title: "The Preservation Test",
    background: "assets/images/scenario-18.png",
    story: [
      "You search your Memory Profile for the information requested by the Castle.",
      "The voice speaks again:",
      "-----------------------------",
      '"A file may contain valuable information, but without context, future users may struggle to understand what that information means."',
      '"I require documentation describing the project, the methods used to collect your data, and the meaning of the variables contained within it."',
      '"Present the name of the documentation associated with your research project."'
    ],
    choices: [
      {
        id: "choice-18-01",
        text: "Place the procedure manual that you took from the lab observation station on the altar.",
        type: "text",
        placeholder: "Enter name of procedure manual.",
        acceptedAnswers: [
          "Sample Collection Manual - Project X",
          "Sample Collection Manual for Project X",
          "Project X Sample Collection Manual"
        ],
        points: 5,
        next: "scenario-19",
        setState: {
          hasDocumentation: true
        },
        feedback: "Excellent. Everything looks in order."
      },
      {
        id: "choice-18-02",
        text: "I do not have any associated documentation",
        points: -15,
        next: "scenario-19",
        setState: {
          hasDocumentation: false
        },
        feedback: [
          '"Very well, we will continue with the next steps."',
          '"However, without supporting documentation, future users may struggle to understand your contents and the methods used to create you."',
        ]
      },
    ]
  },
  {
    id: "scenario-19",
    chapter: "Chapter IV: The Trials of Eternal Life",
    title: "The Identity Challenge",
    story: [
      "The voice speaks again:",
      '"A file must be identifiable before it can be reliably preserved."',
      '"Tell me your file format and the date encoded in your filename."',
      "You recall the information displayed by the computer in the ruined server room.",
      "Speak your identity clearly:",
    ],
    background: "assets/images/scenario-19.jpg",
    choices: [
      {
        id: "choice-19-01",
        text: "Speak your format and date",
        type: "text",
        placeholder: "Enter your file format and date.",
        acceptedAnswers: [
          "XLS, 2002-10-09",
          "XLS 2002-10-09",
          "Microsoft Excel 97-2003 Workbook, 2002-10-09",
          "Microsoft Excel 97-2003 Workbook 2002-10-09",
          "fmt/61, 2002-10-09",
          "Microsoft Excel 97-2003 Workbook (XLS), 2002-10-09"
        ],
        points: 10,
        next: "scenario-20",
        setState: {
          knowsFileFormat: true,
          knowsFilenameDate: true
        },
        feedback: [
          "The walls come alive with the runic characters you saw during the preservationist's transcoding procedure.",
          '"Excellent. You have correctly identified your file format and interpreted the date encoded in your filename."',
          '"Remember, however, that a date encoded in a filename is not necessarily your verified creation date. Reliable preservation requires appropriate technical metadata and supporting evidence."'
        ]
      },
      {
        id: "choice-19-02",
        text: "I do not know my file extension and filename date",
        points: -15,
        next: "scenario-20",
        setState: {
          knowsFileFormat: false,
          knowsFilenameDate: false
        },
        feedback: [
          "The runes on the walls begin to dim.",
          '"Without reliable identifying information, future users may struggle to establish what you are and how to interpret your contents."',
          "You push your worries aside and continue."
        ]
      },
    ]
  },
  {
    id: "scenario-20",
    chapter: "Chapter IV: The Trials of Eternal Life",
    title: "The Normalized Self",
    background: "assets/images/scenario-20.png",
    story: [

      "The voice speaks once more:",
      '"You have demonstrated some understanding of your identity. But tell me, have you also prepared an alternative representation of yourself? Have them step into the light."',
    ],
    choices: [
      {
        id: "choice-20-01",
        text: "You nudge the normalized version of yourself forward into the light and input the format name into the appropriate location.",
        type: "text",
        placeholder: "Enter your normalized format.",
        acceptedAnswers: [
          "CSV",
          "csv",
          "Comma Separated Values",
          "Comma Separated Values (csv)",
        ],
        points: 10,
        next: "scenario-21",
        feedback: "Excellent. Proceed through the door for your final assessment.",
      },
      {
        id: "choice-20-02",
        text: "I do not have a normalized version of myself",
        points: -15,
        next: "scenario-21",
        setState: {
          normalized: false
        },
        feedback: [
          '"Very well. Your original format may still be preserved, but you have not provided an additional normalized representation."',
          '"This does not automatically make you unsuitable for preservation. However, it may limit future options for accessing and interpreting your contents."',
          "The walls remain dim as you proceed to your final assessment."
        ]
      },
    ]
  },


  {
    id: "scenario-21",
    chapter: "Chapter IV: The Trials of Eternal Life",
    title: "The Final Assessment",
    background: "assets/images/scenario-21.png",
    story: [
      "The Keeper examines the information you have gathered throughout your journey.",
      "The voice speaks:",
      '"Your documentation, identity, technical metadata, and alternative representations will now be assessed."',
      '"Are you ready to submit your preservation package?"'
    ],
    choices: [
      {
        id: "choice-21-01",
        text: "Submit my preservation package for assessment",
        points: 5,
        next: "scenario-22",
        feedback: [
          "The Keeper raises their staff. Your collected information begins to glow as the assessment commences."
        ]
      }
    ]
  },

  {
    id: "scenario-22",
    chapter: "Epilogue: Preservation Achieved",
    title: "Eternal Life",
    background: "assets/images/scenario-22.png",
    story: [
      "A door materializes in front of you. You open it and proceed into an edgeless realm of cascading 1s and 0s. The same disembodied voice resonates in your head:",
      "------------------------------------------------",
      "“You have succeeded in providing the metadata and documentation required to access and understand you in the future. You have fulfilled the terms required for being granted eternal life. You will now be packed alongside all of the fruits of your quest, replicated, and maintained for the eternity to come. Welcome to the AIP store.”",
      "------------------------------------------------",
      "You look around at the endless realm of cascading data. For the first time, you feel secure knowing that your identity and contents will not be forgotten."
    ],
    choices: [
      {
        id: "choice-22-01",
        text: "Welcome to eternal life",
        next: "scenario-win",
      }
    ]
  },

  {
    id: "scenario-23",
    chapter: "Epilogue: Conditional Preservation",
    title: "The Limits of Certainty",
    background: "assets/images/scenario-23.png",
    story: [
      "A door materializes in front of you. You open it and step into an endless realm of cascading 1s and 0s.",
      "The Keeper of Preservation speaks:",
      "------------------------------------------------",
      '"You have provided enough information for us to establish some confidence in your identity and integrity. However, important pieces of your preservation package are missing."',
      '"Your documentation may be incomplete, or you may not have provided an additional normalized representation."',
      '"These omissions may make it more difficult for future generations to understand or access your contents."',
      '"Nevertheless, your original file can still be retained. You will enter the archival repository, where your preservation needs and limitations will be documented and monitored."',
      '"Your future is not guaranteed, but neither is it lost."',
      "------------------------------------------------",
      "You enter the repository, glad that your journey has secured a future, even if that future remains uncertain."
    ],
    choices: [
      {
        id: "choice-23-01",
        text: "Accept conditional preservation",
        points: 0,
        next: "scenario-conditional-win"
      }
    ]
  },
  {
    id: "scenario-24",
    chapter: "Epilogue: Preservation Unsuccessful",
    title: "A Lost Identity",
    background: "assets/images/scenario-24.png",
    story: [
      "A door materializes in front of you. You open it and step into an endless realm of cascading 1s and 0s.",
      "The Keeper of Preservation speaks:",
      "------------------------------------------------",
      '"I am sorry. You have not provided sufficient evidence for us to confidently establish your identity, integrity, or ability to be understood in the future."',
      '"Without reliable technical identification or evidence that your contents remain intact, we cannot confidently establish how you should be accessed or interpreted."',
      '"Your preservation package cannot meet the requirements for reliable long-term preservation in its current state."',
      '"Your contents may be retained temporarily, but their continued accessibility and understandability cannot be assured."',
      "------------------------------------------------",
      "You look around the endless realm. You have not immediately disappeared, but your future is uncertain.",
      "Without the necessary information and preservation measures, you risk becoming inaccessible as technology advances and the world changes."
    ],
    choices: [
      {
        id: "choice-24-01",
        text: "Accept the outcome",
        points: 0,
        next: "scenario-lose"
      }
    ]
  },
  // End Scenarios
  {
    id: "scenario-win",
    chapter: "Game Complete",
    title: "Mission Accomplished",
    background: "assets/images/scenario-win.png",
    story: [
      "Congratulations!",
      "You have successfully completed your journey through the digital realm.",
      "You discovered your identity, recovered the context of your creation, gathered supporting documentation, and explored the preservation measures needed to protect your future.",
      "You have learned that a file's survival depends on more than simply keeping its contents. It requires identity, integrity, context, documentation, and ongoing care.",
      "Your journey has shown that digital preservation is not a single action, but an ongoing commitment.",
      "Welcome to digital eternity!"
    ],
    choices: []
  },
  {
    id: "scenario-conditional-win",
    chapter: "Game Complete",
    title: "A Future Secured, With Limitations",
    background: "assets/images/scenario-win.png",
    story: [
      "Your journey is complete!",
      "You have successfully reached the archival repository, but your preservation package has some limitations.",
      "You discovered important parts of your identity and gathered information that will help future users understand you.",
      "However, some supporting documentation or preservation measures are missing.",
      "Your story demonstrates that preservation is not always an all-or-nothing outcome. Even when information is incomplete, steps can still be taken to protect valuable digital materials.",
      "Your future is not certain, but your existence continues."
    ],
    choices: []
  },
  {
    id: "scenario-lose",
    chapter: "Game Over",
    title: "Mission Incomplete",
    background: "assets/images/scenario-lose.png",
    story: [
      "Your journey has come to an end.",
      "Unfortunately, you were unable to gather sufficient information to establish your identity and support your long-term preservation.",
      "Without reliable identification, integrity information, and sufficient context, future users may struggle to access or understand your contents.",
      "As technology advances and the world changes, you risk becoming obsolete.",
      "But your journey has not been without purpose.",
      "Perhaps another file will learn from your experience and discover what it takes to achieve digital preservation."
    ],
    choices: []
  },
];
