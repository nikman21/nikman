import type { APIContext } from "astro";
import {
  getAcceptedPrinciples,
  getPublicCommonplaceEntries,
  getPublicGardenNotes,
  getPublicNotes,
  getPublicProjects,
} from "@/lib/content";
import { current } from "@/data/current";

function dateOnly(date: Date) {
  return date.toISOString().slice(0, 10);
}

export async function GET(context: APIContext) {
  const [essays, garden, commonplace, projects, principles] = await Promise.all(
    [
      getPublicNotes(),
      getPublicGardenNotes(),
      getPublicCommonplaceEntries(),
      getPublicProjects(),
      getAcceptedPrinciples(),
    ],
  );
  const site = context.site!;
  const url = (path: string) => new URL(path, site).toString();

  const manifest = {
    schemaVersion: 1,
    site: {
      name: "Nik Manuel",
      url: url("/"),
      archiveMap: url("/explore/"),
      description:
        "A curated personal website about building useful systems, studying enduring ideas, and living by considered principles.",
      language: "en-US",
    },
    entities: {
      person: {
        type: "Person",
        name: "Nik Manuel",
        url: url("/about/"),
        roles: [
          "Software builder",
          "Founder of Fresh Industries",
          "Creator of InflateMate",
          "Writer",
        ],
      },
      freshIndustries: {
        type: "Organization",
        name: "Fresh Industries",
        url: url("/work/fresh-industries/"),
        slogan: "Fix Today. Build Tomorrow.",
        status: "Early and active",
        description:
          "Nik Manuel's umbrella company and the long-term home for improving what exists today and building what should exist tomorrow.",
      },
      inflateMate: {
        type: "SoftwareApplication",
        name: "InflateMate",
        url: url("/work/inflatemate/"),
        provider: "Fresh Industries",
        description:
          "Software for inflatable and event-rental companies that brings bookings, inventory, payments, waivers, and customer workflows into one place.",
      },
    },
    current: {
      url: url("/current/"),
      ...current,
    },
    content: {
      essays: essays.map((essay) => ({
        type: "Essay",
        title: essay.data.title,
        url: url("/essays/" + essay.id + "/"),
        description: essay.data.description,
        author: "Nik Manuel",
        category: essay.data.category,
        published: dateOnly(essay.data.published),
        updated: essay.data.updated ? dateOnly(essay.data.updated) : undefined,
        readingMinutes: essay.data.readingMinutes,
        relatedPrinciples: essay.data.relatedPrinciples.map((id) =>
          url("/principles/#" + id),
        ),
      })),
      principles: principles.map((principle) => ({
        type: "Accepted principle",
        number: principle.data.number,
        title: principle.data.title,
        url: url("/principles/#" + principle.id),
        summary: principle.data.summary,
        returningQuestion: principle.data.question,
        practices: principle.data.practices,
        whyChosen: principle.data.whyChosen,
      })),
      garden: garden.map((note) => ({
        type: "Garden note",
        title: note.data.title,
        url: url("/garden/" + note.id + "/"),
        summary: note.data.summary,
        author: "Nik Manuel",
        topic: note.data.topic,
        maturity: note.data.maturity,
        created: dateOnly(note.data.created),
        updated: dateOnly(note.data.updated),
        relatedGarden: note.data.relatedGarden.map((id) =>
          url("/garden/" + id + "/"),
        ),
        sources: note.data.sources,
      })),
      commonplace: commonplace.map((entry) => ({
        type: "Commonplace entry",
        title: entry.data.title,
        url: url("/commonplace/#" + entry.id),
        quotation: entry.data.quotation,
        author: entry.data.author,
        work: entry.data.work,
        originalDate: entry.data.originalDate,
        verifiedSource: entry.data.sourceUrl,
        whyKept: entry.data.whyKept,
      })),
      projects: projects.map((project) => ({
        type: "Project",
        title: project.data.title,
        url: url("/work/" + project.id + "/"),
        description: project.data.description,
        audience: project.data.audience,
        role: project.data.role,
        kind: project.data.kind,
        started: project.data.started,
        parent: project.data.parent
          ? url("/work/" + project.data.parent + "/")
          : undefined,
        topics: project.data.topics,
        status: project.data.status,
      })),
    },
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
