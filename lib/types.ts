import { links } from "./data";

// Allow sections that aren't in the header navigation (e.g., Contact)
export type SectionName = (typeof links)[number]["name"] | "Contact";
