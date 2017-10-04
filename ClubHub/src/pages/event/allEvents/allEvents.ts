import { Component } from '@angular/core';
import { App,NavController } from 'ionic-angular';
import { EventDetailPage } from '../eventdetail/eventdetail';
import { EventPage } from '../../event/event';



@Component({
  templateUrl: 'allEvents.html',
  selector: 'page-about',
})

export class AllEventsPage {

	
  constructor(public navCtrl: NavController,private app:App) {
  	
  }

	
}
