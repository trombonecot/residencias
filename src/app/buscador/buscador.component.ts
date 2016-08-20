import { Component, OnInit } from '@angular/core';

import {Residencia} from '../classes/residencia/residencia.component';
import { Router } from '@angular/router';
import { ResidenciaService } from './../api/residencia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-buscador',
  templateUrl: 'buscador.component.html',
  styleUrls: ['buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  residencies : Residencia[];
  text:string;
  sub:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private residenciaService: ResidenciaService){}

  getResidencies(codi) {
    if (codi === undefined){
      this.residenciaService.getResidencies().then(residencies => this.residencies = residencies);
    }else{
      this.residenciaService.getResidenciesPerCodi(codi).then(residencies => this.residencies = residencies);
    } 
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      let codiPostal = +params['codi'];
    
      if (isNaN(codiPostal)){
        this.getResidencies(undefined);
      }else{
        this.text = codiPostal.toString();
        this.getResidencies(codiPostal);
      }
      
    });

    

    



  }

  onChange(valor){
    this.router.navigate(['residencias/provincia', valor]);
  }
  
  onChangeText(){
    this.router.navigate(['residencias/codigo-postal', this.text]);
    //this.getResidencies(this.text);
  }

  gotoResidencia(res:Residencia){
    this.router.navigate(['/residencias', res.id, res.nom]);
  }

}
