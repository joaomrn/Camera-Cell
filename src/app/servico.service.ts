import { Injectable } from '@angular/core';    
import {Http} from '@angular/http'
import {Historico} from '../app/shared/historico.model'
import { Usuario } from './model/usuario';


@Injectable()
export class ServicoService {

    private API_URL = 'http://localhost:3000/historicos/'
    
    constructor(private http: Http){}

    public getHistorico(): Promise<Historico[]> {
        return this.http.get(`${this.API_URL}`)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

}