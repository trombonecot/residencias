
import { Component, OnInit } from '@angular/core';
import {Residencia} from '../classes/residencia/residencia.component';
import {Poblacio} from '../classes/poblacio/poblacio.component';
import { Router } from '@angular/router';
import { ResidenciaService } from './../api/residencia.service';
import { PoblacioService } from './../api/poblacio.service';
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
  codi:string;
  poblacions: Poblacio[];
  poblacion:string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private residenciaService: ResidenciaService,
    private poblacioService: PoblacioService){}

  getResidencies(poblacio) {
    if (poblacio === undefined){
      this.residenciaService.getResidencies().then(residencies => this.residencies = residencies);
    }else{
      this.residenciaService.getResidenciesPerPoblacio(poblacio).then(residencies => this.residencies = residencies);
    } 
  }

  getPoblacions(){
    this.poblacioService.getPoblacions().then(poblacions => this.poblacions = poblacions);
  }

  ngOnInit() {

    this.getPoblacions();

    this.sub = this.route.params.subscribe(params => {
      let poblacion = params['poblacion'];

      this.poblacion = poblacion;
    
      if (poblacion === undefined){
        this.getResidencies(undefined);
      }else{
        this.getResidencies(poblacion);
      }
    });
  }

  onChange(valor){
    if (valor == ""){
      this.router.navigate(['']);
    }else{
      this.router.navigate(['residencias/poblacion', valor]);
    }
  }
  
  onChangeText(){
    this.router.navigate(['residencias/codigo-postal', this.codi]);
    //this.getResidencies(this.text);
  }

  gotoResidencia(res:Residencia){
    this.router.navigate(['/residencias', res.id, res.nom]);
  }

}
