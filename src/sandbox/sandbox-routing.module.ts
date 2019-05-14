import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPageComponent } from './button-page/button-page.component';
import { TogglePageComponent } from './toggle-page/toggle-page.component';
import { DatepickerPageComponent } from './datepicker-page/datepicker-page.component';
import { ColorbarPageComponent } from './colorbar-page/colorbar-page.component';
import { SearchbarPageComponent } from './searchbar-page/searchbar-page.component';
import { DropdownPageComponent } from './dropdown-page/dropdown-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { MeterPageComponent } from './meter-page/meter-page.component';
import { SelectPageComponent } from './select-page/select-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { TabsPageComponent } from './tabs-page/tabs-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'buttons',
  },
  {
    path: 'buttons',
    component: ButtonPageComponent,
  },
  {
    path: 'cards',
    component: CardPageComponent,
  },
  {
    path: 'colorbar',
    component: ColorbarPageComponent,
  },
  {
    path: 'datepicker',
    component: DatepickerPageComponent,
  },
  {
    path: 'dropdown',
    component: DropdownPageComponent,
  },
  {
    path: 'meter',
    component: MeterPageComponent,
  },
  {
    path: 'searchbar',
    component: SearchbarPageComponent,
  },
  {
    path: 'select',
    component: SelectPageComponent,
  },
  {
    path: 'table',
    component: TablePageComponent,
  },
  {
    path: 'tabs',
    component: TabsPageComponent,
  },
  {
    path: 'toggle',
    component: TogglePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SandboxRoutingModule {}
