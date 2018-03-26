import { Component } from '@angular/core';
import {ModalController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor( public modalCtrl: ModalController) { }

  openModal(characterNum){

    let modal = this.modalCtrl.create('ModalPage', characterNum);
    modal.present();

  }


  
}


