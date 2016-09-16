
import { Routes, RouterModule } from '@angular/router';

import { BuscadorComponent } from './buscador/buscador.component';
import { ResidenciaDetailComponent } from './residencia-detail/residencia-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BuscadorComponent
  },
  {
    path: 'residencias/codigo-postal/:codi',
    component: BuscadorComponent
  },
  {
    path: 'residencias/poblacion/:poblacion',
    component: BuscadorComponent
  },
  {
    path: 'residencias/:id/:nom',
    component: ResidenciaDetailComponent
  },
];

export const routing = RouterModule.forRoot(routes);

export const appRouterProviders: any[] = [

];
