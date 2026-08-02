import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "Building and technology",
      "Faith and meaning",
      "Discipline and attention",
      "History and human nature",
      "Design and craftsmanship",
    ]),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    status: z.enum(["draft", "published"]).default("draft"),
    featured: z.boolean().default(false),
    readingMinutes: z.number().int().positive(),
    order: z.number().int().positive().default(99),
    relatedPrinciples: z.array(z.string()).default([]),
  }),
});

const garden = defineCollection({
  loader: glob({ base: "./src/content/garden", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    topic: z.enum([
      "Living and attention",
      "Faith and inherited wisdom",
      "Trust and cooperation",
      "Building and craftsmanship",
    ]),
    maturity: z.enum(["Seedling", "Growing", "Evergreen"]),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    status: z.enum(["draft", "published"]).default("draft"),
    order: z.number().int().positive().default(99),
    relatedEssays: z.array(z.string()).default([]),
    relatedPrinciples: z.array(z.string()).default([]),
    relatedGarden: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
  }),
});

const commonplace = defineCollection({
  loader: glob({
    base: "./src/content/commonplace",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    quotation: z.string(),
    author: z.string(),
    work: z.string(),
    originalDate: z.string(),
    sourceUrl: z.url(),
    whyKept: z.string(),
    published: z.coerce.date(),
    order: z.number().int().positive(),
    status: z.enum(["draft", "published"]).default("draft"),
    relatedContent: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    description: z.string(),
    audience: z.string(),
    role: z.string(),
    kind: z.enum(["company", "product", "experiment", "project"]),
    started: z.number().int(),
    parent: z.string().optional(),
    topics: z.array(z.string()).default([]),
    status: z.enum(["active", "exploring", "archived"]),
    order: z.number().int(),
    featured: z.boolean().default(false),
    public: z.boolean().default(false),
    externalUrl: z.url().optional(),
  }),
});

const principles = defineCollection({
  loader: glob({ base: "./src/content/principles", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    number: z.number().int().positive(),
    title: z.string(),
    summary: z.string(),
    question: z.string(),
    practices: z.array(z.string()).min(1),
    whyChosen: z.string(),
    status: z.literal("accepted"),
    reconsidered: z.coerce.date().optional(),
    relatedNotes: z.array(z.string()).default([]),
  }),
});

export const collections = {
  notes,
  garden,
  commonplace,
  projects,
  principles,
};
