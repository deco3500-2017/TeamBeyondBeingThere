import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDetailPage } from './eventDetail/eventDetail'

@Component({
  selector: 'page-about',
  templateUrl: 'event.html',
})

export class EventPage {


  constructor(public navCtrl: NavController) {
  	
  }

  openPage(){
  	this.navCtrl.push(EventDetailPage);
  }

}


