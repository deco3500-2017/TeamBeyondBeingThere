import { Component } from '@angular/core';
import { App,NavController } from 'ionic-angular';
import { ClubDetailPage } from '../club-detail/club-detail';
import { ClubPage } from '../../club/club';



@Component({
  templateUrl: 'allClubs.html',
  selector: 'page-about',
})

export class AllClubsPage {

	
  constructor(public navCtrl: NavController,private app:App) {
  	
  }

	gotoClubDetail(){
		this.app.getRootNav().push(ClubDetailPage);
	}

	
}
