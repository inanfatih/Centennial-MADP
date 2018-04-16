import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, DateTime } from 'ionic-angular';
import * as moment from 'moment';
import {AngularFireDatabase , AngularFireList} from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  
  items: Observable<any>;
  comments:String;
  loggedIn:boolean;
  currentUser:string;
  greeting:string;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController , public af: AngularFireDatabase, public angularFireAuth: AngularFireAuth) {
    //this.initializeItems();
    this.loggedIn = false;
    this.items = af.list("comments").valueChanges() as Observable<any>;

    this.angularFireAuth.authState
    .subscribe(
      user => {
        if (user) {
          this.loggedIn = true;
          this.currentUser = user.email;
          this.greeting = "Hi " + this.currentUser;
        } else {
          let modal = this.modalCtrl.create('LoginPage');
          modal.present();
        }
      },
      () => {
        let modal = this.modalCtrl.create('LoginPage');
        modal.present();
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

  initializeItems() {

    // this.items = [
    //   {
    //     commentBy: 'Robert',
    //     comments: 'MAPD-712, MADP-722',
    //     createdOn: 'April 01, 2018 01:33 PM'
    //   },
    //   {
    //     commentBy: 'Fatih',
    //     comments: 'MAPD-712, MADP-722',
    //     createdOn: 'April 01, 2018 01:14 PM'
    //   },
    //   {
    //     commentBy: 'Kamalpreet Singh',
    //     comments: 'MAPD-712, MADP-722',
    //     createdOn: 'April 01, 2018 01:06 PM'
    //   },
    //   {
    //     commentBy: 'Kamalpreet Singh',
    //     comments: 'MAPD-712, MADP-722',
    //     createdOn: 'April 01, 2018 01:00 PM'
    //   }
    // ];
  }

  saveComments() {
    if(!this.loggedIn){
      let modal = this.modalCtrl.create('LoginPage');
        modal.present();
        return;
    }
    if(!this.comments ) {
      let alert = this.alertCtrl.create({
        title: 'Comment not saved',
        subTitle: "Please, fill in comment",
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    
    if (this.comments.trim().length > 0){

      let comment = {
        commentBy: this.currentUser,
        comments: this.comments.trim(),
        createdOn: moment().format('MMM DD, YYYY hh:mm A')
      };

      this.af.list("comments").push(comment);

      this.comments = "";
    }
   
  }

  logout(){
    this.loggedIn = false;
    this.greeting = "";
    this.angularFireAuth.auth.signOut();
    this.navCtrl.push(CommentsPage);
  }
}