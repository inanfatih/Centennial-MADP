import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map'

import { HttpClientModule } from '@angular/common/http';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AngularFireDatabase , AngularFireList} from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
 
// Firebase backend project: 
// https://console.firebase.google.com/u/0/project/mapd-db/database/mapd-db/data

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  information: Observable<any>;
 
  constructor(public navCtrl: NavController, private http: HttpClient, public af: AngularFireDatabase) {
    this.information = af.list('programInfo').valueChanges() as Observable<any>;
  }
 
  toggleSection(item) {
    item.open = !item.open;
  }
 
}