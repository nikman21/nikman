// Biographical facts supplied by Nik for this page on November 2, 2026.
// Keep age explicit; do not infer a birthday from it.
export const aboutProfile = {
  fullName: "Nikolas Manuel",
  name: "Nik",
  age: 26,
  location: "New Braunfels, Texas",
  university: "Arizona State University",
  degree: "Bachelor’s in Informatics",
  graduated: "December 2023",
} as const;

export type AboutAsset =
  | {
      kind: "image";
      src: string;
      srcSet?: string;
      sizes?: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
    }
  | {
      kind: "video";
      src: string;
      poster: string;
      label: string;
      width: number;
      height: number;
      caption: string;
      captions?: string;
    };

// Photos and state-final footage supplied by Nik on November 3, 2026.
// Null renders a labeled placeholder without a broken media source.
export const aboutMedia: {
  portrait: AboutAsset | null;
  wrestlingPhoto: AboutAsset | null;
  wrestlingClip: AboutAsset | null;
} = {
  portrait: {
    kind: "image",
    src: "/images/about/nik-outdoors.webp",
    srcSet:
      "/images/about/nik-outdoors-small.webp 480w, /images/about/nik-outdoors.webp 960w",
    sizes:
      "(max-width: 680px) calc(100vw - 3.5rem), (max-width: 1050px) 36vw, 400px",
    alt: "Nik sitting on a tree branch outdoors.",
    width: 960,
    height: 1280,
    caption: "A little time outside.",
  },
  wrestlingPhoto: {
    kind: "image",
    src: "/images/about/nik-wrestling.webp",
    alt: "Wrestlers holding their medals beside the mats at a tournament.",
    width: 1280,
    height: 853,
    caption: "From my wrestling days.",
  },
  wrestlingClip: {
    kind: "video",
    src: "/media/nik-state-final-highlights.mp4",
    poster: "/media/nik-state-final-poster.webp",
    label: "Nik Manuel’s state-final wrestling highlights",
    width: 960,
    height: 540,
    caption: "State final · 45-second edit",
    captions: "/media/nik-state-final-highlights.vtt",
  },
};
