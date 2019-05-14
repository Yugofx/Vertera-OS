import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SandboxModule } from './sandbox.module';

platformBrowserDynamic()
  .bootstrapModule(SandboxModule)
  .catch(err => console.log(err));
