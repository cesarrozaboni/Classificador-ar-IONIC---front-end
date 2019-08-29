import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm, NgModel } from '@angular/forms';
import { ServerProvider } from '../../provider/server';

import { LoadingController, AlertController } from 'ionic-angular';
import { ResultadoPage } from '../resultado/resultado';
import { HttpRequest } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

interface MeusAtributos {

  co: number,
  pt08co: number,
  nmhc: number,
  pt08nmhc: number,
  no2: number,
  t: number,
  rh: number,
  ah: number,
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private atributos: MeusAtributos;
  resposta: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public serverProvider: ServerProvider, public loadingController: LoadingController,
     public alertCtrl: AlertController,  public httpClient: HttpClient) {
    
  }
  calcular(form: NgForm)
   {
    this.atributos =
     {
        co: form.value.co,
        pt08co: form.value.pt08co,
        nmhc: form.value.nmhc,
        pt08nmhc: form.value.pt08nmhc,
        no2: form.value.no2,
        t: form.value.t,
        rh: form.value.rh,
        ah: form.value.ah
     }

    let loader = this.loadingController.create({
      content: "aguarde..."
    });
    loader.present();
    this.serverProvider.postServer(this.atributos).then(data => {    
    loader.dismiss();
    this.navCtrl.push(ResultadoPage, { data: data });
    })

  }
}
