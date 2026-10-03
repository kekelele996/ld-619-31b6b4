export const parseSql = (text: string) => text.split(";").filter(Boolean).map((statement) => ({ statement: statement.trim() }));
