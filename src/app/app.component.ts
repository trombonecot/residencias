import { Component } from '@angular/core';

import { RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive } from '@angular/router';

import {ResidenciaService} from './api/residencia.service';
import {PoblacioService} from './api/poblacio.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [
      ResidenciaService,
      PoblacioService
  ],
})
export class AppComponent {
  title = 'app works!';
}
