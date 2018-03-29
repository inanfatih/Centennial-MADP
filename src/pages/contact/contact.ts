import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  searchQuery: string = '';
  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  items;

  initializeItems() {

    this.items = [
      {
        instructor: 'Przemyslaw Pawluk',
        courses: 'MAPD-712, MADP-722',
        email: 'vzaytsev@my.centennialcollege.ca',
        phone: '416-289-5000'
      },
      {
        instructor: 'Viktor V. Zaytsev',
        courses: 'MADP-713, MADP-721, MADP-726',
        email: 'vzaytsev@my.centennialcollege.ca',
        phone: '416-289-5000'
      },
      {
        instructor: 'Tom Tsiliopoulos',
        courses: 'MADP-714, MADP-724',
        email: 'ttsilop@my.centennialcollege.ca',
        phone: '416-289-5000'
      },
      {
        instructor: 'Charles Lai',
        courses: 'MADP-725',
        email: 'clai70@my.centennialcollege.ca',
        phone: '416-289-5000'
      },
      {
        instructor: 'Vinayagathas Vaithilingam',
        courses: 'MADP-711',
        email: 'vvaithi3@my.centennialcollege.ca',
        phone: '416-289-5000'
      },
      {
        instructor: 'Genco Cebecioglu',
        courses: 'MADP-715',
        email: 'gcebecio@my.centennialcollege.ca',
        phone: '416-289-5000'
      }
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.instructor.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
