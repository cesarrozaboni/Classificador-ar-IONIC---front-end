import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Platform } from 'ionic-angular';


@Injectable()
export class ServerProvider {

    basepath = '/api';
    apiUrl = 'http://localhost:5000/api/v1/prediction/co';

    constructor(public http: Http, private _plataform: Platform) {
       this.basepath = 'http://localhost:5000/api/v1/prediction/co'
    }
    
    postServer(atributosRecebidos) {
        
  
        let headers = new Headers(
            {
                'Content-Type': 'application/json',
            });
        let options = new RequestOptions({ headers: headers });

        let postData = {
            co: atributosRecebidos.co,
            pt08co: atributosRecebidos.pt08co,
            nmhc: atributosRecebidos.nmhc,
            pt08nmhc: atributosRecebidos.pt08nmhc,
            nox: atributosRecebidos.nox,
            pt08nox: atributosRecebidos.pt08nox,
            no2: atributosRecebidos.no2,
            pt08o3: atributosRecebidos.pt08o3,
            t: atributosRecebidos.t,
            rh: atributosRecebidos.rh,
            ah: atributosRecebidos.ah
        }

        return new Promise((resolve, reject) => {
            this.http.post(`${this.basepath}/co`, JSON.stringify(postData), options)

                .toPromise()
                .then((response) => {
                    resolve(response.json());
                })
                .catch((error) => {
                    reject(error.json());
                });
        }).catch(function (e) {
            console.log(e);
        });

    }

}

