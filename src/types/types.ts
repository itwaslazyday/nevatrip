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
};

type FormState = {
  route: string;
  timeTo: string;
  timeBack: string;
  availableBackTimes: string[];
  selected: boolean;
  ticketsNumber: number;
};

type TicketsData = {
    type: string;
    price: number;
    title: string;
}[];

type TicketsFormState = {
  [index: string]: number | Date | {price: number; quantity: number; barcodes: number[]};

  // adult: {
  //   price: number;
  //   quantity: number;
  //   barcodes: number[];
  // };
  // child: {
  //   price: number;
  //   quantity: number;
  //   barcodes: number[];
  // };
  // social: {
  //   price: number;
  //   quantity: number;
  //   barcodes: number[];
  // };
  // special: {
  //   price: number;
  //   quantity: number;
  //   barcodes: number[];
  // };
  // id: number;
  // eventId: number;
  // eventDate: Date;
  // userId: number;
  // equialPrice: number;
  // created: Date;
};

export type {Card, ScheduleData, FormState, TicketsData, TicketsFormState};
