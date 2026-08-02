import { getCollection } from "astro:content";

export async function getPublicNotes() {
  const notes = await getCollection(
    "notes",
    ({ data }) => data.status === "published",
  );

  return notes.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    return b.data.published.getTime() - a.data.published.getTime();
  });
}

export async function getPublicGardenNotes() {
  const notes = await getCollection(
    "garden",
    ({ data }) => data.status === "published",
  );

  return notes.sort((a, b) => a.data.order - b.data.order);
}

export async function getPublicCommonplaceEntries() {
  const entries = await getCollection(
    "commonplace",
    ({ data }) => data.status === "published",
  );

  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getPublicProjects() {
  const projects = await getCollection("projects", ({ data }) => data.public);

  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getAcceptedPrinciples() {
  const principles = await getCollection("principles");

  return principles.sort((a, b) => a.data.number - b.data.number);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
