import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history';
import { RecordComponent } from './components/record/record';
import { HistoryResolver } from './services/history.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HistoryComponent,
  },
  {
    path: ':id',
    component: RecordComponent,
    resolve: {
      order: HistoryResolver,
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutesModule {}
