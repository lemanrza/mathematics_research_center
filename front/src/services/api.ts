import { Endpoints } from "@/enums/endpoints";

export const API_BASE_URL: string = "https://mathematics-research-center.onrender.com/";

type endpointType = {
    news: string;
    advertisements: string;
    auth: string;
};

export const endpoints: endpointType = {
    news: Endpoints.news,
    advertisements: Endpoints.advertisements,
    auth: Endpoints.auth,
};