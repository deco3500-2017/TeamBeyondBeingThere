import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDetailPage } from './eventDetail/eventDetail';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-about',
  templateUrl: 'event.html',
})

export class EventPage {
  userInfo:{};

  constructor(public navCtrl: NavController,public userService:ProfilePage) {
  }

  
  //this.userInfo=userService.facebook;

  openPage(){
  	this.navCtrl.push(EventDetailPage);
  }

}


