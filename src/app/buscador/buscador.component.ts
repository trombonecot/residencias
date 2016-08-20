import { Component, OnInit } from '@angular/core';

import {Residencia} from '../classes/residencia/residencia.component';
import { Router } from '@angular/router';
import { ResidenciaService } from './../api/residencia.service';

@Component({
  moduleId: module.id,
  selector: 'app-buscador',
  templateUrl: 'buscador.component.html',
  styleUrls: ['buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  residencies : Residencia[];
  text:string;
  constructor(
    private router: Router,
    private residenciaService: ResidenciaService){}

  getResidencies(codi) {
    if (codi === undefined){
      this.residenciaService.getResidencies().then(residencies => this.residencies = residencies);
    }else{
      this.residenciaService.getResidenciesPerCodi(codi).then(residencies => this.residencies = residencies);
    } 
  }

  ngOnInit() {
    this.getResidencies(undefined);
  }
  
  onChangeText(){
    this.getResidencies(this.text);
  }

  gotoResidencia(res:Residencia){
    this.router.navigate(['/residencia', res.id]);
  }

}
