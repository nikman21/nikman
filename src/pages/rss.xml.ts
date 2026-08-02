import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublicNotes } from "@/lib/content";
import { siteConfig } from "@/config";

export async function GET(context: APIContext) {
  const notes = await getPublicNotes();

  return rss({
    title: "Nik Manuel | Essays",
    description: siteConfig.description,
    site: context.site!,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.published,
      link: "/essays/" + note.id + "/",
    })),
  });
}
