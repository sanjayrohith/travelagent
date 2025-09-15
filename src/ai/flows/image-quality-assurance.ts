'use server';

/**
 * @fileOverview Image quality assurance flow.
 *
 * - assessImageQuality - Assesses an image and flags it if it's low quality or irrelevant.
 * - AssessImageQualityInput - The input type for the assessImageQuality function.
 * - AssessImageQualityOutput - The return type for the assessImageQuality function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessImageQualityInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo to assess, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AssessImageQualityInput = z.infer<typeof AssessImageQualityInputSchema>;

const AssessImageQualityOutputSchema = z.object({
  isHighQuality: z.boolean().describe('Whether the image is high quality and relevant.'),
  reason: z.string().optional().describe('Reason why the image is not high quality or relevant.'),
});
export type AssessImageQualityOutput = z.infer<typeof AssessImageQualityOutputSchema>;

export async function assessImageQuality(input: AssessImageQualityInput): Promise<AssessImageQualityOutput> {
  return assessImageQualityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assessImageQualityPrompt',
  input: {schema: AssessImageQualityInputSchema},
  output: {schema: AssessImageQualityOutputSchema},
  prompt: `You are an expert image quality assessor for a travel website.

You will receive an image and must determine if it is of high quality and relevant for use on the website.

Consider the following factors:

*   Clarity: Is the image clear, in focus, and free of artifacts?
*   Composition: Is the image well-composed and visually appealing?
*   Relevance: Is the image relevant to the content of a travel website?
*   Lighting: Is the image well-lit and properly exposed?

If the image is not of high quality or relevant, explain why in the reason field. Otherwise, the reason field should be null.

Image: {{media url=photoDataUri}}
`,
});

const assessImageQualityFlow = ai.defineFlow(
  {
    name: 'assessImageQualityFlow',
    inputSchema: AssessImageQualityInputSchema,
    outputSchema: AssessImageQualityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
