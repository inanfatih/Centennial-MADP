import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CourseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {

  code;
  title;
  description;
  hours;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    this.code = this.navParams.get('item').code;
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.hours = this.navParams.get('item').hours;
  }

}
