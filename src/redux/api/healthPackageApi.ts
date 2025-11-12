import healthPackage from "@/helpers/healthPackage.json";
import { fetchWithFallback } from "@/lib/apiClient";
import { IHealthPackage } from "@/types/healthPackage";

const API_URL = process.env.NEXT_PUBLIC_BASE_API
    ? `${process.env.NEXT_PUBLIC_BASE_API}/health-package`
    : null;

const getAllHealthPackages = async (): Promise<IHealthPackage[]> => {
    const data = await fetchWithFallback<IHealthPackage[]>(
        API_URL, healthPackage as IHealthPackage[],
        {
            next: { tags: ["PACKAGE"] },
        }
    );

    // small runtime log for visibility
    const jsonData = process.env.USE_LOCAL_MOCK === "true";
    if (jsonData) {
        console.log("[getAllHealthPackages] using json data");
    } else if (!API_URL) {
        console.log("[getAllHealthPackages] NO API URL -> using local JSON fallback.");
    } else {
        console.log("[getAllHealthPackages] Attempted API fetch (if successful, live data returned).");
    }

    return data;
};

export default getAllHealthPackages;
