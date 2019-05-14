import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints } from '../../../../shared';
import { DimensionService } from '../../../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'os-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  isAuthorized: boolean;
  profileLabel$: Observable<string>;

  readonly profileMenuRoutes = [
    { route: '/login', icon: 'login', label: 'Войти', authorized: false },
    { route: '/signup', icon: 'plus', label: 'Зарегистрироваться', authorized: false },
    { route: '/settings', icon: 'user', label: 'Мой профиль', authorized: true },
  ];

  constructor(private dimension: DimensionService) {}

  ngOnInit() {
    this.profileLabel$ = this.dimension
      .getBreakpointStream()
      .pipe(map(b => b === Breakpoints.XS ? '' : 'Личный кабинет'));
  }

  logout() {}
}
