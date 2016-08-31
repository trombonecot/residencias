import { Injectable } from '@angular/core';

import {Poblacio} from '../classes/poblacio/poblacio.component';

import { JSONP_PROVIDERS, Headers, Http , Jsonp} from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class PoblacioService {

  private residendiesURL = 'http://api.buscageriatricos.es/';  // URL to web api

  constructor(private jsonp: Jsonp) {}

  getPoblacions(){
        return this.jsonp.get(this.residendiesURL + 'getAllPoblacions?callback=JSONP_CALLBACK')
                .toPromise()
               .then(response => <Poblacio[]> response.json().data)
               .catch(function(error){console.log(error)});
    }

}
