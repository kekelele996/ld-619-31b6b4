export const JobStatus = ["PENDING","RUNNING","SUCCESS","FAILED"] as const; export type JobStatus = (typeof JobStatus)[number];
