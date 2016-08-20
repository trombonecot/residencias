import { Injectable } from '@angular/core';
import { Residencies } from './mocks/residencia.mock';

import {Residencia} from '../classes/residencia/residencia.component';


@Injectable()
export class ResidenciaService {

    getResidenciaById(id){
        return this.getResidencies()
                .then(heroes => heroes.find(hero => hero.id === id));
    }

  getResidencies(){
        return Promise.resolve(Residencies);
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
    
   


}
