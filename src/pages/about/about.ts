import { Component } from '@angular/core';
import {ModalController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor( public modalCtrl: ModalController, public navCtrl: NavController) {     
    this.initializeFall();
    this.initializeWinter();
  }

  fallCourses;
  winterCourses;

  openModal(characterNum){
    let modal = this.modalCtrl.create('ModalPage', characterNum);
    modal.present();
  }

  initializeFall() {

    this.fallCourses = [
      {
        title: 'Samsung Android Application Development',
        code: 'MAPD-711',
        description: 'This course is designed to provide students with an introduction to developing applications on the Google Android platform. Students will be exposed to concepts such as programming on constrained devices, designing on different form factor, user interface design, exploring 2D and 3D graphics, multimedia, data persistence, and location-based applications.',
        hours: '4',
        semester: 'Fall'
      },
      {
        title: 'Web Technologies for Mobile Platforms',
        code: 'MAPD-712',
        description: 'This course provides students with the foundation in web technologies that is necessary for developing applications in the mobile web space. Students will be exposed to technologies such as HTML 5, CSS, JavaScript, AJAX, PHP, and jQuery.',
        hours: '4',
        semester: 'Fall'
      },
      {
        title: 'Enterprise Technologies for Mobile Platforms',
        code: 'MAPD-713',
        description: 'This course provides students with the foundation in enterprise technologies that is necessary for developing application in enterprise solutions.  Students will be exposed to topics such as databases, Web Services, and Service Oriented Architectures (SOAs).',
        hours: '4',
        semester: 'Fall'
      },
      {
        title: 'iOS Development',
        code: 'MAPD-714',
        description: 'This course is an introduction to programming on Apples iOS. Students will be introduced to Objective-C, Xcode, Cocoa Touch frameworks, memory management, designing on different form factor, UI design, data persistence, graphics library, location-based applications, accelerometer, and gyroscope.',
        hours: '4',
        semester: 'Fall'
      },
      {
        title: 'Mobile Application UI/UX Design',
        code: 'MAPD-715',
        description: 'This course will provide students with an introduction to UI/UX for different mobile platform. Students will be exposed to special features of mobile UI design, application design steps, creating the visual appeal, designer/developer collaboration & communication, and application usability.',
        hours: '4',
        semester: 'Fall'
      }
      
    ];
  }
  
  initializeWinter() {

    this.winterCourses = [
      {
        title: 'Samsung Advanced Android Development',
        code: 'MAPD-721',
        description: 'In this course, students will be exposed to advanced concepts and selected topics ranging from Android Services, Threading and Asynchronous Processing, Advanced UI Design, Handling Advanced User Input, Designing Accessible Applications, Using Android Multimedia APIs, Accessing Android’s Hardware Sensors, Developing Android 3D Graphics.',
        hours: '4',
        semester: 'Winter'
      },
      {
        title: 'Mobile Web Development',
        code: 'MAPD-722',
        description: 'This course builds on the course “Web Technologies for Mobile Platforms.” Students will be exposed to development using AJAX, HTML 5, and RIAs for mobile platforms.  Other topics include server-side browser detection, content delivery, geolocation, maps, widgets and offline webapps.',
        hours: '4',
        semester: 'Winter'
      },
      {
        title: 'Advanced iOS Development',
        code: 'MAPD-724',
        description: 'This course is an advanced course in iPhone/iPad development that examines topics such as data-driven applications, advanced UI design and development, developing with XML on the iPhone/iPad, and integrating iPhone/iPad with Web Services.',
        hours: '4',
        semester: 'Winter'
      },
      {
        title: 'Emerging Technologies',
        code: 'MAPD-725',
        description: 'This course will cover the emerging trends in mobile apps development. Topics will include cloud technologies, Internet of Things, social media, data analytics, artificial intelligence, chatbots and monetization. Course content may change as new trends/technologies emerge.',
        hours: '4',
        semester: 'Winter'
      },
      {
        title: 'Mobile Application Development Project',
        code: 'MAPD-726',
        description: 'Students will work on a project of his/her interest, or with an industry partner in areas of mobile computing. Possible areas of investigation can include mobile social networks, mobile Health Informatics, mobile game development, mobile cloud computing, mobile augmented reality, and context-awareness.',
        hours: '4',
        semester: 'Winter'
      },
      
    ];
  }
}


