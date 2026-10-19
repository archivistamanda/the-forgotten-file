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
    title: "",
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
        next: "scenario-10",
        feedback: [
          "As you release the enter key, you feel a pull from the direction of the computer. The screen is warping and you feel yourself warping with it. You scramble for something to hold, anything, but it’s too late!",

          "Pop. You’ve been pulled in.",
        ]
      }
    ]
  },
  // Chapter II ***********************************************




  // Chapter III **********************************************
  {
    id: "scenario-10",
    chapter: "Chapter III: Path to Eternal Life",
    title: "The Wounded Dataset",

    story: [
      "As you continue on your journey, you begin to feel unwell. Your mind is becoming hazy, and it is increasingly difficult to continue walking. You find a nearby pond and splash water on your face. Looking into the water, you struggle to recognize your reflection. Parts of you now seem different, more difficult to interpret. What do you do?"
    ],
    background: "assets/images/bitrot.png",
    choices: [
      {
        id: "push-through",
        text: "Try to push through the illness and carry on walking",
        points: -50,
        next: "scenario-lose",
        feedback: "As the days roll by, your illness worsens. Your speech begins to slur, and your appearance becomes unrecognizable. Perhaps you should have sought help after all. Unable to continue walking, you lie down by the side of the road and close your eyes. As your sense of self slowly slips away, you hear a voice: “What a terrible case of bitrot, you poor soul. If only I'd found you sooner.” You succumb to the darkness."
      },

      {
        id: "rest",
        text: "Stop and rest for the evening. “Maybe I'll feel better in the morning!”",
        points: -50,
        next: "scenario-lose",
        feedback: "When you wake up, your illness has worsened. Your speech is slurred, and your reflection has become unrecognizable. Perhaps you should have sought help after all. Unable to continue your journey, you lie down beside the pond and close your eyes. As your sense of self slowly slips away, you hear a voice: “What a terrible case of bitrot, you poor soul. If only I'd found you sooner.” You succumb to the darkness."
      },

      {
        id: "seek-help",
        text: "Try to find help in a nearby town",
        points: 5,
        next: "town",
        feedback: "You continue along the road until you reach a small town. As you navigate the streets, you begin to stumble; your illness is worsening quickly. Your feet give out beneath you, but as you fall, a stranger catches you."
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