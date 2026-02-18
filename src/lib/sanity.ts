import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';

if (!projectId) {
  console.warn('Sanity Project ID is not configured');
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export async function fetchFromSanity<T>(query: string): Promise<T> {
  try {
    const data = await sanityClient.fetch<T>(query);
    return data;
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    throw error;
  }
}
