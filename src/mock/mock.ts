import { Card, ScheduleData } from 'types/types';
import dayjs from 'dayjs';

const currentDate = new Date();
const nextDate = new Date(currentDate);
nextDate.setDate(currentDate.getDate() + 1);

const cards: Card[] = [
  {
    id: 1,
    tipText: 'Новинка',
    tipBackground: '#099CE8',
    imageSrc: 'img/excursions/01.jpeg',
    title: 'Обзорная экскурсия по рекам и каналам Петербурга',
    runtime: 81,
    features: [
      'Билет на целый день',
      'Неограниченное число катаний',
      '6 остановок у главных достопримечательностей',
    ],
    nearestDate: currentDate,
    timeMarks: ['09:00', '10:00', '11:45', '12:30', '13:15', '15:00', '16:45', '17:00', '18:30'],
    priceOnline: 900,
    priceOffline: 1200
  },
  {
    id: 2,
    tipText: 'Круглый год',
    tipBackground: '#FED74B',
    imageSrc: 'img/excursions/02.jpeg',
    title: 'Обзорная экскурсия по рекам и каналам Петербурга',
    runtime: 140,
    features: [
      'Билет на целый день',
      'Неограниченное число катаний',
      '6 остановок у главных достопримечательностей'
    ],
    nearestDate: nextDate,
    timeMarks: ['12:00', '14:00', '16:00', '18:00', '20:00'],
    priceOnline: 850
  },
  {
    id: 3,
    tipText: '',
    tipBackground: '',
    imageSrc: 'img/excursions/03.jpeg',
    title: 'Обзорная экскурсия по рекам и каналам Петербурга',
    runtime: 33,
    features: [
      'Билет на целый день',
      'Неограниченное число катаний',
      '6 остановок у главных достопримечательностей',
      'Лучшие виды на город'
    ],
    priceOnline: 900,
    priceOffline: 1000
  },
];
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();
const fullCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;


const scheduleData: ScheduleData = {
  scheduleTimeTo: [
    `${fullCurrentDate}T18:00:00.000`,
    `${fullCurrentDate}T18:30:00.000`,
    `${fullCurrentDate}T18:45:00.000`,
    `${fullCurrentDate}T19:00:00.000`,
    `${fullCurrentDate}T19:15:00.000`,
    `${fullCurrentDate}T21:00:00.000`,
  ],
  scheduleTimeBack: [
    `${fullCurrentDate}T18:30:00.000`,
    `${fullCurrentDate}T18:45:00.000`,
    `${fullCurrentDate}T19:00:00.000`,
    `${fullCurrentDate}T19:15:00.000`,
    `${fullCurrentDate}T19:35:00.000`,
    `${fullCurrentDate}T21:50:00.000`,
    `${fullCurrentDate}T21:55:00.000`
  ],
  scheduleRoute: {
    ab: 'Из A в Б',
    ba: 'Из Б в A',
    aba: 'Из A в Б и обратно в А'
  }
};

export {cards, scheduleData};
