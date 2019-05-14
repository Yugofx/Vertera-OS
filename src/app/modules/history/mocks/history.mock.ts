import { IMarkerHistory } from '../interfaces';

const HISTORY_LIST_MOCK: IMarkerHistory[] = [
  {
    id: 1212312,
    created_at: new Date('2018-10-25').toString(),
    composition: [
      {
        name: 'TEST',
        amount: 2,
        price: 12,
        code: 'RUB',
        total: 24,
        sublist: [
          {
            amount: 123,
            price: 2,
            name: 'Подарочный сертификат 30 баллов',
            code_product: '09900',
          },
        ],
      },
      {
        name: 'TEST2',
        amount: 2,
        price: 12,
        code: 'RUB',
        total: 24,
        sublist: [],
      },
    ],
    status: 'Новый',
    total: 12345,
    cpv: 12,
    bpv: 0,
    code: 'RUB',
  }, {
    id: 12,
    created_at: new Date('2018-10-25').toString(),
    composition: [
      {
        name: 'TEST',
        amount: 2,
        price: 12,
        code: 'RUB',
        total: 24,
        sublist: [
          {
            amount: 123,
            code_product: '000-1',
            name: 'Веревка',
            price: 1234,
          },
        ],
      },
    ],
    status: 'Новый',
    total: 12345,
    cpv: 12,
    bpv: 0,
    code: 'RUB',
  }, {
    id: 9999,
    created_at: new Date('2018-10-25').toString(),
    composition: [
      {
        name: 'TEST1',
        amount: 2,
        price: 12,
        code: 'RUB',
        total: 24,
        sublist: [
          {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          }, {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          }, {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          }, {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          }, {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          },
        ],
      },
      {
        name: 'TEST2',
        amount: 2,
        price: 12,
        code: 'RUB',
        total: 24,
        sublist: [
          {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          }, {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          }, {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          }, {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          }, {
            amount: 123,
            code_product: '000-1',
            name: 'Кирпич',
          },
        ],
      },
    ],
    status: 'Новый',
    total: 12345,
    cpv: 12,
    bpv: 0,
    code: 'RUB',
  },
];
const STATUS_MOCK = [
  {
    id: 0,
    title: 'Все статусы',
  }, {
    id: 1,
    title: 'Новая почта',
  }, {
    id: 2,
    title: 'Интайм',
  }, {
    id: 3,
    title: 'Почта России',
  }, {
    id: 4,
    title: 'DHL',
  },
];

export { HISTORY_LIST_MOCK, STATUS_MOCK };
