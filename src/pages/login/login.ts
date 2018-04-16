import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public angularFireAuth: AngularFireAuth, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.username, this.password)
    .then( user => {
      if( user != null){
        this.viewCtrl.dismiss(true);
      }
      else{
        alert("No user");
      }
    })
    .catch( err => {
      let myalert = this.alertCtrl.create({
        title: 'Unable to Login',
        subTitle: err,
        buttons: ['OK']
      });
      myalert.present();
      return;
    })
  }

  register(){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.username, this.password)
    .then( user => {
      if( user != null){
        this.viewCtrl.dismiss(true);
      }
    })
    .catch( err => {
      let alert = this.alertCtrl.create({
        title: 'Registration Failed',
        subTitle: err,
        buttons: ['OK']
      });
      alert.present();
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
