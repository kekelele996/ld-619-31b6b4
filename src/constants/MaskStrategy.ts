export const MaskStrategy = ["HASH","PARTIAL","RANDOM_NAME","RANDOM_PHONE","DROP","KEEP"] as const; export type MaskStrategy = (typeof MaskStrategy)[number];
