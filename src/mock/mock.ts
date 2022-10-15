import { Card } from 'types/types';

const cards: Card[] = [
  {
    id: 1,
    tipText: 'Новинка',
    tipBackground: 'yellow',
    imageSrc: 'img/excursions/01.jpeg',
    title: 'Обзорная экскурсия по рекам и каналам Петербурга',
    features: [
      'Билет на целый день',
      'Неограниченное число катаний',
      '6 остановок у главных достопримечательностей',
      'Ближайший рейс сегодня'
    ],
    priceOnline: 900,
    priceOffline: 1200
  },
  {
    id: 2,
    tipText: 'Круглый год!',
    tipBackground: 'green',
    imageSrc: 'img/excursions/02.jpeg',
    title: 'Экскурсия по фортам Кронштадта',
    features: [
      'Билет на целый день',
      'Неограниченное число катаний',
      '6 остановок у главных достопримечательностей',
      'Ближайший рейс сегодня'
    ],
    priceOnline: 900,
    priceOffline: 1200
  },
  {
    id: 3,
    tipText: '',
    tipBackground: '',
    imageSrc: 'img/excursions/03.jpeg',
    title: 'Экскурсия на теплоходе «Полуденный выстрел с Петропавловской крепости»',
    features: [
      'Билет на целый день',
      'Неограниченное число катаний',
      '6 остановок у главных достопримечательностей',
      'Ближайший рейс сегодня'
    ],
    priceOnline: 900,
    priceOffline: 1200
  },
];

export {cards};
