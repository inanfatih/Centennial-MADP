import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {
  
  items;
  comments:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

  initializeItems() {

    this.items = [
      {
        commentBy: 'Robert',
        comments: 'MAPD-712, MADP-722',
        createdOn: 'April 01, 2018 01:33 PM'
      },
      {
        commentBy: 'Fatih',
        comments: 'MAPD-712, MADP-722',
        createdOn: 'April 01, 2018 01:14 PM'
      },
      {
        commentBy: 'Kamalpreet Singh',
        comments: 'MAPD-712, MADP-722',
        createdOn: 'April 01, 2018 01:06 PM'
      },
      {
        commentBy: 'Kamalpreet Singh',
        comments: 'MAPD-712, MADP-722',
        createdOn: 'April 01, 2018 01:00 PM'
      }
    ];
  }

  saveComments() {
    if (this.comments.trim().length > 0){

      let comment = {
        commentBy: 'Kamalpreet Singh',
        comments: this.comments.trim(),
        createdOn: moment().format('MMM DD, YYYY hh:mm A')
      };

      let tempItems = this.items;
      this.items = [];
      this.items.push(comment);

      tempItems.forEach(element => {
        this.items.push({
          "commentBy": element.commentBy,
          "comments": element.comments,
          "createdOn": element.createdOn
        });
      });

      tempItems = null;

      this.comments = "";
    }
  }
}