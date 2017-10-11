import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../../providers/firebase-service/firebase-service';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
	event={
		title:null,
		club:null,
    tags:null,
    	memberFee:null,
      nonmemberFee:null,
    	description:null,
    	location:null,
    	email:null,
    	startDate:null,
    	startTime:null,
    	endDate:null,
    	endTime:null,
    	tag:null, 
      locationCity:"Brisbane",
      locationPostcode:null,
      locationSuburb:null,
      locationStreet:null,
	}
  constructor(public navCtrl: NavController, public navParams: NavParams,private firebaseProvider:FirebaseServiceProvider ) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

addEvent(event){
  console.log(this.event);
	this.firebaseProvider.addEvent(this.event);
}

}
