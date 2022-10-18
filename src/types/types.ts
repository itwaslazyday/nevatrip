type Card = {
  id: number;
  tipText: string;
  tipBackground: string;
  imageSrc: string;
  title: string;
  runtime: number;
  features: string[];
  nearestDate?: Date | undefined;
  timeMarks?: string[],
  priceOnline: number;
  priceOffline?: number | string;
};

export type {Card};
