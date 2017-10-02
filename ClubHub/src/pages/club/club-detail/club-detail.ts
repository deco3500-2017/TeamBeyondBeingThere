import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../../providers/firebase-service/firebase-service';

/**
 * Generated class for the ClubDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-club-detail',
  templateUrl: 'club-detail.html',
})
export class ClubDetailPage {
	events:FirebaseListObservable<any[]>;
	event={
    name:null,
    fee:null,
    description:null,
    location:null,
    email:null,
    startDate:null,
    startTime:null,
    endDate:null,
    endTime:null,
    tag:null, 
  };
	  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseService:FirebaseServiceProvider) {
  	  	this.events=this.firebaseService.getEvents();
  	}

  	ionViewDidLoad() {
   		console.log('ionViewDidLoad ClubDetailPage');
  	}

  	addEvent(event){

  		this.firebaseService.addEvent(this.event);
  	}

  	removeEvent(id){
  		this.firebaseService.removeEvent(id);
  	}



}
