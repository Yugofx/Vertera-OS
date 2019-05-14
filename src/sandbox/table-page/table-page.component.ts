import { Component } from '@angular/core';

export interface IHistoryData {
  id: number;
  date: string;
  operation: string;
  sum: number;
  spz: number;
  status: string;
}

const ELEMENT_DATA: IHistoryData[] = [
  { id: 123659, date: '14.09.2018', operation: 'Перевод на карту', sum: 125.39, spz: 112, status: 'В работе' },
  { id: 101553, date: '09.09.2018', operation: 'Покупка', sum: 100.5, spz: 112, status: 'Отменена' },
  { id: 123659, date: '14.09.2018', operation: 'Покупка', sum: 1021, spz: 922, status: 'Выполнено' },
  { id: 123659, date: '14.09.2018', operation: 'Перевод на карту', sum: 953, spz: 922, status: 'Выполнено' },
  { id: 123659, date: '14.09.2018', operation: 'Перевод на счёт', sum: 514, spz: 125, status: 'В работе' },
];

@Component({
  selector: 'os-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['../common.scss'],
})
export class TablePageComponent {
  displayedColumns: string[] = ['id', 'date', 'operation', 'sum', 'spz', 'status'];
  dataSource = ELEMENT_DATA;
}
