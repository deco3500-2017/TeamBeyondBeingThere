import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { EventTabsPage } from '../tabs/eventTabs/eventTabs';

@Component({
  selector: 'page-about',
  templateUrl: 'event.html',
})

export class EventPage {
  
  rootEventPage:any=EventTabsPage
  constructor(public navCtrl: NavController,public fire:AngularFireAuth) {
    	
  }

}


