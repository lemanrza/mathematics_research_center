export const Endpoints = {
    news: "/news",
    advertisements: "/advertisements",
    auth: "/auth",
} as const;

type Endpoints = keyof typeof Endpoints;
