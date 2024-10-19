/* import { imageMetadata } from 'astro/assets/utils'; */
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      campaign: z.string().optional(),
      type: z.string().optional(),
      prev: z.string().optional(),
      next: z.string().optional(),
      players: z.array(z.string()).optional(),
      dm: z.string().optional(),
      order: z.number().optional(),
      series: z.string().optional(),
    }),
});

const players = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    campaigns: z.array(z.string()),
    updatedOn: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const dm = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    campaigns: z.array(z.string()),
    updatedOn: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const type = defineCollection({
  type: "content",
  schema: z.object({
    type: z.string(),
    campaigns: z.array(z.string()),
    updatedOn: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

export const collections = { blog, players, dm, type };
