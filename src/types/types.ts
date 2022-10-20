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

type ScheduleData = {
  scheduleRoute: {
    [index: string]: string;
  }
  scheduleTimeTo: string[];
  scheduleTimeBack: string[];
}

type FormState = {
  route: string;
  timeTo: string;
  timeBack: string;
  availableBackTimes: string[];
  selected: boolean;
  ticketsNumber: number;
}

export type {Card, ScheduleData, FormState};
