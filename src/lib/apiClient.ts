/**
 * Generic fetch utility with automatic fallback to local JSON data.
 * - If useLocalMock true -> returns fallbackData immediately.
 * - Else tries to fetch API, if fails -> returns fallbackData.
 */

export const fetchWithFallback = async <T>(
  url: string | null,
  fallbackData: T,
  options?: RequestInit
): Promise<T> => {
  try {
    const jsonData = process.env.USE_LOCAL_MOCK === "true" ;

    if (jsonData) {
      console.warn("[fetchWithFallback] USE_LOCAL_MOCK=true -> Using fallback JSON data (forced).");
      return fallbackData;
    }

    if (!url) {
      console.warn("[fetchWithFallback] No API URL provided. Using fallback JSON data.");
      return fallbackData;
    }

    const res = await fetch(url, options);

    if (!res.ok) {
      console.warn(`[fetchWithFallback] API returned ${res.status}. Using fallback JSON data.`);
      return fallbackData;
    }

    const data = await res.json();
    return data as T;
  } catch (err: unknown) {
    console.error("[fetchWithFallback] Error while fetching:", err);
    console.warn("[fetchWithFallback] Falling back to local JSON data.");
    return fallbackData;
  }
};
