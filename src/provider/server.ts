import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Platform } from 'ionic-angular';


@Injectable()
export class ServerProvider {


    basepath = '/api';
    apiUrl = 'http://localhost:5000/api/v1/prediction';


    constructor(public http: Http, private _plataform: Platform) {
        if (this._plataform.is('cordova')) {
            this.basepath = "http://localhost:5000/api/v1/prediction"
        }
        console.log('Hello servicos Provider');

    }
    postServer(atributosRecebidos) {
        
       // console.log(atributosRecebidos.co);
       // console.log(atributosRecebidos.pt08co);
        let headers = new Headers(
            {
                'Content-Type': 'application/json',
            });
        let options = new RequestOptions({ headers: headers });

        let postData = {
            x1: atributosRecebidos.co,
            x2: atributosRecebidos.pt08co,
            x3: atributosRecebidos.nmhc,
            x4: atributosRecebidos.pt08nmhc,
            x5: atributosRecebidos.nox,
            x6: atributosRecebidos.pt08nox,
            x7: atributosRecebidos.no2,
            x8: atributosRecebidos.pt08o3,
            x9: atributosRecebidos.t,
            x10: atributosRecebidos.rh,
            x11: atributosRecebidos.ah
        }

        return new Promise((resolve, reject) => {
            this.http.post(`${this.basepath}/co`, JSON.stringify(postData), options)

                .toPromise()
                .then((response) => {
                    
                    console.log('API Response : ', response.json());
                    resolve(response.json());
                })
                .catch((error) => {
                    console.error('API Error : ', error.status);
                    console.error('API Error : ', JSON.stringify(error));
                    reject(error.json());
                });
        }).catch(function (e) {
            console.log("Passei no erro");

    }

}

