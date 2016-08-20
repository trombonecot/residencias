import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {Residencia} from '../classes/residencia/residencia.component';

import { ResidenciaService } from './../api/residencia.service';

@Component({
  moduleId: module.id,
  selector: 'app-residencia-detail',
  templateUrl: 'residencia-detail.component.html',
  styleUrls: ['residencia-detail.component.css']
})
export class ResidenciaDetailComponent implements OnInit {
  residencia: Residencia;
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private residenciaService: ResidenciaService){}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.residenciaService.getResidenciaById(id)
        .then(residencia => this.residencia = residencia);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }

}
