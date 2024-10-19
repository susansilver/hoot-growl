/* import { imageMetadata } from 'astro/assets/utils'; */
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
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

export const collections = { blog };
