import { defineCollection } from "astro:content";
import { z } from "astro:schema";


const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    thumbnail: z.string().optional(),
  }),
})

export const collections = {
  blog
}
