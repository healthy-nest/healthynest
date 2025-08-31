// services/api.ts

// 1️⃣ Hardcoded base URL
const API_URL = "http://localhost:1337"; // Replace with your actual public URL if different

// 2️⃣ Generic fetch function for Strapi (public API, no token needed)
export async function fetchFromStrapi<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Strapi API error: ${response.status} - ${text}`);
    }

    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    console.error("Strapi API call failed:", error);
    throw error;
  }
}

export const API_BASE_URL = API_URL;