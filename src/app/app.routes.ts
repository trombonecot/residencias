import { provideRouter, RouterConfig }  from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';


const routes: RouterConfig = [
  {
    path: '',
    component: BuscadorComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
