import { Component } from '@angular/core';
import { App,NavController,ModalController } from 'ionic-angular';
import { EventDetailPage } from '../eventdetail/eventdetail';
import { EventPage } from '../../event/event';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../../providers/firebase-service/firebase-service';





@Component({
  templateUrl: 'allEvents.html',
  selector: 'page-about',
})

export class AllEventsPage {
	events:FirebaseListObservable<any[]>;

	something={
		title:"test",
	}


  constructor( public modalCtrl:ModalController,public navCtrl: NavController,private app:App,public firebaseService:FirebaseServiceProvider) {
  	this.events=this.firebaseService.getEvents();
  	console.log(this.events)
  }

  ngOnInit(){
  	this.events=this.firebaseService.getEvents();
  }

	gotoEventDetail(event){
		console.log(event);
		let modal=this.modalCtrl.create(EventDetailPage,event);
		modal.present();
	}
	
}
