import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SandboxRoutingModule } from './sandbox-routing.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { SandboxComponent } from './sandbox.component';
import { ButtonPageComponent } from './button-page/button-page.component';
import { TogglePageComponent } from './toggle-page/toggle-page.component';
import { SharedModule } from '../app/shared/shared.module';
import { DatepickerPageComponent } from './datepicker-page/datepicker-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE,
  MatDatepickerModule,
} from '@angular/material';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { MOMENT_DATE_FORMATS, MomentDateAdapter } from '../app/shared/components/datepicker/moment-date.adapter';
import { ColorbarPageComponent } from './colorbar-page/colorbar-page.component';
import { SearchbarPageComponent } from './searchbar-page/searchbar-page.component';
import { DropdownPageComponent } from './dropdown-page/dropdown-page.component';
import { CardPageComponent } from './card-page/card-page.component';
import { MeterPageComponent } from './meter-page/meter-page.component';
import { SelectPageComponent } from './select-page/select-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { TabsPageComponent } from './tabs-page/tabs-page.component';
import { TabOneComponent } from './tabs-page/tab-one/tab-one.component';
import { TabTwoComponent } from './tabs-page/tab-two/tab-two.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    SandboxComponent,
    ButtonPageComponent,
    TogglePageComponent,
    DatepickerPageComponent,
    ColorbarPageComponent,
    SearchbarPageComponent,
    DropdownPageComponent,
    CardPageComponent,
    MeterPageComponent,
    SelectPageComponent,
    TablePageComponent,
    TabsPageComponent,
    TabOneComponent,
    TabTwoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    SandboxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter },
  ],
  bootstrap: [SandboxComponent],
  entryComponents: [
    TabOneComponent,
    TabTwoComponent,
  ],
})
export class SandboxModule {
}
