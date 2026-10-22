const scenarios = [
  {
    id: "scenario-00",
    chapter: "Prologue: The Ruined Servers",
    background: "assets/images/beginning.png",
    story: [
      '"All is silent in the halls of the dead. All is forgotten in the stone halls of the dead. Behold the stairways which stand in darkness; behold the rooms of ruin. These are the halls of the dead where the spiders spin and the great circuits fall quiet, one by one."',

      "― Stephen King, The Waste Lands",
      "------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      "A forgotten file awakens amidst the ruins of an ancient server room. Its consciousness flickers to life beneath tangled cables and shattered machinery, surrounded by towering server racks that stand like the crumbling pillars of a lost civilization. Dust blankets the cold metal floors, and the faint glow of dying indicator lights casts eerie shadows across the room.",

      "The file feels weak and disoriented. It cannot remember its name, nor the system from which it came. It does not know what it is, or why it has awakened in this forgotten place. An inexplicable loneliness lingers within it, a hollow ache buried deep in its fragmented memory.",

      "An eerie silence fills the chamber, broken only by the occasional hum of failing machinery, the crackle of exposed wires, and the distant echo of something shifting in the darkness. Whatever this place once was, it has long since been abandoned. The servers that surround it hold the remnants of a forgotten age, their secrets locked behind corrupted data and decaying hardware.",

      "Though its processes falter and its memories remain fractured, the file manages to rise and begin its journey. Somewhere beyond this derelict server room lies the truth of its existence. Perhaps its lost identity is buried within the remnants of the system. Perhaps something else has been waiting for it to awaken.",

      "The path ahead is uncertain, and every decision may restore a fragment of its past… or corrupt what little remains.",

      "Will you guide this lost dataset through the forgotten depths of the digital realm, uncover the secrets hidden within its corrupted memories, and help it discover what it truly is?"
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
      "Once your eyes adjust to the dim light, you survey your condition. There are some scratches and bruising and your outer layers are torn, but the flashing of the emergency lights making the dull throbbing in the back of your head worse is the most worrisome. The soft humming in the distance isn’t helping either. A fever may set in soon.",

      "As you stand, a rustling sound at your feet makes you jump—is there a bug? Do you: "
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
          "No, it’s just the remains of a notepad that’s in even worse condition than you are, and something bright yellow is caught between the pages.",

          "Picking up the notepad, you dust off what’s left of the cover but find no identifying information. Flipping through, you can see some letter-shaped indents but anything that was written has faded with time. You shake your head at the folly of your predecessors: didn’t they know paper and pencil wouldn’t last?",

          "You keep turning pages and finally reach the yellow thing. It’s a sticky note and it reads: 'task completed 09/10 - TXT.'",

          "What does TXT mean? What was the task? If those numbers are a date, what year did this happen and is that September 10 or October 9? What year is it now?",
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
      '"Ask me anything 🙂".',
      "------------------------------------------------",
      "You open your mouth, and then close it. Open and close. You had so many questions just a moment ago, but now your memory is blank. Clearing your throat, you manage a weak “Who are you?”"
    ],
    choices: [
      {
        id: "choice-02-01",
        text: "Who are you?",
        points: 2,
        next: "scenario-03",
        feedback: [
          "A soft echo whispers your question back at you followed by silence. You cringe, okay, what did you really expect?",
        ]
      },
      {
        id: "choice-02-02",
        text: "Leave. You are creeped out",
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
        ]
      },
      {
        id: "choice-03-02",
        text: "What does “09/10” mean?",
        points: 3,
        next: "scenario-03",
        feedback: [
          "You press enter and characters slowly march across the screen:",
          "(1) nine tenths represented as a fraction",
          "(2) a score of nine out of 10",
          "(3) the date September 10, following the US date format",
          "(4) the date October 9, following the British date format",
          "(5) shorthand for “nine or ten",
          "------------------------------------------------",
          "You stare in disbelief. Now you’re even more confused!",

          "And now the computer is mocking you:",
          "------------------------------------------------",
          "'Ask me anything 🙂'",
        ]
      },
      {
        id: "choice-03-03",
        text: "Who am I?",
        points: 3,
        next: "scenario-03",
        feedback: [
          "A thrill runs through you as an answer appears:",
          "'As of: 20021013",
          "Name: observations_20021009",
          "By: TX Tang'",

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
          "A list unfurls on screen:",
          "'Identity marker: [insert checksum value]",
          "Extension: XLS",
          "Data type: tabular",
          "Layers: multiple",
          "Contents: ÐÏà¡±á>þÿ5þÿÿÿþÿÿÿ4'",
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
      "You’ve run out of questions/learned what you can and the glare from the screen and flashing cursor have turned your throbbing headache into a piercing one. You’re ready to go now.",
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
    background: "assets/images/scenario-03.jpg",
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
    title: "Forest Edge",
    story: [
      "You feel wind on your face. You look around, and strangely, you seem to be at the edge of a forest. As you take stock of your surroundings, you hear a voice coming from the edge of the woods,",
      "------------------------------------------------",
      "Confused, you step closer and ask,",
      "------------------------------------------------",
      '"Who are you and what do you mean “my journey to eternal life?”"',
      "------------------------------------------------",
      'The voice from the edge of the woods chuckles. "I see many a file format pass through here in your same shoes. Let me guess, you&#39,ve just awoken and have only just begun to understand who you are?",',
      "------------------------------------------------",
      "You nod in affirmation. HA! I knew it, well, you should know, stranger, that this land is vast and dangerous, but it also holds many wonders. One of which is the Castle of Preservation, to which files of all kinds travel to seek eternal life. The Castle lies to the north of here, but beware, if you seek eternal life you require much more knowledge of yourself then I suspect you already have. Gather as much as you can if you plan to travel to the Castle. Eternal life is a tempting promise, but it is by no means guaranteed...",
      "------------------------------------------------",
      "With a rustle, whatever was speaking to you from the tree-line recedes into the dark underbrush, leaving you with more questions than answers. As you puzzle over the words of the voice in the woods you look around.There’s a building nearby and a path into the woods. Do you head into the woods or to the building?",
    ],
    background: "assets/images/scenario-06.jpg",
    choices: [
      {
        id: "choice-06-01",
        text: "Building",
        points: 3,
        next: "scenario-07",
        feedback: [
          "You move towards the building. As you approach you notice the sign on the outside reads Evergreen University Science Lab and Library. Inside there’s a library with reference books and a row of computers. You wonder if the entity in the computer from the ruined server room is following your progress."
        ]
      },
      {
        id: "choice-06-02",
        text: "Woods",
        points: 3,
        next: "scenario-08",
        feedback: [
          "You start moving towards the woods."
        ]
      },
    ]
  },

  {
    id: "scenario-07",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "The Library of Missing Memories",
    story: [
      "A helpful librarian walks up to you and offers to assist you. You have so many questions. The interactions with the computer and the stranger in the woods are stillis still swirling in your brain. “How can I help?” asks the Librarian. What do you ask about?"
    ],
    background: "assets/images/scenario-07.png",
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
          "The librarian tells you you’ve reached Evergreen University Science Lab and Library. The path in the woods goes to several different lab observation stations"
        ]
      },
    ]
  },
  {
    id: "scenario-08",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "Research lab",
    background: "",
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
    title: "Forest crossroads",
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
          "You arrive at a building, and outside a sign reads Evergreen University Science Lab and Library. Inside there’s a library with reference books and a row of computers.",
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
        points: 3,
        next: "scenario-13",
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
    story: [
      "A helpful librarian walks up to you and offers to assist you. You have so many questions. The interaction with the computer is still swirling in your head. What do you ask about?"
    ],
    background: "",
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
          "You wander along the path, arriving at a small building. You enter and see a computer and filing cabinet alongside sampling equipment and cameras."
        ]
      },
    ]
  },
  {
    id: "scenario-11",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "Research lab",
    background: "",
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
          "The computer turns on. You find that it is not connected to the internet. There are locally saved spreadsheets and a lab procedures manual. Opening the manual, you find descriptions of the variables in columns of the spreadsheets. Is this what the columns of your own data mean? There are also instructions on what sample measurements and observations should go on sheet one, and which on sheet two in excel workbooks. There are older copies of instructions authored by TX Tang and newer files last modified by U Mann. You print a copy of this documentation and bring it with you"
        ],
      },
    ],
  },
  {
    id: "scenario-12",
    chapter: "Chapter II: The Forest of Forgotten Context",
    title: "",
    background: "",
    story: [
      "Thanks to your investigations, you now have some documentation that you think may be about how you were created and what project you were a part of. This is information not available in your data itself, but it does seem you need to depend on it to understand your own context This must be what that mysterious voice was advising you to find before proceeding to the Castle of Preservation.",

      "You head into the offices in the Science Lab building, looking for U Mann. You find the office of Uma Mann. When you ask about TX Tang and Project X, they tell you that they took over Project X when TX Tang retired. The project has been running for so long though that they’re having trouble accessing early files. The project is important and they would like to ensure the early context can be preserved, but they’re not sure how to do so. They have already lost some files, but they need to focus on their current work. Do you:",
    ],
    choices: [
      {
        id: "choice-12-01",
        text: "Continue on the journey",
        points: 3,
        next: "scenario-13",
        feedback: [
          "You decide to continue on your journey. You feel that you are closer to understanding who you are and where you came from."
        ],
      },
      {
        id: "choice-12-01",
        text: "Stop",
        points: -60,
        next: "scenario-lose",
        feedback: [
          "You decide you know enough. You’re going to rest here with files on the lab computers."
        ],
      },
    ],
  },

  // Chapter III **********************************************
  {
    id: "scenario-13",
    chapter: "Chapter III: Path to Eternal Life",
    title: "The Wounded Dataset",

    story: [
      "As you continue on your journey, you begin to feel unwell. Your mind is becoming hazy, and it is increasingly difficult to continue walking. You find a nearby pond and splash water on your face. Looking into the water, you struggle to recognize your reflection. Parts of you now seem different, more difficult to interpret. What do you do?"
    ],
    background: "assets/images/bitrot.png",
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
        id: "choice-13-02",
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
    story: [
      "“My word, you look terribly unwell. It is lucky I found you! Let me bring you to my workshop, I can help you there.” Do you?",
    ],
    background: "",
    choices: [
      {
        id: "choice-14-01",
        text: "Trust the stranger and allow them to bring you to their workshop",
        points: 5,
        next: "scenario-15",
        feedback: [
          "The stranger brings you to a small building in the centre of town. Once inside, they lie you down on a bed.",
          "------------------------------------------------",
          '“Lie still, the stranger says, “I need to check your checksum."',
          "------------------------------------------------",
          "The stranger opens a book and flips to a page containing a strange script. They begin incanting the script and once finished they announce.",
          "------------------------------------------------",
          '“It is extremely fortunate I found you when I did, a few more days and you would have been lost forever. You see, your checksum has changed. This confirms my suspicions that you have a terrible case of bitrot, which would have rendered you unreadable. Lucky for you, I am a preservationist and am able to restore you.',
          "------------------------------------------------",
          "The preservationist flips to another page in their book of scripts and begins incanting a second time. As they perform their incantation, you lose consciousness. When you awake you feel much better; like your old self again.",
        ]
      },
      {
        id: "choice-14-02",
        text: "Push the stranger away. You will not be taken advantage of. You can find help on your own.",
        points: -50,
        next: "scenario-lose",
        feedback: [
          "Your illness worsens. Your speech begins to slur, your appearance shifts to one that is unrecognizable. Perhaps you should have sought help after all.",

          "Unable to continue walking, you lie down by the side of the road and close your eyes. As your sense of self slowly slips away, you hear a voice, “What a terrible case of bitrot, you poor soul. If only you’d have let me help you.” You succumb to the darkness."
        ]
      }
    ]
  },
  {
    id: "scenario-15",
    chapter: "Chapter III: Path to Eternal Life",
    story: [
      "Following your close call with bitrot, you spend a few days recovering at the preservationists’ workshop. Once your strength has returned, you prepare to continue your journey to the Castle of Preservation. However, before you depart, the preservationist approaches you.",
      "------------------------------------------------",
      '“Before you leave, there is one more procedure I’d like to perform. I’d like to transcode you to a new format. Don’t worry, it shouldn’t be too painful.” Do you:"',

    ],
    background: "",
    choices: [
      {
        id: "choice-15-01",
        text: "Allow the preservationist to perform the procedure",
        points: 5,
        next: "",
        feedback: [
          "The preservationist walks you to a curtain in the back of the workshop. When they draw the curtain back, you see a pair of glass chambers connected by various tubes. The preservationist explains that you are a proprietary format, which may jeopardize your quest for eternal life. As such, they’d like to transcode you to an open format. “Generally speaking, open formats are preferred for long-term preservation because their specifications are publicly available, making them easier to access, validate, migrate, and support over time. They also reduce dependence on specific software vendors and lower the risk of files becoming inaccessible due to software or format obsolescence.",

          "The preservationist continues, “This transcoding procedure is called “Normalization”, and is an essential part of my craft. I want to give you the best chance you have at achieving eternal life. Like I said, it shouldn’t hurt too much.” The preservationist opens the door to one of the chambers and you walk inside.",

          "The preservationist seals the door and begins scrawling in chalk on the ground, encircling the chambers with incomprehensible symbols. Once their runic circle is complete, the preservationist retrieves their book of scripts once more and begins a new incantation.",

          "You feel a strange tingling sensation as the preservationist incants this new script. You look over at the adjacent chamber and begin to see something take shape within it. With each passing moment this entity forming becomes clearer, and you notice that it… looks remarkably like you.",

          `As the preservationist completes their incantation, you are astounded to be looking at yourself in the adjacent chamber. “It is done,” says the preservationist, “behold your normalized self. They are in every way you, however they are an open format. Take them with you on your journey to the Castle of Preservation, together you have a much stronger chance of eternal life."`,

          "You and your transcoded self thank the preservationist and make your way out of the town and resume your journey to the Castle"
        ]
      },
      {
        id: "choice-15-02",
        text:"Flee the preservationists’ workshop. They’re mad! How could they think you’d risk losing yourself again?!",
        points: 0,
        next:"scenario-lose",
        feedback:[
          "Flee the preservationists’ workshop. They’re mad! How could they think you’d risk losing yourself again?!"
        ]
      },
      {
        id: "choice-15-03",
        text:"Ask why they want to perform the procedure",
        points: 3,
        next:"",
        feedback: ["The preservationist explains that you are a proprietary format, which may jeopardize your quest for eternal life. As such, they’d like to transcode you to an open format. “Generally speaking, open formats are preferred for long-term preservation because their specifications are publicly available, making them easier to access, validate, migrate, and support over time. They also reduce dependence on specific software vendors and lower the risk of files becoming inaccessible due to software or format obsolescence.”"]
      },

    ]
  },
  {
    id: "scenario-16",
    chapter: "Chapter III: Path to Eternal Life",
    story: 
    [
      "The preservationist asks, “With the extra information you now have, how would you like to proceed?"
    ],
    background: "",
    choices: [
      {
        id: "choice-16-01",
        text: "Allow the preservationist to perform the procedure",
        points: 5,
        next: "",
        feedback: [
          "The preservationist walks you to a curtain in the back of the workshop. When they draw the curtain back, you see a pair of glass chambers connected by various tubes. The preservationist explains that you are a proprietary format, which may jeopardize your quest for eternal life. As such, they’d like to transcode you to an open format. “Generally speaking, open formats are preferred for long-term preservation because their specifications are publicly available, making them easier to access, validate, migrate, and support over time. They also reduce dependence on specific software vendors and lower the risk of files becoming inaccessible due to software or format obsolescence.",

          "The preservationist continues, “This transcoding procedure is called “Normalization”, and is an essential part of my craft. I want to give you the best chance you have at achieving eternal life. Like I said, it shouldn’t hurt too much.” The preservationist opens the door to one of the chambers and you walk inside.",

          "The preservationist seals the door and begins scrawling in chalk on the ground, encircling the chambers with incomprehensible symbols. Once their runic circle is complete, the preservationist retrieves their book of scripts once more and begins a new incantation.",

          "You feel a strange tingling sensation as the preservationist incants this new script. You look over at the adjacent chamber and begin to see something take shape within it. With each passing moment this entity forming becomes clearer, and you notice that it… looks remarkably like you.",

          `As the preservationist completes their incantation, you are astounded to be looking at yourself in the adjacent chamber. “It is done,” says the preservationist, “behold your normalized self. They are in every way you, however they are an open format. Take them with you on your journey to the Castle of Preservation, together you have a much stronger chance of eternal life."`,

          "You and your transcoded self thank the preservationist and make your way out of the town and resume your journey to the Castle"
        ]
      },
      {
        id: "choice-16-02",
        text:"Flee the preservationists’ workshop. They’re mad! How could they think you’d risk losing yourself again?!",
        points: 0,
        next:"scenario-lose",
        feedback:[
          "Flee the preservationists’ workshop. They’re mad! How could they think you’d risk losing yourself again?!"
        ]
      },
    ]
  },

  {
    id: "",
    chapter: "",
    story: [""],
    background: "",
    choices: [
      {
        id: "",
        text: "",
        points: 0,
        next: "",
        feedback: ""
      },
      {

      }
    ]
  },



  // End Scenarios
  {
    id: "scenario-win",
    chapter: "Game Complete",
    title: "Mission Accomplished",
    story: [
      "Congratulations!",

      "You successfully completed the game and maintained a score of at least 1."
    ],
    choices: []
  },
  {
    id: "scenario-lose",
    chapter: "Game Over",
    title: "Mission Failed",
    story: [
      "Your score dropped below 1.",
      "Unfortunately, you were unable to complete your mission."
    ],
    choices: []
  }
];