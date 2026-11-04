export interface CurrentEdition {
  slug: string;
  edition: number;
  period: string;
  updated: string;
  building: string;
  learning: string;
  practicing: string;
  reading: string[];
  listening: { title: string; creator: string; format: string }[];
  thinking: string[];
  course?: { title: string; url: string };
}

export const currentEditions: [CurrentEdition, ...CurrentEdition[]] = [
  {
    slug: "2026-11",
    edition: 2,
    period: "November 2026",
    updated: "2026-11-02",
    building:
      "Building the businesses under Fresh Industries: InflateMate, Fresh Infra, Bara, Osef, and the other projects that keep giving me new questions.",
    learning:
      "Looking into infrastructure software engineering, exploring Go and Docker on my Linux server, and paying closer attention to the design of everyday things.",
    reading: [
      "The Design of Everyday Things · nonfiction",
      "This Is Marketing · nonfiction",
      "Protocols · nonfiction",
      "Dark Matter · fiction",
    ],
    listening: [
      { title: "Smooth jazz", creator: "While I work", format: "On rotation" },
      {
        title: "My old high school playlist",
        creator: "Mostly 2016–2018 rap",
        format: "Back in rotation",
      },
    ],
    practicing:
      "Working out more and trying a semi animal-based diet. Getting into writing, making content, and experimenting with animation using AI.",
    thinking: [
      "How do I make tools that feel simple while the systems behind them get more capable?",
      "What should a person and an agent share in a workspace?",
      "How can the things I build help me create more of my own work?",
    ],
  },
  {
    slug: "2026-08",
    edition: 1,
    period: "August 2026",
    updated: "2026-08-02",
    building:
      "InflateMate, an operating system for party-rental companies, while continuing to improve my product judgment, design sense, and engineering depth.",
    learning:
      "Interface design, software systems, American history and government, Christianity and church history, and the emerging world of AI agents.",
    course: {
      title: "Interface Craft",
      url: "https://www.interfacecraft.dev/",
    },
    reading: ["The Almanack of Naval Ravikant", "Red Rising"],
    listening: [
      { title: "Iceman", creator: "Drake", format: "Album" },
      { title: "Can I", creator: "Kodak Black", format: "Song" },
      { title: "Astroworld", creator: "Travis Scott", format: "Album" },
      { title: "Mastery", creator: "Robert Greene", format: "Audiobook" },
    ],
    practicing:
      "Writing, software building, attention without constant technology, and a more consistent spiritual life.",
    thinking: [
      "What am I doing today that will still matter in five years?",
      "What can I learn, change, or build from what went wrong?",
      "What makes a person, relationship, belief, business, or system strong enough to last?",
      "How can I pursue ambition without losing my faith, integrity, relationships, or soul?",
    ],
  },
];

export const current = currentEditions[0];
