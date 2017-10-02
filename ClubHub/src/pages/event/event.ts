import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDetailPage } from './eventDetail/eventDetail';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-about',
  templateUrl: 'event.html',
})

export class EventPage {
  
  
  constructor(public navCtrl: NavController,public fire:AngularFireAuth) {
    	
  }

  
  

  openPage(){
  	this.navCtrl.push(EventDetailPage,);
  }

}


