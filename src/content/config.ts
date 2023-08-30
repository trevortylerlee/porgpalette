import { z, defineCollection } from "astro:content";

const colors = defineCollection({
    schema: z.object({
        name: z.string(),
        pantone: z.string(),
        hex: z.string(),
        rgb: z.string(),
        cmyk: z.string(),
        id: z.number(),
        textColor: z.string(),
    }),
});

export const collections = { colors };
