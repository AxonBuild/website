export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export const posts: PostMeta[] = [
  {
    slug: "team-sops",
    title: "Team SOPs",
    date: "2026-04-08",
    description: "Tracker, meetings, QA, AI — and saying hi before you disappear.",
  },
  {
    slug: "welcome",
    title: "Using this handbook",
    date: "2026-04-08",
    description: "How to add posts, images, and deploy this site.",
  },
  {
    slug: "code-quality",
    title: "Technical guidance & code quality",
    date: "2025-06-03",
    description: "Team standards for style, reviews, security, and workflow.",
  },
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string | undefined): PostMeta | undefined {
  if (!slug) return undefined;
  return posts.find((p) => p.slug === slug);
}
