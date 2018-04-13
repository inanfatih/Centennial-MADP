import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import * as moment from 'moment';
import {AngularFireDatabase , AngularFireList} from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  
  items: Observable<any>;
  comments:String;
  username:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController , public af: AngularFireDatabase) {
    //this.initializeItems();
    this.items = af.list("comments").valueChanges() as Observable<any>;
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

    if(!this.comments || !this.username) {
      let alert = this.alertCtrl.create({
        title: 'Comment not saved',
        subTitle: "Please, fill in username and comment",
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    
    if (this.comments.trim().length > 0 && this.username.trim().length > 0){

      let comment = {
        commentBy: this.username.trim(),
        comments: this.comments.trim(),
        createdOn: moment().format('MMM DD, YYYY hh:mm A')
      };

      this.af.list("comments").push(comment);

      this.comments = "";
      this.username = "";
    }
  }
}