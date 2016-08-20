import { provideRouter, RouterConfig }  from '@angular/router';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResidenciaDetailComponent } from './residencia-detail/residencia-detail.component';

const routes: RouterConfig = [
  {
    path: '',
    component: BuscadorComponent
  },
  {
    path: 'residencias/codigo-postal/:codi',
    component: BuscadorComponent
  },
  {
    path: 'residencias/provincia/:provincia',
    component: BuscadorComponent
  },
  {
    path: 'residencias/:id/:nom',
    component: ResidenciaDetailComponent
  },
];

export const appRouterProviders = [
  provideRouter(routes)
];
