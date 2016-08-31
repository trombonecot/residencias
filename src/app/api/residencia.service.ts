import { Injectable } from '@angular/core';
import { Residencies } from './mocks/residencia.mock';

import {Residencia} from '../classes/residencia/residencia.component';

import { JSONP_PROVIDERS, Headers, Http , Jsonp} from '@angular/http';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class ResidenciaService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private residendiesURL = 'http://api.buscageriatricos.es/';  // URL to web api

    constructor(private jsonp: Jsonp) {}

    getResidenciaById(id){
        return this.jsonp.get(this.residendiesURL + 'getById?callback=JSONP_CALLBACK&id=' + id)
                .toPromise()
               .then(response => <Residencia> response.json().data)
               .catch(function(error){console.log(error)});
    } 

    getResidencies(){
        return this.jsonp.get(this.residendiesURL + 'getAll?callback=JSONP_CALLBACK')
                .toPromise()
               .then(response => <Residencia[]> response.json().data)
               .catch(function(error){console.log(error)});
    }

    getResidenciesPerCodi(codi){
        return this.jsonp.get(this.residendiesURL + 'getByCodi?callback=JSONP_CALLBACK&codi=' + codi)
                .toPromise()
               .then(response => <Residencia[]> response.json().data)
               .catch(function(error){console.log(error)});
    }

    getResidenciesPerPoblacio(poblacio){
        return this.jsonp.get(this.residendiesURL + 'getByPoblacio?callback=JSONP_CALLBACK&poblacio=' + poblacio)
                .toPromise()
               .then(response => <Residencia[]> response.json().data)
               .catch(function(error){console.log(error)});
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    
   


}
