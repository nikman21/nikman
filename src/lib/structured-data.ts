import { siteConfig } from "@/config";
import { aboutProfile } from "@/data/about";

export type JsonLdEntity = Record<string, unknown>;

const fallbackSite = new URL("https://nikman.tech/");

function siteRoot(site?: URL) {
  return new URL("/", site ?? fallbackSite);
}

export function absoluteUrl(path: string, site?: URL) {
  return new URL(path, siteRoot(site)).toString();
}

export function entityIds(site?: URL) {
  return {
    person: absoluteUrl("/#nik-manuel", site),
    website: absoluteUrl("/#website", site),
    freshIndustries: absoluteUrl("/work/fresh-industries/#organization", site),
    inflateMate: absoluteUrl("/work/inflatemate/#software", site),
  };
}

export function personEntity(site?: URL): JsonLdEntity {
  const ids = entityIds(site);

  return {
    "@type": "Person",
    "@id": ids.person,
    name: aboutProfile.fullName,
    alternateName: ["Nik", "Nik Manuel"],
    url: absoluteUrl("/about/", site),
    description:
      "Builder, co-founder of Fresh Industries, and creator of InflateMate.",
    jobTitle: "Co-founder and software builder",
    sameAs: siteConfig.socials.map((social) => social.href),
    alumniOf: { "@type": "CollegeOrUniversity", name: aboutProfile.university },
    homeLocation: { "@type": "Place", name: aboutProfile.location },
    worksFor: { "@id": ids.freshIndustries },
    knowsAbout: [
      "Software",
      "Systems design",
      "Product design",
      "Business",
      "History",
      "Faith",
      "Artificial intelligence",
    ],
  };
}

export function websiteEntity(site?: URL): JsonLdEntity {
  const ids = entityIds(site);

  return {
    "@type": "WebSite",
    "@id": ids.website,
    name: "Nik Manuel",
    url: absoluteUrl("/", site),
    description: siteConfig.description,
    author: { "@id": ids.person },
    publisher: { "@id": ids.person },
    inLanguage: "en-US",
  };
}

export function profilePageEntity(site?: URL): JsonLdEntity {
  const ids = entityIds(site);

  return {
    "@type": "ProfilePage",
    "@id": absoluteUrl("/about/#profile-page", site),
    url: absoluteUrl("/about/", site),
    name: "About Nik Manuel",
    mainEntity: { "@id": ids.person },
    isPartOf: { "@id": ids.website },
    inLanguage: "en-US",
  };
}

export function freshIndustriesEntity(site?: URL): JsonLdEntity {
  const ids = entityIds(site);

  return {
    "@type": "Organization",
    "@id": ids.freshIndustries,
    name: "Fresh Industries",
    url: absoluteUrl("/work/fresh-industries/", site),
    slogan: "Fix Today. Build Tomorrow.",
    description:
      "The company co-founded by Nik Manuel for software products, creative media, and services.",
    founder: { "@id": ids.person },
  };
}

export function inflateMateEntity(site?: URL): JsonLdEntity {
  const ids = entityIds(site);

  return {
    "@type": "SoftwareApplication",
    "@id": ids.inflateMate,
    name: "InflateMate",
    url: absoluteUrl("/work/inflatemate/", site),
    description:
      "Software for inflatable and event-rental companies that brings bookings, inventory, payments, waivers, and customer workflows into one place.",
    applicationCategory: "BusinessApplication",
    creator: { "@id": ids.person },
    provider: { "@id": ids.freshIndustries },
    audience: {
      "@type": "BusinessAudience",
      name: "Inflatable and event-rental business owners",
    },
  };
}

export function blogPostingEntity(
  site: URL | undefined,
  input: {
    path: string;
    headline: string;
    description: string;
    published: Date;
    updated?: Date;
    category: string;
  },
): JsonLdEntity {
  const ids = entityIds(site);
  const url = absoluteUrl(input.path, site);

  return {
    "@type": "BlogPosting",
    "@id": url + "#article",
    url,
    mainEntityOfPage: url,
    headline: input.headline,
    description: input.description,
    datePublished: input.published.toISOString(),
    dateModified: (input.updated ?? input.published).toISOString(),
    articleSection: input.category,
    author: { "@id": ids.person },
    isPartOf: { "@id": ids.website },
    inLanguage: "en-US",
  };
}

export function gardenArticleEntity(
  site: URL | undefined,
  input: {
    path: string;
    headline: string;
    description: string;
    created: Date;
    updated: Date;
    topic: string;
  },
): JsonLdEntity {
  const ids = entityIds(site);
  const url = absoluteUrl(input.path, site);

  return {
    "@type": "Article",
    "@id": url + "#article",
    url,
    mainEntityOfPage: url,
    headline: input.headline,
    description: input.description,
    datePublished: input.created.toISOString(),
    dateModified: input.updated.toISOString(),
    articleSection: input.topic,
    author: { "@id": ids.person },
    isPartOf: { "@id": ids.website },
    inLanguage: "en-US",
  };
}

export function structuredDataGraph(
  site?: URL,
  ...pageEntities: JsonLdEntity[]
): JsonLdEntity {
  return {
    "@context": "https://schema.org",
    "@graph": [personEntity(site), websiteEntity(site), ...pageEntities],
  };
}
