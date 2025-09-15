"use server";

import { assessImageQuality, type AssessImageQualityOutput } from "@/ai/flows/image-quality-assurance";

export async function checkImageQuality(
  photoDataUri: string
): Promise<AssessImageQualityOutput> {
  try {
    const result = await assessImageQuality({ photoDataUri });
    return result;
  } catch (error) {
    console.error("Error assessing image quality:", error);
    // Return a structured error to the client
    return {
      isHighQuality: false,
      reason: "An unexpected server error occurred during assessment.",
    };
  }
}
