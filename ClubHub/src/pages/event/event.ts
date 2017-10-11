import { Component } from '@angular/core';
import { App,NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { EventTabsPage } from '../tabs/eventTabs/eventTabs';
import { AddEventPage } from './add-event/add-event';

@Component({
  selector: 'page-about',
  templateUrl: 'event.html',
})

export class EventPage {
  
  rootEventPage:any=EventTabsPage
  constructor(private app: App, public navCtrl: NavController,public fire:AngularFireAuth) {
    	
  }

  addNewEvent(){
  	this.app.getRootNav().push(AddEventPage);
  }
}


