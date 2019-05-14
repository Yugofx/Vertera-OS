import { Component } from '@angular/core';

@Component({
  selector: 'os-shop',
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss'],
})
export class ShopComponent {
  mainMenu = [
    { link: 'office', label: 'Офис' },
    { link: 'catalog', label: 'Каталог' },
    { link: 'cart', label: 'Корзина' },
  ];
  secondaryMenu = [
    { link: 'history', label: 'История заказов' },
    { link: 'instructions', label: 'Инструкции' },
  ];
}
