import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'page-about',
  templateUrl: 'eventDetail.html',
})

export class EventDetailPage {

  	events: FirebaseListObservable<any[]>;
  	constructor(public navCtrl: NavController, public firebaseService:FirebaseServiceProvider) {
  }
}