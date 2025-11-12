import ourServices from "@/helpers/ourService.json";
import { fetchWithFallback } from "@/lib/apiClient";
import { IService } from "@/types/ourService";

const API_URL = process.env.NEXT_PUBLIC_BASE_API
    ? `${process.env.NEXT_PUBLIC_BASE_API}/our-service`
    : null;

const getOurServices = async (): Promise<IService[]> => {
    const data = await fetchWithFallback<IService[]>(
        API_URL, ourServices as IService[],
        {
            next: { tags: ["SERVICE"] },
        }
    );

    // small runtime log for visibility
    const jsonData = process.env.USE_LOCAL_MOCK === "true";
    if (jsonData) {
        console.log("[getOurServices] using json data");
    } else if (!API_URL) {
        console.log("[getOurServices] NO API URL -> using local JSON fallback.");
    } else {
        console.log("[getOurServices] Attempted API fetch (if successful, live data returned).");
    }

    return data;
};

export default getOurServices;
