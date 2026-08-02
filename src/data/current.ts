export const currentEditions = [
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
] as const;

export const current = currentEditions[0];
