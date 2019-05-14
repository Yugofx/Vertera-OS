export const CART = [
  {
    id: '1',
    name: '0000 x Стартовый набор',
    image: '/assets/products-img1.png',
    price: { code: 'RUB', label: 'Рубли', total: 650 },
    points: { cpv: 15, bpv: 0 },
    complex: [
      { id: '0612', count: 1, name: 'Каталог продукции' },
      { id: '0700', count: 1, name: 'Справочник по продукции' },
      { id: '0601', count: 1, name: 'Планинг' },
      { id: '0631', count: 1, name: 'Руководство по бизнесу' },
      { id: '0634', count: 1, name: 'Папка-короб "Университет"' },
      { id: '0617', count: 1, name: 'Ручка фирменная' },
      { id: '0601', count: 1, name: 'Бланк заявления' },
    ],
  },
  {
    id: '2',
    name: '500 - True Vision',
    image: '/assets/products-img3.png',
    price: { code: 'RUB', label: 'Рубли', total: 1050 },
    points: { cpv: 7, bpv: 0 },
    complex: [],
  },
  {
    id: '3',
    name: '506 - Морской лед',
    image: '/assets/products-img7.png',
    price: { code: 'RUB', label: 'Рубли', total: 760 },
    points: { cpv: 12, bpv: 2 },
    complex: [],
  },
];
