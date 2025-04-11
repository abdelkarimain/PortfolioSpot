"use server";

import { writeClient } from "@/sanity/lib/client";

type PortfolioData = {
  owner: string;
  url: string;
  github: string;
  technologies: string;
};

export async function submitPortfolio(data: PortfolioData) {
  try {
    const { owner, url, github, technologies } = data;

    // Basic validation
    if (!owner || !url) {
      return { 
        success: false, 
        error: "Name and website URL are required" 
      };
    }

    // Process technologies if provided
    const techArray = technologies 
      ? technologies.split(',').map((tech: string) => tech.trim()) 
      : [];

    // Create document in Sanity using the write client
    await writeClient.create({
      _type: "portfolio",
      owner,
      url,
      github,
      technologies: techArray,
      approved: false, // Default to unapproved until reviewed
      submittedAt: new Date().toISOString(),
    });

    return { success: true };
  } catch (error) {
    console.error("Submission failed:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Submission failed" 
    };
  }
}
