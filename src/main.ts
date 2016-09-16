
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app/app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);



/*
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MaterialAppModule);

*/
/*bootstrap(AppComponent, [
  appRouterProviders
]);*/

