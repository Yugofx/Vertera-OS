import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { CatalogRouter } from './catalog.router';
import { CatalogComponent } from './catalog';
import { CatalogService } from './services/catalog.service';
import { CardComponent } from './components/card/card.component';
import { ViewSwitcherComponent } from './components/view-switcher/view-switcher.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  imports: [SharedModule, CatalogRouter],
  declarations: [CatalogComponent, CardComponent, ViewSwitcherComponent, CategoriesComponent],
  providers: [CatalogService],
})
export class CatalogModule {}
