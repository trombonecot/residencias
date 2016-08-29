import { Injectable } from '@angular/core';
import { Residencies } from './mocks/residencia.mock';

import {Residencia} from '../classes/residencia/residencia.component';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class ResidenciaService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private residendiesURL = 'http://api.buscaresidencies.es/getAll';  // URL to web api

    constructor(private http: Http) { }

    getResidenciaById(id){
        return this.getResidencies()
                .then(heroes => heroes.find(hero => hero.id === id));
    }

  getResidencies(){
        return this.http.get(this.residendiesURL)
               .toPromise()
               .then(response => response.json().data as Residencia[])
               .catch(this.handleError);
  }

  getResidenciesPerCodi(codi){
        let result = new Array<Residencia>();
        for (var res in Residencies){
            if (Residencies[res].codiPostal.indexOf(codi)>-1){
                result.push(Residencies[res]);
            }
        }
        return Promise.resolve(result)
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
    
   


}
