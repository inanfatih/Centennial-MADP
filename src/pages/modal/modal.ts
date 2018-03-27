import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  character;

  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController  ) 
 {
  var courses = [
    {
      name: 'Samsung Android Application Development',
      instructor: "Irvin",
      code: "MAPD-711",
      courseHours: "2",
      labHours: "2",
      semester: "Fall",
      campus: "Progress",
      description: "This course is designed to provide students with an introduction to developing applications on the Google Android platform. Students will be exposed to concepts such as programming on constrained devices, designing on different form factor, user interface design, exploring 2D and 3D graphics, multimedia, data persistence, and location-based applications."
    },
    {
      name: 'Web Technologies for Mobile Platforms',
      instructor: "Irvin",
      code: "MAPD-712",
      courseHours: "2",
      labHours: "2",
      semester: "Fall",
      campus: "Progress",
      description: "This course provides students with the foundation in web technologies that is necessary for developing applications in the mobile web space. Students will be exposed to technologies such as HTML 5, CSS, JavaScript, AJAX, PHP, and jQuery."
    },
    {
      name: 'Enterprise Technologies for Mobile Platforms',
      instructor: "Irvin",
      code: "MAPD-713",
      courseHours: "2",
      labHours: "2",
      semester: "Fall",
      campus: "Progress",
      description: "This course provides students with the foundation in enterprise technologies that is necessary for developing application in enterprise solutions.  Students will be exposed to topics such as databases, Web Services, and Service Oriented Architectures (SOAs)."
    },
    {
      name: 'iOS Development',
      instructor: "Irvin",
      code: "MAPD-714",
      courseHours: "2",
      labHours: "2",
      semester: "Fall",
      campus: "Progress",
      description: "This course is an introduction to programming on Apple's iOS. Students will be introduced to Objective-C, Xcode, Cocoa Touch frameworks, memory management, designing on different form factor, UI design, data persistence, graphics library, location-based applications, accelerometer, and gyroscope."
    },
    {
      name: 'Mobile Application UI/UX Design',
      instructor: "Irvin",
      code: "MAPD-715",
      courseHours: "2",
      labHours: "2",
      semester: "Fall",
      campus: "Progress",
      description: "This course will provide students with an introduction to UI/UX for different mobile platform. Students will be exposed to special features of mobile UI design, application design steps, creating the visual appeal, designer/developer collaboration & communication, and application usability."
    },
    {
      name: 'Samsung Advanced Android Development',
      instructor: "Irvin",
      code: "MAPD-721",
      courseHours: "2",
      labHours: "2",
      semester: "Winter",
      campus: "Progress",
      description: "In this course, students will be exposed to advanced concepts and selected topics ranging from Android Services, Threading and Asynchronous Processing, Advanced UI Design, Handling Advanced User Input, Designing Accessible Applications, Using Android Multimedia APIs, Accessing Android’s Hardware Sensors, Developing Android 3D Graphics. Applications, Using the Android NDK, Working with Cloud to Device Messaging, and Advanced Topics in Application Publication and Distribution."
    },
    {
      name: 'Mobile Web Development',
      instructor: "Irvin",
      code: "MAPD-722",
      courseHours: "2",
      labHours: "2",
      semester: "Winter",
      campus: "Progress",
      description: "This course builds on the course “Web Technologies for Mobile Platforms.” Students will be exposed to development using AJAX, HTML 5, and RIAs for mobile platforms.  Other topics include server-side browser detection, content delivery, geolocation, maps, widgets and offline webapps."
    },
    {
      name: 'Advanced iOS Development',
      instructor: "Irvin",
      code: "MAPD-723",
      courseHours: "2",
      labHours: "2",
      semester: "Winter",
      campus: "Progress",
      description: "This course is an advanced course in iPhone/iPad development that examines topics such as data-driven applications, advanced UI design and development, developing with XML on the iPhone/iPad, and integrating iPhone/iPad with Web Services. "
    },
    {
      name: 'Emerging Technologies',
      instructor: "Irvin",
      code: "MAPD-724",
      courseHours: "2",
      labHours: "2",
      semester: "Winter",
      campus: "Progress",
      description: "This course will cover the emerging trends in mobile apps development. Topics will include cloud technologies, Internet of Things, social media, data analytics, artificial intelligence, chatbots and monetization. Course content may change as new trends/technologies emerge."
    },
    {
      name: 'Mobile Application Development Project',
      instructor: "Irvin",
      code: "MAPD-725",
      courseHours: "2",
      labHours: "2",
      semester: "Winter",
      campus: "Progress",
      description: "Students can choose to develop apps for iPhone or Android platform: IPhone - Students will work on a project of his/her interest, or with an industry partner in areas of mobile computing. Possible areas of investigation can include mobile social networks, mobile Health Informatics, mobile game development, mobile cloud computing, mobile augmented reality, and context-awareness. Android - Students will work on a project of his/her interest, or with an industry partner in areas of mobile computing. Possible areas of investigation can include mobile social networks, mobile Health Informatics, mobile game development, mobile cloud computing, mobile augmented reality, and context-awareness."
    },


  ];
  this.character = courses[this.params.get('charNum')];
}

dismiss() {
  this.viewCtrl.dismiss();
}
}