export const FileType = ["CSV","JSON","SQL"] as const; export type FileType = (typeof FileType)[number];
