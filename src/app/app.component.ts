import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import {ResidenciaService} from './api/residencia.service';

import {BuscadorComponent} from './buscador/buscador.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, BuscadorComponent],
  providers: [
      ResidenciaService
  ],
})
export class AppComponent {
  title = 'app works!';
}
