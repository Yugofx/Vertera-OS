import { OsAnchor, OsButton } from './components/button/button';
import { OsInput } from './components/input/input';
import { OsCheckbox } from './components/checkbox/checkbox';
import { OsDropdown } from './components/dropdown/dropdown';
import { FullWidthOsSelect, OsOption, OsSelect } from './components/select/select';
import { OsMeter } from './components/meter/meter';
import { OsToggle } from './components/toggle/toggle';
import { OsDatepickerToggle } from './components/datepicker/datepicker-toggle';
import { OsColorbar } from './components/colorbar/colorbar';
import { OsSearchbar } from './components/searchbar/searchbar';
import { SanitizeUrlPipe, PhonePipe, LocalazeCurrencyPipe } from './pipe';
import { OsCounter, OsNoIconCounter } from './components/counter/counter.component';

const SHARED_PIPE: any[] = [
  PhonePipe,
  SanitizeUrlPipe,
  LocalazeCurrencyPipe,
];


const SHARED_COMPONENT: any[] = [
  OsButton,
  OsAnchor,
  OsInput,
  OsCheckbox,
  OsDropdown,
  OsSelect,
  FullWidthOsSelect,
  OsOption,
  OsMeter,
  OsToggle,
  OsDatepickerToggle,
  OsColorbar,
  OsSearchbar,
  OsCounter,
  OsNoIconCounter,
];

export { SHARED_PIPE };

export { SHARED_COMPONENT };
