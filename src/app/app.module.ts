import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatDatepickerModule,
} from '@angular/material';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { MOMENT_DATE_FORMATS, MomentDateAdapter } from './shared/components/datepicker/moment-date.adapter';
import { AppRoutingModule } from './app-routing.module';
import { GLOBAL_COMPONENT } from './global';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './modules/auth/auth.component';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    GLOBAL_COMPONENT,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDatepickerModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentDateAdapter },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
