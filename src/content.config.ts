import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const expertise = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/expertise' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    headlineAccent: z.string(),
    description: z.string(),
    intro: z.string(),
    company: z.string(),
    topics: z.array(z.string()),
  }),
});

export const collections = { expertise };
