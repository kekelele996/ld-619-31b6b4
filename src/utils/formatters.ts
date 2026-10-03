export const maskPartial = (value: string) => value.length <= 4 ? "****" : value.slice(0,2) + "****" + value.slice(-2);
