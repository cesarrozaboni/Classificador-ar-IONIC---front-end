import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.html',
})
export class ResultadoPage {

  resposta:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resposta = navParams.get('data');
    console.log('resultado deoutra p: '+this.resposta.prediction);
  }

  ionViewDidLoad() {
    console.log('ResultadoPage');
  }

}
