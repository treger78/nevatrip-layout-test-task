import { Card } from "./components/Card.js";

const main = document.getElementById('main');

const cardsData = [
  [
    './assets/svg/images/card-img-01-piter.svg',
    '2 часа',
    'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
    ['12:00', '12:30', '13:00', '13:30'],
    900,
    undefined,
    main,
  ],
  [
    './assets/svg/images/card-img-01-piter.svg',
    '2 часа',
    'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
    ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'],
    2900,
    '1200 р на причале',
    main,
  ],
  [
    './assets/svg/images/card-img-01-piter.svg',
    '2 часа',
    'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
    ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'],
    1900,
    '1200 р на причале',
    main,
  ],
];

for (let i = 0; i < cardsData.length; i += 1) {
  new Card(...cardsData[i]).renderCard();
}
