import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects/projects.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    technologies: z.array(z.string()),
    github: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
    status: z.enum(['completed', 'in-progress', 'archived']),
  }),
});

export const collections = { blog, projects };
