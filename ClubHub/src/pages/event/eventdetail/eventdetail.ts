import { Component } from '@angular/core';
import { NavController, NavParams,ViewController} from 'ionic-angular';


/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-event-detail',
  templateUrl: 'eventdetail.html',
})
export class EventDetailPage {

  event:any;
slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "img/buffet.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "img/2.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "img/dance.jpg",
    }
  ];


  constructor(public viewCtrl:ViewController,public navCtrl: NavController,public navParams:NavParams) {
    this.event=this.navParams.data;
  }

  ionViewDidLoad(){

    console.log(this.navParams.data); 
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }



}
