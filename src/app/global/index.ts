import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TopMenuComponent } from './header/components/top-menu/top-menu.component';
import { LangSelectorComponent } from './header/components/lang-selector/lang-selector.component';
import { MainMenuComponent } from './header/components/main-menu/main-menu.component';
import { MainMenuXsSmComponent } from './header/components/main-menu/main-menu-xs-sm.component';
import { ProfileMenuComponent } from './header/components/profile-menu/profile-menu.component';

const GLOBAL_COMPONENT: any[] = [
  HeaderComponent,
  TopMenuComponent,
  LangSelectorComponent,
  MainMenuComponent,
  MainMenuXsSmComponent,
  ProfileMenuComponent,
  FooterComponent,
  MainComponent,
];
export { GLOBAL_COMPONENT };
