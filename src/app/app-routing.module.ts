import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop',
  },
  {
    path: 'shop',
    loadChildren: './modules/shop/shop.module#ShopModule',
  },
  {
    path: 'profile',
    loadChildren: './modules/profile/profile.module#ProfileModule',
  },
  {
    path: 'projects',
    loadChildren: './modules/projects/projects.module#ProjectsModule',
  },
  {
    path: 'external/authorization',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
