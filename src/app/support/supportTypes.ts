import type { ReactNode } from "react";

export type SupportCategory = {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
};

export type SupportTicket = {
    id: string;
    subject: string;
    status: "open" | "closed" | "pending";
    date: string;
    lastUpdate: string;
};

export type SupportArticle = {
    id: string;
    title: string;
    category: string;
    views: number;
};