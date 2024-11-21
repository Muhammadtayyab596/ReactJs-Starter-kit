export function getCurrentTableEntries(
  limit: number,
  pageno: number
): {
  lowerLimit: number;
  higherLimit: number;
} {
  const higherLimit = pageno * limit;
  const lowerLimit = higherLimit - limit + 1;
  return {
    lowerLimit,
    higherLimit,
  };
}

export function isBlobURL(url: string) {
  // Use URL constructor to parse the URL
  const urlObject = new URL(url);

  // Check if the protocol is 'blob:'
  return urlObject.protocol === "blob:";
}

export function formatNumberWithSuffix(value: number): string {
  if (value < 1000) {
    return value.toString();
  } else if (value < 1000000) {
    return (value / 1000).toFixed(0) + "K";
  } else if (value < 1000000000) {
    return (value / 1000000).toFixed(0) + "M";
  } else {
    return (value / 1000000000).toFixed(0) + "B";
  }
}

export function capitalizeFirstLetter(str:string) {
  if (!str) return str; 
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function determineTier(positions:number) {
  if (positions <= 10000) {
      return "Tier 1 | Under 10k";
  } else if (positions > 10000 && positions <= 100000) {
      return "Tier 2 | 10,001 - 100k";
  } else if (positions > 100000 && positions <= 300000) {
      return "Tier 3 | 100,001 - 300k";
  } else if (positions > 300000 && positions <= 500000) {
      return "Tier 4 | 300,001 - 500k";
  } else if (positions > 500000) {
      return "Tier 5 | Over 500k";
  } else {
      return "Invalid number of positions";
  }
}
