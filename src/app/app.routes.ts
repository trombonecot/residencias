import { provideRouter, RouterConfig }  from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResidenciaDetailComponent } from './residencia-detail/residencia-detail.component';

const routes: RouterConfig = [
  {
    path: '',
    component: BuscadorComponent
  },
  {
    path: 'residencia/:id',
    component: ResidenciaDetailComponent
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];
